import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router';

const logo = () => {
  return (
    <svg width="104" height="20" viewBox="0 0 104 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_14_702)">
        <rect width="103.623" height="20" fill="None"/>
        <path fill="currentColor" d="M58.7897 17.9725H61.0056V1.9971H58.7897V17.9725ZM66.994 3.11594H65.0476V4.62319C65.0476 6.2 64.723 6.56232 63.31 6.56232H62.6491V8.39855H64.7781V15.2275C64.7781 17.0232 65.8114 17.971 67.7679 17.971H70.5027V16.0101H68.3737C67.1665 16.0101 66.994 15.5971 66.994 14.6087V8.39855H70.781V6.47826H66.994V3.11594ZM36.0056 15.6971L31.6013 1.9971H28.2534V17.9725H30.4476V5.02319L34.5578 17.8391H37.4563L41.5665 5.02319V17.9725H43.7607V1.9971H40.4129L36.0056 15.6971ZM53.9433 12.6507C53.9433 14.9449 52.7158 16.4275 50.8158 16.4275C49.2187 16.4275 48.3375 15.3565 48.3375 13.4116V6.47826H46.1665V13.929C46.1665 16.6029 47.6897 18.2638 50.1433 18.2638C52.0404 18.2638 53.3143 17.2812 53.9433 16.2696V17.9725H56.1375V6.47826H53.9433V12.6507ZM72.7665 17.9725H74.9824V6.47826H72.7665V17.9725ZM84.2824 1.72754C82.2404 1.72754 80.265 2.45217 79.0984 3.82029C77.8708 5.26087 77.2476 7.33478 77.2476 9.98406C77.2476 12.6319 77.8187 14.7348 79.0984 16.1594C80.3245 17.5232 82.2129 18.2638 84.2824 18.2638C86.3331 18.2638 88.3158 17.5362 89.4868 16.1594C90.7158 14.7145 91.3389 12.6362 91.3389 9.98406C91.3389 7.33333 90.7158 5.26087 89.4868 3.82029C88.3172 2.45217 86.3346 1.72754 84.2824 1.72754ZM84.2824 16.1551C81.3984 16.1551 79.5317 14.1116 79.5317 9.98406C79.5317 5.85797 81.3984 3.68261 84.2824 3.68261C87.181 3.68261 89.0563 5.85797 89.0563 9.98406C89.0563 14.1116 87.181 16.1551 84.2824 16.1551ZM99.5491 6.21014C97.5897 6.21014 96.2752 7.21739 95.6592 8.18551V6.47826H93.4433V17.9725H95.6592V11.8217C95.6592 9.51304 96.9216 8.02174 98.8766 8.02174C100.027 8.02174 101.398 8.54493 101.398 11.0377V17.9725H103.614V10.5217C103.616 7.86232 102.058 6.21014 99.5491 6.21014ZM72.7665 4.23478H75.0056V1.9971H72.7665V4.23478ZM4.82589 14.2594C6.19256 13.329 7.59836 11.7884 8.72734 9.84493C9.85633 7.90145 10.4998 5.91739 10.6317 4.26957L16.4375 5.8058C16.4375 2.6 13.8375 0 10.6317 0C7.42444 0 4.82589 2.6 4.82589 5.8058V14.2594ZM16.0302 14.9652C14.5404 14.2464 12.5042 13.8 10.2563 13.7928C8.0085 13.7855 5.96937 14.2217 4.47517 14.9319L2.90271 9.13478C0.127343 10.7377 -0.824831 14.2884 0.778067 17.0667C2.38097 19.8435 5.93169 20.7957 8.7085 19.1913L16.0302 14.9652ZM18.3592 9.13478L11.0389 4.9087C11.1621 6.55797 11.7926 8.54493 12.91 10.4942C14.0273 12.4435 15.4244 13.9928 16.7868 14.9319L12.552 19.1913C15.3288 20.7942 18.8795 19.8435 20.4839 17.0667C22.0882 14.2884 21.136 10.7377 18.3592 9.13478Z"/>
    </g>
    <defs>
        <clipPath id="clip0_14_702">
            <rect width="103.623" height="20" fill="None"/>
        </clipPath>
    </defs>
</svg>
  )}

const config: DocsThemeConfig = {
  head: (
    <>
     <link rel="icon" type="image/png" href=".\icon-1012.png"></link>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="MultiOn Documentation" />
      <meta property="og:description" content="MultiOn Documentation" />
     
    </>
    
    ),

  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – MultiOn'
      }
    }
    else{
      return {
        titleTemplate: 'MultiOn Documentation'
      }
    }
  },
 
  logo: logo,
  project: {
    link: 'https://github.com/MULTI-ON/api',
  },
  chat: {
    link: 'https://discord.gg/Zj5RDdxbee',
  },
  docsRepositoryBase: 'https://github.com/MULTI-ON/docs',
  footer: {
    text: 'MULTION Docs',
  },
}

export default config
