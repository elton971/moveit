import Document,{Html, Head, Main, NextScript}from "next/document";
export  default class MyDocument extends Document{
    render(){
        return(
            <Html>
                <Head>
                    <link rel="shortcut icon" href="icons/level-up.png" type="image/x-icon" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
                
        )
    }

}