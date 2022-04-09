import { memo } from "react";
import { Helmet } from "react-helmet-async";

const HeadBlock = memo((props) => {
  const { title, description } = props;

  return (
    <Helmet>
      <title>{title ?? 'Channel Works'}</title>
      <meta name="description" content={description ?? 'チャネルワークス（Channel Works）は、マーケティングノウハウを基軸に集客・購買・認知UPなどの具体的な効果を確実に上げる専門集団です。Webサイトのことならお任せください。'} />
    </Helmet>
  )
})

export default HeadBlock;