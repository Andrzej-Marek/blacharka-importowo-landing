import { Navbar } from "@/components/atoms/navbar";
import { Footer } from "@/components/organisms/footer";
import Script from "next/script";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
			<Script id="live-chat">
				{`
  (function(d,t) {
  window.chatwootSettings = {"position":"right","type":"expanded_bubble","launcherTitle":"Napisz do nas!"};
    var BASE_URL="https://chat.importowo.pl";
    var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    g.src=BASE_URL+"/packs/js/sdk.js";
    g.defer = true;
    g.async = true;
    s.parentNode.insertBefore(g,s);
    g.onload=function(){
      window.chatwootSDK.run({
        websiteToken: 'yQ6SrAHKryRro9uM8Br1aJes',
        baseUrl: BASE_URL
      })
    }
  })(document,"script");
`}
			</Script>
		</>
	);
}
