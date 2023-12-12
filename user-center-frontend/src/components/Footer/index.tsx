import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-layout';
import {PLANET_LINK} from "@/constants";

const Footer: React.FC = () => {
  const defaultMessage = '出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'planet',
          title: '知识',
          href: PLANET_LINK,
          blankTarget: true,
        },
        {
          key: 'codeNav',
          title: '百度',
          href: 'https://www.baidu.com',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined/> FLL GitHub</>,
          href: 'https://github.com/fllaly',
          blankTarget: true,
        },

      ]}
    />
  );
};

export default Footer;
