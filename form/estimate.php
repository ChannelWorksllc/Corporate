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

  // 必須バリデーション
  function requiredValidation($value) {
    $error = 0;
    if(empty($value)) {
      $error = 1;
    }
    return $error;
  }
  // ご要望内容その他バリデーション
  function requestValidation($request, $contain) {
    $error = 0;
    if(in_array('その他', $request) && empty($contain)) {
      $error = 1;
    } else if(in_array('その他', $request) && mb_strlen($contain) > 1000) {
      $error = 1;
    }
    return $error;
  }
  // 名前バリデーション
  function nameValidation($value) {
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
    if(empty($value)) {
      $error = 1;
    } else if(preg_match('/^[0-9]{2,3}[0-9]{2,4}[0-9]{3,4}$/', $value) === 0) {
      $error = 1;
    }
    return $error;
  }
  // 郵便番号バリデーション
  function postalCodeValidation($value) {
    $error = 0;
    if(empty($value)) {
      $error = 1;
    } else if(preg_match('/[0-9０-９]{3}(-|ー|−)[0-9０-９]{4}$/', $value) === 0) {
      $error = 1;
    }
    return $error;
  }
  // 住所バリデーション
  function addressValidation($value) {
    $error = 0;
    if(empty($value)) {
      $error = 1;
    } else if(mb_strlen($value) > 160) {
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
    $request = implode("," , $data['request']);
    $requestContain = $data['requestContain'];
    $budget = $data['budget'];
    $postalCode = $data['postalCode'];
    $address = $data['address'];
    $message = $data['contain'];

    // ヘッダー情報
    $header .= "Content-Type: text/plain \r\n";
    $header = "MIME-Version: 1.0\n";
    $header .= "From: ChannelWorks <s-ishida@channelworks.biz>\n";
    $hedaer .= "Replay-To: ChannelWorks <s-ishida@channelworks.biz>\n";
    $header .= "Return-Path: s-ishida@channelworks.biz";
    // $param = "-f s-ishida@channelworks.biz";

    // 件名
    $auto_replay_subject = 'お問い合わせありがとうございます';
    $admin_replay_subject = 'お問い合わせを受け付けました';

    // 本文
    $auto_replay_text = 'この度は、お問い合わせ頂き誠にありがとうございます。' . "\n" . '下記の内容でお問い合わせを受け付けました。' . "\n\n";
    $auto_replay_text .= "お問い合わせ日時：" . date("Y-m-d H:i") . "\n";
    $auto_replay_text .=  "氏名： " .$yourName . "\n";
    $auto_replay_text .=  "Email： " . $from . "\n"  ;
    $auto_replay_text .=  "電話番号： " . $phoneNum. "\n" ;
    $auto_replay_text .=  "住所： 〒" . $postalCode. "\n" . $address. "\n" ;
    $auto_replay_text .=  "会社・組織名： " . $companyName. "\n\n" ;
    $auto_replay_text .=  "【希望するサービス内容】" . "\n" . $service . "\n";
    $auto_replay_text .=  "【主なご要望】" . "\n" . $request . "\n" . $requestContain . "\n";
    $auto_replay_text .= "ご予算感：" . $budget . "\n" ;
    $auto_replay_text .=  "【詳細】" . "\n" . $message . "\n\n";
    $auto_replay_text .= "ChannelWorks 石田". "\n";
    $auto_replay_text .= "──────────────────────────────" . "\n";
    $auto_replay_text .= "Limited Liability Company ChannelWorks / 合同会社 Channel Works -チャネルワークス-" . "\n" . "マーケティング&ICTソリューションを複合展開し、すべての企業の繁栄戦略をサポートします！" . "\n\n";
    $auto_replay_text .= "石田 真吾 -Shingo Ishida-" . "\n" . "Mobile：080-7015-6455｜E-mail：s-ishida@channelworks.biz" . "\n\n";
    $auto_replay_text .= "〒105-0013 東京都港区浜松町2-2-15 浜松町ダイヤビル2F" . "\n" . "TEL：050-3695-2606" . "\n" . "URL：https://www.channelworks.biz/" . "\n\n";
    $auto_replay_text .= "LINE_ID：channelworks" . "\n" . "Chatwork_ID：sakurajimaas" . "\n" . "Skype_ID：sakurajimaas" . "\n\n";
    $auto_replay_text .= "【比較サイト様に掲載していただいています！】" . "\n" . "・リカイゼン：https://rekaizen.com/company/channelworks/doc/" . "\n" . "・Web幹事：https://web-kanji.com/companies/channelworks" . "\n";
    $auto_replay_text .= "──────────────────────────────";

    $admin_replay_text = '見積り依頼がありました。' . "\n\n";
    $admin_replay_text .=  "氏名： " .$yourName . "\n";
    $admin_replay_text .=  "Email： " . $from . "\n"  ;
    $admin_replay_text .=  "電話番号： " . $phoneNum. "\n" ;
    $admin_replay_text .=  "住所： 〒" . $postalCode. "\n" . $address. "\n" ;
    $admin_replay_text .=  "会社・組織名： " . $companyName. "\n\n" ;
    $admin_replay_text .=  "【希望するサービス内容】" . "\n" . $service . "\n";
    $admin_replay_text .=  "【主なご要望】" . "\n" . $request . "\n" . $requestContain . "\n";
    $admin_replay_text .= "ご予算感：" . $budget . "\n" ;
    $admin_replay_text .=  "【詳細】" . "\n" . $message . "\n";
    $admin_replay_text .= "お問い合わせ日時：" . date("Y-m-d H:i");

    // メール送信
    $auto_replay_success = mb_send_mail($from, $auto_replay_subject, $auto_replay_text, $header);
    $admin_replay_success = mb_send_mail($to, $admin_replay_subject, $admin_replay_text, $header);

    if($admin_replay_success && $auto_replay_success) {
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
    foreach($_POST['request'] as $value) {
      $request[] = escape($value);
    }
    $requestContain = escape($_POST['requestContain']);
    $budget = escape($_POST['budget']);
    $postalCode = escape($_POST['postalCode']);
    $address = escape($_POST['address']);
    $company = escape($_POST['companyName']);
    $contain = escape($_POST['contain']);

    // バリデーションデーション 
    $error = 0;

    $error = nameValidation($name) 
    + emailValidation($email) 
    + phonNumValidation($phoneNum) 
    + requiredValidation($service)
    + requiredValidation($request)
    + requestValidation($request, $requestContain)
    + requiredValidation($budget)
    + postalCodeValidation($postalCode)
    + addressValidation($address)
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
      $checkRequest = [];
      foreach($request as $value) {
        $checkRequest[] = spaceTrim($value);
      }
      $data['request'] = $checkRequest;
      $data['requestContain'] = spaceTrim($requestContain);
      $data['budget'] = spaceTrim($budget);
      $data['postalCode'] = spaceTrim($postalCode);
      $data['address'] = spaceTrim($address);
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