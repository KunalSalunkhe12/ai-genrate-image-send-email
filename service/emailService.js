import { Resend } from "resend";

const resend = new Resend("re_aa2tFQRt_4mC4Rjc6V3Wmk8Cfywscxkxd");

export async function sendEmails(
  emails,
  message,
  imageUrl,
  subject,
  formatDateMessage
) {
  try {
    // Define your HTML template
    const htmlTemplate = `
    <!DOCTYPE html>
<!-- saved from url=(0070)https://preview.mailerlite.io/emails/webview/272217/131354312398865717 -->
<html
  lang=""
  dir="ltr"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, user-scalable=yes"
    />
    <meta
      name="format-detection"
      content="telephone=no, date=no, address=no, email=no, url=no"
    />
    <meta name="x-apple-disable-message-reformatting" />
    <!--[if !mso]>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <![endif]-->
    <!--[if mso]>
      <style>
        * {
          font-family: sans-serif !important;
        }
      </style>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
    <![endif]-->
    <style type="text/css">
      /* Outlines the grids, remove when sending */
      /*table td { border: 1px solid cyan; }*/
      /* RESET STYLES */
      html,
      body,
      .document {
        margin: 0 !important;
        padding: 0 !important;
        width: 100% !important;
        height: 100% !important;
      }
      body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
      }
      img {
        border: 0;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
      }
      table {
        border-collapse: collapse;
      }
      table,
      td {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }
      body,
      table,
      td,
      a {
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      p {
        margin: 0;
      }
      /* iOS BLUE LINKS */
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      /* ANDROID CENTER FIX */
      div[style*="margin: 16px 0;"] {
        margin: 0 !important;
      }
      /* MEDIA QUERIES */
      @media all and (max-width: 639px) {
        .wrapper {
          width: 100% !important;
        }
        .container {
          width: 100% !important;
          min-width: 100% !important;
          padding: 0 !important;
        }
        .row {
          padding-left: 20px !important;
          padding-right: 20px !important;
        }
        .col-mobile {
          width: 20px !important;
        }
        .col {
          display: block !important;
          width: 100% !important;
        }
        .mobile-center {
          text-align: center !important;
          float: none !important;
        }
        .mobile-mx-auto {
          margin: 0 auto !important;
          float: none !important;
        }
        .mobile-left {
          text-align: center !important;
          float: left !important;
        }
        .img {
          width: 100% !important;
          height: auto !important;
        }
        .ml-btn {
          width: 100% !important;
          max-width: 100% !important;
        }
        .ml-btn-container {
          width: 100% !important;
          max-width: 100% !important;
        }
        *[class="mobileOff"] {
          width: 0px !important;
          display: none !important;
        }
        *[class*="mobileOn"] {
          display: block !important;
          max-height: none !important;
        }
        .mlContentTable {
          width: 100% !important;
          min-width: 10% !important;
          margin: 0 !important;
          float: none !important;
        }
        .mlContentButton a {
          display: block !important;
          width: auto !important;
        }
        .mlContentOuter {
          padding-bottom: 0px !important;
          padding-left: 15px !important;
          padding-right: 15px !important;
          padding-top: 0px !important;
        }
        .mlContentSurvey {
          float: none !important;
          margin-bottom: 10px !important;
          width: 100% !important;
        }
        .multiple-choice-item-table {
          width: 100% !important;
          margin-bottom: 20px !important;
          min-width: 10% !important;
          float: none !important;
        }
        .ml-default,
        .ml-card,
        .ml-fullwidth {
          width: 100%;
          min-width: 100%;
        }
      }

      /* Carousel style */
      @media screen and (-webkit-min-device-pixel-ratio: 0) {
        .webkit {
          display: block !important;
        }
      }
      @media screen and (-webkit-min-device-pixel-ratio: 0) {
        .non-webkit {
          display: none !important;
        }
      }
      @media screen and (-webkit-min-device-pixel-ratio: 0) {
        /* TARGET OUTLOOK.COM */
        [class="x_non-webkit"] {
          display: block !important;
        }
      }
      @media screen and (-webkit-min-device-pixel-ratio: 0) {
        [class="x_webkit"] {
          display: none !important;
        }
      }
    </style>

    
    <style type="text/css">
      @media screen {
        body {
          font-family: "Inter", sans-serif;
        }
      }
    </style>
    <meta name="robots" content="noindex, nofollow" />
    <title>Your Daily Quote</title>
  </head>
  <body
    style="
      margin: 0 !important;
      padding: 0 !important;
      background-color: #f4f7fa;
    "
    cz-shortcut-listen="true"
    class=""
  >
    <span style="display: none"
      ><img
        src=${imageUrl}
        width="1"
        height="1"
        alt=""
        style="
          display: block;
          height: 0px;
          width: 0px;
          max-width: 0px;
          max-height: 0px;
          overflow: hidden;
        "
        border="0"
    /></span>

    <div
      class="document"
      role="article"
      aria-roledescription="email"
      aria-label=""
      lang=""
      dir="ltr"
      style="
        background-color: #f4f7fa;
        line-height: 100%;
        font-size: medium;
        font-size: max(16px, 1rem);
      "
    >
      <!--[if gte mso 9]>
        <v:background
          xmlns:v="urn:schemas-microsoft-com:vml"
          fill="t"
          if="variable.bodyBackgroundImage.value"
        >
          <v:fill type="tile" src="" color="#F4F7FA" />
        </v:background>
      <![endif]-->

      <div style="display: none; max-height: 0px; overflow: hidden"></div>

      <table
        width="100%"
        align="center"
        cellspacing="0"
        cellpadding="0"
        border="0"
      >
        <tbody>
          <tr>
            <td
              class=""
              background="https://preview.mailerlite.io/emails/webview/272217/131354312398865717"
              bgcolor="#F4F7FA"
              align="center"
              valign="top"
              style="padding: 0 8px"
            >
              <table
                class="container"
                align="center"
                width="640"
                cellpadding="0"
                cellspacing="0"
                border="0"
                style="max-width: 640px"
              >
                <tbody>
                  <tr>
                    <td align="center">
                      <table
                        align="center"
                        width="100%"
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                      >
                        <tbody>
                          <tr>
                            <td
                              colspan="2"
                              height="20"
                              style="line-height: 20px"
                            ></td>
                          </tr>
                          <tr>
                            <td
                              align="left"
                              style="font-family: &#39;Inter&#39;, sans-serif; color: #111111; font-size: 12px; line-height: 18px;"
                            ></td>
                            <td
                              align="right"
                              style="font-family: &#39;Inter&#39;, sans-serif; color: #111111; font-size: 12px; line-height: 18px;"
                            >
                              <a
                                style="
                                  color: #111111;
                                  font-weight: normal;
                                  font-style: normal;
                                  text-decoration: underline;
                                "
                                href="https://pvyjaw.clicks.mlsend.com/tb/c/eyJ2Ijoie1wiYVwiOjI3MjIxNyxcImxcIjoxMzEyOTYzNTgwODI1NDUwMzksXCJyXCI6MTMxMzU0MzEyMzk4ODY1NzE3fSIsInMiOiJjYjRiZTZiZjA0ODRjMzI5In0"
                                data-link-id="131296358082545039"
                                data-link-type="webview"
                                >View in browser</a
                              >&nbsp;
                            </td>
                          </tr>
                          <tr>
                            <td
                              colspan="2"
                              height="20"
                              style="line-height: 20px"
                            ></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table
                width="640"
                class="wrapper"
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                style="
                  max-width: 640px;
                  border: 1px solid #eaeced;
                  border-radius: 8px;
                  border-collapse: separate !important;
                  overflow: hidden;
                "
              >
                <tbody>
                  <tr>
                    <td align="center">
                      <!--  -->
                      <table
                        class="ml-default"
                        width="100%"
                        bgcolor=""
                        align="center"
                        border="0"
                        cellspacing="0"
                        cellpadding="0"
                      >
                        <tbody>
                          <tr>
                            <td style="">
                              <table
                                class="container ml-4 ml-default-border"
                                width="640"
                                bgcolor="#ffffff"
                                align="center"
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                                style="
                                  color: #515856;
                                  width: 640px;
                                  min-width: 640px;
                                "
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="ml-default-border container"
                                      height="30"
                                      style="
                                        line-height: 30px;
                                        min-width: 640px;
                                      "
                                    ></td>
                                  </tr>
                                  <tr>
                                    <td class="row" style="padding: 0 50px">
                                      <h1
                                        style="font-family: &#39;Inter&#39;, sans-serif; color: #000000; font-size: 36px; line-height: 125%; font-weight: bold; font-style: normal; text-decoration: none; ;margin-bottom: 10px;"
                                      >
                                        <span style="color: rgb(178, 178, 178)"></span>
                                          Agent Coach AI</span
                                        >
                                      </h1>
                                      <p
                                        style="font-family: &#39;Inter&#39;, sans-serif; color: #515856; font-size: 16px; line-height: 165%; margin-top: 0; margin-bottom: 10px;"
                                      >
                                        <strong
                                          >Daily Affirmations to Heal and
                                          Inspire</strong
                                        >
                                      </p>
                                      <p
                                        style="font-family: &#39;Inter&#39;, sans-serif; color: #515856; font-size: 16px; line-height: 165%; margin-top: 0; margin-bottom: 0;"
                                      >
                                        <strong
                                          >${formatDateMessage}</strong
                                        >
                                        <br />
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      height="10"
                                      style="line-height: 10px"
                                    ></td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <!--  -->

                      <!--  -->
                      <table
                        class="ml-default"
                        width="100%"
                        bgcolor=""
                        align="center"
                        border="0"
                        cellspacing="0"
                        cellpadding="0"
                      >
                        <tbody>
                          <tr>
                            <td style="">
                              <table
                                class="container ml-6 ml-default-border"
                                width="640"
                                bgcolor="#ffffff"
                                align="center"
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                                style="width: 640px; min-width: 640px"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="ml-default-border container"
                                      height="20"
                                      style="
                                        line-height: 20px;
                                        min-width: 640px;
                                      "
                                    ></td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <table
                                        width="100%"
                                        border="0"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              class="row"
                                              align="center"
                                              valign="top"
                                              style="padding: 0 50px"
                                            >
                                              <a
                                                href="https://preview.mailerlite.io/emails/webview/272217/131354312398865717"
                                                target="_self"
                                                style="text-decoration: none"
                                              >
                                                <img
                                                  src=${imageUrl}
                                                  class="img"
                                                  width="540"
                                                  style="display: block"
                                                  border="0"
                                                />
                                              </a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      height="20"
                                      style="line-height: 20px"
                                      class=""
                                    ></td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <!--  -->

                      <!--  -->
                      <table
                        class="ml-default"
                        width="100%"
                        bgcolor=""
                        align="center"
                        border="0"
                        cellspacing="0"
                        cellpadding="0"
                      >
                        <tbody>
                          <tr>
                            <td style="">
                              <table
                                class="container ml-8 ml-default-border"
                                width="640"
                                bgcolor="#ffffff"
                                align="center"
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                                style="
                                  color: #515856;
                                  width: 640px;
                                  min-width: 640px;
                                "
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="ml-default-border container"
                                      height="20"
                                      style="
                                        line-height: 20px;
                                        min-width: 640px;
                                      "
                                    ></td>
                                  </tr>
                                  <tr>
                                    <td class="row" style="padding: 0 50px">
                                      <p
                                        style="font-family: &#39;Inter&#39;, sans-serif; color: #515856; font-size: 16px; line-height: 165%; margin-top: 0; margin-bottom: 0;"
                                        class=""
                                      >
                                      ${message}
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      height="20"
                                      style="line-height: 20px"
                                    ></td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <!--  -->

                      <!--  -->
                      <table
                        class="ml-default"
                        width="100%"
                        bgcolor=""
                        align="center"
                        border="0"
                        cellspacing="0"
                        cellpadding="0"
                      >
                        <tbody>
                          <tr>
                            <td style="">
                              <table
                                class="container ml-10 ml-default-border"
                                width="640"
                                bgcolor="#ffffff"
                                align="center"
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                                style="
                                  color: #515856;
                                  width: 640px;
                                  min-width: 640px;
                                "
                              >
                                <tbody>
                                  <tr>
                                    <td class="row" style="padding: 0 50px">
                                      <table
                                        width="100%"
                                        border="0"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              class="col"
                                              valign="top"
                                              width="160"
                                            >
                                              <table
                                                width="100%"
                                                border="0"
                                                cellspacing="0"
                                                cellpadding="0"
                                              >
                                              </table>
                                            </td>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <!--  -->

                      <!--  -->
                      <table
                        class="ml-default"
                        width="100%"
                        bgcolor=""
                        align="center"
                        border="0"
                        cellspacing="0"
                        cellpadding="0"
                      >
                        <tbody>
                          <tr>
                            <td style="">
                              <table
                                class="container ml-18 ml-default-border"
                                width="640"
                                bgcolor="#ffffff"
                                align="center"
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                                style="width: 640px; min-width: 640px"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="ml-default-border container"
                                      height="40"
                                      style="
                                        line-height: 40px;
                                        min-width: 640px;
                                      "
                                    ></td>
                                  </tr>
                                  <tr>
                                    <td class="row" style="padding: 0 50px">
                                      <table
                                        align="center"
                                        width="100%"
                                        cellpadding="0"
                                        cellspacing="0"
                                        border="0"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              class="col"
                                              align="left"
                                              width="250"
                                              valign="top"
                                              style="
                                                text-align: left !important;
                                              "
                                            >
                                              <h5
                                                style="font-family: &#39;Inter&#39;, sans-serif; color: #000000; font-size: 15px; line-height: 125%; font-weight: bold; font-style: normal; text-decoration: none; margin-bottom: 6px;"
                                              >
                                                Agent Coach AI
                                              </h5>
                                              <p
                                                style="font-family: &#39;Inter&#39;, sans-serif; color: #515856; font-size: 12px; line-height: 150%; margin-bottom: 6px; display: inline-block;"
                                              >
                                                <a
                                                  href="https://agentcoach.teamlumio.ai"
                                                  style="
                                                    color: #515856;
                                                    font-weight: normal;
                                                    font-style: normal;
                                                    text-decoration: underline;
                                                  "
                                                  >https://agentcoach.teamlumio.ai</a
                                                ><br />
                                                 <p
                                                  style="font-family: &#39;Inter&#39;, sans-serif; color: #515856; font-size: 12px; line-height: 150%; margin-bottom: 6px; display: inline-block;"
                                                >
                                                  Original material copyright
                                                  2024.
                                                </p>
                                               
                                              </p>

                                              <table
                                                width="100%"
                                                cellpadding="0"
                                                cellspacing="0"
                                                border="0"
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      height="16"
                                                      style="line-height: 16px"
                                                    ></td>
                                                  </tr>
                                                  <tr>
                                                    <td>
                                                      <table
                                                        class="**$class**"
                                                        role="presentation"
                                                        cellpadding="0"
                                                        cellspacing="0"
                                                        border="0"
                                                      >
                                                        <tbody>
                                                          <tr>
                                                            <td
                                                              align="center"
                                                              valign="middle"
                                                              width="18"
                                                              ng-show="slink.link != &#39;&#39;"
                                                              style="
                                                                padding: 0 5px 0
                                                                  0;
                                                              "
                                                            >
                                                              <a
                                                                href="https://pvyjaw.clicks.mlsend.com/tb/c/eyJ2Ijoie1wiYVwiOjI3MjIxNyxcImxcIjoxMzEyOTYzNTgxMDI0Njc5OTAsXCJyXCI6MTMxMzU0MzEyMzk4ODY1NzE3fSIsInMiOiJiN2Q0ZmRlNzE1ZWQ4YTJjIn0"
                                                                target="blank"
                                                                style="
                                                                  text-decoration: none;
                                                                "
                                                                data-link-id="131296358102467990"
                                                              >
                                                              </a>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                            <td
                                              class="col"
                                              width="40"
                                              height="30"
                                              style="line-height: 30px"
                                            ></td>
                                            <td
                                              class="col"
                                              align="left"
                                              width="250"
                                              valign="top"
                                              style="
                                                text-align: left !important;
                                              "
                                            >
                                             
                                              <p
                                                style="font-family: &#39;Inter&#39;, sans-serif; color: #515856; font-size: 12px; line-height: 150%; margin-bottom: 6px; display: inline-block;"
                                              >
                                                You received this email because
                                                you signed up on our website.
                                                You may 
                        
                                                <a
                                                  href="https://email.ritest.live/unsubscribe?email={{email}}"
                                                  data-link-id="131296358128682404"
                                                  style="
                                                    color: #515856;
                                                    font-weight: normal;
                                                    font-style: normal;
                                                    text-decoration: underline;
                                                  "
                                                  >unsubscribe at any time.</a
                                                >
                                              </p>
                                             

                                              
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      height="40"
                                      style="line-height: 40px"
                                    ></td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <!--  -->
                    </td>
                  </tr>
                </tbody>
              </table>

              <table
                cellpadding="0"
                cellspacing="0"
                border="0"
                align="center"
                width="640"
                style="max-width: 640px; width: 100%"
              ></table>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  </body>
</html>

    `;
    // Send email using Resend
    const emailPromises = emails.map(async (email) => {
      const personalizedHtml = htmlTemplate.replace("{{email}}", email);

      const { data, error } = await resend.emails.send({
        from: "aiagentcoach@teamlumio.ai",
        to: [email],
        subject: subject,
        html: personalizedHtml,
      });

      if (error) {
        console.error({ error, email });
        return null;
      }

      return data;
    });

    const results = await Promise.all(emailPromises);
    console.log({ results });
  } catch (error) {
    console.error("Error sending email:", error);
    return null;
  }
}
