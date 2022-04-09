<?php

  header('X-FRAME-OPTIONS: SAMEORIGIN');

  header("Access-Control-Allow-Origin: https://channelworks.biz/"); // reactからのデータ受け取りを許可
  header('Access-Control-Allow-Headers: Content-Type'); // 受け取るデータを設定
  $rest_json = file_get_contents("php://input"); // JSONでPOSTされたデータを取り出す
  $_POST = json_decode($rest_json, true); // JSON文字列をデコード

  $error = 0;

  // 文字列前後の空白を削除
  function spaceTrim($str) {
    $str = preg_replace('/^[ 　]+/u', '', $str);
    $str = preg_replace('/[ 　]+$/u', '', $str);
    return $str;
  }

  // 特殊文字のエスケープ
  function escape($value) {
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
  }

  // チェックボックスバリデーション
  function checkBoxValidation($value) {
    $error = 0;
    if(empty($value)) {
      $error = 1;
    }
    return $error;
  }
  // 名前バリデーション
  function requiredValidation($value) {
    $error = 0;
    if(empty($value)) {
      $error = 1;
    } else if(mb_strlen($value) > 20) {
      $error = 1;
    } else if(preg_match(' /^[a-zA-Zぁ-んァ-ン一-龥]+$/', $value) === 0){
      $error = 1;
    }
    return $error;
  }
  // メールアドレスバリデーション
  function emailValidation($value) {
    $error = 0;
    if(empty($value)) {
      $error = 1;
    } else if(!filter_var($value, FILTER_VALIDATE_EMAIL)) {
      $error = 1;
    }
    return $error;
  }
  // 電話番号バリデーション
  function phonNumValidation($value) {
    $error = 0;
    if( !empty($value) && preg_match('/^[0-9]{2,3}[0-9]{2,4}[0-9]{3,4}$/', $value) === 0) {
      $error = 1;
    }
    return $error;
  }
  // 文字数バリデーション
    function lengthValidation($value, $length) {
      $error = 0;
      if(mb_strlen($value) > $length) {
        $error = 1;
      }
      return $error;
    }

  // メール送信
  function sendEmail($data) {

    mb_language('japanese');
    mb_internal_encoding('UTF-8');

    // 変数とタイムゾーン
    $header = null;
    $auto_replay_subject = null;
    $auto_replay_text = null;
    $admin_replay_subject = null;
    $admin_replay_text = null;
    date_default_timezone_set('Asia/Tokyo');
    
//     $to = 's-ishida@channelworks.biz';
    $to = 'sakurajimaas@gmail.com';
    $from = str_replace(["\r\n", "\r", "\n"], '', $data['email']);
    $yourName = $data['yourName'];
    $phoneNum = $data['phoneNum'];
    $companyName = $data['company'];
    $service = implode("," , $data['service']);
    $message = $data['contain'];
    $subject = 'お問い合わせがありました！';

    $body = '各種ご相談ページからお問い合わせがありました。' . "\n\n";
    $body .=  "氏名： " .$yourName . "\n";
    $body .=  "Email： " . $from . "\n"  ;
    $body .=  "電話番号： " . $phoneNum. "\n" ;
    $body .=  "会社・組織名： " . $companyName. "\n\n" ;
    $body .=  "【お問い合わせ内容】" . "\n" . $service . "\n";
    $body .=  "【詳細】" . "\n" . $message;

    $success = mb_send_mail($to, $subject, $body, 'From'.$from);

    if($success) {
      $res['state'] = '000';

      $data = array();
      if (isset($_COOKIE["PHPSESSID"])) {
        setcookie("PHPSESSID", '', time() - 1800, '/');
      };

    } else {
      $res['state'] = '111';
    }
    return $res;
  }


  if(!empty($_POST)) {

    // エスケープしながら変数に格納
    $name = escape($_POST['yourName']);
    $email = escape($_POST['email']);
    $phoneNum = escape($_POST['phoneNum']);
    foreach($_POST['service'] as $value) {
      $service[] = escape($value);
    }
    $company = escape($_POST['companyName']);
    $contain = escape($_POST['contain']);

    // バリデーションデーション 
    $error = 0;

    $error = requiredValidation($name) 
    + emailValidation($email) 
    + phonNumValidation($phoneNum) 
    + checkBoxValidation($service)
    + lengthValidation($company, 50)
    + lengthValidation($contain, 1000);

    //バリデーションの結果
    if($error === 0) {
      $data = [];
      $data['yourName'] = spaceTrim($name);
      $data['email'] = spaceTrim($email);
      $data['phoneNum'] = spaceTrim($phoneNum);
      $checkService = [];
      foreach($service as $value) {
        $checkService[] = spaceTrim($value);
      }
      $data['service'] = $checkService;
      $data['company'] = spaceTrim($company);
      $data['contain'] = spaceTrim($contain);
      
      $res = sendEmail($data);

    } else {
      $res['state'] = '222';
    }

  } else {
    $res['message'] = 'リロードしてください。';
  }


  header("Content-Type: application/json; charset=utf-8"); // 戻すときのhttpヘッダを設定
  echo json_encode($res); // 処理の結果を送信

?>