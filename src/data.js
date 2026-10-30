/* サイトのデータ。ここを編集して `node build.js` で public/ を作り直す。
   ・ref（紹介リンク）が空のサービスは自動で非表示になる（noRef: true なら紹介なしで公式サイトへのボタンを出す）
   ・その言語（ja/en/zh/hi/es/ar）の説明が無いサービスは英語で表示される */
module.exports = {
  "SITE_URL": "https://neteru-nyukin.eltociear.workers.dev",
  "LANGS": [
    "en",
    "ja",
    "zh",
    "hi",
    "es",
    "de",
    "ar"
  ],
  "DEFAULT_LANG": "en",
  "SERVICES": [
    {
      "id": "gooddollar",
      "name": "GoodDollar",
      "cat": "crypto-bi",
      "type": "loop",
      "global": true,
      "ease": 4,
      "official": "https://www.gooddollar.org/",
      "checked": "2026-10",
      "code": "KgChqUuJic",
      "ref": "https://goodwallet.xyz?inviteCode=KgChqUuJic&chainId=50",
      "trust": {
        "cash": "partial",
        "price": "yes",
        "operator": "yes"
      },
      "verify": [
        {
          "method": "face"
        }
      ],
      "ja": {
        "gain": "G$トークンを毎日",
        "note": "24時間に1回、アプリで受け取る非営利のUBIプロジェクト。その日に受け取った人数で配分を分ける",
        "need": "アプリで顔による本人確認",
        "caution": "2026年5月にセキュリティ事故があり、準備金を見直し中。1日の額もかなり少なめ"
      },
      "en": {
        "gain": "G$ tokens every day",
        "note": "A nonprofit UBI protocol. Claim once every 24 hours; each day's pool is split among everyone who claims",
        "need": "Face verification in the app",
        "caution": "A security incident in May 2026 put its reserve under review. The daily amount is very small"
      },
      "hi": {
        "gain": "हर दिन G$ टोकन",
        "note": "एक नॉन-प्रॉफ़िट UBI प्रोटोकॉल। हर 24 घंटे में एक बार ऐप से क्लेम करें; हर दिन का पूल क्लेम करने वाले सभी लोगों में बँटता है",
        "need": "ऐप में चेहरे से पहचान सत्यापन",
        "caution": "मई 2026 की एक सुरक्षा घटना के बाद इसके रिज़र्व की समीक्षा चल रही है। रोज़ की रकम बहुत कम है"
      },
      "zh": {
        "gain": "每天领取 G$ 代币",
        "note": "非营利 UBI 协议。每 24 小时可在应用中领取一次，当天的奖池由所有领取者平分",
        "need": "在应用中进行人脸身份验证",
        "caution": "2026 年 5 月发生安全事件，储备金正在审查中。每日金额也很少"
      },
      "es": {
        "gain": "Tokens G$ cada día",
        "note": "Protocolo UBI sin ánimo de lucro. Reclama una vez cada 24 horas; el fondo de cada día se reparte entre todos los que reclaman",
        "need": "Verificación facial en la app",
        "caution": "Un incidente de seguridad en mayo de 2026 dejó su reserva en revisión. La cantidad diaria es muy pequeña"
      },
      "de": {
        "gain": "Jeden Tag G$-Token",
        "note": "Ein gemeinnütziges Grundeinkommens-Protokoll. Einmal alle 24 Stunden abholen; der Topf des Tages wird auf alle aufgeteilt, die abholen",
        "need": "Gesichtsverifizierung in der App",
        "caution": "Nach einem Sicherheitsvorfall im Mai 2026 wird die Reserve überprüft. Der Tagesbetrag ist sehr klein"
      },
      "ar": {
        "gain": "رموز ⁦G$⁩ كل يوم",
        "note": "بروتوكول دخل أساسي غير ربحي. اطلبها مرة كل 24 ساعة، ويُقسَّم رصيد كل يوم على جميع من يطلبونها",
        "need": "التحقق من الوجه داخل التطبيق",
        "caution": "وقعت حادثة أمنية في مايو 2026 وُضع بعدها الاحتياطي قيد المراجعة. المبلغ اليومي صغير جدًا"
      }
    },
    {
      "id": "circles",
      "name": "Circles（Gnosis App）",
      "nameEn": "Circles (Gnosis App)",
      "cat": "crypto-bi",
      "type": "loop",
      "global": true,
      "ease": 3,
      "official": "https://app.gnosis.io/",
      "code": "",
      "ref": "",
      "noRef": true,
      "added": "2026-10-23",
      "checked": "2026-10",
      "trust": {
        "cash": "unknown",
        "price": "unknown",
        "operator": "yes"
      },
      "verify": [
        {
          "method": "web-of-trust"
        }
      ],
      "ja": {
        "gain": "1時間に1 CRC（1日24 CRC）",
        "note": "Gnosisが手がける、一人ひとりが自分の通貨を発行するしくみ。2025年5月にCircles 2.0が公開され、2026年6月にはGnosis AppがCircles中心に作り直された。このサイトの紹介リンクはまだない",
        "need": "Gnosis Appで登録し、既存のCirclesメンバーから招待を受ける。招待する側が96 CRCを払い、招待された側は歓迎ボーナスとして48 CRCを受け取る",
        "caution": "招待してくれるメンバーがいないと始められない。CRCの市場価格や換金方法は確認できていない。Gnosis AppはGnosis Ltdから独立した会社に移る予定と発表されていて、内容が変わることがある"
      },
      "en": {
        "gain": "1 CRC per hour (24 per day)",
        "note": "A Gnosis project where every person issues their own currency. Circles 2.0 launched in May 2025, and in June 2026 the Gnosis App was rebuilt around Circles. This site has no referral link for it yet",
        "need": "Sign up in the Gnosis App and get invited by an existing Circles member. The inviter pays 96 CRC and the newcomer gets 48 CRC as a welcome bonus",
        "caution": "You can’t start without a member to invite you. CRC’s market price and ways to cash out are not confirmed. Gnosis has announced plans to spin the Gnosis App out of Gnosis Ltd into a separate company, so details may change"
      },
      "zh": {
        "gain": "每小时 1 CRC（每天 24 CRC）",
        "note": "由 Gnosis 推出、每个人发行自己货币的机制。Circles 2.0 于 2025 年 5 月上线，2026 年 6 月 Gnosis App 围绕 Circles 进行了重建。本站暂时没有它的推荐链接",
        "need": "在 Gnosis App 注册，并接受现有 Circles 成员的邀请。邀请人支付 96 CRC，被邀请人获得 48 CRC 欢迎奖励",
        "caution": "没有成员邀请就无法开始。CRC 的市场价格和兑现方式尚未确认。Gnosis 已宣布计划将 Gnosis App 从 Gnosis Ltd 分拆为独立公司，内容可能会有变化"
      },
      "hi": {
        "gain": "हर घंटे 1 CRC (रोज़ 24 CRC)",
        "note": "Gnosis का एक प्रोजेक्ट जिसमें हर व्यक्ति अपनी खुद की करेंसी जारी करता है। Circles 2.0 मई 2025 में लॉन्च हुआ, और जून 2026 में Gnosis App को Circles के इर्द-गिर्द नए सिरे से बनाया गया। इस साइट के पास अभी इसका रेफ़रल लिंक नहीं है",
        "need": "Gnosis App में साइन अप करें और किसी मौजूदा Circles सदस्य से इनवाइट पाएँ। इनवाइट करने वाला 96 CRC देता है और नए सदस्य को वेलकम बोनस के रूप में 48 CRC मिलते हैं",
        "caution": "इनवाइट करने वाले सदस्य के बिना शुरू नहीं कर सकते। CRC की बाज़ार कीमत और उसे नकद में बदलने के तरीके की पुष्टि नहीं हुई है। Gnosis ने Gnosis App को Gnosis Ltd से अलग कंपनी बनाने की योजना घोषित की है, इसलिए चीज़ें बदल सकती हैं"
      },
      "es": {
        "gain": "1 CRC por hora (24 al día)",
        "note": "Un proyecto de Gnosis en el que cada persona emite su propia moneda. Circles 2.0 se lanzó en mayo de 2025, y en junio de 2026 la Gnosis App se rehízo en torno a Circles. Esta web aún no tiene enlace de referido",
        "need": "Regístrate en la Gnosis App y consigue una invitación de un miembro de Circles. Quien invita paga 96 CRC y la persona invitada recibe 48 CRC de bienvenida",
        "caution": "No puedes empezar sin un miembro que te invite. No están confirmados el precio de mercado del CRC ni cómo convertirlo en dinero. Gnosis ha anunciado que separará la Gnosis App de Gnosis Ltd en una empresa independiente, así que los detalles pueden cambiar"
      },
      "de": {
        "gain": "1 CRC pro Stunde (24 pro Tag)",
        "note": "Ein Projekt von Gnosis, bei dem jede Person ihre eigene Währung ausgibt. Circles 2.0 startete im Mai 2025, und im Juni 2026 wurde die Gnosis App rund um Circles neu gebaut. Diese Seite hat noch keinen Empfehlungslink dafür",
        "need": "In der Gnosis App anmelden und von einem bestehenden Circles-Mitglied eingeladen werden. Wer einlädt, zahlt 96 CRC, und Neue bekommen 48 CRC als Willkommensbonus",
        "caution": "Ohne ein Mitglied, das dich einlädt, kannst du nicht starten. Marktkurs von CRC und Auszahlungswege sind nicht bestätigt. Gnosis hat angekündigt, die Gnosis App aus der Gnosis Ltd in ein eigenes Unternehmen auszugliedern, daher kann sich einiges ändern"
      },
      "ar": {
        "gain": "⁦1 CRC⁩ كل ساعة (⁦24 CRC⁩ يوميًا)",
        "note": "مشروع من ⁦Gnosis⁩ يُصدر فيه كل شخص عملته الخاصة. أُطلق ⁦Circles 2.0⁩ في مايو 2025، وفي يونيو 2026 أُعيد بناء ⁦Gnosis App⁩ حول ⁦Circles⁩. لا يوجد لدى هذا الموقع رابط إحالة له بعد",
        "need": "سجّل في ⁦Gnosis App⁩ واحصل على دعوة من عضو حالي في ⁦Circles⁩. يدفع الداعي ⁦96 CRC⁩ ويحصل المدعو على ⁦48 CRC⁩ مكافأة ترحيب",
        "caution": "لا يمكنك البدء دون عضو يدعوك. لم يتأكد سعر ⁦CRC⁩ في السوق ولا طرق تحويله إلى نقود. أعلنت ⁦Gnosis⁩ نيتها فصل ⁦Gnosis App⁩ عن ⁦Gnosis Ltd⁩ في شركة مستقلة، لذا قد تتغير التفاصيل"
      }
    },
    {
      "id": "mepass",
      "name": "ME Pass",
      "cat": "crypto-bi",
      "type": "loop",
      "global": true,
      "ease": 4,
      "official": "https://www.mec.me/",
      "checked": "2026-10",
      "code": "d22fj9hx",
      "ref": "https://i.mec.me/ja-JP/?c=d22fj9hx",
      "trust": {
        "cash": "partial",
        "price": "no",
        "operator": "unknown"
      },
      "verify": [
        {
          "method": "kyc-id"
        }
      ],
      "ja": {
        "gain": "MECトークンを毎日",
        "note": "Meta Earthのウォレットアプリ。本人確認すると「無条件のベーシックインカム」として1 MECが付与され、毎日のチェックインでも少しずつ増える",
        "need": "招待リンクから登録し、アプリで本人確認（KYC）",
        "caution": "MECは2026年10月時点で取引所に上場しておらず、市場価格がない。換金は個人間取引のみ"
      },
      "en": {
        "gain": "MEC tokens every day",
        "note": "Meta Earth's wallet app. Verified users get 1 MEC as an “unconditional basic income”, plus small daily check-in rewards",
        "need": "Sign up via the invite link and complete KYC in the app",
        "caution": "As of Oct 2026, MEC is not listed on any exchange and has no market price. Cashing out is peer-to-peer only"
      },
      "hi": {
        "gain": "हर दिन MEC टोकन",
        "note": "Meta Earth का वॉलेट ऐप। सत्यापित यूज़र को “बिना शर्त बेसिक इनकम” के तौर पर 1 MEC मिलता है, साथ में रोज़ चेक-इन पर थोड़े इनाम",
        "need": "इनवाइट लिंक से साइन अप करें और ऐप में KYC पूरा करें",
        "caution": "अक्टूबर 2026 तक MEC किसी एक्सचेंज पर लिस्टेड नहीं है और इसकी कोई बाज़ार कीमत नहीं है। कैश निकालना सिर्फ़ पीयर-टू-पीयर से संभव है"
      },
      "zh": {
        "gain": "每天领取 MEC 代币",
        "note": "Meta Earth 的钱包应用。完成验证的用户可获得 1 MEC 作为“无条件基本收入”，每日签到也有少量奖励",
        "need": "通过邀请链接注册，并在应用中完成 KYC",
        "caution": "截至 2026 年 10 月，MEC 尚未在任何交易所上市，没有市场价格。只能通过点对点交易变现"
      },
      "es": {
        "gain": "Tokens MEC cada día",
        "note": "La app de cartera de Meta Earth. Los usuarios verificados reciben 1 MEC como «renta básica incondicional», más pequeñas recompensas por registrarse cada día",
        "need": "Regístrate con el enlace de invitación y completa el KYC en la app",
        "caution": "A octubre de 2026, MEC no cotiza en ningún exchange y no tiene precio de mercado. Solo se puede cobrar entre particulares (P2P)"
      },
      "de": {
        "gain": "Jeden Tag MEC-Token",
        "note": "Die Wallet-App von Meta Earth. Verifizierte Nutzer bekommen 1 MEC als „bedingungsloses Grundeinkommen“ und dazu kleine Belohnungen für den täglichen Check-in",
        "need": "Über den Einladungslink anmelden und in der App die KYC-Prüfung abschließen",
        "caution": "Stand Oktober 2026 ist MEC an keiner Börse gelistet und hat keinen Marktkurs. Auszahlung nur von Person zu Person"
      },
      "ar": {
        "gain": "رموز MEC كل يوم",
        "note": "تطبيق محفظة من Meta Earth. يحصل المستخدمون الموثَّقون على 1 MEC بوصفه «دخلًا أساسيًا غير مشروط»، إضافة إلى مكافآت صغيرة لتسجيل الحضور يوميًا",
        "need": "سجّل عبر رابط الدعوة وأكمل التحقق من الهوية (KYC) في التطبيق",
        "caution": "حتى أكتوبر 2026، لم يُدرج MEC في أي منصة تداول وليس له سعر سوقي. لا يمكن تحويله إلى نقد إلا بين الأفراد (P2P)"
      }
    },
    {
      "id": "biomatrix",
      "name": "BioMatrix",
      "cat": "crypto-bi",
      "type": "loop",
      "global": true,
      "ease": 4,
      "official": "https://biomatrix.ai/ja/",
      "checked": "2026-10",
      "code": "C66SPN",
      "ref": "https://ac-tech.onelink.me/8enJ/qwujwndl?pid=source&af_dp=biomatrix%3A%2F%2F&deep_link_sub1=C66SPN",
      "trust": {
        "cash": "unknown",
        "price": "unknown",
        "operator": "unknown"
      },
      "verify": [],
      "ja": {
        "gain": "PoYトークンを毎月",
        "note": "「60年間毎月配る」とうたうUBIトークン。紹介コードで登録すると5トークンのボーナス（2026年1月時点）。早く登録した人ほど配布が多い",
        "need": "アプリで生体認証による本人確認をして、毎月受け取る",
        "caution": "PoYの取引所での価格は今回確認できず。生体情報の扱いに納得したうえで使う"
      },
      "en": {
        "gain": "PoY tokens every month",
        "note": "A UBI token that promises monthly payouts for 60 years. Signing up with a referral code gives a 5-token bonus (as of Jan 2026). Earlier sign-ups get larger allocations",
        "need": "Verify with biometrics in the app, then claim each month",
        "caution": "We could not confirm a market price for PoY. Make sure you are comfortable with how it handles biometric data"
      },
      "hi": {
        "gain": "हर महीने PoY टोकन",
        "note": "एक UBI टोकन जो 60 साल तक हर महीने भुगतान का वादा करता है। रेफ़रल कोड से साइन अप करने पर 5 टोकन बोनस (जनवरी 2026 तक)। जल्दी जुड़ने वालों को ज़्यादा मिलता है",
        "need": "ऐप में बायोमेट्रिक से सत्यापन करें, फिर हर महीने क्लेम करें",
        "caution": "PoY की बाज़ार कीमत की पुष्टि हम नहीं कर सके। बायोमेट्रिक डेटा के इस्तेमाल से सहमत हों तभी इस्तेमाल करें"
      },
      "zh": {
        "gain": "每月领取 PoY 代币",
        "note": "承诺 60 年每月发放的 UBI 代币。使用推荐码注册可获得 5 枚代币奖励（截至 2026 年 1 月）。越早注册分配越多",
        "need": "在应用中通过生物识别验证后，每月领取",
        "caution": "我们未能确认 PoY 的市场价格。请在接受其生物识别数据处理方式后再使用"
      },
      "es": {
        "gain": "Tokens PoY cada mes",
        "note": "Token UBI que promete pagos mensuales durante 60 años. Registrarte con un código de referido da 5 tokens extra (a enero de 2026). Quien se registra antes recibe más",
        "need": "Verifícate con biometría en la app y reclama cada mes",
        "caution": "No pudimos confirmar un precio de mercado para PoY. Úsala solo si estás de acuerdo con cómo trata los datos biométricos"
      },
      "de": {
        "gain": "Jeden Monat PoY-Token",
        "note": "Ein Grundeinkommens-Token, der 60 Jahre lang monatliche Auszahlungen verspricht. Mit Empfehlungscode gibt es 5 Token als Bonus (Stand Januar 2026). Wer früher dabei ist, bekommt größere Zuteilungen",
        "need": "In der App biometrisch verifizieren und dann jeden Monat abholen",
        "caution": "Einen Marktkurs für PoY konnten wir nicht bestätigen. Überleg dir, ob du mit dem Umgang mit deinen biometrischen Daten einverstanden bist"
      },
      "ar": {
        "gain": "رموز PoY كل شهر",
        "note": "رمز دخل أساسي يَعِد بمدفوعات شهرية لمدة 60 عامًا. التسجيل برمز إحالة يمنح 5 رموز إضافية (حتى يناير 2026). من يسجّل مبكرًا يحصل على حصة أكبر",
        "need": "تحقّق ببياناتك الحيوية في التطبيق، ثم اطلب حصتك كل شهر",
        "caution": "لم نتمكن من تأكيد سعر سوقي لـPoY. استخدمه فقط إذا كنت مرتاحًا لطريقة تعامله مع البيانات الحيوية"
      }
    },
    {
      "id": "bitflyer",
      "name": "bitFlyer",
      "cat": "exchange",
      "type": "once",
      "global": false,
      "ease": 4,
      "official": "https://bitflyer.com/ja-jp/",
      "code": "",
      "ref": "",
      "ja": {
        "gain": "1,500円分のBTC",
        "note": "招待した側・された側の両方にもらえる。入金や取引は不要",
        "need": "招待リンクから登録し、90日以内に本人確認まで完了",
        "caution": ""
      },
      "en": {
        "gain": "¥1,500 in BTC",
        "note": "Both the referrer and the new user receive it. No deposit or trade needed",
        "need": "Sign up via the link and finish ID verification within 90 days",
        "caution": ""
      }
    },
    {
      "id": "coincheck",
      "name": "Coincheck",
      "cat": "exchange",
      "type": "once",
      "global": false,
      "ease": 4,
      "official": "https://coincheck.com/ja/",
      "code": "",
      "ref": "",
      "ja": {
        "gain": "1,500円相当の暗号資産",
        "note": "紹介された側。紹介した側は2,000円相当のBTC。2026年5月18日から実施中",
        "need": "紹介リンクから登録し、口座開設を完了",
        "caution": ""
      },
      "en": {
        "gain": "¥1,500 in crypto",
        "note": "For the new user. The referrer gets ¥2,000 in BTC. Running since May 18, 2026",
        "need": "Sign up via the link and finish opening the account",
        "caution": ""
      }
    },
    {
      "id": "rakutencard",
      "name": "楽天カード",
      "nameEn": "Rakuten Card",
      "cat": "finance",
      "type": "once",
      "global": false,
      "ease": 3,
      "official": "https://www.rakuten-card.co.jp/",
      "code": "",
      "ref": "",
      "ja": {
        "gain": "1,000ポイント",
        "note": "紹介された側。増額キャンペーン中はもっと多い（2026年9月は最大11,000ポイント）",
        "need": "紹介URLを開いてから10日以内に申し込み",
        "caution": "ポイントは期間限定"
      },
      "en": {
        "gain": "1,000 points",
        "note": "For the new member. Boost campaigns pay more (up to 11,000 in Sept 2026)",
        "need": "Apply within 10 days of opening the referral link",
        "caution": "Points are time-limited"
      }
    },
    {
      "id": "rakutenbank",
      "name": "楽天銀行",
      "nameEn": "Rakuten Bank",
      "cat": "finance",
      "type": "once",
      "global": false,
      "ease": 2,
      "official": "https://www.rakuten-bank.co.jp/campaign/referral.html",
      "code": "",
      "ref": "",
      "ja": {
        "gain": "最大35,000ポイント",
        "note": "2026年10月の内容。紹介コードを使うだけで200ポイント。大半は平均残高に応じた特典",
        "need": "10月30日までに紹介コードで申し込み、11月30日までに6万円以上入金",
        "caution": "最大額には大きな預金残高が必要"
      },
      "en": {
        "gain": "Up to 35,000 points",
        "note": "October 2026 offer. Using the code alone gives 200 points; most of the total depends on your average balance",
        "need": "Apply with the code by Oct 30 and deposit ¥60,000+ by Nov 30",
        "caution": "The maximum needs a large balance"
      }
    },
    {
      "id": "hapitas",
      "name": "ハピタス",
      "nameEn": "Hapitas",
      "cat": "pointsite",
      "type": "once",
      "global": false,
      "ease": 3,
      "official": "https://hapitas.jp/",
      "checked": "2026-10",
      "code": "",
      "ref": "https://hapitas.jp/appinvite/?i=25819964",
      "trust": {
        "cash": "yes",
        "price": "na",
        "operator": "yes"
      },
      "verify": [
        {
          "method": "none"
        }
      ],
      "ja": {
        "gain": "最大2,300ポイント",
        "note": "2026年10月の内容（1ポイント＝1円）。3日連続ログインで100ポイント、広告利用で合計3,000ポイントたまると1,000ポイントなど",
        "need": "10月31日までに紹介経由で登録し、11月30日までに条件を達成",
        "caution": ""
      },
      "en": {
        "gain": "Up to 2,300 points",
        "note": "October 2026 offer (1 point = ¥1). 100 for logging in 3 days in a row, 1,000 once you earn 3,000 through offers, and more",
        "need": "Join via referral by Oct 31 and meet the conditions by Nov 30",
        "caution": ""
      },
      "hi": {
        "gain": "2,300 पॉइंट तक",
        "note": "अक्टूबर 2026 का ऑफ़र (1 पॉइंट = ¥1)। लगातार 3 दिन लॉग इन पर 100, ऑफ़र से कुल 3,000 कमाने पर 1,000, और भी",
        "need": "31 अक्टूबर तक रेफ़रल से जुड़ें और 30 नवंबर तक शर्तें पूरी करें",
        "caution": ""
      },
      "zh": {
        "gain": "最高 2,300 积分",
        "note": "2026 年 10 月活动（1 积分 = 1 日元）。连续登录 3 天得 100 积分，通过广告累计获得 3,000 积分再得 1,000 积分等",
        "need": "10 月 31 日前通过推荐注册，并于 11 月 30 日前达成条件",
        "caution": ""
      },
      "es": {
        "gain": "Hasta 2.300 puntos",
        "note": "Oferta de octubre de 2026 (1 punto = 1 ¥). 100 por entrar 3 días seguidos, 1.000 al ganar 3.000 con ofertas, y más",
        "need": "Únete con referido antes del 31 de octubre y cumple las condiciones antes del 30 de noviembre",
        "caution": ""
      },
      "de": {
        "gain": "Bis zu 2.300 Punkte",
        "note": "Aktion im Oktober 2026 (1 Punkt = 1 Yen). 100 für 3 Tage Login in Folge, 1.000, sobald du über Angebote 3.000 verdienst, und mehr",
        "need": "Bis 31. Oktober über Empfehlung beitreten und die Bedingungen bis 30. November erfüllen",
        "caution": ""
      },
      "ar": {
        "gain": "حتى 2,300 نقطة",
        "note": "عرض أكتوبر 2026 (النقطة = 1 ين). 100 نقطة لتسجيل الدخول 3 أيام متتالية، و1,000 عند جمع 3,000 نقطة من العروض، وغير ذلك",
        "need": "انضم عبر الإحالة قبل 31 أكتوبر واستوفِ الشروط قبل 30 نوفمبر",
        "caution": ""
      }
    },
    {
      "id": "moppy",
      "name": "モッピー",
      "nameEn": "Moppy",
      "cat": "pointsite",
      "type": "once",
      "global": false,
      "ease": 3,
      "official": "https://pc.moppy.jp/",
      "code": "",
      "ref": "",
      "ja": {
        "gain": "2,000ポイント",
        "note": "2026年10月の内容（1ポイント＝1円）。3日連続ログインで1万ポイントの抽選にも参加できる",
        "need": "紹介経由で入会し、入会月の翌々月末までに5,000ポイント以上ためる",
        "caution": ""
      },
      "en": {
        "gain": "2,000 points",
        "note": "October 2026 offer (1 point = ¥1). Logging in 3 days in a row also enters a 10,000-point draw",
        "need": "Join via referral and earn 5,000+ points by the end of the second month after joining",
        "caution": ""
      }
    },
    {
      "id": "pointincome",
      "name": "ポイントインカム",
      "nameEn": "Point Income",
      "cat": "pointsite",
      "type": "once",
      "global": false,
      "ease": 3,
      "official": "https://pointi.jp/",
      "code": "",
      "ref": "",
      "ja": {
        "gain": "紹介経由の登録で特典ポイント",
        "note": "額は公式サイトで確認。2026年10月は20周年キャンペーン中",
        "need": "紹介リンクから新規登録し、条件を達成",
        "caution": ""
      },
      "en": {
        "gain": "Bonus points for joining via referral",
        "note": "Check the official site for the amount. A 20th-anniversary campaign runs in October 2026",
        "need": "Sign up via the link and meet the conditions",
        "caution": ""
      }
    },
    {
      "id": "wavee",
      "name": "WAVEE",
      "cat": "career",
      "type": "loop",
      "global": true,
      "ease": 1,
      "official": "https://wavee.world/",
      "checked": "2026-10",
      "code": "",
      "ref": "https://wavee.world/invitation/b96d00e6-b802-4a1b-8a66-2e3854a01ffd",
      "trust": {
        "cash": "partial",
        "price": "na",
        "operator": "yes"
      },
      "verify": [
        {
          "method": "none"
        }
      ],
      "ja": {
        "gain": "仕事が決まるたびにマッチング報酬",
        "note": "完全招待制の仕事マッチング。自分が招待した人や、その先の人が仕事に決まるたび、招待報酬が何度でも入る（分配率7.5〜15%）。DMMやGMOペパボなどが求人を掲載",
        "need": "招待リンクから登録",
        "caution": "お金が入るのは仕事が決まったとき。報酬率は2024年6月の公式noteの内容"
      },
      "en": {
        "gain": "A matching reward each time you land a job",
        "note": "Invite-only job matching. Every time someone you invited (or someone they invited) lands a job, you earn a referral share again and again (7.5–15%). DMM, GMO Pepabo and others post jobs",
        "need": "Sign up via the invite link",
        "caution": "You earn when a job is matched. Rates are from the official note of June 2024"
      },
      "hi": {
        "gain": "हर बार नौकरी मिलने पर मैचिंग इनाम",
        "note": "इनवाइट-ओनली जॉब मैचिंग। आपके बुलाए व्यक्ति (या उनके बुलाए व्यक्ति) को जब भी नौकरी मिले, आपको बार-बार रेफ़रल हिस्सा मिलता है (7.5–15%)। DMM, GMO Pepabo जैसी कंपनियाँ नौकरियाँ डालती हैं",
        "need": "इनवाइट लिंक से साइन अप करें",
        "caution": "कमाई नौकरी मैच होने पर ही होती है। दरें जून 2024 के आधिकारिक नोट से हैं"
      },
      "zh": {
        "gain": "每次找到工作都有匹配奖励",
        "note": "完全邀请制的工作匹配平台。你邀请的人（或其邀请的人）每次找到工作，你都能反复获得推荐分成（7.5–15%）。DMM、GMO Pepabo 等公司在此发布职位",
        "need": "通过邀请链接注册",
        "caution": "只有在工作匹配成功时才有收入。分成比例来自 2024 年 6 月的官方 note"
      },
      "es": {
        "gain": "Una recompensa cada vez que consigues trabajo",
        "note": "Plataforma de empleo solo por invitación. Cada vez que alguien a quien invitaste (o a quien esa persona invitó) consigue trabajo, recibes una parte del referido una y otra vez (7,5–15 %). Publican ofertas DMM, GMO Pepabo y otras",
        "need": "Regístrate con el enlace de invitación",
        "caution": "Solo ganas cuando se concreta un empleo. Los porcentajes son de la nota oficial de junio de 2024"
      },
      "de": {
        "gain": "Eine Vermittlungsprämie bei jeder Jobvermittlung",
        "note": "Jobvermittlung nur auf Einladung. Jedes Mal, wenn jemand, den du eingeladen hast (oder den diese Person eingeladen hat), einen Job bekommt, erhältst du immer wieder einen Empfehlungsanteil (7,5–15 %). DMM, GMO Pepabo und andere schreiben Jobs aus",
        "need": "Über den Einladungslink anmelden",
        "caution": "Du verdienst, wenn ein Job vermittelt wird. Die Sätze stammen aus der offiziellen Mitteilung vom Juni 2024"
      },
      "ar": {
        "gain": "مكافأة في كل مرة تحصل فيها على وظيفة",
        "note": "منصة توظيف بالدعوة فقط. في كل مرة يحصل فيها شخص دعوته (أو شخص دعاه) على وظيفة، تحصل على حصة إحالة مرارًا وتكرارًا (7.5–15%). تنشر فيها شركات مثل DMM وGMO Pepabo وظائفها",
        "need": "سجّل عبر رابط الدعوة",
        "caution": "تكسب فقط عند إتمام التوظيف. النسب مأخوذة من المنشور الرسمي في يونيو 2024"
      }
    },
    {
      "id": "trima",
      "name": "トリマ",
      "nameEn": "Trima",
      "cat": "app",
      "type": "loop",
      "global": false,
      "ease": 5,
      "official": "https://www.trip-mile.com/",
      "code": "49-icnRep",
      "ref": "https://www.trip-mile.com/",
      "codeOnly": true,
      "trust": {
        "cash": "yes",
        "price": "na",
        "operator": "yes"
      },
      "verify": [
        {
          "method": "none"
        }
      ],
      "added": "2026-10-09",
      "checked": "2026-10",
      "ja": {
        "gain": "5,000マイル ＋ 移動や歩数でマイル",
        "note": "スマホを持って移動したり歩いたりするだけでマイルがたまるアプリ。招待コードを入れると、紹介した側・された側の両方に5,000マイル（2026年7月時点の情報）。マイルはギフト券や現金などに交換できる",
        "need": "アプリを入れて、登録時に招待コード 49‑icnRep を入力する",
        "caution": "特典の額やタイミングは変わることがある。位置情報の常時許可が必要で、電池を少し多く使う"
      },
      "en": {
        "gain": "5,000 miles + miles for moving and walking",
        "note": "An app that earns miles just by carrying your phone as you travel and walk. Enter an invite code and both you and the person who invited you get 5,000 miles (as of July 2026). Miles can be exchanged for gift cards, cash and more",
        "need": "Install the app and enter the invite code 49‑icnRep when you register",
        "caution": "The bonus amount and timing may change. It needs “always on” location access and uses a bit more battery"
      },
      "zh": {
        "gain": "5,000 里程 ＋ 移动和步数也能赚里程",
        "note": "只要带着手机移动或走路就能累积里程的应用。填写邀请码后，邀请人和被邀请人双方各得 5,000 里程（2026 年 7 月的信息）。里程可兑换礼品卡、现金等",
        "need": "安装应用，注册时填写邀请码 49‑icnRep",
        "caution": "奖励金额和发放时间可能会变。需要始终允许位置信息，耗电会稍多一些"
      },
      "hi": {
        "gain": "5,000 माइल + चलने-फिरने और कदमों पर माइल",
        "note": "एक ऐप जिसमें बस फ़ोन साथ लेकर सफ़र करने या पैदल चलने से माइल जमा होते हैं। इनवाइट कोड डालने पर बुलाने वाले और नए यूज़र, दोनों को 5,000 माइल मिलते हैं (जुलाई 2026 की जानकारी)। माइल को गिफ़्ट कार्ड, नकद आदि में बदल सकते हैं",
        "need": "ऐप इंस्टॉल करें और रजिस्ट्रेशन के समय इनवाइट कोड 49‑icnRep डालें",
        "caution": "बोनस की राशि और समय बदल सकते हैं। लोकेशन की अनुमति हमेशा चालू रखनी होती है और बैटरी थोड़ी ज़्यादा खर्च होती है"
      },
      "es": {
        "gain": "5.000 millas + millas por moverte y caminar",
        "note": "Una app que suma millas solo con llevar el móvil mientras te desplazas o caminas. Si introduces un código de invitación, tú y quien te invitó recibís 5.000 millas cada uno (información de julio de 2026). Las millas se canjean por tarjetas regalo, dinero y más",
        "need": "Instala la app e introduce el código de invitación 49‑icnRep al registrarte",
        "caution": "El importe y el momento del bono pueden cambiar. Requiere permitir la ubicación siempre y gasta algo más de batería"
      },
      "de": {
        "gain": "5.000 Meilen + Meilen fürs Unterwegssein und Gehen",
        "note": "Eine App, die Meilen gibt, nur weil du dein Handy beim Unterwegssein und Gehen dabeihast. Mit einem Einladungscode bekommen du und die einladende Person je 5.000 Meilen (Stand Juli 2026). Meilen lassen sich gegen Geschenkkarten, Bargeld und mehr tauschen",
        "need": "App installieren und bei der Registrierung den Einladungscode 49‑icnRep eingeben",
        "caution": "Bonushöhe und Zeitpunkt können sich ändern. Die App braucht dauerhaften Standortzugriff und verbraucht etwas mehr Akku"
      },
      "ar": {
        "gain": "5,000 ميل + أميال مقابل التنقل والمشي",
        "note": "تطبيق تجمع فيه الأميال بمجرد حمل هاتفك أثناء التنقل أو المشي. عند إدخال رمز الدعوة يحصل كلٌّ من الداعي والمستخدم الجديد على 5,000 ميل (معلومات يوليو 2026). يمكن استبدال الأميال ببطاقات هدايا أو نقود وغيرها",
        "need": "ثبّت التطبيق وأدخل رمز الدعوة ⁦49‑icnRep⁩ عند التسجيل",
        "caution": "قد يتغير مبلغ المكافأة وموعدها. يتطلب السماح بالموقع دائمًا ويستهلك البطارية أكثر قليلًا"
      }
    },
    {
      "id": "sweatcoin",
      "name": "Sweatcoin",
      "cat": "app",
      "type": "loop",
      "global": true,
      "ease": 5,
      "official": "https://sweatco.in/",
      "code": "mover77273393923",
      "ref": "https://swcapp.com/i/mover77273393923",
      "added": "2026-10-09",
      "checked": "2026-10",
      "trust": {
        "cash": "partial",
        "price": "na",
        "operator": "yes"
      },
      "verify": [
        {
          "method": "none"
        }
      ],
      "ja": {
        "gain": "1,000歩で0.95コイン",
        "note": "スマホを持って歩くだけで、歩数が自動でコインになる。コインはアプリ内のマーケットで商品や割引、寄付と交換できる",
        "need": "アプリを入れて、歩数と位置情報へのアクセスを許可する",
        "caution": "現金への換金レートは決まっていない。無料プランは1日に換算できる歩数に上限がある"
      },
      "en": {
        "gain": "0.95 coins per 1,000 steps",
        "note": "Carry your phone and your steps turn into coins automatically. Spend them in the in-app marketplace on products, discounts or donations",
        "need": "Install the app and allow access to steps and location",
        "caution": "There is no fixed cash conversion rate. The free plan caps how many steps convert each day"
      },
      "hi": {
        "gain": "हर 1,000 कदम पर 0.95 कॉइन",
        "note": "फ़ोन साथ लेकर चलें, आपके कदम अपने-आप कॉइन में बदल जाते हैं। इन्हें ऐप के मार्केटप्लेस में सामान, छूट या दान के लिए इस्तेमाल करें",
        "need": "ऐप इंस्टॉल करें और कदम व लोकेशन की अनुमति दें",
        "caution": "नकद में बदलने की कोई तय दर नहीं है। फ़्री प्लान में रोज़ बदले जा सकने वाले कदमों की सीमा है"
      },
      "zh": {
        "gain": "每 1,000 步 0.95 枚币",
        "note": "带着手机走路，步数就会自动变成币。可在应用内商城兑换商品、折扣或用于捐赠",
        "need": "安装应用，并允许访问步数和位置信息",
        "caution": "没有固定的现金兑换比例。免费版每天可兑换的步数有上限"
      },
      "es": {
        "gain": "0,95 monedas por cada 1.000 pasos",
        "note": "Lleva el móvil encima y tus pasos se convierten en monedas automáticamente. Úsalas en la tienda de la app en productos, descuentos o donaciones",
        "need": "Instala la app y permite el acceso a pasos y ubicación",
        "caution": "No hay un tipo de cambio fijo a dinero. El plan gratuito limita cuántos pasos se convierten al día"
      },
      "de": {
        "gain": "0,95 Coins pro 1.000 Schritte",
        "note": "Trag dein Handy bei dir, und deine Schritte werden automatisch zu Coins. Gib sie im Marktplatz der App für Produkte, Rabatte oder Spenden aus",
        "need": "App installieren und Zugriff auf Schritte und Standort erlauben",
        "caution": "Es gibt keinen festen Umrechnungskurs in Geld. Im kostenlosen Tarif ist begrenzt, wie viele Schritte pro Tag umgewandelt werden"
      },
      "ar": {
        "gain": "0.95 عملة لكل 1,000 خطوة",
        "note": "احمل هاتفك وامشِ، فتتحوّل خطواتك إلى عملات تلقائيًا. استخدمها في متجر التطبيق للحصول على منتجات أو خصومات أو للتبرّع",
        "need": "ثبّت التطبيق واسمح بالوصول إلى الخطوات والموقع",
        "caution": "لا يوجد سعر ثابت لتحويلها إلى نقد. الخطة المجانية تحدّ عدد الخطوات التي تُحوَّل يوميًا"
      }
    },
    {
      "id": "grass",
      "name": "Grass",
      "cat": "app",
      "type": "loop",
      "global": true,
      "ease": 5,
      "official": "https://www.grass.io/",
      "code": "97_MD5PEysoBbJ7",
      "ref": "https://app.grass.io/register?referralCode=97_MD5PEysoBbJ7",
      "added": "2026-10-08",
      "checked": "2026-10",
      "trust": {
        "cash": "partial",
        "price": "yes",
        "operator": "yes"
      },
      "verify": [
        {
          "method": "none"
        }
      ],
      "ja": {
        "gain": "ポイント（のちにGRASSトークン）",
        "note": "使っていない回線の帯域をAIのWebデータ収集に貸し出すDePIN。PCのブラウザ拡張やアプリを入れておくだけで、接続時間と実際に使われた帯域に応じてポイントがたまり、シーズンごとのエアドロップで配られる",
        "need": "メールで登録し、ブラウザ拡張またはアプリを入れて接続したままにする",
        "caution": "自分のIPアドレスを他社のデータ収集に使わせるしくみ。報酬はエアドロップ次第で、額も時期も読めない"
      },
      "en": {
        "gain": "Points (later GRASS tokens)",
        "note": "A DePIN that rents out your unused bandwidth for AI web scraping. Keep the browser extension or app running and earn points for uptime and bandwidth actually used, paid out through seasonal airdrops",
        "need": "Sign up with email, install the extension or app, and stay connected",
        "caution": "Your IP address is used by others for data collection. Rewards depend on airdrops, so amount and timing are unpredictable"
      },
      "hi": {
        "gain": "पॉइंट (बाद में GRASS टोकन)",
        "note": "एक DePIN जो आपकी बिना इस्तेमाल हुई बैंडविड्थ को AI वेब स्क्रैपिंग के लिए किराए पर देता है। ब्राउज़र एक्सटेंशन या ऐप चालू रखें; अपटाइम और असल में इस्तेमाल हुई बैंडविड्थ के हिसाब से पॉइंट मिलते हैं, जो सीज़न वाले एयरड्रॉप में बँटते हैं",
        "need": "ईमेल से साइन अप करें, एक्सटेंशन या ऐप इंस्टॉल करें और कनेक्ट रहें",
        "caution": "आपका IP पता दूसरे लोग डेटा जुटाने के लिए इस्तेमाल करते हैं। इनाम एयरड्रॉप पर निर्भर है, इसलिए रकम और समय तय नहीं"
      },
      "zh": {
        "gain": "积分（之后换成 GRASS 代币）",
        "note": "把闲置带宽出租给 AI 网页数据采集的 DePIN 项目。保持浏览器扩展或应用在线，即可按在线时长和实际被使用的带宽累积积分，并通过每季空投发放",
        "need": "用邮箱注册，安装扩展或应用并保持连接",
        "caution": "你的 IP 地址会被他人用于数据采集。收益取决于空投，金额和时间都无法预估"
      },
      "es": {
        "gain": "Puntos (luego tokens GRASS)",
        "note": "Un DePIN que alquila tu ancho de banda sin usar para el rastreo web de IA. Deja la extensión o la app activa y gana puntos por tiempo conectado y ancho de banda usado, que se reparten en airdrops por temporadas",
        "need": "Regístrate con tu email, instala la extensión o la app y mantente conectado",
        "caution": "Otros usan tu dirección IP para recopilar datos. Las recompensas dependen de airdrops, así que el importe y el momento son impredecibles"
      },
      "de": {
        "gain": "Punkte (später GRASS-Token)",
        "note": "Ein DePIN, das deine ungenutzte Bandbreite für KI-Web-Scraping vermietet. Lass die Browser-Erweiterung oder App laufen und sammle Punkte für Laufzeit und tatsächlich genutzte Bandbreite, ausgezahlt über saisonale Airdrops",
        "need": "Mit E-Mail anmelden, Erweiterung oder App installieren und verbunden bleiben",
        "caution": "Deine IP-Adresse wird von anderen zur Datensammlung genutzt. Die Belohnungen hängen von Airdrops ab, Höhe und Zeitpunkt sind also nicht vorhersehbar"
      },
      "ar": {
        "gain": "نقاط (ثم رموز GRASS لاحقًا)",
        "note": "شبكة DePIN تؤجّر عرض النطاق غير المستخدم لديك لجمع بيانات الويب للذكاء الاصطناعي. أبقِ الإضافة أو التطبيق قيد التشغيل لتجمع نقاطًا حسب مدة الاتصال وعرض النطاق المستخدم فعلًا، وتُوزَّع عبر إسقاطات جوية موسمية",
        "need": "سجّل بالبريد الإلكتروني، وثبّت الإضافة أو التطبيق وابقَ متصلًا",
        "caution": "يستخدم آخرون عنوان IP الخاص بك لجمع البيانات. المكافآت تعتمد على الإسقاطات الجوية، فلا يمكن توقّع قيمتها أو موعدها"
      }
    },
    {
      "id": "honeygain",
      "name": "Honeygain",
      "cat": "app",
      "type": "loop",
      "global": true,
      "ease": 5,
      "official": "https://www.honeygain.com/",
      "code": "ELTOCD89E5",
      "ref": "https://join.honeygain.com/ELTOCD89E5",
      "added": "2026-10-08",
      "checked": "2026-10",
      "trust": {
        "cash": "yes",
        "price": "na",
        "operator": "yes"
      },
      "verify": [
        {
          "method": "none"
        }
      ],
      "ja": {
        "gain": "共有した通信量に応じて現金",
        "note": "使っていない回線を企業のWebデータ収集に貸し出す、通信量シェアの定番アプリ。紹介経由の登録で$3のウェルカムボーナス（公式ブログより）。$20たまるとPayPalなどで出金できる",
        "need": "メールで登録し、PCやスマホにアプリを入れて動かしたままにする",
        "caution": "自分のIPアドレスを他社のデータ収集に使わせるしくみ。稼げる額は地域の需要次第で、地域によってはかなり少ない"
      },
      "en": {
        "gain": "Cash for the traffic you share",
        "note": "The best-known bandwidth-sharing app: it rents your unused connection to businesses for web data collection. Signing up via a referral gives a $3 welcome bonus (per the official blog). Cash out via PayPal and more once you reach $20",
        "need": "Sign up with email, install the app on your PC or phone, and leave it running",
        "caution": "Your IP address is used by others for data collection. Earnings depend on demand in your region and can be very low in some areas"
      },
      "hi": {
        "gain": "शेयर किए गए ट्रैफ़िक के बदले नकद",
        "note": "बैंडविड्थ शेयर करने वाला सबसे जाना-माना ऐप: यह आपके खाली इंटरनेट कनेक्शन को कंपनियों को वेब डेटा जुटाने के लिए किराए पर देता है। रेफ़रल से साइन अप करने पर $3 वेलकम बोनस (आधिकारिक ब्लॉग के अनुसार)। $20 होने पर PayPal आदि से निकाल सकते हैं",
        "need": "ईमेल से साइन अप करें, PC या फ़ोन पर ऐप इंस्टॉल करें और चालू छोड़ दें",
        "caution": "आपका IP पता दूसरे लोग डेटा जुटाने के लिए इस्तेमाल करते हैं। कमाई आपके इलाक़े की माँग पर निर्भर है और कुछ जगहों पर बहुत कम होती है"
      },
      "zh": {
        "gain": "按共享流量获得现金",
        "note": "最知名的带宽共享应用：把闲置网络出租给企业做网页数据采集。通过推荐注册可获得 $3 欢迎奖励（据官方博客）。满 $20 可通过 PayPal 等提现",
        "need": "用邮箱注册，在电脑或手机上安装应用并保持运行",
        "caution": "你的 IP 地址会被他人用于数据采集。收益取决于所在地区的需求，有些地区非常少"
      },
      "es": {
        "gain": "Dinero por el tráfico que compartes",
        "note": "La app de compartir ancho de banda más conocida: alquila tu conexión sin usar a empresas para recopilar datos web. Registrarte con un referido da un bono de bienvenida de $3 (según su blog oficial). Cobra por PayPal y otros al llegar a $20",
        "need": "Regístrate con tu email, instala la app en tu PC o móvil y déjala funcionando",
        "caution": "Otros usan tu dirección IP para recopilar datos. Lo que ganas depende de la demanda en tu región y puede ser muy poco en algunas zonas"
      },
      "de": {
        "gain": "Geld für den geteilten Datenverkehr",
        "note": "Die bekannteste App zum Teilen von Bandbreite: Sie vermietet deine ungenutzte Verbindung an Unternehmen zur Web-Datensammlung. Bei Anmeldung über eine Empfehlung gibt es 3 $ Willkommensbonus (laut offiziellem Blog). Auszahlung per PayPal und mehr ab 20 $",
        "need": "Mit E-Mail anmelden, App auf PC oder Handy installieren und laufen lassen",
        "caution": "Deine IP-Adresse wird von anderen zur Datensammlung genutzt. Die Einnahmen hängen von der Nachfrage in deiner Region ab und können mancherorts sehr gering sein"
      },
      "ar": {
        "gain": "نقود مقابل حركة البيانات التي تشاركها",
        "note": "أشهر تطبيق لمشاركة عرض النطاق: يؤجّر اتصالك غير المستخدم للشركات لجمع بيانات الويب. التسجيل عبر رابط إحالة يمنح مكافأة ترحيبية قدرها ⁦$3⁩ (حسب المدونة الرسمية). اسحب أرباحك عبر PayPal وغيره عند بلوغ ⁦$20⁩",
        "need": "سجّل بالبريد الإلكتروني، وثبّت التطبيق على حاسوبك أو هاتفك واتركه يعمل",
        "caution": "يستخدم آخرون عنوان IP الخاص بك لجمع البيانات. الأرباح تعتمد على الطلب في منطقتك وقد تكون ضئيلة جدًا في بعض المناطق"
      }
    },
    {
      "id": "pawns",
      "name": "Pawns.app",
      "cat": "app",
      "type": "loop",
      "global": true,
      "ease": 4,
      "official": "https://pawns.app/",
      "code": "20659471",
      "ref": "https://pawns.app/?r=20659471",
      "added": "2026-10-09",
      "checked": "2026-10",
      "trust": {
        "cash": "yes",
        "price": "na",
        "operator": "yes"
      },
      "verify": [
        {
          "method": "none"
        }
      ],
      "ja": {
        "gain": "共有した通信量に応じて現金",
        "note": "IPRoyal社の通信量シェアアプリ。PCアプリを入れておくと回線の空きが報酬になる。アンケートやゲームでも稼げる。$5からPayPal・ビットコインなどで出金できる",
        "need": "メールで登録し、PCにアプリを入れて動かしたままにする",
        "caution": "スマホでの通信量シェアは2026年4月に終了し、ほったらかしで稼げるのはPCだけ。自分のIPアドレスを他社のデータ収集に使わせるしくみで、額も少なめ"
      },
      "en": {
        "gain": "Cash for the traffic you share",
        "note": "IPRoyal’s bandwidth-sharing app. Leave the desktop app running and your spare connection earns money. Surveys and games pay too. Cash out from $5 via PayPal, Bitcoin and more",
        "need": "Sign up with email, install the desktop app and leave it running",
        "caution": "Mobile bandwidth sharing ended in April 2026, so passive earning is desktop only. Your IP address is used by others for data collection, and payouts are small"
      },
      "hi": {
        "gain": "शेयर किए गए ट्रैफ़िक के बदले नकद",
        "note": "IPRoyal का बैंडविड्थ शेयर करने वाला ऐप। डेस्कटॉप ऐप चालू छोड़ दें, आपका खाली कनेक्शन कमाई करता है। सर्वे और गेम से भी कमाई होती है। $5 से PayPal, Bitcoin आदि से निकालें",
        "need": "ईमेल से साइन अप करें, डेस्कटॉप ऐप इंस्टॉल करें और चालू छोड़ दें",
        "caution": "मोबाइल पर बैंडविड्थ शेयरिंग अप्रैल 2026 में बंद हो गई, इसलिए पैसिव कमाई सिर्फ़ डेस्कटॉप पर है। आपका IP पता दूसरे लोग डेटा जुटाने के लिए इस्तेमाल करते हैं, और कमाई कम होती है"
      },
      "zh": {
        "gain": "按共享流量获得现金",
        "note": "IPRoyal 旗下的带宽共享应用。让电脑端应用保持运行，闲置网络就能赚钱。问卷和游戏也能赚。满 $5 可通过 PayPal、比特币等提现",
        "need": "用邮箱注册，在电脑上安装应用并保持运行",
        "caution": "手机端带宽共享已于 2026 年 4 月停止，躺赚只能用电脑。你的 IP 地址会被他人用于数据采集，收益也不多"
      },
      "es": {
        "gain": "Dinero por el tráfico que compartes",
        "note": "La app de compartir ancho de banda de IPRoyal. Deja la app de escritorio funcionando y tu conexión sobrante genera dinero. También paga por encuestas y juegos. Cobra desde $5 por PayPal, Bitcoin y más",
        "need": "Regístrate con tu email, instala la app de escritorio y déjala funcionando",
        "caution": "Compartir ancho de banda en el móvil terminó en abril de 2026, así que lo pasivo solo funciona en PC. Otros usan tu dirección IP para recopilar datos, y se gana poco"
      },
      "de": {
        "gain": "Geld für den geteilten Datenverkehr",
        "note": "Die Bandbreiten-App von IPRoyal. Lass die Desktop-App laufen, und deine freie Verbindung bringt Geld. Umfragen und Spiele zahlen ebenfalls. Auszahlung ab 5 $ per PayPal, Bitcoin und mehr",
        "need": "Mit E-Mail anmelden, Desktop-App installieren und laufen lassen",
        "caution": "Das Teilen mobiler Bandbreite wurde im April 2026 eingestellt, passives Verdienen geht also nur noch am Desktop. Deine IP-Adresse wird von anderen zur Datensammlung genutzt, und die Auszahlungen sind klein"
      },
      "ar": {
        "gain": "نقود مقابل حركة البيانات التي تشاركها",
        "note": "تطبيق مشاركة عرض النطاق من IPRoyal. اترك تطبيق الحاسوب يعمل ليكسب اتصالك غير المستخدم مالًا. الاستبيانات والألعاب تدفع أيضًا. اسحب أرباحك من ⁦$5⁩ عبر PayPal وبيتكوين وغيرها",
        "need": "سجّل بالبريد الإلكتروني، وثبّت تطبيق الحاسوب واتركه يعمل",
        "caution": "توقفت مشاركة عرض النطاق على الهاتف في أبريل 2026، فالكسب السلبي على الحاسوب فقط. يستخدم آخرون عنوان IP الخاص بك لجمع البيانات، والأرباح قليلة"
      }
    },
    {
      "id": "pinetwork",
      "name": "Pi Network",
      "cat": "crypto-bi",
      "type": "loop",
      "global": true,
      "ease": 3,
      "official": "https://minepi.com/",
      "code": "eltociear",
      "ref": "https://minepi.com/eltociear",
      "added": "2026-10-09",
      "checked": "2026-10",
      "trust": {
        "cash": "partial",
        "price": "yes",
        "operator": "yes"
      },
      "verify": [
        {
          "method": "kyc-id"
        }
      ],
      "ja": {
        "gain": "PIを毎日",
        "note": "アプリで24時間に1回ボタンを押すとPIがたまる。紹介した人が増えるほど採掘ペースも上がる。2025年2月に一般公開され、OKX・Bitget・MEXCなどで取引されている",
        "need": "招待リンクから登録（招待コード：eltociear）。PIを動かすには本人確認とメインネットのウォレットへの移行が必要",
        "caution": "価格は2025年の最高値$2.99から約97%下落（2026年10月時点で約$0.08）。BinanceやCoinbase、日本の取引所では扱いがない。毎日の操作が必要で、ほったらかしでは貯まらない"
      },
      "en": {
        "gain": "PI every day",
        "note": "Tap a button in the app once every 24 hours to earn PI. The more people you refer, the faster you mine. Opened to the public in February 2025 and trades on OKX, Bitget, MEXC and others",
        "need": "Sign up via the invite link (invite code: eltociear). To move your PI you need identity verification and migration to the mainnet wallet",
        "caution": "The price is down about 97% from its 2025 high of $2.99 (about $0.08 as of October 2026). Not listed on Binance, Coinbase or Japanese exchanges. Needs a daily tap, so it won’t build up if you leave it alone"
      },
      "hi": {
        "gain": "हर दिन PI",
        "note": "ऐप में हर 24 घंटे में एक बार बटन दबाने पर PI जमा होता है। जितने ज़्यादा लोगों को रेफ़र करेंगे, माइनिंग उतनी तेज़ होगी। फ़रवरी 2025 में आम लोगों के लिए खुला और OKX, Bitget, MEXC आदि पर ट्रेड होता है",
        "need": "इनवाइट लिंक से साइन अप करें (इनवाइट कोड: eltociear)। PI को ट्रांसफ़र करने के लिए पहचान सत्यापन और मेननेट वॉलेट में माइग्रेशन ज़रूरी है",
        "caution": "कीमत 2025 के उच्चतम स्तर $2.99 से लगभग 97% गिर चुकी है (अक्टूबर 2026 तक लगभग $0.08)। Binance, Coinbase या जापानी एक्सचेंजों पर उपलब्ध नहीं। रोज़ बटन दबाना पड़ता है, यूँ ही छोड़ देने पर कुछ जमा नहीं होता"
      },
      "zh": {
        "gain": "每天获得 PI",
        "note": "每 24 小时在应用中点一次按钮即可累积 PI。邀请的人越多，挖矿速度越快。2025 年 2 月向公众开放，在 OKX、Bitget、MEXC 等交易所交易",
        "need": "通过邀请链接注册（邀请码：eltociear）。要转移 PI，需要完成身份验证并迁移到主网钱包",
        "caution": "价格较 2025 年最高点 $2.99 下跌约 97%（截至 2026 年 10 月约为 $0.08）。Binance、Coinbase 和日本交易所均未上架。需要每天操作，放着不管不会累积"
      },
      "es": {
        "gain": "PI cada día",
        "note": "Pulsa un botón en la app una vez cada 24 horas para acumular PI. Cuantas más personas invites, más rápido minas. Se abrió al público en febrero de 2025 y cotiza en OKX, Bitget, MEXC y otros",
        "need": "Regístrate con el enlace de invitación (código de invitación: eltociear). Para mover tus PI necesitas verificar tu identidad y migrar a la billetera de la mainnet",
        "caution": "El precio ha caído cerca de un 97% desde su máximo de $2.99 en 2025 (unos $0.08 en octubre de 2026). No está en Binance, Coinbase ni en exchanges japoneses. Hay que pulsar a diario; si lo dejas, no se acumula"
      },
      "de": {
        "gain": "Jeden Tag PI",
        "note": "Tippe einmal alle 24 Stunden in der App auf einen Button, um PI zu verdienen. Je mehr Leute du wirbst, desto schneller minst du. Seit Februar 2025 öffentlich und an OKX, Bitget, MEXC und anderen Börsen handelbar",
        "need": "Über den Einladungslink anmelden (Einladungscode: eltociear). Um deine PI zu bewegen, brauchst du eine Identitätsprüfung und die Migration in die Mainnet-Wallet",
        "caution": "Der Kurs liegt rund 97 % unter dem Hoch von 2,99 $ aus dem Jahr 2025 (etwa 0,08 $ im Oktober 2026). Nicht bei Binance, Coinbase oder japanischen Börsen gelistet. Braucht ein tägliches Tippen, ohne das sich nichts ansammelt"
      },
      "ar": {
        "gain": "عملة PI كل يوم",
        "note": "اضغط زرًا في التطبيق مرة كل 24 ساعة لتجميع PI. كلما دعوت أشخاصًا أكثر زادت سرعة التعدين. فُتح للعامة في فبراير 2025 ويُتداول في OKX وBitget وMEXC وغيرها",
        "need": "سجّل عبر رابط الدعوة (رمز الدعوة: eltociear). لنقل عملات PI يلزم التحقق من الهوية والانتقال إلى محفظة الشبكة الرئيسية",
        "caution": "انخفض السعر بنحو 97% عن أعلى مستوى له في 2025 وهو ⁦$2.99⁩ (نحو ⁦$0.08⁩ في أكتوبر 2026). غير مدرج في Binance أو Coinbase أو منصات التداول اليابانية. يتطلب ضغطة يومية، فلا يتراكم إن تركته"
      }
    },
    {
      "id": "deltakim",
      "name": "Delta Kim",
      "cat": "crypto-bi",
      "type": "loop",
      "global": true,
      "ease": 3,
      "official": "https://www.delta.kim/",
      "code": "E7XK90P8N2AX9",
      "ref": "https://www.delta.kim/?referrer=E7XK90P8N2AX9",
      "added": "2026-10-09",
      "checked": "2026-10",
      "trust": {
        "cash": "unknown",
        "price": "no",
        "operator": "unknown"
      },
      "verify": [
        {
          "method": "none"
        }
      ],
      "ja": {
        "gain": "KIMを毎日",
        "note": "Pi Networkに似た、スマホで毎日“採掘”する暗号資産アプリ。紹介コードを使って登録すると採掘ペースが上がるとされる",
        "need": "招待リンクから登録し、アプリで毎日採掘ボタンを押す",
        "caution": "2026年10月時点で取引所への上場や市場価格は確認できず、換金できるかは不明。採掘しても残高が増えなくなったという声もある。毎日の操作が必要"
      },
      "en": {
        "gain": "KIM every day",
        "note": "A crypto app similar to Pi Network where you “mine” daily on your phone. Signing up with a referral code is said to boost your mining rate",
        "need": "Sign up via the invite link and tap the mining button in the app every day",
        "caution": "As of October 2026, no exchange listing or market price could be confirmed, so it’s unclear whether KIM can be cashed out. Some users report their balance stopped growing despite mining. Needs daily action"
      },
      "hi": {
        "gain": "हर दिन KIM",
        "note": "Pi Network जैसा एक क्रिप्टो ऐप, जिसमें आप फ़ोन पर रोज़ “माइनिंग” करते हैं। कहा जाता है कि रेफ़रल कोड से साइन अप करने पर माइनिंग की रफ़्तार बढ़ जाती है",
        "need": "इनवाइट लिंक से साइन अप करें और ऐप में रोज़ माइनिंग बटन दबाएँ",
        "caution": "अक्टूबर 2026 तक किसी एक्सचेंज पर लिस्टिंग या बाज़ार मूल्य की पुष्टि नहीं हो सकी, इसलिए यह साफ़ नहीं कि इसे नकद में बदला जा सकेगा या नहीं। कुछ लोगों का कहना है कि माइनिंग के बावजूद बैलेंस बढ़ना बंद हो गया। रोज़ ऐप चलाना ज़रूरी है"
      },
      "zh": {
        "gain": "每天获得 KIM",
        "note": "类似 Pi Network 的加密资产应用，每天用手机“挖矿”。据称使用邀请码注册后挖矿速度会提高",
        "need": "通过邀请链接注册，每天在应用中点击挖矿按钮",
        "caution": "截至 2026 年 10 月，尚未确认在任何交易所上架或有市场价格，能否兑现尚不清楚。也有用户反映挖矿后余额不再增加。需要每天操作"
      },
      "es": {
        "gain": "KIM cada día",
        "note": "Una app de criptomonedas parecida a Pi Network en la que «minas» a diario desde el móvil. Se dice que registrarte con un código de referido aumenta tu ritmo de minado",
        "need": "Regístrate con el enlace de invitación y pulsa el botón de minado en la app cada día",
        "caution": "En octubre de 2026 no se ha podido confirmar que cotice en ningún exchange ni que tenga precio de mercado, así que no está claro si se puede convertir en dinero. Algunos usuarios dicen que su saldo dejó de crecer aunque sigan minando. Requiere acción diaria"
      },
      "de": {
        "gain": "Jeden Tag KIM",
        "note": "Eine Krypto-App ähnlich wie Pi Network, bei der du täglich auf dem Handy „minst“. Eine Anmeldung mit Empfehlungscode soll deine Mining-Rate erhöhen",
        "need": "Über den Einladungslink anmelden und jeden Tag in der App auf den Mining-Button tippen",
        "caution": "Stand Oktober 2026 ließen sich weder Börsennotierung noch Marktkurs bestätigen, daher ist unklar, ob KIM ausgezahlt werden kann. Manche Nutzer berichten, dass ihr Guthaben trotz Mining nicht mehr wuchs. Braucht tägliche Aktion"
      },
      "ar": {
        "gain": "عملة KIM كل يوم",
        "note": "تطبيق عملات مشفرة يشبه Pi Network، «تعدّن» فيه يوميًا من هاتفك. يُقال إن التسجيل برمز إحالة يرفع سرعة التعدين",
        "need": "سجّل عبر رابط الدعوة واضغط زر التعدين في التطبيق كل يوم",
        "caution": "حتى أكتوبر 2026 لم يتسنَّ التأكد من إدراجها في أي منصة تداول أو من وجود سعر سوقي، لذا ليس واضحًا إن كان يمكن تحويلها إلى نقود. يذكر بعض المستخدمين أن رصيدهم توقف عن الزيادة رغم التعدين. يتطلب إجراءً يوميًا"
      }
    },
    {
      "id": "interlink",
      "name": "InterLink",
      "cat": "crypto-bi",
      "type": "loop",
      "global": true,
      "ease": 2,
      "official": "https://interlinklabs.ai/",
      "code": "541682748130",
      "ref": "https://interlinklabs.ai/541682748130",
      "added": "2026-10-09",
      "checked": "2026-10",
      "trust": {
        "cash": "unknown",
        "price": "unknown",
        "operator": "yes"
      },
      "verify": [
        {
          "method": "face"
        }
      ],
      "ja": {
        "gain": "ITLGトークンを毎日",
        "note": "顔認証で“本人であること”を確かめた人（Human Node）に、ITLGトークンを配るプロジェクト。アプリで約4時間ごと（1日最大6回）にチェックインするとたまる",
        "need": "招待リンクから登録し、アプリで顔認証をする",
        "caution": "2026年5月時点でITLGは取引所に上場しておらず、市場価格がない。こまめなチェックインが必要。顔の生体情報の扱いに納得したうえで使う"
      },
      "en": {
        "gain": "ITLG tokens every day",
        "note": "A project that distributes ITLG tokens to people who have verified they are real humans through face verification (Human Nodes). Check in on the app about every 4 hours (up to 6 times a day) to earn",
        "need": "Sign up via the invite link and complete face verification in the app",
        "caution": "As of May 2026, ITLG is not listed on any exchange and has no market price. Requires frequent check-ins. Use it only if you are comfortable with how your facial biometric data is handled"
      },
      "hi": {
        "gain": "हर दिन ITLG टोकन",
        "note": "एक प्रोजेक्ट जो फ़ेस वेरिफ़िकेशन से “असली इंसान” साबित करने वाले लोगों (Human Node) को ITLG टोकन देता है। ऐप में लगभग हर 4 घंटे में (दिन में अधिकतम 6 बार) चेक-इन करने पर टोकन जमा होते हैं",
        "need": "इनवाइट लिंक से साइन अप करें और ऐप में फ़ेस वेरिफ़िकेशन करें",
        "caution": "मई 2026 तक ITLG किसी एक्सचेंज पर लिस्टेड नहीं है और इसका कोई बाज़ार मूल्य नहीं है। बार-बार चेक-इन करना पड़ता है। चेहरे के बायोमेट्रिक डेटा के इस्तेमाल से सहमत हों, तभी इस्तेमाल करें"
      },
      "zh": {
        "gain": "每天获得 ITLG 代币",
        "note": "向通过人脸验证确认“本人身份”的用户（Human Node）发放 ITLG 代币的项目。在应用中约每 4 小时签到一次（每天最多 6 次）即可累积",
        "need": "通过邀请链接注册，并在应用中完成人脸验证",
        "caution": "截至 2026 年 5 月，ITLG 尚未在交易所上架，没有市场价格。需要经常签到。请在认可其人脸生物信息处理方式的前提下使用"
      },
      "es": {
        "gain": "Tokens ITLG cada día",
        "note": "Un proyecto que reparte tokens ITLG a personas que han verificado que son humanas mediante reconocimiento facial (Human Nodes). Haz check-in en la app cada 4 horas aproximadamente (hasta 6 veces al día) para acumularlos",
        "need": "Regístrate con el enlace de invitación y completa la verificación facial en la app",
        "caution": "En mayo de 2026, ITLG no cotiza en ningún exchange y no tiene precio de mercado. Requiere check-ins frecuentes. Úsalo solo si estás conforme con cómo se tratan tus datos biométricos faciales"
      },
      "de": {
        "gain": "Jeden Tag ITLG-Token",
        "note": "Ein Projekt, das ITLG-Token an Menschen verteilt, die per Gesichtsverifizierung bestätigt haben, dass sie echte Menschen sind (Human Nodes). Etwa alle 4 Stunden (bis zu 6-mal am Tag) in der App einchecken, um zu verdienen",
        "need": "Über den Einladungslink anmelden und in der App die Gesichtsverifizierung abschließen",
        "caution": "Stand Mai 2026 ist ITLG an keiner Börse gelistet und hat keinen Marktkurs. Erfordert häufiges Einchecken. Nutz es nur, wenn du mit dem Umgang mit deinen biometrischen Gesichtsdaten einverstanden bist"
      },
      "ar": {
        "gain": "رموز ITLG كل يوم",
        "note": "مشروع يوزّع رموز ITLG على من تحقّقوا من أنهم بشر حقيقيون عبر التحقق بالوجه (⁦Human Node⁩). سجّل حضورك في التطبيق كل 4 ساعات تقريبًا (حتى 6 مرات يوميًا) لتجميعها",
        "need": "سجّل عبر رابط الدعوة وأكمل التحقق بالوجه في التطبيق",
        "caution": "حتى مايو 2026 لم تُدرج ITLG في أي منصة تداول وليس لها سعر سوقي. يتطلب تسجيل حضور متكررًا. استخدمه فقط إن كنت مطمئنًا لطريقة التعامل مع بيانات وجهك البيومترية"
      }
    },
    {
      "id": "meingrundeinkommen",
      "name": "Mein Grundeinkommen",
      "cat": "app",
      "type": "loop",
      "global": true,
      "ease": 4,
      "official": "https://www.mein-grundeinkommen.de/",
      "code": "",
      "ref": "https://meinbge.de/fuer-dich/4143ce95b90cf10386f4?utm_campaign=freundschaft",
      "added": "2026-10-21",
      "checked": "2026-10",
      "trust": {
        "cash": "yes",
        "price": "na",
        "operator": "yes"
      },
      "verify": [
        {
          "method": "none"
        },
        {
          "method": "kyc-id",
          "optional": true
        }
      ],
      "ja": {
        "gain": "当選すると月1,000ユーロを1年間",
        "note": "ベルリンの非営利団体が、クラウドファンディングの寄付を元手に開く無料の抽選。定期的に抽選があり、当たった人は月1,000ユーロを12か月、条件なしで受け取れる（暗号資産ではなく現金）",
        "need": "メールアドレスで登録し、抽選ごとに参加を確認する。16歳以上で、当選時は名前と生年月日が身分証と一致している必要がある",
        "caution": "2020年に運営は「年齢や居住地に関係なく誰でも参加できる」と説明しているが、ドイツ国外在住者の現在の条件や海外への送金は確認できていない。サイトはドイツ語。抽選なので、ほとんどの人は何も受け取れない。当選金は住んでいる国で税金がかかることがある"
      },
      "en": {
        "gain": "€1,000 a month for a year if you win",
        "note": "A free lottery run by a nonprofit association in Berlin and funded by crowdfunding donations. Draws are held regularly, and each winner gets €1,000 a month for 12 months, no strings attached (real cash, not crypto)",
        "need": "Register with your email and confirm your participation for each draw. You must be 16 or older, and your name and date of birth must match your ID if you win",
        "caution": "A 2020 statement from the organisation said anyone can take part regardless of age or where they live, but current rules for people outside Germany and payouts abroad are not confirmed. The site is in German. It's a lottery, so most entrants receive nothing. Winnings may be taxed in your country"
      },
      "zh": {
        "gain": "中奖后每月 1,000 欧元，持续一年",
        "note": "由柏林的非营利协会举办、以众筹捐款为资金的免费抽奖。定期开奖，每位中奖者可无条件连续 12 个月每月领取 1,000 欧元（是现金，不是加密货币）",
        "need": "用邮箱注册，并在每次抽奖前确认参加。需年满 16 岁，中奖时姓名和出生日期须与身份证件一致",
        "caution": "主办方在 2020 年表示，不论年龄和居住地，任何人都可参加，但目前对德国境外居民的规定以及能否向海外付款尚未确认。网站为德语。这是抽奖，大多数参加者什么也拿不到。奖金在你所在的国家可能需要缴税"
      },
      "hi": {
        "gain": "जीतने पर एक साल तक हर महीने €1,000",
        "note": "बर्लिन की एक नॉन-प्रॉफ़िट संस्था की मुफ़्त लॉटरी, जो क्राउडफ़ंडिंग दान से चलती है। ड्रॉ नियमित रूप से होते हैं, और हर विजेता को 12 महीने तक हर महीने €1,000 बिना किसी शर्त के मिलते हैं (असली नकद, क्रिप्टो नहीं)",
        "need": "ईमेल से रजिस्टर करें और हर ड्रॉ के लिए अपनी भागीदारी कन्फ़र्म करें। उम्र 16 साल या ज़्यादा होनी चाहिए, और जीतने पर नाम व जन्मतिथि आपकी ID से मेल खानी चाहिए",
        "caution": "संस्था ने 2020 में कहा था कि उम्र या रहने की जगह से फ़र्क नहीं पड़ता, कोई भी भाग ले सकता है, लेकिन जर्मनी के बाहर रहने वालों के मौजूदा नियम और विदेश में भुगतान की पुष्टि नहीं हुई है। साइट जर्मन भाषा में है। यह लॉटरी है, इसलिए ज़्यादातर लोगों को कुछ नहीं मिलता। जीती हुई रकम पर आपके देश में टैक्स लग सकता है"
      },
      "es": {
        "gain": "1.000 € al mes durante un año si ganas",
        "note": "Un sorteo gratuito organizado por una asociación sin ánimo de lucro de Berlín y financiado con donaciones de crowdfunding. Hay sorteos periódicos y cada ganador recibe 1.000 € al mes durante 12 meses, sin condiciones (dinero real, no cripto)",
        "need": "Regístrate con tu email y confirma tu participación en cada sorteo. Debes tener 16 años o más, y si ganas, tu nombre y fecha de nacimiento deben coincidir con tu documento de identidad",
        "caution": "En 2020 la organización dijo que cualquiera puede participar sin importar la edad ni el lugar de residencia, pero no están confirmadas las reglas actuales para quienes viven fuera de Alemania ni los pagos al extranjero. La web está en alemán. Es un sorteo, así que la mayoría no recibe nada. Las ganancias pueden tributar en tu país"
      },
      "de": {
        "gain": "1.000 € im Monat ein Jahr lang, wenn du gewinnst",
        "note": "Eine kostenlose Verlosung eines gemeinnützigen Vereins in Berlin, finanziert durch Crowdfunding-Spenden. Es wird regelmäßig verlost, und jede Gewinnerin und jeder Gewinner bekommt 12 Monate lang 1.000 € im Monat, bedingungslos (echtes Geld, keine Kryptowährung)",
        "need": "Mit E-Mail registrieren und die Teilnahme an jeder Verlosung bestätigen. Du musst mindestens 16 sein, und im Gewinnfall müssen Name und Geburtsdatum zu deinem Ausweis passen",
        "caution": "Der Verein erklärte 2020, dass alle unabhängig von Alter und Wohnort teilnehmen können, die aktuellen Regeln für Menschen außerhalb Deutschlands und Auszahlungen ins Ausland sind aber nicht bestätigt. Die Seite ist auf Deutsch. Es ist eine Verlosung, die meisten gehen also leer aus. Gewinne können in deinem Land steuerpflichtig sein"
      },
      "ar": {
        "gain": "⁦€1,000⁩ شهريًا لمدة سنة إن فزت",
        "note": "سحب مجاني تنظمه جمعية غير ربحية في برلين ويُموَّل بتبرعات التمويل الجماعي. تُجرى السحوبات بانتظام، ويحصل كل فائز على ⁦€1,000⁩ شهريًا لمدة 12 شهرًا دون أي شروط (نقود حقيقية، لا عملات مشفرة)",
        "need": "سجّل ببريدك الإلكتروني وأكّد مشاركتك في كل سحب. يجب أن يكون عمرك 16 عامًا أو أكثر، وعند الفوز يجب أن يطابق اسمك وتاريخ ميلادك وثيقة هويتك",
        "caution": "ذكرت الجهة المنظمة في 2020 أن المشاركة متاحة للجميع بغض النظر عن العمر أو مكان الإقامة، لكن القواعد الحالية للمقيمين خارج ألمانيا والدفع إلى الخارج غير مؤكدة. الموقع باللغة الألمانية. إنه سحب، لذا لا يحصل معظم المشاركين على شيء. قد تخضع الجوائز للضريبة في بلدك"
      }
    },
    {
      "id": "ubi4all",
      "name": "UBI4ALL",
      "cat": "app",
      "type": "loop",
      "global": true,
      "ease": 4,
      "official": "https://www.ubi4all.org/",
      "code": "",
      "ref": "",
      "noRef": true,
      "added": "2026-10-29",
      "checked": "2026-10",
      "trust": {
        "cash": "yes",
        "price": "na",
        "operator": "yes"
      },
      "verify": [
        {
          "method": "none"
        },
        {
          "method": "kyc-id",
          "optional": true
        }
      ],
      "ja": {
        "gain": "当選すると総額9,600ユーロ（日本なら月800ユーロ×1年）",
        "note": "2020年に設立されたヨーロッパの非営利団体（法人はドイツの「EBI Politische Teilhabe in Europa gemeinnützige UG」）が開く無料の抽選。寄付で9,600ユーロが集まるたびに抽選を行い、当選者は総額9,600ユーロのベーシックインカムを条件なしで受け取れる（暗号資産ではなく現金）。月額と期間は住んでいる国の所得水準で決まり、日本など高所得のOECD加盟国は月800ユーロを1年、低所得国は月160ユーロを5年。抽選は寄付が集まるたびに開かれ、これまでに10回（2026年10月時点）。2025年8月の第9回はブラジルのBIEN大会でライブ開催された。チームは無報酬。紹介リンクや紹介特典はない",
        "need": "公式サイトで無料アカウントを作り、抽選ごとに参加を登録する（全抽選にまとめて参加する設定もある）。月1ユーロからの定期寄付者「UBI Beaver」は毎回自動で参加。16歳以上で、名前・生年月日・居住国は身分証と一致している必要があり、当選したら身分証で本人確認を受ける。参加できる国は公式サイトの案内に従う（公式サイトでは世界中が対象で、日本も例に挙がっているが、当サイトでは日本からの登録はまだ確かめていない）",
        "caution": "抽選なので当たる確率は低く、参加者の数で変わる。抽選は寄付で9,600ユーロが集まったときだけ行われるので、時期は不定期。UBI Beaverでなければ抽選ごとに参加登録が必要。前回の当選者と同じ国の人は次の抽選に参加できない。振込はSEPA口座が基本で、ほかの方法だと手数料が賞金から引かれる。当選金の税金の扱いは住んでいる国による"
      },
      "en": {
        "gain": "€9,600 if you win (in Japan: €800 a month for a year)",
        "note": "A free raffle run by a European non-profit founded in 2020 (legal entity: “EBI Politische Teilhabe in Europa gemeinnützige UG” in Germany). Each time donations reach €9,600, a basic income worth €9,600 in total is raffled off, no strings attached (real cash, not crypto). The monthly amount and duration depend on the income level of the winner’s country: high-income OECD countries such as Japan get €800 a month for 1 year, low-income countries €160 a month for 5 years. Raffles are held whenever the pot is funded; 10 so far (Oct 2026). The 9th was held live at the BIEN Congress in Brazil in Aug 2025. The team is unpaid. There is no referral link or referral bonus",
        "need": "Create a free account on the official site and register for each raffle (there is also an option to confirm for all raffles at once). Monthly donors (“UBI Beavers”, from €1) are entered automatically. You must be 16 or older, your name, date of birth and country must match your ID, and winners are verified with their ID. Eligibility is per the official site (it is open worldwide and lists Japan as an example country, but sign-up from Japan has not yet been tested by this site)",
        "caution": "It’s a raffle, so the odds are low and depend on how many people take part. Raffles only happen when donations fill the €9,600 pot, so the timing is irregular. Unless you are a UBI Beaver, you have to register for each raffle. Residents of the previous winner’s country are excluded from the next draw. Payouts go to SEPA bank accounts; other methods have their fees taken from the prize. How the prize is taxed depends on your country"
      },
      "zh": {
        "gain": "中奖后共得 9,600 欧元（在日本为每月 800 欧元，持续一年）",
        "note": "由 2020 年成立的欧洲非营利组织（法人为德国的“EBI Politische Teilhabe in Europa gemeinnützige UG”）举办的免费抽奖。每当捐款凑满 9,600 欧元，就抽出一份总额 9,600 欧元的无条件基本收入（是现金，不是加密货币）。每月金额和期限取决于中奖者所在国家的收入水平：日本等高收入 OECD 国家为每月 800 欧元、为期 1 年，低收入国家为每月 160 欧元、为期 5 年。资金凑齐就开奖，截至 2026 年 10 月已举办 10 次。2025 年 8 月的第 9 次在巴西 BIEN 大会上现场开奖。团队成员不领报酬。没有推荐链接，也没有推荐奖励",
        "need": "在官网免费注册账号，并为每次抽奖登记参加（也可以选择一次确认参加所有抽奖）。每月捐款者“UBI Beaver”（1 欧元起）会自动参加每次抽奖。需年满 16 岁，姓名、出生日期和居住国须与身份证件一致，中奖后要用身份证件核实身份。能否参加以官网说明为准（官网面向全世界，并以日本为例，但本站尚未亲自确认能否从日本注册）",
        "caution": "这是抽奖，中奖概率低，并取决于参加人数。只有捐款凑满 9,600 欧元才会开奖，时间不固定。不是 UBI Beaver 的话，每次抽奖都要登记参加。与上一位中奖者同一国家的居民不能参加下一次抽奖。奖金汇入 SEPA 银行账户，其他方式的手续费会从奖金中扣除。奖金如何纳税取决于你所在的国家"
      },
      "hi": {
        "gain": "जीतने पर कुल €9,600 (जापान में: एक साल तक हर महीने €800)",
        "note": "2020 में बनी एक यूरोपीय नॉन-प्रॉफ़िट संस्था (कानूनी इकाई: जर्मनी की “EBI Politische Teilhabe in Europa gemeinnützige UG”) की मुफ़्त लॉटरी। जब भी दान से €9,600 जमा होते हैं, कुल €9,600 की बिना शर्त बेसिक इनकम लॉटरी से दी जाती है (असली नकद, क्रिप्टो नहीं)। हर महीने की रकम और अवधि विजेता के देश के आय स्तर पर निर्भर है: जापान जैसे उच्च-आय वाले OECD देशों में 1 साल तक हर महीने €800, कम आय वाले देशों में 5 साल तक हर महीने €160। रकम पूरी होने पर ड्रॉ होता है; अब तक 10 ड्रॉ (अक्टूबर 2026)। 9वाँ ड्रॉ अगस्त 2025 में ब्राज़ील की BIEN कांग्रेस में लाइव हुआ। टीम बिना वेतन के काम करती है। कोई रेफ़रल लिंक या रेफ़रल बोनस नहीं है",
        "need": "आधिकारिक साइट पर मुफ़्त अकाउंट बनाएँ और हर ड्रॉ के लिए रजिस्टर करें (सभी ड्रॉ के लिए एक साथ कन्फ़र्म करने का विकल्प भी है)। मासिक दानदाता (“UBI Beavers”, €1 से) अपने-आप हर ड्रॉ में शामिल होते हैं। उम्र 16 साल या ज़्यादा होनी चाहिए, नाम, जन्मतिथि और देश आपकी ID से मेल खाने चाहिए, और विजेताओं की ID से जाँच होती है। पात्रता आधिकारिक साइट के अनुसार है (यह दुनियाभर के लिए खुली है और जापान को उदाहरण के तौर पर दिखाती है, पर इस साइट ने जापान से साइन-अप अभी आज़माया नहीं है)",
        "caution": "यह लॉटरी है, इसलिए जीतने की संभावना कम है और भाग लेने वालों की संख्या पर निर्भर है। ड्रॉ तभी होता है जब दान से €9,600 पूरे हो जाते हैं, इसलिए समय तय नहीं है। UBI Beaver न हों तो हर ड्रॉ के लिए रजिस्टर करना पड़ता है। पिछले विजेता के देश के निवासी अगले ड्रॉ में शामिल नहीं हो सकते। भुगतान SEPA बैंक खातों में होता है; दूसरे तरीकों की फ़ीस इनाम से काटी जाती है। इनाम पर टैक्स आपके देश पर निर्भर है"
      },
      "es": {
        "gain": "9.600 € si ganas (en Japón: 800 € al mes durante un año)",
        "note": "Un sorteo gratuito organizado por una organización europea sin ánimo de lucro fundada en 2020 (entidad legal: «EBI Politische Teilhabe in Europa gemeinnützige UG», en Alemania). Cada vez que las donaciones llegan a 9.600 €, se sortea una renta básica de 9.600 € en total, sin condiciones (dinero real, no cripto). La cantidad mensual y la duración dependen del nivel de renta del país del ganador: los países de la OCDE de renta alta, como Japón, reciben 800 € al mes durante 1 año, y los de renta baja, 160 € al mes durante 5 años. Hay sorteo cada vez que se completa el bote; 10 hasta ahora (octubre de 2026). El 9.º se celebró en directo en el Congreso de BIEN en Brasil en agosto de 2025. El equipo no cobra. No hay enlace ni bono de referido",
        "need": "Crea una cuenta gratuita en la web oficial e inscríbete en cada sorteo (también hay una opción para confirmar todos los sorteos a la vez). Quienes donan cada mes («UBI Beavers», desde 1 €) participan automáticamente. Debes tener 16 años o más, tu nombre, fecha de nacimiento y país deben coincidir con tu documento de identidad, y a quien gana se le verifica con su documento. La elegibilidad es la que indica la web oficial (está abierta a todo el mundo y pone Japón como ejemplo, pero este sitio aún no ha probado a registrarse desde Japón)",
        "caution": "Es un sorteo, así que las probabilidades son bajas y dependen de cuánta gente participe. Solo hay sorteo cuando las donaciones llenan el bote de 9.600 €, así que las fechas son irregulares. Si no eres UBI Beaver, tienes que inscribirte en cada sorteo. Los residentes del país del último ganador quedan fuera del siguiente sorteo. Los pagos van a cuentas bancarias SEPA; con otros métodos, las comisiones se descuentan del premio. La tributación del premio depende de tu país"
      },
      "de": {
        "gain": "9.600 €, wenn du gewinnst (in Japan: 800 € im Monat ein Jahr lang)",
        "note": "Eine kostenlose Verlosung einer 2020 gegründeten europäischen gemeinnützigen Organisation (Rechtsträger: „EBI Politische Teilhabe in Europa gemeinnützige UG“ in Deutschland). Jedes Mal, wenn 9.600 € an Spenden zusammengekommen sind, wird ein bedingungsloses Grundeinkommen von insgesamt 9.600 € verlost (echtes Geld, keine Kryptowährung). Monatsbetrag und Dauer hängen vom Einkommensniveau des Landes der Gewinnerin oder des Gewinners ab: OECD-Länder mit hohem Einkommen wie Japan bekommen 800 € im Monat für 1 Jahr, Länder mit niedrigem Einkommen 160 € im Monat für 5 Jahre. Verlost wird, sobald der Topf voll ist; bisher 10 Verlosungen (Stand Oktober 2026). Die 9. fand im August 2025 live beim BIEN-Kongress in Brasilien statt. Das Team arbeitet ehrenamtlich. Es gibt keinen Empfehlungslink und keinen Empfehlungsbonus",
        "need": "Auf der offiziellen Seite ein kostenloses Konto anlegen und dich für jede Verlosung anmelden (es gibt auch die Option, die Teilnahme an allen Verlosungen auf einmal zu bestätigen). Monatliche Spenderinnen und Spender („UBI-Biber“, ab 1 €) nehmen automatisch teil. Du musst mindestens 16 sein, Name, Geburtsdatum und Wohnland müssen zu deinem Ausweis passen, und Gewinner werden per Ausweis geprüft. Wer teilnehmen kann, richtet sich nach der offiziellen Seite (sie ist weltweit offen und nennt Japan als Beispielland, eine Anmeldung aus Japan hat diese Seite aber noch nicht selbst getestet)",
        "caution": "Es ist eine Verlosung, die Gewinnchance ist also gering und hängt von der Zahl der Teilnehmenden ab. Verlost wird nur, wenn die Spenden den Topf von 9.600 € füllen, die Termine sind also unregelmäßig. Wenn du kein UBI-Biber bist, musst du dich für jede Verlosung anmelden. Wer im Land der letzten Gewinnerin oder des letzten Gewinners wohnt, ist von der nächsten Verlosung ausgeschlossen. Ausgezahlt wird auf SEPA-Bankkonten; bei anderen Wegen werden die Gebühren vom Gewinn abgezogen. Wie der Gewinn besteuert wird, hängt von deinem Land ab"
      },
      "ar": {
        "gain": "⁦€9,600⁩ إن فزت (في اليابان: ⁦€800⁩ شهريًا لمدة سنة)",
        "note": "سحب مجاني تنظمه منظمة أوروبية غير ربحية تأسست في 2020 (الكيان القانوني: ⁦EBI Politische Teilhabe in Europa gemeinnützige UG⁩ في ألمانيا). كلما بلغت التبرعات ⁦€9,600⁩ يُسحب على دخل أساسي غير مشروط بقيمة ⁦€9,600⁩ إجمالًا (نقود حقيقية، لا عملات مشفرة). يعتمد المبلغ الشهري والمدة على مستوى دخل بلد الفائز: دول ⁦OECD⁩ مرتفعة الدخل مثل اليابان تحصل على ⁦€800⁩ شهريًا لمدة سنة، والدول منخفضة الدخل على ⁦€160⁩ شهريًا لمدة 5 سنوات. يُجرى السحب كلما اكتمل المبلغ؛ 10 سحوبات حتى الآن (أكتوبر 2026). أُجري السحب التاسع مباشرةً في مؤتمر ⁦BIEN⁩ في البرازيل في أغسطس 2025. يعمل الفريق دون أجر. لا يوجد رابط إحالة ولا مكافأة إحالة",
        "need": "أنشئ حسابًا مجانيًا في الموقع الرسمي وسجّل في كل سحب (يوجد أيضًا خيار لتأكيد المشاركة في كل السحوبات دفعة واحدة). المتبرعون الشهريون («⁦UBI Beavers⁩»، من ⁦€1⁩) يشاركون تلقائيًا. يجب أن يكون عمرك 16 عامًا أو أكثر، وأن يطابق اسمك وتاريخ ميلادك وبلدك وثيقة هويتك، ويُتحقق من هوية الفائزين بوثيقة الهوية. الأهلية وفق الموقع الرسمي (المشاركة مفتوحة عالميًا واليابان مذكورة مثالًا، لكن هذا الموقع لم يجرّب التسجيل من اليابان بعد)",
        "caution": "إنه سحب، لذا فرص الفوز ضئيلة وتعتمد على عدد المشاركين. لا يُجرى السحب إلا عندما تملأ التبرعات مبلغ ⁦€9,600⁩، لذا مواعيده غير منتظمة. إن لم تكن من ⁦UBI Beavers⁩ فعليك التسجيل في كل سحب. يُستبعد المقيمون في بلد الفائز السابق من السحب التالي. تُحوَّل المدفوعات إلى حسابات مصرفية ⁦SEPA⁩، ورسوم الطرق الأخرى تُخصم من الجائزة. تختلف ضريبة الجائزة حسب بلدك"
      }
    },
    {
      "id": "g1",
      "name": "Ğ1（ジューン）",
      "nameEn": "Ğ1 (June)",
      "cat": "crypto-bi",
      "type": "loop",
      "global": true,
      "ease": 1,
      "official": "https://duniter.org/g1/",
      "code": "",
      "ref": "",
      "noRef": true,
      "added": "2026-10-23",
      "checked": "2026-10",
      "trust": {
        "cash": "partial",
        "price": "unknown",
        "operator": "yes"
      },
      "verify": [
        {
          "method": "web-of-trust"
        }
      ],
      "ja": {
        "gain": "メンバーになるとĞ1を毎日（ユニバーサル・ディビデンド）",
        "note": "「貨幣の相対性理論」にもとづく自由通貨。Duniterというオープンソースのソフトで動き、メンバー全員に「ユニバーサル・ディビデンド」としてĞ1が毎日新しく発行される。2017年3月に始まり、2026年3月にDuniter v2へ移行した。紹介リンクや紹介特典はない",
        "need": "ウォレットを作り、「信頼の網（Web of Trust）」で既存メンバー5人以上から認証を受ける。認証する人は、あなたを直接知っていることが前提",
        "caution": "コミュニティはフランス語圏が中心で、対面のつながりが基本なので、日本から参加するのはかなり難しい。メンバーでなくてもウォレットでĞ1を持つことはできるが、毎日のĞ1はもらえない。Ğ1は主に商品やサービスとの交換で使われ、円などへの換金は個人間に限られる"
      },
      "en": {
        "gain": "Ğ1 every day once you are a member (Universal Dividend)",
        "note": "A libre currency based on the Relative Theory of Money. It runs on the open-source Duniter software, and every member receives newly created Ğ1 each day as a “Universal Dividend”. Launched in March 2017 and moved to Duniter v2 in March 2026. There is no referral link or referral bonus",
        "need": "Create a wallet and get certified by at least 5 existing members through the Web of Trust. Certifiers are expected to know you in person",
        "caution": "The community is mostly French-speaking and built on in-person ties, so joining from outside it (e.g. from Japan) is very hard. Non-members can still hold Ğ1 in a wallet but do not receive the daily dividend. Ğ1 is mainly traded for goods and services, and swapping it for regular money is peer-to-peer only"
      },
      "zh": {
        "gain": "成为成员后每天获得 Ğ1（全民红利）",
        "note": "基于“货币相对论”的自由货币。运行在开源软件 Duniter 上，每位成员每天都会以“全民红利”的形式获得新发行的 Ğ1。2017 年 3 月启动，2026 年 3 月迁移到 Duniter v2。没有推荐链接，也没有推荐奖励",
        "need": "创建钱包，并通过“信任网（Web of Trust）”获得至少 5 位现有成员的认证。认证人原则上应当与你本人相识",
        "caution": "社区以法语圈为主，并以线下交往为基础，从日本等地加入相当困难。非成员也可以用钱包持有 Ğ1，但领不到每日红利。Ğ1 主要用于交换商品和服务，兑换成法币只能在个人之间进行"
      },
      "hi": {
        "gain": "सदस्य बनने पर हर दिन Ğ1 (यूनिवर्सल डिविडेंड)",
        "note": "“रिलेटिव थ्योरी ऑफ़ मनी” पर आधारित एक लिब्रे करेंसी। यह ओपन-सोर्स Duniter सॉफ़्टवेयर पर चलती है, और हर सदस्य को रोज़ “यूनिवर्सल डिविडेंड” के रूप में नए बने Ğ1 मिलते हैं। मार्च 2017 में शुरू हुई और मार्च 2026 में Duniter v2 पर चली गई। कोई रेफ़रल लिंक या रेफ़रल बोनस नहीं है",
        "need": "वॉलेट बनाएँ और “वेब ऑफ़ ट्रस्ट” में कम से कम 5 मौजूदा सदस्यों से सर्टिफ़िकेशन पाएँ। सर्टिफ़ाई करने वालों से उम्मीद है कि वे आपको व्यक्तिगत रूप से जानते हों",
        "caution": "समुदाय ज़्यादातर फ़्रेंच भाषी है और आमने-सामने के रिश्तों पर चलता है, इसलिए बाहर से (जैसे जापान से) जुड़ना बहुत मुश्किल है। गैर-सदस्य भी वॉलेट में Ğ1 रख सकते हैं, पर उन्हें रोज़ का डिविडेंड नहीं मिलता। Ğ1 ज़्यादातर सामान और सेवाओं के लेन-देन में चलता है, और आम पैसे में बदलना सिर्फ़ आपसी लेन-देन से होता है"
      },
      "es": {
        "gain": "Ğ1 cada día al ser miembro (Dividendo Universal)",
        "note": "Una moneda libre basada en la Teoría Relativa de la Moneda. Funciona con el software libre Duniter, y cada miembro recibe cada día Ğ1 recién creados como «Dividendo Universal». Empezó en marzo de 2017 y pasó a Duniter v2 en marzo de 2026. No hay enlace ni bono de referido",
        "need": "Crea un monedero y consigue la certificación de al menos 5 miembros a través de la Red de Confianza (Web of Trust). Se espera que quienes te certifican te conozcan en persona",
        "caution": "La comunidad es sobre todo francófona y se basa en el trato en persona, así que unirse desde fuera (por ejemplo, desde Japón) es muy difícil. Sin ser miembro puedes tener Ğ1 en un monedero, pero no recibes el dividendo diario. La Ğ1 se usa sobre todo para intercambiar bienes y servicios, y cambiarla por dinero normal solo es posible entre particulares"
      },
      "de": {
        "gain": "Jeden Tag Ğ1, sobald du Mitglied bist (Universelle Dividende)",
        "note": "Eine freie Währung auf Grundlage der Relativen Geldtheorie. Sie läuft mit der Open-Source-Software Duniter, und jedes Mitglied erhält jeden Tag neu geschöpfte Ğ1 als „Universelle Dividende“. Gestartet im März 2017, im März 2026 auf Duniter v2 umgezogen. Es gibt keinen Empfehlungslink und keinen Empfehlungsbonus",
        "need": "Eine Wallet anlegen und dich über das Vertrauensnetz (Web of Trust) von mindestens 5 bestehenden Mitgliedern zertifizieren lassen. Wer zertifiziert, sollte dich persönlich kennen",
        "caution": "Die Gemeinschaft ist überwiegend französischsprachig und beruht auf persönlichen Kontakten, daher ist der Einstieg von außerhalb (z. B. aus Japan) sehr schwer. Auch Nicht-Mitglieder können Ğ1 in einer Wallet halten, bekommen aber keine tägliche Dividende. Ğ1 wird vor allem gegen Waren und Dienstleistungen getauscht, ein Tausch in normales Geld geht nur von Person zu Person"
      },
      "ar": {
        "gain": "⁦Ğ1⁩ كل يوم بعد أن تصبح عضوًا (العائد الشامل)",
        "note": "عملة حرة قائمة على «النظرية النسبية للنقود». تعمل ببرنامج ⁦Duniter⁩ مفتوح المصدر، ويحصل كل عضو يوميًا على ⁦Ğ1⁩ جديدة بوصفها «عائدًا شاملًا». بدأت في مارس 2017 وانتقلت إلى ⁦Duniter v2⁩ في مارس 2026. لا يوجد رابط إحالة ولا مكافأة إحالة",
        "need": "أنشئ محفظة واحصل على توثيق من 5 أعضاء حاليين على الأقل عبر «شبكة الثقة». يُفترض أن يعرفك الموثّقون شخصيًا",
        "caution": "المجتمع ناطق بالفرنسية في الغالب ويقوم على العلاقات المباشرة، لذا الانضمام من الخارج (من اليابان مثلًا) صعب جدًا. يمكن لغير الأعضاء الاحتفاظ بـ⁦Ğ1⁩ في محفظة، لكنهم لا يحصلون على العائد اليومي. تُستخدم ⁦Ğ1⁩ غالبًا لتبادل السلع والخدمات، وتحويلها إلى نقود عادية يتم بين الأفراد فقط"
      }
    },
    {
      "id": "palai",
      "name": "Palai",
      "cat": "app",
      "type": "loop",
      "global": true,
      "ease": 4,
      "official": "https://palai.org/en",
      "code": "",
      "ref": "https://palai.org/en?referrer=eltociear%2B856536b6d-da3a-4f27-9bcf-8eef2ce05bc2",
      "added": "2026-10-24",
      "checked": "2026-10",
      "trust": {
        "cash": "no",
        "price": "na",
        "operator": "unknown"
      },
      "verify": [
        {
          "method": "phone"
        }
      ],
      "ja": {
        "gain": "Palai（¶）のベーシックインカムを毎日",
        "note": "「人間だから」という理由だけで毎日ベーシックインカムが配られる独自通貨。アプリのインストールは不要で、お金を払う必要もない。使わずに置いておいた残高は少しずつ「蒸発」し（2026年10月時点で年2.000%）、その分がベーシックインカムとして配り直される。友だちを紹介すると、紹介した側に1日分のベーシックインカムが追加でもらえる",
        "need": "紹介リンクから登録し、携帯電話番号を登録して認証を受ける（身分証は不要）。受け取りは自分で申請し、10日以内に申請しなかった日の分は消える",
        "caution": "2026年10月時点で、Palaiをユーロや円に換金する方法や公式の交換レートはなく、使い道はPalaiで支払ってくれる人との商品やサービスの交換に限られる。運営元は公式サイトに明記されておらず、「Social Impact Lab Leipzigの支援を受けている」とだけ書かれている"
      },
      "en": {
        "gain": "Palai (¶) basic income every day",
        "note": "Its own currency that pays everyone a daily basic income simply for being human. No install and no money to pay in. Idle balances slowly “evaporate” (2.000% a year as of Oct 2026), and that amount is redistributed as basic income. When you invite a friend, you get an extra day’s basic income",
        "need": "Sign up via the referral link and get certified by adding a mobile phone number (no ID needed). You claim your income yourself; days not claimed within 10 days are lost",
        "caution": "As of Oct 2026 there is no way to cash Palai out into euros or other money and no official exchange rate; you can only trade it for goods and services with people who accept Palai. The site doesn’t name the operator, only that it is “supported by Social Impact Lab Leipzig”"
      },
      "zh": {
        "gain": "每天领取 Palai（¶）基本收入",
        "note": "一种独立货币，只因“你是人”就每天发放基本收入。无需安装，也不用付钱。闲置余额会慢慢“蒸发”（截至 2026 年 10 月为每年 2.000%），蒸发的部分会作为基本收入重新分配。邀请朋友后，邀请人可额外获得 1 天的基本收入",
        "need": "通过推荐链接注册，并登记手机号码完成认证（不需要身份证件）。收入需要自己申领，10 天内未申领的部分会作废",
        "caution": "截至 2026 年 10 月，Palai 还无法兑换成欧元等货币，也没有官方汇率，只能与接受 Palai 的人交换商品或服务。官网没有写明运营方，只写着“由 Social Impact Lab Leipzig 支持”"
      },
      "hi": {
        "gain": "हर दिन Palai (¶) में बेसिक इनकम",
        "note": "एक अलग करेंसी जो सिर्फ़ इंसान होने की वजह से सबको रोज़ बेसिक इनकम देती है। कुछ इंस्टॉल करने या पैसे देने की ज़रूरत नहीं। बिना इस्तेमाल पड़ा बैलेंस धीरे-धीरे “भाप बनकर उड़ता” है (अक्टूबर 2026 में सालाना 2.000%), और वह रकम बेसिक इनकम के रूप में फिर से बाँटी जाती है। किसी दोस्त को बुलाने पर आपको एक दिन की बेसिक इनकम अलग से मिलती है",
        "need": "रेफ़रल लिंक से साइन अप करें और मोबाइल नंबर जोड़कर सर्टिफ़ाई हों (ID की ज़रूरत नहीं)। इनकम खुद क्लेम करनी होती है; 10 दिन के अंदर क्लेम न किए गए दिन खत्म हो जाते हैं",
        "caution": "अक्टूबर 2026 तक Palai को यूरो या दूसरे पैसे में बदलने का कोई तरीका या आधिकारिक एक्सचेंज रेट नहीं है; इसे सिर्फ़ Palai लेने वाले लोगों से सामान और सेवाओं के बदले इस्तेमाल किया जा सकता है। साइट पर ऑपरेटर का नाम नहीं है, सिर्फ़ लिखा है कि इसे “Social Impact Lab Leipzig का सहयोग” मिला है"
      },
      "es": {
        "gain": "Renta básica en Palai (¶) cada día",
        "note": "Una moneda propia que da a todo el mundo una renta básica diaria solo por ser humano. No hay que instalar nada ni pagar dinero. Los saldos sin usar se «evaporan» poco a poco (2,000 % al año a octubre de 2026) y esa cantidad se reparte de nuevo como renta básica. Si invitas a un amigo, recibes un día extra de renta básica",
        "need": "Regístrate con el enlace de referido y certifícate añadiendo un número de móvil (no hace falta documento de identidad). La renta se reclama a mano; los días no reclamados en 10 días se pierden",
        "caution": "A octubre de 2026 no hay forma de cambiar Palai por euros u otro dinero ni tipo de cambio oficial; solo se puede intercambiar por bienes y servicios con quien acepte Palai. La web no dice quién lo gestiona, solo que cuenta con el «apoyo de Social Impact Lab Leipzig»"
      },
      "de": {
        "gain": "Jeden Tag Grundeinkommen in Palai (¶)",
        "note": "Eine eigene Währung, die allen ein tägliches Grundeinkommen zahlt, einfach weil sie Menschen sind. Keine Installation, kein Geld einzuzahlen. Ungenutzte Guthaben „verdunsten“ langsam (2,000 % pro Jahr, Stand Oktober 2026), und dieser Betrag wird als Grundeinkommen neu verteilt. Wenn du eine Freundin oder einen Freund einlädst, bekommst du einen zusätzlichen Tag Grundeinkommen",
        "need": "Über den Empfehlungslink anmelden und dich mit einer Handynummer zertifizieren (kein Ausweis nötig). Dein Einkommen holst du selbst ab; Tage, die du nicht innerhalb von 10 Tagen abholst, verfallen",
        "caution": "Stand Oktober 2026 gibt es keine Möglichkeit, Palai in Euro oder anderes Geld zu tauschen, und keinen offiziellen Wechselkurs; tauschen kannst du nur gegen Waren und Dienstleistungen mit Menschen, die Palai annehmen. Die Seite nennt keinen Betreiber, sondern nur, dass es „vom Social Impact Lab Leipzig unterstützt“ wird"
      },
      "ar": {
        "gain": "دخل أساسي بعملة ⁦Palai (¶)⁩ كل يوم",
        "note": "عملة مستقلة تمنح الجميع دخلًا أساسيًا يوميًا لمجرد أنهم بشر. لا حاجة إلى تثبيت شيء ولا إلى دفع أي مال. الأرصدة غير المستخدمة «تتبخر» ببطء (⁦2.000%⁩ سنويًا حتى أكتوبر 2026)، ويُعاد توزيع ذلك المقدار دخلًا أساسيًا. عند دعوة صديق تحصل على دخل يوم إضافي",
        "need": "سجّل عبر رابط الإحالة ووثّق حسابك بإضافة رقم هاتف محمول (لا حاجة إلى هوية). تطلب دخلك بنفسك، والأيام التي لا تطلبها خلال 10 أيام تضيع",
        "caution": "حتى أكتوبر 2026 لا توجد طريقة لتحويل ⁦Palai⁩ إلى يورو أو نقود أخرى ولا سعر صرف رسمي، ويمكن فقط مبادلتها بسلع وخدمات مع من يقبلون ⁦Palai⁩. لا يذكر الموقع الجهة المشغّلة، بل فقط أنها «مدعومة من ⁦Social Impact Lab Leipzig⁩»"
      }
    },
    {
      "id": "dotare",
      "name": "Dotare",
      "cat": "crypto-bi",
      "type": "loop",
      "global": true,
      "ease": 2,
      "official": "https://dotare.io/",
      "code": "",
      "ref": "",
      "noRef": true,
      "added": "2026-10-24",
      "checked": "2026-10",
      "trust": {
        "cash": "yes",
        "price": "yes",
        "operator": "yes"
      },
      "verify": [],
      "ja": {
        "gain": "受給者に選ばれると月10 ADAを1年間（2027年分）",
        "note": "Cardano上の「世界向けベーシックインカム基金」。寄付者が預けたADAのステーキング利回りなどで基金を運用し、その収益を受給者に毎月ADAで配る。2027年分の受給者は月10 ADAを12か月受け取れる（金額は基金の成長で増えることがある）。所得の審査はない。運営はアメリカのDotare, LLC。紹介リンクや紹介特典はない",
        "need": "18歳以上。公式サイトから登録し、受け取りたい年ごとに申し込む。順番が回ってきたら簡単な本人確認（人間であることの確認）をして、受け取り用のCardanoウォレットを用意する",
        "caution": "2027年分は申し込みが2026年8月31日、登録が11月30日で締め切りと案内されていて、今から登録した場合にいつから受け取れるかは確認できていない。配布は順番待ちで、2026年10月24日時点のサイト表示では登録者147人に対し受給者は2人。ADAは価格が大きく上下する"
      },
      "en": {
        "gain": "10 ADA a month for a year if you are chosen (2027 cycle)",
        "note": "A “global universal basic income” endowment on Cardano. Staking yield on ADA pledged by benefactors grows the fund, and its earnings are paid out monthly in ADA. 2027 beneficiaries get 10 ADA a month for 12 months (the amount can grow as the fund grows). There is no means test. Run by Dotare, LLC in the US. There is no referral link or referral bonus",
        "need": "Be 18 or older. Sign up on the official site and apply for each year you want to take part. When your turn comes, pass a quick identity check (to show you are human) and set up a Cardano wallet to receive payments",
        "caution": "For the 2027 cycle, applications closed on 31 Aug 2026 and enrollment closes on 30 Nov 2026; when someone signing up now would start receiving is not confirmed. Payouts go in line order, and as of 24 Oct 2026 the site showed 147 citizens and 2 beneficiaries. ADA’s price swings a lot"
      },
      "zh": {
        "gain": "入选受益人后每月 10 ADA，持续一年（2027 年度）",
        "note": "Cardano 上的“全球全民基本收入”基金。捐助者存入的 ADA 通过质押收益等让基金增长，再把收益每月以 ADA 发给受益人。2027 年度受益人每月可得 10 ADA，共 12 个月（金额可能随基金增长而增加）。不做收入审查。运营方为美国的 Dotare, LLC。没有推荐链接，也没有推荐奖励",
        "need": "须年满 18 岁。在官网注册，并为想参加的每一年分别申请。轮到你时完成简单的身份验证（确认你是真人），并准备用于收款的 Cardano 钱包",
        "caution": "2027 年度的申请已于 2026 年 8 月 31 日截止，登记将于 11 月 30 日截止；现在注册的人从何时开始领取尚未确认。按排队顺序发放，截至 2026 年 10 月 24 日网站显示登记 147 人、受益人 2 人。ADA 价格波动很大"
      },
      "hi": {
        "gain": "चुने जाने पर एक साल तक हर महीने 10 ADA (2027 साइकिल)",
        "note": "Cardano पर एक “वैश्विक यूनिवर्सल बेसिक इनकम” एंडोमेंट। दानदाताओं की जमा ADA पर स्टेकिंग से फ़ंड बढ़ता है, और उसकी कमाई हर महीने ADA में लाभार्थियों को दी जाती है। 2027 के लाभार्थियों को 12 महीने तक हर महीने 10 ADA मिलते हैं (फ़ंड बढ़ने पर रकम बढ़ सकती है)। आय की कोई जाँच नहीं होती। इसे अमेरिका की Dotare, LLC चलाती है। कोई रेफ़रल लिंक या रेफ़रल बोनस नहीं है",
        "need": "उम्र 18 साल या ज़्यादा होनी चाहिए। आधिकारिक साइट पर साइन अप करें और जिस साल हिस्सा लेना हो उसके लिए आवेदन करें। आपकी बारी आने पर छोटी-सी पहचान जाँच (कि आप इंसान हैं) पूरी करें और भुगतान पाने के लिए Cardano वॉलेट बनाएँ",
        "caution": "2027 साइकिल के लिए आवेदन 31 अगस्त 2026 को बंद हो गए और नामांकन 30 नवंबर 2026 को बंद होगा; अभी साइन अप करने वालों को कब से पैसे मिलेंगे, इसकी पुष्टि नहीं हुई है। भुगतान कतार के क्रम में होता है, और 24 अक्टूबर 2026 को साइट पर 147 नागरिक और 2 लाभार्थी दिख रहे थे। ADA की कीमत बहुत ऊपर-नीचे होती है"
      },
      "es": {
        "gain": "10 ADA al mes durante un año si te eligen (ciclo 2027)",
        "note": "Un fondo de «renta básica universal global» en Cardano. El rendimiento por staking del ADA aportado por los benefactores hace crecer el fondo, y sus ganancias se pagan cada mes en ADA. Los beneficiarios de 2027 reciben 10 ADA al mes durante 12 meses (la cantidad puede crecer con el fondo). No hay prueba de ingresos. Lo gestiona Dotare, LLC, en EE. UU. No hay enlace ni bono de referido",
        "need": "Ser mayor de 18 años. Regístrate en la web oficial y solicita cada año en que quieras participar. Cuando te toque, pasa una breve verificación de identidad (para comprobar que eres humano) y crea un monedero de Cardano para recibir los pagos",
        "caution": "Para el ciclo 2027, las solicitudes cerraron el 31 de agosto de 2026 y la inscripción cierra el 30 de noviembre de 2026; no está confirmado desde cuándo cobraría quien se registre ahora. Se paga por orden de fila, y a 24 de octubre de 2026 la web mostraba 147 ciudadanos y 2 beneficiarios. El precio del ADA sube y baja mucho"
      },
      "de": {
        "gain": "10 ADA im Monat ein Jahr lang, wenn du ausgewählt wirst (Zyklus 2027)",
        "note": "Ein „globaler Grundeinkommens“-Stiftungsfonds auf Cardano. Staking-Erträge auf ADA, die Förderer zusagen, lassen den Fonds wachsen, und seine Erträge werden monatlich in ADA ausgezahlt. Empfänger 2027 bekommen 12 Monate lang 10 ADA im Monat (der Betrag kann mit dem Fonds wachsen). Es gibt keine Bedürftigkeitsprüfung. Betrieben von Dotare, LLC in den USA. Es gibt keinen Empfehlungslink und keinen Empfehlungsbonus",
        "need": "Mindestens 18 Jahre alt sein. Auf der offiziellen Seite anmelden und dich für jedes Jahr bewerben, in dem du teilnehmen willst. Wenn du an der Reihe bist, eine kurze Identitätsprüfung bestehen (um zu zeigen, dass du ein Mensch bist) und eine Cardano-Wallet für die Auszahlungen einrichten",
        "caution": "Für den Zyklus 2027 endete die Bewerbung am 31. August 2026, die Einschreibung endet am 30. November 2026; ab wann jemand, der sich jetzt anmeldet, etwas bekommt, ist nicht bestätigt. Ausgezahlt wird in der Reihenfolge der Warteschlange, und am 24. Oktober 2026 zeigte die Seite 147 Bürger und 2 Empfänger. Der ADA-Kurs schwankt stark"
      },
      "ar": {
        "gain": "⁦10 ADA⁩ شهريًا لمدة سنة إن اختِرت (دورة 2027)",
        "note": "صندوق «دخل أساسي شامل عالمي» على ⁦Cardano⁩. ينمو الصندوق من عائد التخزين على ⁦ADA⁩ التي يودعها المتبرعون، وتُوزَّع أرباحه شهريًا بـ⁦ADA⁩ على المستفيدين. يحصل مستفيدو 2027 على ⁦10 ADA⁩ شهريًا لمدة 12 شهرًا (وقد يزيد المبلغ مع نمو الصندوق). لا يوجد فحص للدخل. تديره ⁦Dotare, LLC⁩ في الولايات المتحدة. لا يوجد رابط إحالة ولا مكافأة إحالة",
        "need": "أن يكون عمرك 18 عامًا أو أكثر. سجّل في الموقع الرسمي وقدّم طلبًا لكل سنة تريد المشاركة فيها. عندما يحين دورك، اجتز تحققًا سريعًا من الهوية (للتأكد أنك إنسان) وأنشئ محفظة ⁦Cardano⁩ لاستلام الدفعات",
        "caution": "في دورة 2027 أُغلق باب الطلبات في 31 أغسطس 2026 ويُغلق التسجيل في 30 نوفمبر 2026، ولم يتأكد متى يبدأ من يسجّل الآن في الاستلام. يُصرف حسب ترتيب الطابور، وفي 24 أكتوبر 2026 أظهر الموقع 147 مواطنًا ومستفيدَين اثنين. سعر ⁦ADA⁩ يتقلب كثيرًا"
      }
    },
    {
      "id": "oro",
      "name": "ORO（World App）",
      "nameEn": "ORO (World App)",
      "cat": "crypto-bi",
      "type": "loop",
      "global": true,
      "ease": 3,
      "official": "https://world.org/ecosystem/app_f1e44837a5e3c2af4da8925b46027645",
      "code": "",
      "ref": "",
      "noRef": true,
      "added": "2026-10-24",
      "checked": "2026-10",
      "trust": {
        "cash": "partial",
        "price": "yes",
        "operator": "unknown"
      },
      "verify": [
        {
          "method": "world-id"
        }
      ],
      "ja": {
        "gain": "ORO トークンを毎日",
        "note": "World App の中で動くミニアプリ。「すべての人間が毎日受け取れるトークン」として、World Chain 上の ORO を1日1回受け取れる。Worldの掲載ページには「友だちを招待するとORO が多くもらえる」とあるが、2026年10月時点でアプリ内に招待リンクは見つからなかった。開発は Grupo de Fiesta、利用者は約390万人（2026年10月時点のWorldの掲載ページ）",
        "need": "World App を入れて World ID で人間であることを証明し（日本からはOrb認証済みで利用を確認）、ミニアプリ ORO を開いて毎日受け取る",
        "caution": "1日にもらえる量は公式ページに書かれていない（2025年9月の World Chain の告知では1日1 ORO。その後減ったという報告もある）。2026年10月に、OrbでWorld IDを認証したアカウントで日本から使えることを確認した。Orbより低い認証レベルで足りるかはわかっていない。ORO は分散型取引所（DEX）で取引されているが流動性は小さく、2026年10月時点で1 ORO は1円未満。運営元の会社情報は見つからない"
      },
      "en": {
        "gain": "ORO tokens every day",
        "note": "A mini app inside World App. Billed as “a token every human can claim daily”, it lets you claim ORO on World Chain once a day. World’s listing mentions inviting friends to earn more, but no invite link was found in the app as of Oct 2026. Developed by Grupo de Fiesta, with about 3.9 million users (World’s listing page, Oct 2026)",
        "need": "Install World App, prove you are human with World ID (confirmed from Japan with Orb verification), then open the ORO mini app and claim every day",
        "caution": "The daily amount is not stated on the official pages (a World Chain announcement in Sep 2025 said 1 ORO a day; later reports say it was reduced). Confirmed usable from Japan with an Orb-verified World ID in Oct 2026; whether a lower (non-Orb) verification level is enough is unknown. ORO trades on a decentralized exchange (DEX) with little liquidity, and as of Oct 2026 one ORO is worth well under a cent. No company details for the operator were found"
      },
      "zh": {
        "gain": "每天领取 ORO 代币",
        "note": "在 World App 内运行的小程序。号称“每个人类每天都能领取的代币”，每天可领取一次 World Chain 上的 ORO。World 的介绍页提到邀请朋友可多得 ORO，但截至 2026 年 10 月在应用内没有找到邀请链接。开发者为 Grupo de Fiesta，用户约 390 万（2026 年 10 月 World 的介绍页）",
        "need": "安装 World App，用 World ID 证明你是真人（已确认在日本可用 Orb 验证的账户使用），然后打开 ORO 小程序每天领取",
        "caution": "官方页面没有写明每天能领多少（2025 年 9 月 World Chain 的公告为每天 1 ORO，之后有减少的报告）。2026 年 10 月已确认，使用经 Orb 验证的 World ID 账户可在日本使用；低于 Orb 的验证等级是否足够尚不清楚。ORO 在去中心化交易所（DEX）交易，但流动性很小，截至 2026 年 10 月 1 ORO 远不到 1 美分。未找到运营方的公司信息"
      },
      "hi": {
        "gain": "हर दिन ORO टोकन",
        "note": "World App के अंदर चलने वाला एक मिनी ऐप। “हर इंसान रोज़ क्लेम कर सकने वाला टोकन” के रूप में, इसमें World Chain पर ORO दिन में एक बार क्लेम किया जा सकता है। World की लिस्टिंग में दोस्तों को बुलाकर ज़्यादा ORO कमाने की बात है, पर अक्टूबर 2026 तक ऐप में कोई इनवाइट लिंक नहीं मिला। डेवलपर Grupo de Fiesta है, और लगभग 39 लाख यूज़र हैं (World का लिस्टिंग पेज, अक्टूबर 2026)",
        "need": "World App इंस्टॉल करें, World ID से साबित करें कि आप इंसान हैं (जापान से Orb वेरिफ़िकेशन के साथ चलने की पुष्टि), फिर ORO मिनी ऐप खोलकर रोज़ क्लेम करें",
        "caution": "रोज़ की रकम आधिकारिक पेजों पर नहीं लिखी है (सितंबर 2025 में World Chain की घोषणा में रोज़ 1 ORO बताया गया था; बाद की रिपोर्टों के अनुसार यह घटाया गया)। अक्टूबर 2026 में पुष्टि हुई कि Orb से वेरिफ़ाई की गई World ID वाले अकाउंट से यह जापान में चलता है; Orb से कम वेरिफ़िकेशन लेवल काफ़ी है या नहीं, यह पता नहीं। ORO एक डीसेंट्रलाइज़्ड एक्सचेंज (DEX) पर ट्रेड होता है, पर लिक्विडिटी बहुत कम है, और अक्टूबर 2026 में 1 ORO की कीमत एक सेंट से भी काफ़ी कम है। ऑपरेटर की कंपनी की जानकारी नहीं मिली"
      },
      "es": {
        "gain": "Tokens ORO cada día",
        "note": "Una mini app dentro de World App. Presentada como «un token que todo humano puede reclamar a diario», permite reclamar ORO en World Chain una vez al día. La página de World menciona invitar a amigos para ganar más, pero a octubre de 2026 no se encontró ningún enlace de invitación en la app. La desarrolla Grupo de Fiesta y tiene unos 3,9 millones de usuarios (página de World, octubre de 2026)",
        "need": "Instala World App, demuestra que eres humano con World ID (confirmado desde Japón con verificación Orb) y abre la mini app ORO para reclamar cada día",
        "caution": "La cantidad diaria no figura en las páginas oficiales (un anuncio de World Chain de septiembre de 2025 hablaba de 1 ORO al día; después se informó de una reducción). En octubre de 2026 se confirmó que funciona desde Japón con un World ID verificado por Orb; no se sabe si basta un nivel de verificación inferior (sin Orb). ORO se negocia en un exchange descentralizado (DEX) con poca liquidez, y a octubre de 2026 un ORO vale mucho menos de un céntimo. No se encontraron datos de la empresa que lo gestiona"
      },
      "de": {
        "gain": "Jeden Tag ORO-Token",
        "note": "Eine Mini-App in der World App. Als „ein Token, den jeder Mensch täglich abholen kann“ beworben, lässt sie dich einmal am Tag ORO auf World Chain abholen. Der Eintrag bei World erwähnt, dass man durch Einladen von Freunden mehr verdient, aber in der App wurde Stand Oktober 2026 kein Einladungslink gefunden. Entwickelt von Grupo de Fiesta, mit rund 3,9 Millionen Nutzern (Eintrag bei World, Oktober 2026)",
        "need": "World App installieren, mit World ID beweisen, dass du ein Mensch bist (aus Japan mit Orb-Verifizierung bestätigt), dann die ORO-Mini-App öffnen und jeden Tag abholen",
        "caution": "Der Tagesbetrag steht nicht auf den offiziellen Seiten (eine Ankündigung von World Chain im September 2025 nannte 1 ORO pro Tag; spätere Berichte sprechen von einer Kürzung). Im Oktober 2026 wurde bestätigt, dass es aus Japan mit einer per Orb verifizierten World ID funktioniert; ob eine niedrigere Stufe (ohne Orb) reicht, ist unbekannt. ORO wird an einer dezentralen Börse (DEX) mit wenig Liquidität gehandelt, und Stand Oktober 2026 ist ein ORO deutlich weniger als einen Cent wert. Zur Betreiberfirma wurden keine Angaben gefunden"
      },
      "ar": {
        "gain": "رموز ⁦ORO⁩ كل يوم",
        "note": "تطبيق مصغّر داخل ⁦World App⁩. يُقدَّم على أنه «رمز يستطيع كل إنسان المطالبة به يوميًا»، فتطالب بـ⁦ORO⁩ على ⁦World Chain⁩ مرة في اليوم. تذكر صفحة ⁦World⁩ دعوة الأصدقاء لكسب المزيد، لكن لم نجد رابط دعوة داخل التطبيق حتى أكتوبر 2026. المطوّر ⁦Grupo de Fiesta⁩، وعدد المستخدمين نحو 3.9 مليون (صفحة ⁦World⁩، أكتوبر 2026)",
        "need": "ثبّت ⁦World App⁩ وأثبت أنك إنسان عبر ⁦World ID⁩ (تأكد عمله من اليابان مع التحقق عبر ⁦Orb⁩)، ثم افتح تطبيق ⁦ORO⁩ المصغّر وطالب كل يوم",
        "caution": "لا تذكر الصفحات الرسمية المقدار اليومي (إعلان ⁦World Chain⁩ في سبتمبر 2025 ذكر ⁦1 ORO⁩ يوميًا، وتشير تقارير لاحقة إلى تخفيضه). تأكدنا في أكتوبر 2026 أنه يعمل من اليابان بحساب ⁦World ID⁩ موثَّق عبر ⁦Orb⁩، ولا يُعرف إن كان مستوى تحقق أدنى (دون ⁦Orb⁩) كافيًا. يُتداول ⁦ORO⁩ في منصة تداول لامركزية (⁦DEX⁩) بسيولة ضئيلة، وفي أكتوبر 2026 كانت قيمة ⁦1 ORO⁩ أقل بكثير من سنت واحد. لم نعثر على معلومات عن الشركة المشغّلة"
      }
    },
    {
      "id": "axo",
      "name": "AXO（World App）",
      "nameEn": "AXO (World App)",
      "cat": "crypto-bi",
      "type": "loop",
      "global": true,
      "ease": 3,
      "official": "https://world.org/ecosystem/app_8aeb55d57b7be834fb8d67e2f803d258",
      "code": "932BDA",
      "ref": "https://world.org/mini-app?app_id=app_8aeb55d57b7be834fb8d67e2f803d258&path=?ref=932BDA",
      "added": "2026-10-24",
      "checked": "2026-10",
      "trust": {
        "cash": "partial",
        "price": "yes",
        "operator": "partial"
      },
      "verify": [
        {
          "method": "world-id"
        }
      ],
      "ja": {
        "gain": "AXO トークンを毎日",
        "note": "World App の中で動くミニアプリ。World Chain 上のトークン AXO（AXOLOCOIN）を1日1回タップで受け取れる。月1 WLDの「Premium」に入ると毎日の受け取り量が3倍になる。紹介のしくみもある。創設者として David Mateos の名前が公開されている。利用者は約30万人（2026年10月時点のWorldの掲載ページ）",
        "need": "紹介リンク（紹介コード 932BDA）から World App でミニアプリを開き、World ID で人間であることを証明し（日本からはOrb認証済みで利用を確認）、毎日受け取る",
        "caution": "1日にもらえる量と、紹介でもらえる特典の中身は公式に書かれていない。2026年10月に、OrbでWorld IDを認証したアカウントで日本から使えることを確認した。Orbより低い認証レベルで足りるかはわかっていない。AXO は分散型取引所（DEX）で WLD と交換できるが、2026年10月時点で流動性は約2,000ドルととても小さく、1 AXO は0.01円未満。運営会社の情報は見つからない"
      },
      "en": {
        "gain": "AXO tokens every day",
        "note": "A mini app inside World App. Claim AXO (AXOLOCOIN), a token on World Chain, once a day with a tap. “Premium” at 1 WLD a month triples your daily claim. It also has a referral system. David Mateos is named as the founder. About 300,000 users (World’s listing page, Oct 2026)",
        "need": "Open the mini app in World App via the referral link (referral code 932BDA), prove you are human with World ID (confirmed from Japan with Orb verification), and claim every day",
        "caution": "The daily amount and what the referral reward is are not stated officially. Confirmed usable from Japan with an Orb-verified World ID in Oct 2026; whether a lower (non-Orb) verification level is enough is unknown. AXO can be swapped for WLD on a decentralized exchange (DEX), but as of Oct 2026 liquidity is only about $2,000 and one AXO is worth a tiny fraction of a cent. No operating company details were found"
      },
      "zh": {
        "gain": "每天领取 AXO 代币",
        "note": "在 World App 内运行的小程序。每天点一下即可领取一次 World Chain 上的代币 AXO（AXOLOCOIN）。加入每月 1 WLD 的“Premium”后，每日领取量变为 3 倍。也有推荐机制。公开的创始人为 David Mateos。用户约 30 万（2026 年 10 月 World 的介绍页）",
        "need": "通过推荐链接（推荐码 932BDA）在 World App 中打开小程序，用 World ID 证明你是真人（已确认在日本可用 Orb 验证的账户使用），然后每天领取",
        "caution": "官方没有写明每天能领多少，也没有写明推荐奖励的内容。2026 年 10 月已确认，使用经 Orb 验证的 World ID 账户可在日本使用；低于 Orb 的验证等级是否足够尚不清楚。AXO 可在去中心化交易所（DEX）换成 WLD，但截至 2026 年 10 月流动性只有约 2,000 美元，1 AXO 远不到 1 美分。未找到运营公司的信息"
      },
      "hi": {
        "gain": "हर दिन AXO टोकन",
        "note": "World App के अंदर चलने वाला एक मिनी ऐप। World Chain पर AXO (AXOLOCOIN) टोकन दिन में एक बार टैप करके क्लेम करें। हर महीने 1 WLD वाला “Premium” लेने पर रोज़ की क्लेम तीन गुना हो जाती है। इसमें रेफ़रल सिस्टम भी है। संस्थापक के रूप में David Mateos का नाम दिया गया है। लगभग 3 लाख यूज़र (World का लिस्टिंग पेज, अक्टूबर 2026)",
        "need": "रेफ़रल लिंक (रेफ़रल कोड 932BDA) से World App में मिनी ऐप खोलें, World ID से साबित करें कि आप इंसान हैं (जापान से Orb वेरिफ़िकेशन के साथ चलने की पुष्टि), और रोज़ क्लेम करें",
        "caution": "रोज़ की रकम और रेफ़रल इनाम क्या है, यह आधिकारिक तौर पर नहीं लिखा है। अक्टूबर 2026 में पुष्टि हुई कि Orb से वेरिफ़ाई की गई World ID वाले अकाउंट से यह जापान में चलता है; Orb से कम वेरिफ़िकेशन लेवल काफ़ी है या नहीं, यह पता नहीं। AXO को डीसेंट्रलाइज़्ड एक्सचेंज (DEX) पर WLD से बदला जा सकता है, पर अक्टूबर 2026 में लिक्विडिटी सिर्फ़ लगभग $2,000 है और 1 AXO की कीमत एक सेंट का बहुत छोटा हिस्सा है। ऑपरेटर कंपनी की जानकारी नहीं मिली"
      },
      "es": {
        "gain": "Tokens AXO cada día",
        "note": "Una mini app dentro de World App. Reclama AXO (AXOLOCOIN), un token de World Chain, una vez al día con un toque. «Premium», por 1 WLD al mes, triplica lo que reclamas cada día. También tiene un sistema de referidos. Figura David Mateos como fundador. Unos 300.000 usuarios (página de World, octubre de 2026)",
        "need": "Abre la mini app en World App con el enlace de referido (código 932BDA), demuestra que eres humano con World ID (confirmado desde Japón con verificación Orb) y reclama cada día",
        "caution": "La cantidad diaria y en qué consiste la recompensa por referido no se indican oficialmente. En octubre de 2026 se confirmó que funciona desde Japón con un World ID verificado por Orb; no se sabe si basta un nivel de verificación inferior (sin Orb). AXO se puede cambiar por WLD en un exchange descentralizado (DEX), pero a octubre de 2026 la liquidez es de solo unos 2.000 $ y un AXO vale una mínima fracción de céntimo. No se encontraron datos de la empresa que lo gestiona"
      },
      "de": {
        "gain": "Jeden Tag AXO-Token",
        "note": "Eine Mini-App in der World App. Hol einmal am Tag per Tippen AXO (AXOLOCOIN) ab, einen Token auf World Chain. „Premium“ für 1 WLD im Monat verdreifacht deine tägliche Menge. Es gibt auch ein Empfehlungssystem. Als Gründer wird David Mateos genannt. Rund 300.000 Nutzer (Eintrag bei World, Oktober 2026)",
        "need": "Die Mini-App über den Empfehlungslink (Empfehlungscode 932BDA) in der World App öffnen, mit World ID beweisen, dass du ein Mensch bist (aus Japan mit Orb-Verifizierung bestätigt), und jeden Tag abholen",
        "caution": "Tagesbetrag und Art der Empfehlungsprämie werden offiziell nicht genannt. Im Oktober 2026 wurde bestätigt, dass es aus Japan mit einer per Orb verifizierten World ID funktioniert; ob eine niedrigere Stufe (ohne Orb) reicht, ist unbekannt. AXO lässt sich an einer dezentralen Börse (DEX) gegen WLD tauschen, aber Stand Oktober 2026 liegt die Liquidität nur bei etwa 2.000 $, und ein AXO ist nur einen winzigen Bruchteil eines Cents wert. Zur Betreiberfirma wurden keine Angaben gefunden"
      },
      "ar": {
        "gain": "رموز ⁦AXO⁩ كل يوم",
        "note": "تطبيق مصغّر داخل ⁦World App⁩. طالب برمز ⁦AXO (AXOLOCOIN)⁩ على ⁦World Chain⁩ مرة يوميًا بنقرة واحدة. اشتراك «⁦Premium⁩» مقابل ⁦1 WLD⁩ شهريًا يضاعف مطالبتك اليومية ثلاث مرات. وفيه نظام إحالة أيضًا. يُذكر ⁦David Mateos⁩ مؤسسًا له. نحو 300 ألف مستخدم (صفحة ⁦World⁩، أكتوبر 2026)",
        "need": "افتح التطبيق المصغّر في ⁦World App⁩ عبر رابط الإحالة (رمز الإحالة ⁦932BDA⁩)، وأثبت أنك إنسان عبر ⁦World ID⁩ (تأكد عمله من اليابان مع التحقق عبر ⁦Orb⁩)، وطالب كل يوم",
        "caution": "لا يُذكر رسميًا المقدار اليومي ولا ماهية مكافأة الإحالة. تأكدنا في أكتوبر 2026 أنه يعمل من اليابان بحساب ⁦World ID⁩ موثَّق عبر ⁦Orb⁩، ولا يُعرف إن كان مستوى تحقق أدنى (دون ⁦Orb⁩) كافيًا. يمكن مبادلة ⁦AXO⁩ بـ⁦WLD⁩ في منصة تداول لامركزية (⁦DEX⁩)، لكن السيولة في أكتوبر 2026 نحو ⁦$2,000⁩ فقط، وقيمة ⁦1 AXO⁩ جزء ضئيل جدًا من السنت. لم نعثر على معلومات عن الشركة المشغّلة"
      }
    },
    {
      "id": "aidac",
      "name": "AI-DAC（World App）",
      "nameEn": "AI-DAC (World App)",
      "cat": "crypto-bi",
      "type": "loop",
      "global": true,
      "ease": 3,
      "official": "https://lp.ai-dac.com/",
      "code": "",
      "ref": "",
      "noRef": true,
      "added": "2026-10-24",
      "checked": "2026-10",
      "trust": {
        "cash": "partial",
        "price": "yes",
        "operator": "yes"
      },
      "verify": [
        {
          "method": "world-id"
        }
      ],
      "ja": {
        "gain": "DAC トークンのUBI",
        "note": "World App の中で動くミニアプリで、「AIを使ったユニバーサル・ベーシックインカムのプラットフォーム」をうたう。World ID で人間と確認された人が DAC のUBIを受け取り、それを使って、アプリを企画・開発・公開する自律型の「AI CEO」を応援したり、リリースに投票やフィードバックをしたりする。運営は創設者の Kei Iwami 氏。紹介リンクや紹介特典はない",
        "need": "World App でミニアプリ AI-DAC を開き、World ID で人間であることを証明する（日本からはOrb認証済みで利用を確認）",
        "caution": "もらえる量・頻度、使える地域、換金方法は公式に書かれていない。2026年10月に、OrbでWorld IDを認証したアカウントで日本から使えることを確認した。Orbより低い認証レベルで足りるかはわかっていない。DAC は World Chain 上の ERC-20 トークンで、総供給量は1億 DAC とされているが、コントラクトに発行上限はなく、運営者がいつでも追加発行（ミント）やエアドロップができる。追加発行されると1枚あたりの価値は薄まりうる。公式に「投資目的ではなく、価値は保証されない」とある。分散型取引所（DEX）に WLD との取引ペアがあるが、2026年10月時点で流動性は約170ドルとごくわずか。アプリ制作の注文は DAC とは別に World の USDC で支払う"
      },
      "en": {
        "gain": "UBI in DAC tokens",
        "note": "A mini app inside World App that calls itself an “AI-powered universal basic income platform”. People verified as human with World ID receive DAC UBI and use it to back autonomous “AI CEOs” that plan, build and ship apps, and to vote and give feedback on releases. Run by founder Kei Iwami. There is no referral link or referral bonus",
        "need": "Open the AI-DAC mini app in World App and prove you are human with World ID (confirmed from Japan with Orb verification)",
        "caution": "The amount, frequency, regions and cash-out are not stated officially. Confirmed usable from Japan with an Orb-verified World ID in Oct 2026; whether a lower (non-Orb) verification level is enough is unknown. DAC is an ERC-20 token on World Chain with a stated total supply of 100M, but the contract has no supply cap and the owner can mint and airdrop more at any time, which can dilute its value. The project says it is not for investment and its value is not guaranteed. There is a DAC/WLD pair on a decentralized exchange (DEX), but as of Oct 2026 liquidity is only about $170. App production orders are paid separately in World USDC"
      },
      "zh": {
        "gain": "DAC 代币形式的 UBI",
        "note": "在 World App 内运行的小程序，自称“由 AI 驱动的全民基本收入平台”。经 World ID 验证为真人的用户可领取 DAC UBI，用它支持能策划、开发并发布应用的自主“AI CEO”，并对发布内容投票和反馈。运营者为创始人 Kei Iwami。没有推荐链接，也没有推荐奖励",
        "need": "在 World App 中打开 AI-DAC 小程序，用 World ID 证明你是真人（已确认在日本可用 Orb 验证的账户使用）",
        "caution": "官方没有写明领取数量、频率、可用地区和兑现方式。2026 年 10 月已确认，使用经 Orb 验证的 World ID 账户可在日本使用；低于 Orb 的验证等级是否足够尚不清楚。DAC 是 World Chain 上的 ERC-20 代币，宣称总供应量为 1 亿枚，但合约没有发行上限，所有者可随时增发（铸造）和空投，可能稀释其价值。官方表示它不以投资为目的，价值不受保证。去中心化交易所（DEX）上有 DAC/WLD 交易对，但截至 2026 年 10 月流动性只有约 170 美元。应用制作订单需另外用 World 的 USDC 支付"
      },
      "hi": {
        "gain": "DAC टोकन में UBI",
        "note": "World App के अंदर चलने वाला मिनी ऐप, जो खुद को “AI से चलने वाला यूनिवर्सल बेसिक इनकम प्लेटफ़ॉर्म” कहता है। World ID से इंसान साबित हुए लोग DAC UBI पाते हैं और उससे ऐप की योजना बनाने, बनाने और रिलीज़ करने वाले स्वायत्त “AI CEO” का समर्थन करते हैं, और रिलीज़ पर वोट व फ़ीडबैक देते हैं। इसे संस्थापक Kei Iwami चलाते हैं। कोई रेफ़रल लिंक या रेफ़रल बोनस नहीं है",
        "need": "World App में AI-DAC मिनी ऐप खोलें और World ID से साबित करें कि आप इंसान हैं (जापान से Orb वेरिफ़िकेशन के साथ चलने की पुष्टि)",
        "caution": "रकम, कितनी बार मिलेगा, किन क्षेत्रों में चलेगा और नकद में कैसे बदलें, यह आधिकारिक रूप से नहीं बताया गया। अक्टूबर 2026 में पुष्टि हुई कि Orb से वेरिफ़ाई की गई World ID वाले अकाउंट से यह जापान में चलता है; Orb से कम वेरिफ़िकेशन लेवल काफ़ी है या नहीं, यह पता नहीं। DAC, World Chain पर ERC-20 टोकन है और कुल सप्लाई 10 करोड़ बताई गई है, पर कॉन्ट्रैक्ट में कोई सीमा नहीं है और मालिक कभी भी और टोकन मिंट व एयरड्रॉप कर सकता है, जिससे कीमत घट सकती है। प्रोजेक्ट कहता है कि यह निवेश के लिए नहीं है और कीमत की गारंटी नहीं है। डीसेंट्रलाइज़्ड एक्सचेंज (DEX) पर DAC/WLD पेयर है, पर अक्टूबर 2026 में लिक्विडिटी सिर्फ़ लगभग $170 है। ऐप बनवाने के ऑर्डर का भुगतान अलग से World USDC में होता है"
      },
      "es": {
        "gain": "UBI en tokens DAC",
        "note": "Una mini app dentro de World App que se presenta como una «plataforma de renta básica universal impulsada por IA». Las personas verificadas como humanas con World ID reciben UBI en DAC y la usan para apoyar a «CEO de IA» autónomos que planifican, crean y publican apps, y para votar y opinar sobre los lanzamientos. La gestiona su fundador, Kei Iwami. No hay enlace ni bono de referido",
        "need": "Abre la mini app AI-DAC en World App y demuestra que eres humano con World ID (confirmado desde Japón con verificación Orb)",
        "caution": "No se indican oficialmente la cantidad, la frecuencia, las regiones ni cómo cobrar. En octubre de 2026 se confirmó que funciona desde Japón con un World ID verificado por Orb; no se sabe si basta un nivel de verificación inferior (sin Orb). DAC es un token ERC-20 en World Chain con un suministro total declarado de 100 millones, pero el contrato no tiene límite y el propietario puede acuñar y repartir más en cualquier momento, lo que puede diluir su valor. El proyecto dice que no es para invertir y que su valor no está garantizado. Hay un par DAC/WLD en un exchange descentralizado (DEX), pero a octubre de 2026 la liquidez es de solo unos 170 $. Los encargos de producción de apps se pagan aparte en USDC de World"
      },
      "de": {
        "gain": "Grundeinkommen in DAC-Token",
        "note": "Eine Mini-App in der World App, die sich als „KI-gestützte Plattform für ein universelles Grundeinkommen“ bezeichnet. Wer per World ID als Mensch verifiziert ist, erhält DAC als Grundeinkommen und nutzt es, um autonome „KI-CEOs“ zu unterstützen, die Apps planen, bauen und veröffentlichen, sowie um über Releases abzustimmen und Feedback zu geben. Betrieben vom Gründer Kei Iwami. Es gibt keinen Empfehlungslink und keinen Empfehlungsbonus",
        "need": "Die Mini-App AI-DAC in der World App öffnen und mit World ID beweisen, dass du ein Mensch bist (aus Japan mit Orb-Verifizierung bestätigt)",
        "caution": "Betrag, Häufigkeit, Regionen und Auszahlung werden offiziell nicht genannt. Im Oktober 2026 wurde bestätigt, dass es aus Japan mit einer per Orb verifizierten World ID funktioniert; ob eine niedrigere Stufe (ohne Orb) reicht, ist unbekannt. DAC ist ein ERC-20-Token auf World Chain mit einer angegebenen Gesamtmenge von 100 Mio., aber der Vertrag hat keine Obergrenze, und der Eigentümer kann jederzeit weitere Token prägen (minten) und per Airdrop verteilen, was den Wert verwässern kann. Laut Projekt ist es nicht als Geldanlage gedacht, und der Wert ist nicht garantiert. An einer dezentralen Börse (DEX) gibt es ein DAC/WLD-Paar, aber Stand Oktober 2026 liegt die Liquidität nur bei etwa 170 $. Aufträge zur App-Produktion werden separat in World-USDC bezahlt"
      },
      "ar": {
        "gain": "دخل أساسي بعملة ⁦DAC⁩",
        "note": "تطبيق مصغّر داخل ⁦World App⁩ يصف نفسه بأنه «منصة دخل أساسي شامل مدعومة بالذكاء الاصطناعي». يحصل من يُثبتون أنهم بشر عبر ⁦World ID⁩ على دخل بعملة ⁦DAC⁩ ويستخدمونه لدعم «مديرين تنفيذيين بالذكاء الاصطناعي» يخططون للتطبيقات ويبنونها وينشرونها، وللتصويت وإبداء الرأي في الإصدارات. يديره المؤسس ⁦Kei Iwami⁩. لا يوجد رابط إحالة ولا مكافأة إحالة",
        "need": "افتح تطبيق ⁦AI-DAC⁩ المصغّر في ⁦World App⁩ وأثبت أنك إنسان عبر ⁦World ID⁩ (تأكد عمله من اليابان مع التحقق عبر ⁦Orb⁩)",
        "caution": "لا تُذكر رسميًا الكمية ولا التكرار ولا المناطق ولا طريقة التحويل إلى نقود. تأكدنا في أكتوبر 2026 أنه يعمل من اليابان بحساب ⁦World ID⁩ موثَّق عبر ⁦Orb⁩، ولا يُعرف إن كان مستوى تحقق أدنى (دون ⁦Orb⁩) كافيًا. ⁦DAC⁩ رمز ⁦ERC-20⁩ على ⁦World Chain⁩ بمعروض إجمالي مُعلن قدره 100 مليون، لكن العقد بلا حد أقصى، ويمكن للمالك سكّ المزيد وتوزيعه في أي وقت، ما قد يُضعف قيمته. يقول المشروع إنه ليس للاستثمار وإن قيمته غير مضمونة. يوجد زوج ⁦DAC/WLD⁩ في منصة تداول لامركزية (⁦DEX⁩)، لكن السيولة في أكتوبر 2026 نحو ⁦$170⁩ فقط. تُدفع طلبات إنتاج التطبيقات بشكل منفصل بـ⁦USDC⁩ على ⁦World⁩"
      }
    },
    {
      "id": "ubiquitus",
      "name": "Ubiquitus",
      "cat": "app",
      "type": "loop",
      "global": false,
      "onlyIn": "us",
      "ease": 4,
      "official": "https://www.ubiquitus.org/",
      "code": "",
      "ref": "",
      "noRef": true,
      "added": "2026-10-24",
      "checked": "2026-10",
      "trust": {
        "cash": "yes",
        "price": "na",
        "operator": "yes"
      },
      "verify": [],
      "ja": {
        "gain": "毎月1日に、参加者で等分した少額の現金（Venmo）",
        "note": "アメリカの「誰でも参加できるベーシックインカム」の社会実験。任意の寄付を基金にして株式など（一部は暗号資産）で運用し、毎月その0.5%を参加者全員で等分してVenmoで配る。寄付しても受け取る額は増えない。2023年に始まり、創設者・開発者は Ryan Frigo 氏。2026年10月の配分は266人に1人0.10ドル。紹介リンクや紹介特典はない",
        "need": "18歳以上のアメリカ居住者。Venmoのアカウントで1セントの送金をして本人確認する（身分証の提出や所得の審査はない）",
        "caution": "2026年10月時点で日本からは利用できない（利用規約ではアメリカ居住者のみ対象。日本から使えないことは実際に試して確認）。1人あたりの額はごくわずかで、基金の運用成績しだいで減り、配分は保証されず、いつ止まってもおかしくないと明記されている。運営は法人ではない「非公式の社会実験」とされている。受け取ったお金は自分で所得として申告する必要がある"
      },
      "en": {
        "gain": "A small equal cash share on the 1st of each month (Venmo)",
        "note": "A US “basic income anyone can join” experiment. Voluntary gifts form a pool invested mainly in stocks (with a small crypto sleeve), and each month 0.5% of it is split equally among all members and paid via Venmo. Giving does not increase your share. Started in 2023 by founder and developer Ryan Frigo. The October 2026 payout was $0.10 each to 266 people. There is no referral link or referral bonus",
        "need": "US residents aged 18+. Verify with a 1¢ Venmo transaction (no ID upload, no means test)",
        "caution": "As of Oct 2026 it cannot be used from Japan (the terms limit it to US residents; not working from Japan was confirmed first-hand). The per-person amount is tiny, falls with the pool, and payouts are stated to be not guaranteed and able to stop at any time. It describes itself as an informal social experiment, not a company. Recipients must report payments as income"
      },
      "zh": {
        "gain": "每月 1 日按人数平分的少量现金（Venmo）",
        "note": "美国的“人人都能参加的基本收入”社会实验。以自愿捐款组成基金，主要投资股票（少量加密资产），每月将其中 0.5% 平分给全体成员并通过 Venmo 发放。捐款不会让你分得更多。2023 年由创始人兼开发者 Ryan Frigo 发起。2026 年 10 月共 266 人，每人 0.10 美元。没有推荐链接，也没有推荐奖励",
        "need": "年满 18 岁的美国居民。用 Venmo 账户转账 1 美分完成验证（无需上传证件，也不审查收入）",
        "caution": "截至 2026 年 10 月无法在日本使用（使用条款只面向美国居民；已亲自确认在日本无法使用）。每人金额极少，会随基金表现减少，官方明确发放不受保证、随时可能停止。运营方自称“非正式的社会实验”，并非公司。收到的钱需自行申报为收入"
      },
      "hi": {
        "gain": "हर महीने की 1 तारीख़ को बराबर बँटी थोड़ी नकद रकम (Venmo)",
        "note": "अमेरिका का “कोई भी जुड़ सके ऐसी बेसिक इनकम” सामाजिक प्रयोग। स्वैच्छिक दान से बना फ़ंड मुख्य रूप से शेयरों (थोड़ा क्रिप्टो) में लगाया जाता है, और हर महीने उसका 0.5% सभी सदस्यों में बराबर बाँटकर Venmo से भेजा जाता है। दान देने से हिस्सा नहीं बढ़ता। 2023 में संस्थापक और डेवलपर Ryan Frigo ने शुरू किया। अक्टूबर 2026 में 266 लोगों को $0.10 प्रति व्यक्ति मिले। कोई रेफ़रल लिंक या रेफ़रल बोनस नहीं है",
        "need": "18 साल या ज़्यादा उम्र के अमेरिकी निवासी। Venmo से 1 सेंट का लेन-देन करके सत्यापन करें (ID अपलोड या आय जाँच नहीं)",
        "caution": "अक्टूबर 2026 तक इसे जापान से इस्तेमाल नहीं किया जा सकता (शर्तों के अनुसार सिर्फ़ अमेरिकी निवासी; जापान से न चलने की पुष्टि खुद आज़माकर की गई)। प्रति व्यक्ति रकम बहुत कम है, फ़ंड के प्रदर्शन के साथ घटती है, और साफ़ लिखा है कि भुगतान की गारंटी नहीं है और कभी भी रुक सकता है। यह खुद को कंपनी नहीं, बल्कि “अनौपचारिक सामाजिक प्रयोग” बताता है। मिली रकम को आय के रूप में खुद घोषित करना होता है"
      },
      "es": {
        "gain": "Una pequeña parte igual en efectivo el día 1 de cada mes (Venmo)",
        "note": "Un experimento estadounidense de «renta básica a la que cualquiera puede unirse». Las donaciones voluntarias forman un fondo invertido sobre todo en acciones (con una pequeña parte en cripto), y cada mes el 0,5 % se reparte a partes iguales entre todos los miembros vía Venmo. Donar no aumenta tu parte. Lo inició en 2023 su fundador y desarrollador, Ryan Frigo. En octubre de 2026 se pagaron 0,10 $ a cada una de 266 personas. No hay enlace ni bono de referido",
        "need": "Residentes en EE. UU. mayores de 18 años. Verificación con una transacción de 1 centavo en Venmo (sin subir documentos ni prueba de ingresos)",
        "caution": "A octubre de 2026 no se puede usar desde Japón (los términos lo limitan a residentes en EE. UU.; se comprobó en persona que no funciona desde Japón). La cantidad por persona es mínima, baja si cae el fondo, y se indica que los pagos no están garantizados y pueden detenerse en cualquier momento. Se describe como un experimento social informal, no como una empresa. Quien cobra debe declarar los pagos como ingresos"
      },
      "de": {
        "gain": "Am 1. jedes Monats ein kleiner, gleicher Geldanteil (Venmo)",
        "note": "Ein US-Experiment für ein „Grundeinkommen, bei dem alle mitmachen können“. Freiwillige Spenden bilden einen Topf, der vor allem in Aktien (mit einem kleinen Krypto-Anteil) angelegt wird, und jeden Monat werden 0,5 % davon gleichmäßig auf alle Mitglieder aufgeteilt und per Venmo ausgezahlt. Spenden erhöht deinen Anteil nicht. 2023 gestartet von Gründer und Entwickler Ryan Frigo. Die Auszahlung im Oktober 2026 betrug 0,10 $ für jede der 266 Personen. Es gibt keinen Empfehlungslink und keinen Empfehlungsbonus",
        "need": "Wohnsitz in den USA und mindestens 18 Jahre. Verifizierung mit einer 1-Cent-Transaktion über Venmo (kein Ausweis-Upload, keine Bedürftigkeitsprüfung)",
        "caution": "Stand Oktober 2026 nicht aus Japan nutzbar (die Bedingungen beschränken es auf Menschen mit Wohnsitz in den USA; dass es aus Japan nicht funktioniert, wurde selbst getestet). Der Betrag pro Person ist winzig, sinkt mit dem Topf, und laut eigener Angabe sind die Auszahlungen nicht garantiert und können jederzeit enden. Es bezeichnet sich als informelles soziales Experiment, nicht als Unternehmen. Empfänger müssen die Zahlungen als Einkommen angeben"
      },
      "ar": {
        "gain": "حصة نقدية صغيرة متساوية في اليوم الأول من كل شهر (⁦Venmo⁩)",
        "note": "تجربة أمريكية لـ«دخل أساسي يمكن لأي شخص الانضمام إليه». تُجمع التبرعات الطوعية في صندوق يُستثمر أساسًا في الأسهم (مع جزء صغير من العملات المشفرة)، ويُقسَّم 0.5% منه شهريًا بالتساوي على جميع الأعضاء عبر ⁦Venmo⁩. التبرع لا يزيد حصتك. أطلقها مؤسسها ومطوّرها ⁦Ryan Frigo⁩ عام 2023. في أكتوبر 2026 حصل 266 شخصًا على ⁦$0.10⁩ لكل منهم. لا يوجد رابط إحالة ولا مكافأة إحالة",
        "need": "للمقيمين في الولايات المتحدة بعمر 18 عامًا فأكثر. التحقق بمعاملة قدرها سنت واحد عبر ⁦Venmo⁩ (دون رفع هوية أو فحص للدخل)",
        "caution": "حتى أكتوبر 2026 لا يمكن استخدامه من اليابان (الشروط تقصره على المقيمين في الولايات المتحدة، وتأكدنا بالتجربة أنه لا يعمل من اليابان). الحصة للفرد ضئيلة جدًا وتنخفض مع أداء الصندوق، ويُذكر صراحةً أن الدفعات غير مضمونة وقد تتوقف في أي وقت. يصف نفسه بأنه تجربة اجتماعية غير رسمية وليس شركة. على المستلم الإبلاغ عن المبالغ بوصفها دخلًا"
      }
    },
    {
      "id": "gradido",
      "name": "Gradido",
      "cat": "app",
      "type": "loop",
      "global": true,
      "ease": 2,
      "official": "https://gradido.net/en/",
      "code": "",
      "ref": "https://gdd.gradido.net/u/eltociear",
      "added": "2026-10-24",
      "checked": "2026-10",
      "trust": {
        "cash": "unknown",
        "price": "na",
        "operator": "yes"
      },
      "verify": [
        {
          "method": "none"
        }
      ],
      "ja": {
        "gain": "公益への貢献1時間につき20 GDD（月最大1,000 GDD）",
        "note": "「感謝（Gratitude）・尊厳（Dignity）・寄付（Donation）」から名づけられた、「自然の経済」をうたう独自通貨のしくみ。お金は借金からではなく参加者みんなが生み出すという考え方で、公益になる活動をすると「アクティブ・ベーシックインカム」として1時間20 GDD、月50時間（1,000 GDD）まで受け取れる。使わないお金は年50%（月約5.61%）の割合で目減りする。運営はオーストリアの研究開発団体 Gradido Akademie International（ドイツにも拠点）",
        "need": "紹介リンクから無料で Gradido アカウントを作り、公益への貢献を申告して GDD を受け取る",
        "caution": "公式FAQでは「今のところは感謝のポイント報酬システム」で、暗号資産ではないとしている。GDDをユーロなどに換金する方法は公式に書かれていない。2026年10月に日本から使えることを実際に確認した。紹介リンク経由で登録した人が、のちに Gradido へ資金面の貢献（寄付など）をすると、紹介した側に GDT（Gradido Transform）が付く（公開されているウォレットのソースコードによる）。登録するだけで特典が出るしくみではない"
      },
      "en": {
        "gain": "20 GDD per hour of common-good work (up to 1,000 GDD a month)",
        "note": "A currency system billed as a “natural economy”, named after Gratitude, Dignity and Donation. Money is created by everyone rather than as debt: contributions to the common good earn an “active basic income” of 20 GDD an hour, up to 50 hours (1,000 GDD) a month. Unused money shrinks at 50% a year (about 5.61% a month). Run by Gradido Akademie International, a research and development association in Austria with a branch in Germany",
        "need": "Create a free Gradido account through the referral link, log your common-good contributions and receive GDD",
        "caution": "The official FAQ says that for now it is a thank-you point reward system and not a cryptocurrency. There is no official information on exchanging GDD for euros or other money. Confirmed usable from Japan in Oct 2026 (first-hand). If someone who signed up through a referral link later makes a financial contribution to Gradido (such as a donation), the referrer is credited with GDT (Gradido Transform), according to the public wallet source code. There is no bonus just for signing up"
      },
      "zh": {
        "gain": "每做 1 小时公益贡献得 20 GDD（每月最多 1,000 GDD）",
        "note": "一种自称“自然经济”的独立货币体系，名称来自感恩（Gratitude）、尊严（Dignity）和捐赠（Donation）。认为货币应由所有人创造而不是来自债务：为公益做贡献可获得“主动基本收入”，每小时 20 GDD，每月最多 50 小时（1,000 GDD）。不用的钱每年减少 50%（每月约 5.61%）。运营方为奥地利的研发协会 Gradido Akademie International（在德国也设有分支）",
        "need": "通过推荐链接免费注册 Gradido 账户，申报公益贡献并领取 GDD",
        "caution": "官方 FAQ 称目前它是“感谢积分奖励系统”，并非加密货币。官方没有说明 GDD 能否兑换成欧元等货币。2026 年 10 月已亲自确认可在日本使用。通过推荐链接注册的人日后若向 Gradido 做出资金贡献（如捐款），推荐人会获得 GDT（Gradido Transform）（依据公开的钱包源代码）。仅注册不会得到奖励"
      },
      "hi": {
        "gain": "जनहित के हर घंटे के काम पर 20 GDD (महीने में ज़्यादा से ज़्यादा 1,000 GDD)",
        "note": "“प्राकृतिक अर्थव्यवस्था” कहलाने वाली एक मुद्रा व्यवस्था, जिसका नाम Gratitude (कृतज्ञता), Dignity (गरिमा) और Donation (दान) से बना है। पैसा कर्ज़ से नहीं, सब मिलकर बनाते हैं: जनहित के काम पर “एक्टिव बेसिक इनकम” के रूप में 20 GDD प्रति घंटा, महीने में 50 घंटे (1,000 GDD) तक मिलते हैं। बिना इस्तेमाल का पैसा साल में 50% (महीने में लगभग 5.61%) घटता है। इसे ऑस्ट्रिया का शोध और विकास संघ Gradido Akademie International चलाता है (जर्मनी में भी शाखा)",
        "need": "रेफ़रल लिंक से मुफ़्त Gradido अकाउंट बनाएँ, जनहित के योगदान दर्ज करें और GDD पाएँ",
        "caution": "आधिकारिक FAQ के अनुसार अभी यह “धन्यवाद पॉइंट इनाम व्यवस्था” है और क्रिप्टोकरेंसी नहीं है। GDD को यूरो या दूसरे पैसे में बदलने की कोई आधिकारिक जानकारी नहीं है। अक्टूबर 2026 में खुद आज़माकर पुष्टि हुई कि यह जापान से चलता है। रेफ़रल लिंक से जुड़ा व्यक्ति अगर बाद में Gradido को आर्थिक योगदान (जैसे दान) देता है, तो रेफ़र करने वाले को GDT (Gradido Transform) मिलता है (सार्वजनिक वॉलेट सोर्स कोड के अनुसार)। सिर्फ़ साइन अप करने पर कोई बोनस नहीं है"
      },
      "es": {
        "gain": "20 GDD por hora de trabajo por el bien común (hasta 1.000 GDD al mes)",
        "note": "Un sistema monetario que se presenta como «economía natural», con nombre tomado de Gratitude (gratitud), Dignity (dignidad) y Donation (donación). El dinero lo crean todas las personas y no nace de la deuda: las aportaciones al bien común dan una «renta básica activa» de 20 GDD por hora, hasta 50 horas (1.000 GDD) al mes. El dinero sin usar se reduce un 50 % al año (en torno al 5,61 % al mes). Lo gestiona Gradido Akademie International, una asociación de investigación y desarrollo de Austria con sede también en Alemania",
        "need": "Crea gratis una cuenta Gradido con el enlace de referido, registra tus aportaciones al bien común y recibe GDD",
        "caution": "Según las preguntas frecuentes oficiales, por ahora es un sistema de puntos de agradecimiento y no una criptomoneda. No hay información oficial sobre cambiar GDD por euros u otro dinero. Se comprobó en persona que funciona desde Japón en octubre de 2026. Si alguien que se registró con un enlace de referido hace después una aportación económica a Gradido (como una donación), quien lo refirió recibe GDT (Gradido Transform), según el código fuente público del monedero. No hay bono solo por registrarse"
      },
      "de": {
        "gain": "20 GDD pro Stunde Gemeinwohl-Arbeit (bis zu 1.000 GDD im Monat)",
        "note": "Ein Geldsystem, das sich „Natürliche Ökonomie des Lebens“ nennt; der Name steht für Gratitude, Dignity und Donation (Dankbarkeit, Würde, Spende). Geld wird von allen geschöpft statt als Schuld: Beiträge zum Gemeinwohl bringen ein „aktives Grundeinkommen“ von 20 GDD pro Stunde, bis zu 50 Stunden (1.000 GDD) im Monat. Ungenutztes Geld schrumpft um 50 % pro Jahr (etwa 5,61 % pro Monat; Vergänglichkeit). Betrieben von der Gradido Akademie International, einem Forschungs- und Entwicklungsverein in Österreich mit Niederlassung in Deutschland",
        "need": "Über den Empfehlungslink kostenlos ein Gradido-Konto anlegen, deine Gemeinwohl-Beiträge eintragen und GDD erhalten",
        "caution": "Laut offizieller FAQ ist es derzeit ein Dankbarkeits-Punktesystem und keine Kryptowährung. Offizielle Angaben zum Tausch von GDD in Euro oder anderes Geld gibt es nicht. Im Oktober 2026 selbst bestätigt: aus Japan nutzbar. Wenn jemand, der sich über einen Empfehlungslink angemeldet hat, später finanziell zu Gradido beiträgt (z. B. durch eine Spende), bekommt die empfehlende Person laut öffentlichem Quellcode der Wallet GDT (Gradido Transform) gutgeschrieben. Für die reine Anmeldung gibt es keinen Bonus"
      },
      "ar": {
        "gain": "⁦20 GDD⁩ عن كل ساعة عمل للصالح العام (حتى ⁦1,000 GDD⁩ شهريًا)",
        "note": "نظام عملة يصف نفسه بأنه «اقتصاد طبيعي»، اسمه مأخوذ من الامتنان (⁦Gratitude⁩) والكرامة (⁦Dignity⁩) والتبرع (⁦Donation⁩). يرى أن المال يخلقه الجميع لا الدَّين: المساهمة في الصالح العام تمنح «دخلًا أساسيًا نشطًا» قدره ⁦20 GDD⁩ للساعة، حتى 50 ساعة (⁦1,000 GDD⁩) شهريًا. المال غير المستخدم يتناقص بنسبة 50% سنويًا (نحو 5.61% شهريًا). تديره ⁦Gradido Akademie International⁩، وهي جمعية بحث وتطوير في النمسا ولها فرع في ألمانيا",
        "need": "أنشئ حساب ⁦Gradido⁩ مجانًا عبر رابط الإحالة، وسجّل مساهماتك في الصالح العام واستلم ⁦GDD⁩",
        "caution": "تقول الأسئلة الشائعة الرسمية إنه حاليًا نظام نقاط شكر وليس عملة مشفرة. لا توجد معلومات رسمية عن تحويل ⁦GDD⁩ إلى يورو أو نقود أخرى. تأكدنا بالتجربة في أكتوبر 2026 أنه يعمل من اليابان. إذا قدّم من سجّل عبر رابط إحالة لاحقًا مساهمة مالية لـ⁦Gradido⁩ (كالتبرع)، يُضاف ⁦GDT (Gradido Transform)⁩ إلى حساب من أحاله، وفقًا للشيفرة المصدرية العامة للمحفظة. لا توجد مكافأة لمجرد التسجيل"
      }
    },
    {
      "id": "wowapp",
      "name": "WowApp",
      "cat": "app",
      "type": "loop",
      "global": true,
      "ease": 4,
      "official": "https://www.wowapp.com/",
      "code": "",
      "ref": "https://www.wowapp.com/w/eltociear/Ikko-Ashimine",
      "added": "2026-10-24",
      "checked": "2026-10",
      "trust": {
        "cash": "partial",
        "price": "na",
        "operator": "partial"
      },
      "verify": [
        {
          "method": "none"
        }
      ],
      "ja": {
        "gain": "毎日の利用やゲーム・買い物などで少額の報酬",
        "note": "チャット・通話アプリに、報酬のしくみを組み合わせたサービス。毎日の「UBI（デジタル収入）」の受け取り、ゲーム、オンラインショッピングのキャッシュバック、格安通話、デイリーオファーなどで報酬がたまり、出金するか、100か国以上の約2,000の慈善団体に寄付できる。招待した友だちなど自分のネットワークが活動すると、自分の報酬も増える。App Store の提供元は YouWowMe Limited で、2026年8月にも更新されている",
        "need": "紹介リンクから無料で登録し、アプリを毎日使う（日本からの利用は2026年10月に実際に確認）",
        "caution": "報酬は招待した人だけでなく、その先の人たちの活動にも応じて入る多段階（マルチレベル）型。第三者の情報では8段階とされるが、公式には確認できていない。1日あたりの額はごくわずかで、まとまった収入になるとは考えないほうがよい。PayPal への出金には最低額・手数料・連続利用日数などの条件があるとされるが、公式ヘルプは直接確認できなかった。App Store の評価は日本で3.2（167件、2026年10月）で、出金できないという声もある。運営会社の所在地は確認できていない"
      },
      "en": {
        "gain": "Small rewards for daily use, games, shopping and more",
        "note": "A chat and calling app combined with a rewards scheme. You collect rewards from a daily “UBI” (digital income), games, online shopping cashback, cheap calls and daily offers, then cash out or donate to around 2,000 charities in 100+ countries. Your rewards also grow when your network, such as friends you invited, is active. The App Store publisher is YouWowMe Limited, and the app was updated as recently as Aug 2026",
        "need": "Sign up free through the referral link and use the app every day (confirmed usable from Japan in Oct 2026, first-hand)",
        "caution": "Rewards come not only from people you invite but also from the people they bring in: a multi-level network. Third-party sources say 8 levels; this is not officially confirmed. Daily amounts are tiny, so do not expect meaningful income. Cash-outs to PayPal reportedly have a minimum, fees and a daily-streak requirement, but the official help pages could not be checked directly. App Store rating in Japan is 3.2 (167 ratings, Oct 2026), with some users reporting failed cash-outs. The operating company’s location is not confirmed"
      },
      "zh": {
        "gain": "每天使用、游戏、购物等可得少量奖励",
        "note": "把聊天、通话应用和奖励机制结合起来的服务。可通过每天的“UBI（数字收入）”、游戏、网购返现、低价通话、每日任务等累积奖励，然后提现，或捐给 100 多个国家约 2,000 家慈善机构。你邀请的朋友等自己的网络越活跃，你的奖励也越多。App Store 上的提供者为 YouWowMe Limited，2026 年 8 月仍有更新",
        "need": "通过推荐链接免费注册，每天使用应用（已于 2026 年 10 月亲自确认可在日本使用）",
        "caution": "奖励不仅来自你邀请的人，也来自他们再邀请的人，属于多层级（多层次）网络模式。第三方资料称有 8 层，但官方未能确认。每天的金额极少，不应把它当作可观的收入。据称提现到 PayPal 有最低金额、手续费和连续使用天数等条件，但未能直接查看官方帮助页面。日本 App Store 评分为 3.2（167 条，2026 年 10 月），也有用户反映无法提现。运营公司的所在地尚未确认"
      },
      "hi": {
        "gain": "रोज़ के इस्तेमाल, गेम, शॉपिंग आदि पर थोड़े इनाम",
        "note": "चैट और कॉलिंग ऐप के साथ इनाम की व्यवस्था। रोज़ की “UBI” (डिजिटल आय), गेम, ऑनलाइन शॉपिंग कैशबैक, सस्ती कॉल और रोज़ के ऑफ़र से इनाम जमा होते हैं, जिन्हें निकाला जा सकता है या 100+ देशों की करीब 2,000 चैरिटी को दान किया जा सकता है। आपके बुलाए दोस्त जैसे आपके नेटवर्क के सक्रिय होने पर आपका इनाम भी बढ़ता है। App Store पर प्रकाशक YouWowMe Limited है, और ऐप अगस्त 2026 में भी अपडेट हुआ",
        "need": "रेफ़रल लिंक से मुफ़्त साइन अप करें और रोज़ ऐप इस्तेमाल करें (अक्टूबर 2026 में खुद आज़माकर जापान से चलने की पुष्टि)",
        "caution": "इनाम सिर्फ़ आपके बुलाए लोगों से नहीं, बल्कि उनके आगे जुड़े लोगों की गतिविधि से भी आता है: यानी मल्टी-लेवल नेटवर्क। तीसरे पक्ष के स्रोत 8 लेवल बताते हैं; आधिकारिक पुष्टि नहीं हुई। रोज़ की रकम बहुत कम है, इसलिए इसे अच्छी आय न समझें। PayPal पर निकासी के लिए न्यूनतम रकम, फ़ीस और लगातार इस्तेमाल के दिनों की शर्तें बताई जाती हैं, पर आधिकारिक सहायता पेज सीधे नहीं देखे जा सके। जापान के App Store में रेटिंग 3.2 है (167 रेटिंग, अक्टूबर 2026), और कुछ लोगों ने निकासी न हो पाने की शिकायत की है। ऑपरेटर कंपनी का स्थान पुष्ट नहीं है"
      },
      "es": {
        "gain": "Pequeñas recompensas por usarla a diario, jugar, comprar y más",
        "note": "Una app de chat y llamadas combinada con un sistema de recompensas. Acumulas recompensas con una «UBI» diaria (ingreso digital), juegos, reembolsos por compras online, llamadas baratas y ofertas diarias, y luego las retiras o las donas a unas 2.000 organizaciones benéficas de más de 100 países. Tus recompensas también crecen cuando tu red, como los amigos que invitaste, está activa. En la App Store la publica YouWowMe Limited, y se actualizó todavía en agosto de 2026",
        "need": "Regístrate gratis con el enlace de referido y usa la app cada día (se comprobó en persona que funciona desde Japón en octubre de 2026)",
        "caution": "Las recompensas no solo vienen de las personas que invitas, sino también de las que invitan ellas: es una red multinivel. Fuentes externas hablan de 8 niveles; no está confirmado oficialmente. Las cantidades diarias son mínimas, así que no esperes un ingreso significativo. Al parecer, los retiros a PayPal tienen mínimo, comisiones y un requisito de días seguidos de uso, pero no se pudieron consultar directamente las páginas de ayuda oficiales. En la App Store de Japón tiene una nota de 3,2 (167 valoraciones, octubre de 2026), y algunos usuarios dicen que no pudieron retirar. No está confirmada la ubicación de la empresa"
      },
      "de": {
        "gain": "Kleine Belohnungen für tägliche Nutzung, Spiele, Einkäufe und mehr",
        "note": "Eine Chat- und Telefonie-App mit Belohnungssystem. Du sammelst Belohnungen über ein tägliches „Grundeinkommen“ (digitales Einkommen), Spiele, Cashback beim Online-Einkauf, günstige Anrufe und tägliche Angebote und lässt sie dir auszahlen oder spendest sie an rund 2.000 Hilfsorganisationen in über 100 Ländern. Deine Belohnungen wachsen auch, wenn dein Netzwerk, etwa von dir eingeladene Freunde, aktiv ist. Herausgeber im App Store ist YouWowMe Limited, und die App wurde zuletzt im August 2026 aktualisiert",
        "need": "Über den Empfehlungslink kostenlos anmelden und die App jeden Tag nutzen (im Oktober 2026 selbst bestätigt: aus Japan nutzbar)",
        "caution": "Belohnungen kommen nicht nur von Menschen, die du einlädst, sondern auch von denen, die diese wiederum einladen: ein mehrstufiges Netzwerk (Multi-Level). Drittquellen sprechen von 8 Stufen; offiziell bestätigt ist das nicht. Die Tagesbeträge sind winzig, erwarte also kein nennenswertes Einkommen. Auszahlungen an PayPal haben angeblich einen Mindestbetrag, Gebühren und eine Bedingung für tägliche Nutzung in Folge, die offiziellen Hilfeseiten ließen sich aber nicht direkt prüfen. Bewertung im japanischen App Store: 3,2 (167 Bewertungen, Oktober 2026), einige berichten von gescheiterten Auszahlungen. Der Sitz der Betreiberfirma ist nicht bestätigt"
      },
      "ar": {
        "gain": "مكافآت صغيرة مقابل الاستخدام اليومي والألعاب والتسوق وغيرها",
        "note": "تطبيق دردشة واتصال مع نظام مكافآت. تجمع المكافآت من «دخل أساسي» رقمي يومي، والألعاب، واسترداد نقدي من التسوق عبر الإنترنت، ومكالمات رخيصة، وعروض يومية، ثم تسحبها أو تتبرع بها لنحو 2,000 جمعية خيرية في أكثر من 100 دولة. تزيد مكافآتك أيضًا عندما تنشط شبكتك، مثل الأصدقاء الذين دعوتهم. الناشر في ⁦App Store⁩ هو ⁦YouWowMe Limited⁩، وقد حُدّث التطبيق حتى أغسطس 2026",
        "need": "سجّل مجانًا عبر رابط الإحالة واستخدم التطبيق يوميًا (تأكدنا بالتجربة في أكتوبر 2026 أنه يعمل من اليابان)",
        "caution": "لا تأتي المكافآت ممن تدعوهم فقط، بل أيضًا ممن يدعونهم بدورهم: أي شبكة متعددة المستويات. تذكر مصادر خارجية 8 مستويات، ولم يتأكد ذلك رسميًا. المبالغ اليومية ضئيلة جدًا، فلا تتوقع دخلًا يُعتد به. يُقال إن السحب إلى ⁦PayPal⁩ يتطلب حدًا أدنى ورسومًا وعددًا من أيام الاستخدام المتتالية، لكن تعذّر الاطلاع على صفحات المساعدة الرسمية مباشرة. تقييمه في متجر ⁦App Store⁩ الياباني 3.2 (167 تقييمًا، أكتوبر 2026)، ويشكو بعض المستخدمين من تعذر السحب. موقع الشركة المشغّلة غير مؤكد"
      }
    },
    {
      "id": "humad",
      "name": "Humad（World App）",
      "nameEn": "Humad (World App)",
      "cat": "pointsite",
      "type": "loop",
      "global": false,
      "ease": 3,
      "official": "https://world.org/ja-jp/ecosystem/app_4969dec23e1fb4a7065935614a86d1e1",
      "code": "",
      "ref": "",
      "noRef": true,
      "added": "2026-10-26",
      "checked": "2026-10",
      "trust": {
        "cash": "partial",
        "price": "na",
        "operator": "yes"
      },
      "verify": [
        {
          "method": "world-id"
        }
      ],
      "ja": {
        "gain": "広告のタップや質問への回答でポイント（1,500pt＝150円分からギフト券に交換）",
        "note": "World App の中で動くミニアプリ。好きな広告をタップしたり、興味や価値観についての質問に答えたりするとポイントがたまり、カフェ・スイーツ、フードデリバリー、映画、ECサイト、アプリストアなどのギフト券に交換できる。World ID で人間証明をすると広告タップのポイントが6倍になり、デイリークエスチョンに答えると最大1,000ptが当たるルーレットにも参加できる。運営は博報堂DYホールディングス100%出資の株式会社Ads for Humanity（東京・赤坂）で、2026年8月7日にベータ版を公開。World の掲載ページでの利用者は約2.5万人（2026年10月）。紹介リンクや紹介特典は見つからなかった",
        "need": "World App でミニアプリ Humad を開いて使う。ギフト券への交換には、Orb で認証した World ID での人間証明が必要",
        "caution": "ポイントは現金ではなくギフト券にしか交換できず、交換後の取り消しはできない。日本で使える日本限定のサービス（プレスリリースでも日本国内からのアクセスに限定とされている）。ベータ版なので、内容が変わることがある。広告の配信には、回答や連携したデータが使われる"
      },
      "en": {
        "gain": "Points for tapping ads and answering questions (gift cards from 1,500 pt = ¥150)",
        "note": "A mini app inside World App. Tap ads you like and answer questions about your interests and values to collect points, then exchange them for gift cards for cafés and sweets, food delivery, movies, online shops, app stores and more. Proving you are human with World ID multiplies ad-tap points by 6, and answering the daily question enters you in a roulette worth up to 1,000 pt. Run by Ads for Humanity Inc. (Akasaka, Tokyo), wholly owned by Hakuhodo DY Holdings; the beta launched on 7 Aug 2026. About 25,000 users (World’s listing page, Oct 2026). No referral link or referral bonus was found",
        "need": "Open the Humad mini app in World App. Exchanging points for gift cards requires proof of human with an Orb-verified World ID",
        "caution": "Points can only be exchanged for gift cards, not cash, and exchanges cannot be undone. Available in Japan and Japan-only (the press release also says access is limited to Japan). It is a beta, so details may change. Your answers and linked data are used to target ads"
      },
      "zh": {
        "gain": "点击广告、回答问题可得积分（1,500 积分＝150 日元起可换礼品卡）",
        "note": "在 World App 内运行的小程序。点击喜欢的广告、回答关于兴趣和价值观的问题即可积累积分，可兑换咖啡甜点、外卖、电影、电商、应用商店等礼品卡。用 World ID 完成真人证明后，点击广告的积分变为 6 倍；回答每日问题还可参加最高 1,000 积分的转盘。运营方为博报堂 DY 控股全资子公司 Ads for Humanity 株式会社（东京赤坂），2026 年 8 月 7 日推出测试版。World 介绍页显示用户约 2.5 万（2026 年 10 月）。未找到推荐链接或推荐奖励",
        "need": "在 World App 中打开 Humad 小程序使用。兑换礼品卡需要用经 Orb 验证的 World ID 完成真人证明",
        "caution": "积分只能兑换礼品卡，不能换现金，兑换后无法撤销。可在日本使用，且仅限日本（新闻稿也称仅限日本国内访问）。目前为测试版，内容可能变化。你的回答和关联的数据会被用于投放广告"
      },
      "hi": {
        "gain": "विज्ञापन टैप करने और सवालों के जवाब देने पर पॉइंट (1,500 pt = ¥150 से गिफ़्ट कार्ड)",
        "note": "World App के अंदर चलने वाला मिनी ऐप। पसंद के विज्ञापन टैप करें और अपनी रुचियों व मूल्यों से जुड़े सवालों के जवाब दें, पॉइंट जमा करें और उन्हें कैफ़े-मिठाई, फ़ूड डिलीवरी, फ़िल्म, ऑनलाइन शॉप, ऐप स्टोर आदि के गिफ़्ट कार्ड से बदलें। World ID से इंसान साबित करने पर विज्ञापन टैप के पॉइंट 6 गुना हो जाते हैं, और रोज़ के सवाल का जवाब देने पर 1,000 pt तक की रूलेट में हिस्सा मिलता है। इसे Hakuhodo DY Holdings की पूर्ण स्वामित्व वाली Ads for Humanity Inc. (अकासाका, टोक्यो) चलाती है; बीटा 7 अगस्त 2026 को शुरू हुआ। लगभग 25,000 यूज़र (World का लिस्टिंग पेज, अक्टूबर 2026)। कोई रेफ़रल लिंक या रेफ़रल बोनस नहीं मिला",
        "need": "World App में Humad मिनी ऐप खोलकर इस्तेमाल करें। पॉइंट को गिफ़्ट कार्ड में बदलने के लिए Orb से वेरिफ़ाई की गई World ID से इंसान होने का सबूत चाहिए",
        "caution": "पॉइंट सिर्फ़ गिफ़्ट कार्ड में बदलते हैं, नकद में नहीं, और बदलने के बाद रद्द नहीं होते। यह जापान में उपलब्ध है और सिर्फ़ जापान के लिए है (प्रेस रिलीज़ में भी पहुँच सिर्फ़ जापान के अंदर से बताई गई है)। यह बीटा है, इसलिए चीज़ें बदल सकती हैं। आपके जवाब और जोड़ा गया डेटा विज्ञापन दिखाने में इस्तेमाल होता है"
      },
      "es": {
        "gain": "Puntos por tocar anuncios y responder preguntas (tarjetas regalo desde 1.500 pt = 150 ¥)",
        "note": "Una mini app dentro de World App. Toca los anuncios que te gusten y responde preguntas sobre tus intereses y valores para sumar puntos, y cámbialos por tarjetas regalo de cafeterías y dulces, comida a domicilio, cine, tiendas online, tiendas de apps y más. Si demuestras que eres humano con World ID, los puntos por anuncio se multiplican por 6, y al responder la pregunta del día entras en una ruleta de hasta 1.000 pt. La gestiona Ads for Humanity Inc. (Akasaka, Tokio), filial al 100 % de Hakuhodo DY Holdings; la beta salió el 7 de agosto de 2026. Unos 25.000 usuarios (página de World, octubre de 2026). No se encontró enlace ni bono de referido",
        "need": "Abre la mini app Humad en World App. Para cambiar puntos por tarjetas regalo hace falta demostrar que eres humano con un World ID verificado con Orb",
        "caution": "Los puntos solo se cambian por tarjetas regalo, no por dinero, y el canje no se puede deshacer. Disponible en Japón y solo para Japón (el comunicado de prensa también limita el acceso a Japón). Es una beta, así que puede cambiar. Tus respuestas y los datos que vincules se usan para mostrarte anuncios"
      },
      "de": {
        "gain": "Punkte fürs Antippen von Werbung und Beantworten von Fragen (Geschenkkarten ab 1.500 Pkt. = 150 Yen)",
        "note": "Eine Mini-App in der World App. Tipp Werbung an, die dir gefällt, und beantworte Fragen zu deinen Interessen und Werten, um Punkte zu sammeln, und tausch sie gegen Geschenkkarten für Cafés und Süßes, Essenslieferung, Kino, Onlineshops, App-Stores und mehr. Wenn du mit World ID nachweist, dass du ein Mensch bist, gibt es für das Antippen von Werbung 6-mal so viele Punkte, und mit der täglichen Frage nimmst du an einem Glücksrad mit bis zu 1.000 Pkt. teil. Betrieben von der Ads for Humanity Inc. (Akasaka, Tokio), einer 100-prozentigen Tochter der Hakuhodo DY Holdings; die Beta startete am 7. August 2026. Rund 25.000 Nutzer (Eintrag bei World, Oktober 2026). Ein Empfehlungslink oder -bonus wurde nicht gefunden",
        "need": "Die Mini-App Humad in der World App öffnen. Zum Eintauschen in Geschenkkarten brauchst du einen Menschlichkeitsnachweis mit einer per Orb verifizierten World ID",
        "caution": "Punkte lassen sich nur gegen Geschenkkarten tauschen, nicht gegen Geld, und ein Tausch kann nicht rückgängig gemacht werden. In Japan verfügbar und nur für Japan (auch laut Pressemitteilung ist der Zugang auf Japan beschränkt). Es ist eine Beta, Details können sich also ändern. Deine Antworten und verknüpften Daten werden für Werbung genutzt"
      },
      "ar": {
        "gain": "نقاط مقابل النقر على الإعلانات والإجابة عن الأسئلة (بطاقات هدايا بدءًا من ⁦1,500 pt⁩ = 150 ين)",
        "note": "تطبيق مصغّر داخل ⁦World App⁩. انقر على الإعلانات التي تعجبك وأجب عن أسئلة حول اهتماماتك وقيمك لتجمع النقاط، ثم استبدلها ببطاقات هدايا للمقاهي والحلويات وتوصيل الطعام والسينما والمتاجر الإلكترونية ومتاجر التطبيقات وغيرها. إثبات أنك إنسان عبر ⁦World ID⁩ يضاعف نقاط النقر على الإعلانات 6 مرات، والإجابة عن سؤال اليوم تتيح لك عجلة حظ تصل إلى ⁦1,000 pt⁩. تديره ⁦Ads for Humanity Inc.⁩ (أكاساكا، طوكيو)، المملوكة بالكامل لـ⁦Hakuhodo DY Holdings⁩، وأُطلقت النسخة التجريبية في 7 أغسطس 2026. نحو 25 ألف مستخدم (صفحة ⁦World⁩، أكتوبر 2026). لم نجد رابط إحالة ولا مكافأة إحالة",
        "need": "افتح تطبيق ⁦Humad⁩ المصغّر في ⁦World App⁩. استبدال النقاط ببطاقات الهدايا يتطلب إثبات أنك إنسان عبر ⁦World ID⁩ موثَّق بـ⁦Orb⁩",
        "caution": "لا تُستبدل النقاط إلا ببطاقات هدايا وليس بنقود، ولا يمكن التراجع عن الاستبدال. متاح في اليابان ومقتصر عليها (ويذكر البيان الصحفي أيضًا أن الوصول مقتصر على اليابان). إنه إصدار تجريبي، لذا قد تتغير التفاصيل. تُستخدم إجاباتك والبيانات التي تربطها لاستهداف الإعلانات"
      }
    },
    {
      "id": "billions",
      "name": "Billions",
      "cat": "crypto-bi",
      "type": "loop",
      "global": true,
      "ease": 3,
      "official": "https://billions.network/",
      "code": "",
      "ref": "https://official.app/rc/ECMHPWI7AG",
      "added": "2026-10-26",
      "checked": "2026-10",
      "trust": {
        "cash": "unknown",
        "price": "yes",
        "operator": "yes"
      },
      "verify": [
        {
          "method": "face"
        },
        {
          "method": "passport-nfc"
        }
      ],
      "ja": {
        "gain": "Power ポイント（認証・友だち紹介・参加で貯まる）",
        "note": "スマホと身分証で「本物の人間」であることを証明するデジタルIDアプリ。認証や友だちの紹介、ネットワークへの参加で Power ポイントが貯まり、特典の解放に使えると説明されている。Polygon ID・Privado ID を手がけたチームによるもので、独自の暗号資産 $BILL は Coinbase や Kraken などに上場している。App Store の提供元は ZKID Labs AG（2026年6月に更新）。公称の認証済みユーザーは250万人以上",
        "need": "紹介リンクから登録し、顔のライブネスチェック、またはNFC対応のパスポートで認証する（日本からの利用は2026年10月に実際に確認）",
        "caution": "Power ポイントを $BILL や現金に交換できるか、どう交換されるかは公式に書かれていない。紹介した人が認証されると紹介した側に Power が入り、その人がさらに紹介した分の一部も入るとする情報があるが、公式ページでは確認できていない（紹介された側の特典も不明）。$BILL は2026年5月の最高値 約0.23ドルから大きく下がり、2026年10月時点で約0.006ドル。App Store の評価は低く（日本2.5、米国2.7）、「報酬が出ない」「動作が不安定」という声もある。顔やパスポートの情報を扱うので、プライバシーの扱いを確認してから使いたい"
      },
      "en": {
        "gain": "Power points (for verifying, referring friends and taking part)",
        "note": "A digital ID app that proves you are a real human using your phone and an ID document. Verifying, referring friends and taking part in the network earn Power points, which the app says unlock rewards. Built by the team behind Polygon ID and Privado ID; its own token, $BILL, is listed on Coinbase, Kraken and others. The App Store publisher is ZKID Labs AG (updated June 2026). It claims 2.5M+ verified users",
        "need": "Sign up through the referral link and verify with a face liveness check or an NFC passport (confirmed usable from Japan in Oct 2026, first-hand)",
        "caution": "Whether or how Power points convert to $BILL or cash is not stated officially. Third-party sources say the referrer earns Power when a referred person gets verified, plus a share of what that person’s own referrals bring; this could not be confirmed on official pages (any bonus for the new user is also unknown). $BILL has fallen from its May 2026 high of about $0.23 to about $0.006 as of Oct 2026. App Store ratings are low (2.5 in Japan, 2.7 in the US), with complaints of no rewards and instability. It handles your face and passport data, so check its privacy terms first"
      },
      "zh": {
        "gain": "Power 积分（通过验证、邀请好友和参与积累）",
        "note": "用手机和身份证件证明你是“真人”的数字身份应用。完成验证、邀请好友和参与网络活动可积累 Power 积分，官方称可用来解锁奖励。由曾打造 Polygon ID 和 Privado ID 的团队开发，自有代币 $BILL 已在 Coinbase、Kraken 等交易所上市。App Store 提供者为 ZKID Labs AG（2026 年 6 月更新）。官方称已验证用户超过 250 万",
        "need": "通过推荐链接注册，并用人脸活体检测或支持 NFC 的护照完成验证（已于 2026 年 10 月亲自确认可在日本使用）",
        "caution": "官方没有说明 Power 积分能否、以及如何兑换成 $BILL 或现金。有第三方资料称，被邀请人完成验证后邀请人可获得 Power，并能从对方再邀请的人中获得一部分，但官方页面未能确认（被邀请人有无奖励也不清楚）。$BILL 从 2026 年 5 月约 0.23 美元的高点大幅下跌，2026 年 10 月约为 0.006 美元。App Store 评分偏低（日本 2.5，美国 2.7），也有“没有奖励”“不稳定”的评价。它会处理你的人脸和护照信息，使用前请先确认隐私条款"
      },
      "hi": {
        "gain": "Power पॉइंट (वेरिफ़िकेशन, दोस्तों को रेफ़र करने और भागीदारी पर)",
        "note": "फ़ोन और पहचान पत्र से यह साबित करने वाला डिजिटल ID ऐप कि आप असली इंसान हैं। वेरिफ़ाई करने, दोस्तों को रेफ़र करने और नेटवर्क में भाग लेने पर Power पॉइंट मिलते हैं, जिनसे ऐप के अनुसार इनाम अनलॉक होते हैं। इसे Polygon ID और Privado ID बनाने वाली टीम ने बनाया है; इसका अपना टोकन $BILL Coinbase, Kraken आदि पर लिस्टेड है। App Store पर प्रकाशक ZKID Labs AG है (जून 2026 में अपडेट)। 25 लाख से ज़्यादा वेरिफ़ाइड यूज़र का दावा",
        "need": "रेफ़रल लिंक से साइन अप करें और फ़ेस लाइवनेस चेक या NFC पासपोर्ट से वेरिफ़ाई करें (अक्टूबर 2026 में खुद आज़माकर जापान से चलने की पुष्टि)",
        "caution": "Power पॉइंट $BILL या नकद में बदलते हैं या नहीं, और कैसे, यह आधिकारिक रूप से नहीं बताया गया। तीसरे पक्ष के स्रोतों के अनुसार रेफ़र किए गए व्यक्ति के वेरिफ़ाई होने पर रेफ़र करने वाले को Power मिलता है, साथ ही उस व्यक्ति के आगे के रेफ़रल का हिस्सा भी; आधिकारिक पेजों पर इसकी पुष्टि नहीं हुई (नए यूज़र को कोई बोनस मिलता है या नहीं, यह भी पता नहीं)। $BILL मई 2026 के लगभग $0.23 के उच्च स्तर से गिरकर अक्टूबर 2026 में लगभग $0.006 पर है। App Store रेटिंग कम है (जापान 2.5, अमेरिका 2.7), और इनाम न मिलने व अस्थिरता की शिकायतें हैं। यह आपके चेहरे और पासपोर्ट का डेटा संभालता है, इसलिए पहले इसकी गोपनीयता शर्तें देख लें"
      },
      "es": {
        "gain": "Puntos Power (por verificarte, invitar a amigos y participar)",
        "note": "Una app de identidad digital que demuestra que eres una persona real con el móvil y un documento de identidad. Al verificarte, invitar a amigos y participar en la red sumas puntos Power, que según la app desbloquean recompensas. La creó el equipo detrás de Polygon ID y Privado ID; su propio token, $BILL, cotiza en Coinbase, Kraken y otros. En la App Store la publica ZKID Labs AG (actualizada en junio de 2026). Dice tener más de 2,5 millones de usuarios verificados",
        "need": "Regístrate con el enlace de referido y verifícate con una prueba de vida facial o un pasaporte con NFC (se comprobó en persona que funciona desde Japón en octubre de 2026)",
        "caution": "No se indica oficialmente si los puntos Power se pueden cambiar por $BILL o dinero, ni cómo. Fuentes externas dicen que quien invita gana Power cuando la persona invitada se verifica, más una parte de lo que aporten las invitaciones de esa persona; no se pudo confirmar en las páginas oficiales (tampoco se sabe si el nuevo usuario recibe algo). $BILL ha caído desde su máximo de mayo de 2026, unos 0,23 $, hasta unos 0,006 $ en octubre de 2026. Las valoraciones en la App Store son bajas (2,5 en Japón, 2,7 en EE. UU.), con quejas de que no paga y de que falla. Maneja datos de tu cara y tu pasaporte, así que revisa antes su política de privacidad"
      },
      "de": {
        "gain": "Power-Punkte (fürs Verifizieren, Werben von Freunden und Mitmachen)",
        "note": "Eine App für digitale Identität, mit der du per Handy und Ausweisdokument nachweist, dass du ein echter Mensch bist. Fürs Verifizieren, Werben von Freunden und Mitmachen im Netzwerk gibt es Power-Punkte, mit denen sich laut App Belohnungen freischalten lassen. Entwickelt vom Team hinter Polygon ID und Privado ID; der eigene Token $BILL ist unter anderem bei Coinbase und Kraken gelistet. Herausgeber im App Store ist die ZKID Labs AG (Update im Juni 2026). Nach eigenen Angaben über 2,5 Mio. verifizierte Nutzer",
        "need": "Über den Empfehlungslink anmelden und dich per Gesichts-Lebendprüfung oder NFC-Reisepass verifizieren (im Oktober 2026 selbst bestätigt: aus Japan nutzbar)",
        "caution": "Ob und wie Power-Punkte in $BILL oder Geld umgewandelt werden, steht offiziell nirgends. Laut Drittquellen bekommt die werbende Person Power, wenn eine geworbene Person sich verifiziert, plus einen Anteil dessen, was deren eigene Empfehlungen bringen; auf offiziellen Seiten ließ sich das nicht bestätigen (ob Neue etwas bekommen, ist ebenfalls unklar). $BILL ist vom Hoch im Mai 2026 bei etwa 0,23 $ auf rund 0,006 $ im Oktober 2026 gefallen. Die App-Store-Bewertungen sind niedrig (2,5 in Japan, 2,7 in den USA), mit Beschwerden über ausbleibende Belohnungen und Instabilität. Die App verarbeitet Gesichts- und Passdaten, prüf also vorher die Datenschutzbestimmungen"
      },
      "ar": {
        "gain": "نقاط ⁦Power⁩ (مقابل التحقق ودعوة الأصدقاء والمشاركة)",
        "note": "تطبيق هوية رقمية يثبت أنك إنسان حقيقي باستخدام هاتفك ووثيقة هوية. تمنحك عمليات التحقق ودعوة الأصدقاء والمشاركة في الشبكة نقاط ⁦Power⁩، ويقول التطبيق إنها تفتح مكافآت. طوّره الفريق الذي أنشأ ⁦Polygon ID⁩ و⁦Privado ID⁩، ورمزه الخاص ⁦$BILL⁩ مدرج في ⁦Coinbase⁩ و⁦Kraken⁩ وغيرها. الناشر في ⁦App Store⁩ هو ⁦ZKID Labs AG⁩ (حُدّث في يونيو 2026). يقول إن لديه أكثر من 2.5 مليون مستخدم موثَّق",
        "need": "سجّل عبر رابط الإحالة وتحقق بفحص حيوية الوجه أو بجواز سفر يدعم ⁦NFC⁩ (تأكدنا بالتجربة في أكتوبر 2026 أنه يعمل من اليابان)",
        "caution": "لا يُذكر رسميًا هل تتحول نقاط ⁦Power⁩ إلى ⁦$BILL⁩ أو إلى نقود، ولا كيف. تقول مصادر خارجية إن الداعي يحصل على ⁦Power⁩ عندما يتحقق الشخص المدعو، إضافة إلى جزء مما تجلبه دعوات ذلك الشخص، لكن لم نتمكن من تأكيد ذلك في الصفحات الرسمية (ولا يُعرف إن كان للمستخدم الجديد مكافأة). هبط ⁦$BILL⁩ من ذروته في مايو 2026 عند نحو ⁦$0.23⁩ إلى نحو ⁦$0.006⁩ في أكتوبر 2026. تقييمات ⁦App Store⁩ منخفضة (2.5 في اليابان، 2.7 في الولايات المتحدة)، مع شكاوى من عدم صرف المكافآت ومن عدم الاستقرار. يتعامل التطبيق مع بيانات وجهك وجواز سفرك، فراجع شروط الخصوصية أولًا"
      }
    },
    {
      "id": "idena",
      "name": "Idena（iDNA）",
      "nameEn": "Idena (iDNA)",
      "cat": "crypto-bi",
      "type": "loop",
      "global": true,
      "ease": 1,
      "official": "https://www.idena.io/",
      "code": "",
      "ref": "",
      "noRef": true,
      "added": "2026-10-26",
      "checked": "2026-10",
      "trust": {
        "cash": "partial",
        "price": "yes",
        "operator": "partial"
      },
      "verify": [
        {
          "method": "ceremony"
        },
        {
          "method": "web-of-trust"
        }
      ],
      "ja": {
        "gain": "iDNA（ノードを動かしている間のマイニング報酬と、認証セッションの報酬）",
        "note": "「一人一票」の仕組みで人間であることを証明する、Proof of Person 型のブロックチェーン。世界中で同時に行われる「認証セレモニー」でFLIPと呼ばれる絵のパズルを解いて認証される。2026年10月は5日ごとに開かれ、開始は15:00 UTC（日本時間の深夜0時）。認証されると、ノードを動かしている間は iDNA のマイニング報酬がリアルタイムで入り、セッションごとの報酬もある。オープンソースのプロジェクトで、2026年10月24日のセレモニーでは159アカウントが対象になった。紹介リンクはない",
        "need": "公式 Telegram の案内に従って、認証済みメンバーか運営チームから無料の招待コードをもらう。Webアプリ（共有ノード経由でも可）か自分のノードで参加し、セレモニーの時間にオンラインで FLIP を解く（日本からの利用は2026年10月に実際に確認）",
        "caution": "決まった時刻（日本時間の深夜0時）にオンラインでいないと認証されず、手間がかかる。ネットワークはとても小さく、iDNA は1枚約0.0012ドル（2026年10月）。時価総額は約12万ドルで、CoinGecko で確認できた取引所は PancakeSwap（BSC）のみと流動性が低い。換金は取引所で売る形になる。招待コードを売買するのは禁止されていて、無料でもらうもの。報酬を他人の「プール」に任せると、相手がステークを持ち去れるので注意"
      },
      "en": {
        "gain": "iDNA (mining rewards while your node runs, plus validation rewards)",
        "note": "A proof-of-person blockchain built on “one person, one vote”. You prove you are human in a synchronized “validation ceremony” held worldwide at the same time, by solving picture puzzles called FLIPs. In Oct 2026 ceremonies were held every 5 days, starting at 15:00 UTC. Once validated, you earn iDNA mining rewards in real time while your node runs, plus rewards per session. It is an open-source project; 159 accounts took part in the 24 Oct 2026 ceremony. There is no referral link",
        "need": "Follow the pinned message in the official Telegram to get a free invitation code from a validated member or the Idena team. Join with the web app (a shared node works too) or your own node, and be online at ceremony time to solve FLIPs (confirmed usable from Japan in Oct 2026, first-hand)",
        "caution": "You must be online at a fixed time (midnight in Japan) or you will not be validated, so it takes effort. The network is very small: iDNA is about $0.0012 (Oct 2026), the market cap is about $120,000, and the only exchange CoinGecko shows is PancakeSwap (BSC), so liquidity is low. Cashing out means selling on an exchange. Invitation codes must not be bought or sold; they are free. If you delegate to someone else’s “pool”, the pool owner can take your stake"
      },
      "zh": {
        "gain": "iDNA（节点运行期间的挖矿奖励，以及验证奖励）",
        "note": "基于“一人一票”、证明你是真人的 Proof of Person 区块链。在全球同时举行的“验证仪式”中解开名为 FLIP 的图片谜题来完成验证。2026 年 10 月每 5 天举行一次，开始时间为 15:00 UTC。通过验证后，节点运行期间可实时获得 iDNA 挖矿奖励，每次验证还有奖励。这是开源项目，2026 年 10 月 24 日的仪式共有 159 个账户参加。没有推荐链接",
        "need": "按官方 Telegram 置顶消息的说明，向已验证成员或 Idena 团队免费索取邀请码。用网页应用（也可通过共享节点）或自己的节点参加，在仪式时间在线解 FLIP（已于 2026 年 10 月亲自确认可在日本使用）",
        "caution": "必须在固定时间（日本时间午夜）在线，否则无法通过验证，比较费事。网络规模很小：iDNA 约 0.0012 美元（2026 年 10 月），市值约 12 万美元，CoinGecko 上能确认的交易所只有 PancakeSwap（BSC），流动性很低。兑现需在交易所出售。邀请码禁止买卖，应免费获取。若把挖矿委托给他人的“矿池”，对方可能拿走你的质押"
      },
      "hi": {
        "gain": "iDNA (नोड चलते रहने तक माइनिंग इनाम, और वैलिडेशन इनाम)",
        "note": "“एक व्यक्ति, एक वोट” पर बना Proof of Person ब्लॉकचेन, जो साबित करता है कि आप इंसान हैं। दुनिया भर में एक साथ होने वाले “वैलिडेशन समारोह” में FLIP नाम की चित्र पहेलियाँ हल करके आप वैलिडेट होते हैं। अक्टूबर 2026 में यह हर 5 दिन पर 15:00 UTC से हुआ। वैलिडेट होने के बाद, नोड चलते रहने तक iDNA माइनिंग इनाम तुरंत मिलता है, साथ में हर सत्र का इनाम भी। यह ओपन-सोर्स प्रोजेक्ट है; 24 अक्टूबर 2026 के समारोह में 159 अकाउंट शामिल थे। कोई रेफ़रल लिंक नहीं है",
        "need": "आधिकारिक Telegram के पिन किए संदेश के अनुसार किसी वैलिडेटेड सदस्य या Idena टीम से मुफ़्त इनविटेशन कोड लें। वेब ऐप (शेयर्ड नोड से भी) या अपने नोड से जुड़ें, और समारोह के समय ऑनलाइन रहकर FLIP हल करें (अक्टूबर 2026 में खुद आज़माकर जापान से चलने की पुष्टि)",
        "caution": "तय समय (जापान में आधी रात) पर ऑनलाइन न होने पर वैलिडेशन नहीं होता, इसलिए मेहनत लगती है। नेटवर्क बहुत छोटा है: iDNA लगभग $0.0012 (अक्टूबर 2026), मार्केट कैप लगभग $1.2 लाख, और CoinGecko पर दिखने वाला एकमात्र एक्सचेंज PancakeSwap (BSC) है, इसलिए लिक्विडिटी कम है। नकद के लिए एक्सचेंज पर बेचना होता है। इनविटेशन कोड ख़रीदना-बेचना मना है; ये मुफ़्त हैं। किसी और के “पूल” को सौंपने पर पूल का मालिक आपका स्टेक ले सकता है"
      },
      "es": {
        "gain": "iDNA (recompensas de minado mientras tu nodo funciona, más recompensas de validación)",
        "note": "Una blockchain de «prueba de persona» basada en «una persona, un voto». Demuestras que eres humano en una «ceremonia de validación» sincronizada en todo el mundo, resolviendo acertijos de imágenes llamados FLIP. En octubre de 2026 las ceremonias fueron cada 5 días, a las 15:00 UTC. Una vez validado, ganas recompensas de minado en iDNA en tiempo real mientras tu nodo está activo, además de recompensas por sesión. Es un proyecto de código abierto; en la ceremonia del 24 de octubre de 2026 participaron 159 cuentas. No hay enlace de referido",
        "need": "Sigue el mensaje fijado del Telegram oficial para conseguir gratis un código de invitación de un miembro validado o del equipo de Idena. Participa con la app web (también vale un nodo compartido) o con tu propio nodo, y conéctate a la hora de la ceremonia para resolver FLIP (se comprobó en persona que funciona desde Japón en octubre de 2026)",
        "caution": "Si no estás conectado a una hora fija (medianoche en Japón) no te validan, así que requiere esfuerzo. La red es muy pequeña: iDNA vale unos 0,0012 $ (octubre de 2026), la capitalización ronda los 120.000 $ y el único exchange que muestra CoinGecko es PancakeSwap (BSC), así que hay poca liquidez. Para cobrar hay que vender en un exchange. Los códigos de invitación no se compran ni se venden: son gratis. Si delegas en el «pool» de otra persona, quien lo gestiona puede quedarse con tu stake"
      },
      "de": {
        "gain": "iDNA (Mining-Belohnungen, solange dein Node läuft, plus Validierungsbelohnungen)",
        "note": "Eine Proof-of-Person-Blockchain nach dem Prinzip „eine Person, eine Stimme“. Du weist in einer weltweit gleichzeitigen „Validierungszeremonie“ nach, dass du ein Mensch bist, indem du Bilderrätsel namens FLIPs löst. Im Oktober 2026 fanden die Zeremonien alle 5 Tage um 15:00 UTC statt. Nach der Validierung bekommst du in Echtzeit iDNA-Mining-Belohnungen, solange dein Node läuft, plus Belohnungen pro Sitzung. Es ist ein Open-Source-Projekt; an der Zeremonie vom 24. Oktober 2026 nahmen 159 Konten teil. Einen Empfehlungslink gibt es nicht",
        "need": "Laut angepinnter Nachricht im offiziellen Telegram einen kostenlosen Einladungscode von einem validierten Mitglied oder vom Idena-Team holen. Über die Web-App (auch mit Shared Node) oder einen eigenen Node teilnehmen und zur Zeremonie online sein, um FLIPs zu lösen (im Oktober 2026 selbst bestätigt: aus Japan nutzbar)",
        "caution": "Wer zur festen Uhrzeit (Mitternacht in Japan) nicht online ist, wird nicht validiert, das ist also aufwendig. Das Netzwerk ist sehr klein: iDNA kostet etwa 0,0012 $ (Oktober 2026), die Marktkapitalisierung liegt bei rund 120.000 $, und die einzige Börse, die CoinGecko zeigt, ist PancakeSwap (BSC), die Liquidität ist also gering. Auszahlen heißt an einer Börse verkaufen. Einladungscodes dürfen nicht gekauft oder verkauft werden, sie sind kostenlos. Wer an den „Pool“ einer anderen Person delegiert, riskiert, dass diese den Stake einbehält"
      },
      "ar": {
        "gain": "⁦iDNA⁩ (مكافآت تعدين ما دامت عقدتك تعمل، ومكافآت التحقق)",
        "note": "بلوكتشين من نوع «إثبات الشخص» يقوم على مبدأ «شخص واحد، صوت واحد». تثبت أنك إنسان في «مراسم تحقق» تُقام في الوقت نفسه حول العالم بحل ألغاز صور تُسمى ⁦FLIP⁩. في أكتوبر 2026 أُقيمت المراسم كل 5 أيام عند 15:00 بالتوقيت العالمي. بعد التحقق تحصل على مكافآت تعدين ⁦iDNA⁩ لحظيًا ما دامت عقدتك تعمل، إضافة إلى مكافآت كل جلسة. إنه مشروع مفتوح المصدر، وشارك 159 حسابًا في مراسم 24 أكتوبر 2026. لا يوجد رابط إحالة",
        "need": "اتبع الرسالة المثبتة في قناة ⁦Telegram⁩ الرسمية لتحصل مجانًا على رمز دعوة من عضو موثَّق أو من فريق ⁦Idena⁩. شارك عبر تطبيق الويب (ويصلح أيضًا عبر عقدة مشتركة) أو عقدتك الخاصة، وكن متصلًا وقت المراسم لحل ألغاز ⁦FLIP⁩ (تأكدنا بالتجربة في أكتوبر 2026 أنه يعمل من اليابان)",
        "caution": "إن لم تكن متصلًا في الوقت المحدد (منتصف الليل في اليابان) فلن يتم التحقق منك، لذا يتطلب جهدًا. الشبكة صغيرة جدًا: سعر ⁦iDNA⁩ نحو ⁦$0.0012⁩ (أكتوبر 2026) وقيمتها السوقية نحو 120 ألف دولار، والمنصة الوحيدة التي يعرضها ⁦CoinGecko⁩ هي ⁦PancakeSwap (BSC)⁩، فالسيولة ضعيفة. التحويل إلى نقود يعني البيع في منصة تداول. يُمنع بيع رموز الدعوة وشراؤها، فهي مجانية. إن فوّضت «مجمّعًا» لشخص آخر فقد يستولي صاحبه على حصتك"
      }
    },
    {
      "id": "rewardme",
      "name": "RewardMe",
      "cat": "app",
      "type": "loop",
      "global": true,
      "ease": 4,
      "official": "https://reward.me/",
      "code": "7HOdyg",
      "ref": "https://app.reward.me/s6hS/z8a4ajc1",
      "showCode": true,
      "added": "2026-10-26",
      "checked": "2026-10",
      "trust": {
        "cash": "partial",
        "price": "yes",
        "operator": "partial"
      },
      "verify": [
        {
          "method": "none"
        },
        {
          "method": "world-id",
          "optional": true
        }
      ],
      "ja": {
        "gain": "受信メールのレシートから最大5%のキャッシュバック（Reward Dollars／暗号資産MDT）",
        "note": "メールアカウントを連携しておくと、Amazon・Uber・DoorDash など100以上の対象店での買い物を受信メールのレシートから自動で見つけ、最大5%の報酬（Reward Dollars）がたまる。報酬はギフト券に交換するか、暗号資産 MDT（Coinbase などに上場）にして出金できる。紹介コードで登録すると登録特典があり、友だちが最初の報酬を得ると、紹介した側・された側の両方が紹介特典を受け取れる。App Store の提供元は Magic Crystal Limited（所在地は香港。2026年8月にも更新）",
        "need": "紹介リンクから登録し、登録時に紹介コード 7HOdyg を入力する。メールアカウントを連携して、対象のお店で買い物する（日本からの利用は2026年10月に実際に確認）",
        "caution": "しくみ上、連携したメールの中身（レシート・注文確認・請求などの商用メールと、件名・送信者などのデータ）が読み取られる。プライバシーポリシーでは、個人を特定できない形に加工したデータを、企業向けに「オルタナティブデータ」を提供する Measurable AI などに販売・共有すると書かれている。ギフト券への交換は承認まで7〜14営業日かかる（Orb認証済みの World ID を連携すると即時）。6か月使わないと残高が消えることがある。米国・中国本土などでは使えず、フィリピンからは2025年末に撤退した。登録特典と紹介特典の額は公式に書かれていない。MDT は2026年10月時点で約0.0067ドル"
      },
      "en": {
        "gain": "Up to 5% cashback found in your email receipts (Reward Dollars / MDT crypto)",
        "note": "Link your email account and it automatically finds purchases at 100+ merchants such as Amazon, Uber and DoorDash from the receipts in your inbox, crediting up to 5% in Reward Dollars. Redeem them for gift cards or convert to the MDT token (listed on Coinbase and others) and withdraw. Signing up with a referral code gives a sign-up reward, and once your friend earns a first shopping reward, both of you can claim referral rewards. The App Store publisher is Magic Crystal Limited (address in Hong Kong; updated as recently as Aug 2026)",
        "need": "Sign up through the referral link and enter the referral code 7HOdyg when you register. Link an email account and shop at eligible merchants (confirmed usable from Japan in Oct 2026, first-hand)",
        "caution": "By design it reads your linked inbox: commercial emails such as receipts, order confirmations and bills, plus data like subjects and senders. Its privacy policy says de-identified data is sold to or shared with partners such as Measurable AI, which provides “alternative data” to businesses. Gift-card redemptions take 7–14 business days to approve (instant with an Orb-verified World ID). Balances may be deleted after 6 months of inactivity. Not available in the US, mainland China and some other places, and it left the Philippines at the end of 2025. The sign-up and referral reward amounts are not stated officially. MDT was about $0.0067 in Oct 2026"
      },
      "zh": {
        "gain": "从收件箱的购物收据中自动获得最高 5% 返现（Reward Dollars／加密货币 MDT）",
        "note": "关联邮箱后，它会从收件箱的收据中自动找出你在 Amazon、Uber、DoorDash 等 100 多家商户的消费，返还最高 5% 的奖励（Reward Dollars）。奖励可兑换礼品卡，或转换为加密货币 MDT（已在 Coinbase 等上市）后提现。用推荐码注册可获得注册奖励；好友获得首笔购物奖励后，邀请人和被邀请人都能领取推荐奖励。App Store 提供者为 Magic Crystal Limited（地址在香港，2026 年 8 月仍有更新）",
        "need": "通过推荐链接注册，并在注册时输入推荐码 7HOdyg。关联邮箱，在合作商户购物（已于 2026 年 10 月亲自确认可在日本使用）",
        "caution": "按其机制，它会读取你关联邮箱的内容：收据、订单确认、账单等商业邮件，以及主题、发件人等数据。隐私政策称，会把去标识化的数据出售或分享给为企业提供“另类数据”的 Measurable AI 等合作方。兑换礼品卡需 7–14 个工作日审批（关联经 Orb 验证的 World ID 则即时）。连续 6 个月不用，余额可能被清除。美国、中国大陆等地无法使用，并已于 2025 年底退出菲律宾。注册奖励和推荐奖励的金额官方没有写明。MDT 在 2026 年 10 月约为 0.0067 美元"
      },
      "hi": {
        "gain": "ईमेल रसीदों से मिला ज़्यादा से ज़्यादा 5% कैशबैक (Reward Dollars / MDT क्रिप्टो)",
        "note": "अपना ईमेल अकाउंट जोड़ें, और यह इनबॉक्स की रसीदों से Amazon, Uber, DoorDash जैसे 100+ व्यापारियों पर आपकी ख़रीदारी अपने आप ढूँढकर 5% तक Reward Dollars देता है। इन्हें गिफ़्ट कार्ड में बदलें या MDT टोकन (Coinbase आदि पर लिस्टेड) में बदलकर निकालें। रेफ़रल कोड से साइन अप करने पर साइन-अप इनाम मिलता है, और आपके दोस्त को पहला शॉपिंग इनाम मिलने पर आप दोनों रेफ़रल इनाम ले सकते हैं। App Store पर प्रकाशक Magic Crystal Limited है (पता हांगकांग में; अगस्त 2026 में भी अपडेट)",
        "need": "रेफ़रल लिंक से साइन अप करें और रजिस्ट्रेशन के समय रेफ़रल कोड 7HOdyg डालें। ईमेल अकाउंट जोड़ें और योग्य दुकानों पर ख़रीदारी करें (अक्टूबर 2026 में खुद आज़माकर जापान से चलने की पुष्टि)",
        "caution": "अपनी बनावट के कारण यह आपका जोड़ा गया इनबॉक्स पढ़ता है: रसीद, ऑर्डर कन्फ़र्मेशन, बिल जैसे व्यावसायिक ईमेल, और विषय व भेजने वाले जैसा डेटा। इसकी प्राइवेसी पॉलिसी कहती है कि पहचान हटाया गया डेटा Measurable AI जैसे साझेदारों को बेचा या दिया जाता है, जो कंपनियों को “ऑल्टरनेटिव डेटा” देते हैं। गिफ़्ट कार्ड रिडेम्प्शन की मंज़ूरी में 7–14 कार्यदिवस लगते हैं (Orb से वेरिफ़ाई की गई World ID जोड़ने पर तुरंत)। 6 महीने इस्तेमाल न करने पर बैलेंस मिटाया जा सकता है। यह अमेरिका, मुख्य भूमि चीन और कुछ और जगहों पर उपलब्ध नहीं है, और 2025 के अंत में फ़िलीपींस से हट गया। साइन-अप और रेफ़रल इनाम की रकम आधिकारिक रूप से नहीं बताई गई। अक्टूबर 2026 में MDT लगभग $0.0067 था"
      },
      "es": {
        "gain": "Hasta un 5 % de reembolso a partir de los recibos de tu correo (Reward Dollars / cripto MDT)",
        "note": "Vincula tu cuenta de correo y la app detecta sola, en los recibos de tu bandeja de entrada, tus compras en más de 100 comercios como Amazon, Uber o DoorDash, y te abona hasta un 5 % en Reward Dollars. Puedes canjearlos por tarjetas regalo o pasarlos al token MDT (cotiza en Coinbase y otros) y retirarlos. Registrarte con un código de referido da un premio de registro, y cuando tu amigo obtiene su primera recompensa de compra, ambos podéis reclamar el premio por referido. En la App Store la publica Magic Crystal Limited (dirección en Hong Kong; actualizada en agosto de 2026)",
        "need": "Regístrate con el enlace de referido e introduce el código 7HOdyg al registrarte. Vincula una cuenta de correo y compra en comercios adheridos (se comprobó en persona que funciona desde Japón en octubre de 2026)",
        "caution": "Por cómo funciona, lee tu bandeja de entrada vinculada: correos comerciales como recibos, confirmaciones de pedido y facturas, además de datos como asuntos y remitentes. Su política de privacidad dice que vende o comparte datos desidentificados con socios como Measurable AI, que ofrece «datos alternativos» a empresas. Los canjes por tarjetas regalo tardan 7–14 días hábiles en aprobarse (al instante con un World ID verificado con Orb). El saldo puede borrarse tras 6 meses sin uso. No está disponible en EE. UU., China continental y otros lugares, y salió de Filipinas a finales de 2025. Los importes del premio de registro y por referido no se indican oficialmente. MDT valía unos 0,0067 $ en octubre de 2026"
      },
      "de": {
        "gain": "Bis zu 5 % Cashback aus Kaufbelegen in deinem Postfach (Reward Dollars / Krypto MDT)",
        "note": "Verknüpfe dein E-Mail-Konto, und die App findet in den Belegen in deinem Posteingang automatisch Einkäufe bei über 100 Händlern wie Amazon, Uber oder DoorDash und schreibt dir bis zu 5 % in Reward Dollars gut. Die kannst du gegen Geschenkkarten eintauschen oder in den Token MDT (u. a. bei Coinbase gelistet) umwandeln und auszahlen. Wer sich mit Empfehlungscode anmeldet, bekommt einen Anmeldebonus, und sobald dein Freund seine erste Einkaufsbelohnung erhält, könnt ihr beide die Empfehlungsprämie abholen. Herausgeber im App Store ist Magic Crystal Limited (Adresse in Hongkong; zuletzt im August 2026 aktualisiert)",
        "need": "Über den Empfehlungslink anmelden und bei der Registrierung den Empfehlungscode 7HOdyg eingeben. E-Mail-Konto verknüpfen und bei teilnehmenden Händlern einkaufen (im Oktober 2026 selbst bestätigt: aus Japan nutzbar)",
        "caution": "Systembedingt liest die App dein verknüpftes Postfach: geschäftliche Mails wie Belege, Bestellbestätigungen und Rechnungen sowie Daten wie Betreff und Absender. Laut Datenschutzerklärung werden de-identifizierte Daten an Partner wie Measurable AI verkauft oder weitergegeben, die Unternehmen „alternative Daten“ liefern. Das Einlösen von Geschenkkarten braucht 7–14 Werktage bis zur Freigabe (sofort mit einer per Orb verifizierten World ID). Nach 6 Monaten ohne Nutzung kann das Guthaben gelöscht werden. Nicht verfügbar in den USA, Festland-China und einigen weiteren Ländern; aus den Philippinen hat sich RewardMe Ende 2025 zurückgezogen. Die Höhe von Anmelde- und Empfehlungsbonus wird offiziell nicht genannt. MDT lag im Oktober 2026 bei etwa 0,0067 $"
      },
      "ar": {
        "gain": "استرداد نقدي حتى 5% من إيصالات الشراء في بريدك (⁦Reward Dollars⁩ / عملة ⁦MDT⁩ المشفرة)",
        "note": "اربط حساب بريدك الإلكتروني، فيعثر التطبيق تلقائيًا في إيصالات صندوق الوارد على مشترياتك من أكثر من 100 متجر مثل ⁦Amazon⁩ و⁦Uber⁩ و⁦DoorDash⁩، ويمنحك حتى 5% بـ⁦Reward Dollars⁩. يمكنك استبدالها ببطاقات هدايا أو تحويلها إلى رمز ⁦MDT⁩ (مدرج في ⁦Coinbase⁩ وغيرها) وسحبها. التسجيل برمز إحالة يمنح مكافأة تسجيل، وعندما يحصل صديقك على أول مكافأة شراء يمكنكما معًا المطالبة بمكافأة الإحالة. الناشر في ⁦App Store⁩ هو ⁦Magic Crystal Limited⁩ (العنوان في هونغ كونغ، وقد حُدّث حتى أغسطس 2026)",
        "need": "سجّل عبر رابط الإحالة وأدخل رمز الإحالة ⁦7HOdyg⁩ عند التسجيل. اربط حساب بريد إلكتروني وتسوّق من المتاجر المشمولة (تأكدنا بالتجربة في أكتوبر 2026 أنه يعمل من اليابان)",
        "caution": "بحكم طريقة عمله يقرأ صندوق بريدك المرتبط: الرسائل التجارية مثل الإيصالات وتأكيدات الطلب والفواتير، وبيانات مثل العناوين والمرسلين. تقول سياسة الخصوصية إن البيانات بعد إزالة ما يحدد الهوية تُباع أو تُشارك مع شركاء مثل ⁦Measurable AI⁩ التي تقدم «بيانات بديلة» للشركات. تستغرق الموافقة على استبدال بطاقات الهدايا 7–14 يوم عمل (فورًا مع ⁦World ID⁩ موثَّق بـ⁦Orb⁩). قد يُحذف الرصيد بعد 6 أشهر من عدم الاستخدام. غير متاح في الولايات المتحدة والبر الرئيسي للصين وأماكن أخرى، وانسحب من الفلبين في نهاية 2025. مبالغ مكافأة التسجيل والإحالة غير مذكورة رسميًا. كان سعر ⁦MDT⁩ نحو ⁦$0.0067⁩ في أكتوبر 2026"
      }
    },
    {
      "id": "fheid",
      "name": "FheID（Privasea）",
      "nameEn": "FheID (Privasea)",
      "cat": "crypto-bi",
      "type": "loop",
      "global": true,
      "ease": 3,
      "official": "https://www.privasea.ai/",
      "code": "QVedKjg",
      "ref": "https://www.privasea.ai/download-app",
      "codeOnly": true,
      "added": "2026-10-26",
      "checked": "2026-10",
      "trust": {
        "cash": "unknown",
        "price": "yes",
        "operator": "yes"
      },
      "verify": [
        {
          "method": "face"
        }
      ],
      "ja": {
        "gain": "人間証明でエアドロップや報酬（キャンペーンの「スター」など）",
        "note": "スマホのカメラで顔を読み取り、「本物の人間」であることを証明する Proof of Humanity アプリ。顔の特徴は端末の中で暗号化されたベクトルに変換され、完全準同型暗号（FHE）で処理されるため、元の画像は送られないと説明されている。認証すると人間証明のNFTが作られ、エアドロップや各アプリの報酬を受け取れる。運営は Privasea（App Store の提供元は Privasea AB、2026年5月にも更新）で、独自の暗号資産 PRAI は KuCoin や Gate などで取引されている",
        "need": "アプリ FheID を入れて招待コード QVedKjg を入力し、顔で人間証明をする（日本からの利用は2026年10月に実際に確認）",
        "caution": "今どんな報酬がどれくらいもらえるかは公式に書かれていない。公式の過去のキャンペーン（2024年）では、紹介で「スター」がたまり（3段階まで、1人あたり100・50・25スター）、エアドロップと交換できるしくみだった。招待コードをどこで入力するかや、紹介された側の特典は確認できていない。PRAI は2025年5月の最高値 約0.096ドルから大きく下がり、2026年10月時点で約0.0008ドル。顔の情報を扱うアプリなので、プライバシーの扱いを確認してから使いたい"
      },
      "en": {
        "gain": "Airdrops and rewards for proving you are human (e.g. campaign “stars”)",
        "note": "A proof-of-humanity app that scans your face with your phone camera to show you are a real person. It says your facial features are turned into encrypted vectors on the device and processed with fully homomorphic encryption (FHE), so the original images are not sent. Verifying creates a proof-of-human NFT and lets you receive airdrops and rewards across apps. Run by Privasea (App Store publisher Privasea AB, updated as recently as May 2026); its token PRAI trades on KuCoin, Gate and others",
        "need": "Install the FheID app, enter the invite code QVedKjg, and verify you are human with a face scan (confirmed usable from Japan in Oct 2026, first-hand)",
        "caution": "What rewards are on offer now, and how much, is not stated officially. A past official campaign (2024) gave referral “stars” (up to 3 levels: 100, 50 and 25 stars per person) that could be exchanged for airdrops. Where the invite code is entered and whether the new user gets anything are not confirmed. PRAI has fallen from its May 2025 high of about $0.096 to about $0.0008 as of Oct 2026. It handles your face data, so check its privacy terms first"
      },
      "zh": {
        "gain": "证明你是真人即可获得空投和奖励（如活动“星星”）",
        "note": "用手机摄像头扫描人脸、证明你是“真人”的 Proof of Humanity 应用。官方称面部特征会在设备上转换为加密向量，并用全同态加密（FHE）处理，原始图像不会被发送。完成验证后会生成真人证明 NFT，可在各应用中获得空投和奖励。运营方为 Privasea（App Store 提供者为 Privasea AB，2026 年 5 月仍有更新），自有代币 PRAI 在 KuCoin、Gate 等交易",
        "need": "安装 FheID 应用，输入邀请码 QVedKjg，并用人脸完成真人验证（已于 2026 年 10 月亲自确认可在日本使用）",
        "caution": "官方没有说明目前提供哪些奖励、数量多少。过去的官方活动（2024 年）中，邀请可获得“星星”（最多 3 层，每人 100、50、25 颗），可兑换空投。邀请码在哪里输入、被邀请人有无奖励尚未确认。PRAI 从 2025 年 5 月约 0.096 美元的高点大幅下跌，2026 年 10 月约为 0.0008 美元。它会处理人脸数据，使用前请先确认隐私条款"
      },
      "hi": {
        "gain": "इंसान होने का सबूत देने पर एयरड्रॉप और इनाम (जैसे कैंपेन “स्टार”)",
        "note": "फ़ोन कैमरे से चेहरा स्कैन करके यह साबित करने वाला Proof of Humanity ऐप कि आप असली इंसान हैं। ऐप के अनुसार चेहरे की विशेषताएँ डिवाइस पर ही एन्क्रिप्टेड वेक्टर में बदली जाती हैं और फ़ुली होमोमॉर्फ़िक एन्क्रिप्शन (FHE) से प्रोसेस होती हैं, इसलिए मूल तस्वीरें नहीं भेजी जातीं। वेरिफ़ाई करने पर इंसान होने का NFT बनता है और अलग-अलग ऐप में एयरड्रॉप व इनाम मिल सकते हैं। इसे Privasea चलाता है (App Store पर प्रकाशक Privasea AB, मई 2026 में भी अपडेट); इसका टोकन PRAI KuCoin, Gate आदि पर ट्रेड होता है",
        "need": "FheID ऐप इंस्टॉल करें, इनवाइट कोड QVedKjg डालें, और चेहरे से इंसान होने का सबूत दें (अक्टूबर 2026 में खुद आज़माकर जापान से चलने की पुष्टि)",
        "caution": "अभी कौन-से इनाम कितने मिलते हैं, यह आधिकारिक रूप से नहीं बताया गया। पिछले आधिकारिक कैंपेन (2024) में रेफ़रल पर “स्टार” मिलते थे (3 लेवल तक: प्रति व्यक्ति 100, 50 और 25 स्टार), जिन्हें एयरड्रॉप से बदला जा सकता था। इनवाइट कोड कहाँ डालना है और नए यूज़र को कुछ मिलता है या नहीं, इसकी पुष्टि नहीं हुई। PRAI मई 2025 के लगभग $0.096 के उच्च स्तर से गिरकर अक्टूबर 2026 में लगभग $0.0008 पर है। यह चेहरे का डेटा संभालता है, इसलिए पहले गोपनीयता शर्तें देखें"
      },
      "es": {
        "gain": "Airdrops y recompensas por demostrar que eres humano (p. ej. «estrellas» de campaña)",
        "note": "Una app de prueba de humanidad que escanea tu cara con la cámara del móvil para demostrar que eres una persona real. Según la app, tus rasgos faciales se convierten en vectores cifrados en el propio dispositivo y se procesan con cifrado totalmente homomórfico (FHE), así que no se envían las imágenes originales. Al verificarte se crea un NFT de prueba de humanidad y puedes recibir airdrops y recompensas en distintas apps. La gestiona Privasea (en la App Store, Privasea AB; actualizada en mayo de 2026); su token PRAI cotiza en KuCoin, Gate y otros",
        "need": "Instala la app FheID, introduce el código de invitación QVedKjg y verifica que eres humano con un escaneo facial (se comprobó en persona que funciona desde Japón en octubre de 2026)",
        "caution": "No se indica oficialmente qué recompensas hay ahora ni de cuánto son. Una campaña oficial anterior (2024) daba «estrellas» por invitar (hasta 3 niveles: 100, 50 y 25 estrellas por persona) que se podían cambiar por airdrops. No está confirmado dónde se introduce el código ni si el nuevo usuario recibe algo. PRAI ha caído desde su máximo de mayo de 2025, unos 0,096 $, hasta unos 0,0008 $ en octubre de 2026. Maneja datos de tu cara, así que revisa antes su privacidad"
      },
      "de": {
        "gain": "Airdrops und Belohnungen für den Menschlichkeitsnachweis (z. B. Kampagnen-„Sterne“)",
        "note": "Eine Proof-of-Humanity-App, die per Handykamera dein Gesicht scannt, um zu zeigen, dass du ein echter Mensch bist. Laut App werden deine Gesichtsmerkmale auf dem Gerät in verschlüsselte Vektoren umgewandelt und mit vollhomomorpher Verschlüsselung (FHE) verarbeitet, die Originalbilder werden also nicht verschickt. Die Verifizierung erzeugt ein Menschlichkeits-NFT und ermöglicht Airdrops und Belohnungen in verschiedenen Apps. Betrieben von Privasea (Herausgeber im App Store: Privasea AB, zuletzt im Mai 2026 aktualisiert); der Token PRAI wird u. a. bei KuCoin und Gate gehandelt",
        "need": "Die App FheID installieren, den Einladungscode QVedKjg eingeben und dich per Gesichtsscan als Mensch verifizieren (im Oktober 2026 selbst bestätigt: aus Japan nutzbar)",
        "caution": "Welche Belohnungen es derzeit gibt und wie hoch sie sind, steht offiziell nirgends. Eine frühere offizielle Kampagne (2024) gab für Empfehlungen „Sterne“ (bis zu 3 Stufen: 100, 50 und 25 Sterne pro Person), die gegen Airdrops getauscht werden konnten. Wo der Einladungscode eingegeben wird und ob Neue etwas bekommen, ist nicht bestätigt. PRAI ist vom Hoch im Mai 2025 bei etwa 0,096 $ auf rund 0,0008 $ im Oktober 2026 gefallen. Die App verarbeitet Gesichtsdaten, prüf also vorher den Datenschutz"
      },
      "ar": {
        "gain": "إسقاطات جوية ومكافآت مقابل إثبات أنك إنسان (مثل «نجوم» الحملات)",
        "note": "تطبيق لإثبات الإنسانية يمسح وجهك بكاميرا الهاتف ليثبت أنك شخص حقيقي. يقول التطبيق إن ملامح وجهك تتحول على الجهاز نفسه إلى متجهات مشفّرة وتُعالَج بالتشفير المتماثل الكامل (⁦FHE⁩)، فلا تُرسل الصور الأصلية. يُنشئ التحقق رمز ⁦NFT⁩ لإثبات الإنسانية ويتيح لك تلقي الإسقاطات الجوية والمكافآت في تطبيقات مختلفة. تديره ⁦Privasea⁩ (الناشر في ⁦App Store⁩ هو ⁦Privasea AB⁩، وحُدّث حتى مايو 2026)، ورمزه ⁦PRAI⁩ يُتداول في ⁦KuCoin⁩ و⁦Gate⁩ وغيرهما",
        "need": "ثبّت تطبيق ⁦FheID⁩ وأدخل رمز الدعوة ⁦QVedKjg⁩ وتحقق من أنك إنسان بمسح الوجه (تأكدنا بالتجربة في أكتوبر 2026 أنه يعمل من اليابان)",
        "caution": "لا يُذكر رسميًا ما المكافآت المتاحة الآن ولا قيمتها. منحت حملة رسمية سابقة (2024) «نجومًا» مقابل الإحالة (حتى 3 مستويات: 100 و50 و25 نجمة لكل شخص) يمكن استبدالها بإسقاطات جوية. لم يتأكد مكان إدخال رمز الدعوة ولا ما إذا كان المستخدم الجديد يحصل على شيء. هبط ⁦PRAI⁩ من ذروته في مايو 2025 عند نحو ⁦$0.096⁩ إلى نحو ⁦$0.0008⁩ في أكتوبر 2026. يتعامل التطبيق مع بيانات وجهك، فراجع الخصوصية أولًا"
      }
    },
    {
      "id": "jrkripto",
      "name": "JrKripto（JR）",
      "nameEn": "JrKripto (JR)",
      "cat": "app",
      "type": "loop",
      "global": true,
      "ease": 3,
      "official": "https://jrkripto.com/en",
      "code": "JR-9C9T57",
      "ref": "https://jrkripto.com/r/JR-9C9T57",
      "added": "2026-10-29",
      "checked": "2026-10",
      "trust": {
        "cash": "no",
        "price": "na",
        "operator": "partial"
      },
      "verify": [
        {
          "method": "none"
        }
      ],
      "ja": {
        "gain": "毎日JRポイント（登録で50JR）",
        "note": "トルコの暗号資産ニュース・分析・価格チャートのサイト「JrKripto」のスマホアプリ。創業者は株式情報サイト「JrHisse」も運営している。アプリで1日1回タップすると、そこから24時間かけてJRポイントがたまる。招待コード付きで登録してメールアドレスを認証すると、50JRのボーナスがもらえる",
        "need": "招待リンクから登録し、メールアドレスを認証する（身分証は不要）。あとはアプリで毎日1回タップする（日本からの利用は2026年10月に実際に確認）",
        "caution": "招待ページ自体に「JRはアプリ内ポイントで、売ることも送ることもできない」と書かれている。2026年10月時点で換金の手段はなく、価値は将来の使い道しだい。毎日タップしないとたまらない。Google Playのパッケージ名が「com.yourcompany.jrkripto」と、ひな形のままのような名前になっている"
      },
      "en": {
        "gain": "JR points every day (50 JR sign-up bonus)",
        "note": "The mobile app of JrKripto, a Turkish crypto news, analysis and price-tracking site whose founder also runs the stock site JrHisse. Tap once a day in the app and JR points accrue over the next 24 hours. Sign up with an invite code and verify your email to get a 50 JR bonus",
        "need": "Sign up via the invite link and verify your email address (no ID needed). Then tap once a day in the app (confirmed usable from Japan in Oct 2026, first-hand)",
        "caution": "The invite page itself says “JR is an in-app point; it cannot be sold or transferred.” As of October 2026 there is no way to cash it out, so any value depends on a possible future use. Points only accrue if you tap every day. The Google Play package name is “com.yourcompany.jrkripto”, which looks like an unchanged template name"
      },
      "zh": {
        "gain": "每天获得 JR 积分（注册送 50 JR）",
        "note": "土耳其加密资产新闻、分析和行情网站 JrKripto 的手机应用，创始人还运营股票信息网站 JrHisse。每天在应用中点一次，接下来 24 小时内会累积 JR 积分。使用邀请码注册并验证邮箱，可获得 50 JR 奖励",
        "need": "通过邀请链接注册并验证邮箱（无需身份证件）。之后每天在应用中点一次即可（已于 2026 年 10 月亲自确认可在日本使用）",
        "caution": "邀请页面本身写明“JR 是应用内积分，不能出售或转让”。截至 2026 年 10 月没有任何兑现途径，价值取决于将来可能的用途。不每天点击就不会累积。Google Play 上的包名是“com.yourcompany.jrkripto”，看起来像是未修改的模板名称"
      },
      "hi": {
        "gain": "हर दिन JR पॉइंट (साइन अप पर 50 JR)",
        "note": "JrKripto का मोबाइल ऐप, जो तुर्की की एक क्रिप्टो न्यूज़, विश्लेषण और प्राइस-ट्रैकिंग साइट है; इसके संस्थापक शेयर बाज़ार की साइट JrHisse भी चलाते हैं। ऐप में दिन में एक बार टैप करें, और अगले 24 घंटों में JR पॉइंट जमा होते हैं। इनवाइट कोड से साइन अप करके ईमेल वेरिफ़ाई करने पर 50 JR का बोनस मिलता है",
        "need": "इनवाइट लिंक से साइन अप करें और अपना ईमेल वेरिफ़ाई करें (पहचान पत्र ज़रूरी नहीं)। फिर ऐप में रोज़ एक बार टैप करें (अक्टूबर 2026 में खुद आज़माकर जापान से चलने की पुष्टि)",
        "caution": "इनवाइट पेज पर ही लिखा है कि “JR एक इन-ऐप पॉइंट है; इसे न बेचा जा सकता है, न ट्रांसफ़र किया जा सकता है।” अक्टूबर 2026 तक इसे नकद में बदलने का कोई तरीका नहीं है, इसलिए इसकी कोई भी क़ीमत भविष्य के संभावित इस्तेमाल पर निर्भर है। रोज़ टैप न करें तो पॉइंट जमा नहीं होते। Google Play पर पैकेज का नाम “com.yourcompany.jrkripto” है, जो बिना बदले टेम्पलेट नाम जैसा लगता है"
      },
      "es": {
        "gain": "Puntos JR cada día (50 JR al registrarte)",
        "note": "La app móvil de JrKripto, un sitio turco de noticias, análisis y seguimiento de precios de criptomonedas cuyo fundador también dirige el sitio bursátil JrHisse. Pulsa una vez al día en la app y los puntos JR se acumulan durante las 24 horas siguientes. Si te registras con un código de invitación y verificas tu correo, recibes un bono de 50 JR",
        "need": "Regístrate con el enlace de invitación y verifica tu correo electrónico (sin documento de identidad). Después, pulsa una vez al día en la app (se comprobó en persona que funciona desde Japón en octubre de 2026)",
        "caution": "La propia página de invitación dice: «JR es un punto dentro de la app; no se puede vender ni transferir». En octubre de 2026 no hay forma de convertirlo en dinero, así que su valor depende de un posible uso futuro. Solo se acumula si pulsas cada día. En Google Play el nombre del paquete es «com.yourcompany.jrkripto», que parece un nombre de plantilla sin cambiar"
      },
      "de": {
        "gain": "Jeden Tag JR-Punkte (50 JR Anmeldebonus)",
        "note": "Die Handy-App von JrKripto, einer türkischen Seite für Krypto-News, Analysen und Kursverfolgung; der Gründer betreibt auch die Aktienseite JrHisse. Tippe einmal am Tag in der App, dann sammeln sich über die nächsten 24 Stunden JR-Punkte an. Wer sich mit Einladungscode anmeldet und die E-Mail bestätigt, bekommt 50 JR Bonus",
        "need": "Über den Einladungslink anmelden und die E-Mail-Adresse bestätigen (kein Ausweis nötig). Danach einmal am Tag in der App tippen (im Oktober 2026 selbst bestätigt: aus Japan nutzbar)",
        "caution": "Auf der Einladungsseite selbst steht: „JR ist ein In-App-Punkt; er kann weder verkauft noch übertragen werden.“ Stand Oktober 2026 gibt es keine Möglichkeit, ihn auszuzahlen; ein Wert hängt also von einer möglichen künftigen Nutzung ab. Punkte sammeln sich nur, wenn du jeden Tag tippst. Der Paketname bei Google Play lautet „com.yourcompany.jrkripto“, was nach einem unveränderten Vorlagennamen aussieht"
      },
      "ar": {
        "gain": "نقاط ⁦JR⁩ كل يوم (⁦50 JR⁩ عند التسجيل)",
        "note": "تطبيق الهاتف لموقع ⁦JrKripto⁩، وهو موقع تركي لأخبار العملات المشفرة وتحليلاتها وتتبّع أسعارها، ويدير مؤسسه أيضًا موقع الأسهم ⁦JrHisse⁩. اضغط مرة واحدة يوميًا في التطبيق لتتجمع نقاط ⁦JR⁩ على مدى الـ24 ساعة التالية. إذا سجّلت برمز دعوة وأكّدت بريدك الإلكتروني تحصل على مكافأة ⁦50 JR⁩",
        "need": "سجّل عبر رابط الدعوة وأكّد بريدك الإلكتروني (لا حاجة لوثيقة هوية). ثم اضغط مرة واحدة يوميًا في التطبيق (تأكدنا بالتجربة في أكتوبر 2026 أنه يعمل من اليابان)",
        "caution": "تقول صفحة الدعوة نفسها: «⁦JR⁩ نقطة داخل التطبيق، ولا يمكن بيعها أو تحويلها». حتى أكتوبر 2026 لا توجد طريقة لتحويلها إلى نقود، فأي قيمة لها تعتمد على استخدام محتمل في المستقبل. لا تتجمع النقاط إلا إذا ضغطت كل يوم. اسم الحزمة في ⁦Google Play⁩ هو ⁦“com.yourcompany.jrkripto”⁩، ويبدو كأنه اسم قالب لم يُغيَّر"
      }
    },
    {
      "id": "miningmachine",
      "name": "Mining Machine（$ORE）",
      "nameEn": "Mining Machine ($ORE)",
      "cat": "app",
      "type": "loop",
      "global": true,
      "ease": 3,
      "official": "https://miningmachine.io/",
      "ref": "https://miningmachine.io/r/aS80bLRm",
      "added": "2026-10-29",
      "checked": "2026-10",
      "trust": {
        "cash": "no",
        "price": "no",
        "operator": "unknown"
      },
      "verify": [
        {
          "method": "none"
        }
      ],
      "ja": {
        "gain": "$OREのマイニング残高（無料で24時間ずつ）",
        "note": "ブラウザ上の「マイニングマシン」で$OREの残高をためるサイト。$OREの総量は2,100万枚で、4つのエポックに分けて3回半減するとされる。登録は無料で、入金・カード登録・インストールは不要。無料の「Free Miner」が24時間ずつ動き、アカウントには最初からマシン枠が2つある。Xアカウントを連携すると、1日だけ +15 MP のマシンが追加される。お金を払ってマシンを足すと「速くなる」とされている。招待した人には、招待された人の採掘量の10%（上乗せで発行されるので、招待された人の分は減らない）と、招待された人の支払い額の10%が入る。最初の招待者は変わらない",
        "need": "紹介リンクから無料で登録する（メールアドレスかXでログイン、身分証は不要）。あとは24時間ごとにマイニングを開始する（日本から登録できることは2026年10月に確認）",
        "warning": "課金はしないでください。払ったお金に見合う価値がつく保証はありません。紹介者は、あなたの課金額の10%を受け取ります（このリンクの紹介者である当サイト運営者も含みます）。$OREはまだトークンではなく、サイト自身が「残高はトークンの約束ではない」と書いています。運営者は匿名です。",
        "caution": "課金はしないでください。払ったお金に見合う価値がつく保証はありません。紹介者は、あなたの課金額の10%を受け取ります（このリンクの紹介者である当サイト運営者も含みます）。$OREはまだトークンではなく、サイト自身が「残高はトークンの約束ではない」と書いています。運営者は匿名です。運営者の名前・所在地・準拠法の記載はなく、ホワイトペーパーもありません。会社としての存在はXアカウント「@RigGrid」だけで、第三者によるレビューも見つかりませんでした（2026年10月時点）。マシンの追加は有料ですが、価格は公開されていません。「残り7日」といったカウントダウンで登録を急がせる表示があります。マイニングは24時間ごとに自分で再開する必要があります"
      },
      "en": {
        "gain": "$ORE mining balance (free 24-hour sessions)",
        "note": "A site where a “mining machine” in your browser builds up a $ORE balance. $ORE is said to have a fixed supply of 21,000,000 across 4 epochs with 3 halvings. Joining is free, with no deposit, card or install. A free “Free Miner” runs in 24-hour sessions, and accounts start with 2 machine slots. Linking an X account adds a temporary +15 MP machine for a day. You can pay to add machines to “go faster”. Inviters get 10% of what their invitees mine (minted on top, so invitees keep all of theirs) and 10% of what invitees spend. The first inviter is permanent",
        "need": "Sign up for free via the invite link (log in with email or X, no ID needed). Then start a mining session every 24 hours (sign-up from Japan confirmed in Oct 2026)",
        "warning": "Don’t pay for machines or upgrades. There’s no guarantee that anything you pay for will ever be worth anything. Whoever invited you receives 10% of what you spend, and that includes this site’s operator, who invited you through this link. $ORE is not a token yet, and the site itself says balances are not a promise of tokens. The operator is anonymous.",
        "caution": "Don’t pay for machines or upgrades. There’s no guarantee that anything you pay for will ever be worth anything. Whoever invited you receives 10% of what you spend, and that includes this site’s operator, who invited you through this link. $ORE is not a token yet, and the site itself says balances are not a promise of tokens. The operator is anonymous. There is no operator name, address or jurisdiction, and no whitepaper. The only company presence is the X account @RigGrid, and no independent reviews could be found (as of October 2026). Extra machines cost money, but prices are not shown publicly. The page pushes you to hurry with a countdown (“only 7 days”). You have to restart mining yourself every 24 hours"
      },
      "zh": {
        "gain": "$ORE 挖矿余额（免费，每次 24 小时）",
        "note": "一个用浏览器里的“矿机”累积 $ORE 余额的网站。据称 $ORE 总量固定为 2,100 万枚，分 4 个纪元、减半 3 次。注册免费，无需充值、绑卡或安装。免费的“Free Miner”每次运行 24 小时，账户一开始有 2 个矿机位。关联 X 账号可获得一天的临时 +15 MP 矿机。付费增加矿机据称可以“更快”。邀请人可获得被邀请人挖矿量的 10%（额外发行，被邀请人的部分不会减少）以及被邀请人支付金额的 10%。第一个邀请人永久不变",
        "need": "通过邀请链接免费注册（用邮箱或 X 登录，无需身份证件）。之后每 24 小时开始一次挖矿（已于 2026 年 10 月确认可从日本注册）",
        "warning": "请不要付费。无法保证你付的钱将来会有相应的价值。邀请人会获得你付费金额的 10%（也包括通过此链接邀请你的本站运营者）。$ORE 目前还不是代币，网站自己也写明余额并不是代币的承诺。运营方是匿名的。",
        "caution": "请不要付费。无法保证你付的钱将来会有相应的价值。邀请人会获得你付费金额的 10%（也包括通过此链接邀请你的本站运营者）。$ORE 目前还不是代币，网站自己也写明余额并不是代币的承诺。运营方是匿名的。没有写明运营方的名称、地址或适用法律，也没有白皮书。公司唯一的公开存在是 X 账号 @RigGrid，也找不到任何第三方评测（截至 2026 年 10 月）。增加矿机需要付费，但价格没有公开。页面用“只剩 7 天”之类的倒计时催促注册。每 24 小时需要自己重新开始挖矿"
      },
      "hi": {
        "gain": "$ORE माइनिंग बैलेंस (मुफ़्त, हर बार 24 घंटे)",
        "note": "एक साइट, जहाँ ब्राउज़र में चलने वाली “माइनिंग मशीन” से $ORE का बैलेंस जमा होता है। बताया जाता है कि $ORE की कुल सप्लाई 2,10,00,000 पर तय है, जो 4 एपॉक में बँटी है और जिसमें 3 हाल्विंग होती हैं। जुड़ना मुफ़्त है; न डिपॉज़िट, न कार्ड, न इंस्टॉल। मुफ़्त “Free Miner” 24-24 घंटे के सेशन में चलता है, और हर अकाउंट में शुरू से 2 मशीन स्लॉट होते हैं। X अकाउंट जोड़ने पर एक दिन के लिए +15 MP की अस्थायी मशीन मिलती है। पैसे देकर मशीनें जोड़ने से “तेज़ी” आने की बात कही जाती है। इनवाइट करने वाले को इनवाइट किए गए लोगों की माइनिंग का 10% (ऊपर से मिंट होता है, इसलिए उनका हिस्सा कम नहीं होता) और उनके ख़र्च का 10% मिलता है। पहला इनवाइटर हमेशा के लिए तय रहता है",
        "need": "इनवाइट लिंक से मुफ़्त साइन अप करें (ईमेल या X से लॉग इन, पहचान पत्र ज़रूरी नहीं)। फिर हर 24 घंटे में माइनिंग सेशन शुरू करें (अक्टूबर 2026 में जापान से साइन अप की पुष्टि)",
        "warning": "मशीनों या अपग्रेड के लिए पैसे न दें। इस बात की कोई गारंटी नहीं कि जो आप ख़रीदेंगे उसकी कभी कोई क़ीमत होगी। जिसने आपको इनवाइट किया, उसे आपके ख़र्च का 10% मिलता है, और इसमें इस साइट का संचालक भी शामिल है, जिसने इस लिंक से आपको इनवाइट किया है। $ORE अभी टोकन नहीं है, और साइट ख़ुद कहती है कि बैलेंस टोकन का वादा नहीं है। संचालक गुमनाम है।",
        "caution": "मशीनों या अपग्रेड के लिए पैसे न दें। इस बात की कोई गारंटी नहीं कि जो आप ख़रीदेंगे उसकी कभी कोई क़ीमत होगी। जिसने आपको इनवाइट किया, उसे आपके ख़र्च का 10% मिलता है, और इसमें इस साइट का संचालक भी शामिल है, जिसने इस लिंक से आपको इनवाइट किया है। $ORE अभी टोकन नहीं है, और साइट ख़ुद कहती है कि बैलेंस टोकन का वादा नहीं है। संचालक गुमनाम है। संचालक का नाम, पता या क़ानूनी क्षेत्राधिकार कहीं नहीं लिखा, और कोई व्हाइटपेपर नहीं है। कंपनी की इकलौती मौजूदगी X अकाउंट @RigGrid है, और कोई स्वतंत्र समीक्षा नहीं मिली (अक्टूबर 2026 तक)। अतिरिक्त मशीनों के पैसे लगते हैं, लेकिन क़ीमतें सार्वजनिक नहीं हैं। पेज “सिर्फ़ 7 दिन” जैसे काउंटडाउन से जल्दी करने का दबाव डालता है। हर 24 घंटे में माइनिंग ख़ुद फिर से शुरू करनी पड़ती है"
      },
      "es": {
        "gain": "Saldo de minería de $ORE (sesiones gratis de 24 horas)",
        "note": "Un sitio en el que una «máquina de minería» en tu navegador acumula un saldo de $ORE. Según el sitio, $ORE tiene un suministro fijo de 21.000.000 repartido en 4 épocas con 3 halvings. Unirse es gratis, sin depósito, tarjeta ni instalación. Un «Free Miner» gratuito funciona en sesiones de 24 horas, y las cuentas empiezan con 2 huecos para máquinas. Si vinculas una cuenta de X, recibes durante un día una máquina temporal de +15 MP. Puedes pagar para añadir máquinas e «ir más rápido». Quien invita recibe el 10% de lo que minan sus invitados (se emite aparte, así que el invitado conserva todo lo suyo) y el 10% de lo que gastan. El primer invitador es permanente",
        "need": "Regístrate gratis con el enlace de invitación (inicia sesión con correo o con X, sin documento de identidad). Después, inicia una sesión de minería cada 24 horas (se comprobó en octubre de 2026 que el registro funciona desde Japón)",
        "warning": "No pagues por máquinas ni mejoras. No hay ninguna garantía de que lo que pagues vaya a valer algo. Quien te invita recibe el 10% de lo que gastas, y eso incluye al responsable de este sitio, que te invita con este enlace. $ORE todavía no es un token, y el propio sitio dice que el saldo no es una promesa de tokens. El operador es anónimo.",
        "caution": "No pagues por máquinas ni mejoras. No hay ninguna garantía de que lo que pagues vaya a valer algo. Quien te invita recibe el 10% de lo que gastas, y eso incluye al responsable de este sitio, que te invita con este enlace. $ORE todavía no es un token, y el propio sitio dice que el saldo no es una promesa de tokens. El operador es anónimo. No figura el nombre del operador, su dirección ni su jurisdicción, y no hay whitepaper. La única presencia de la empresa es la cuenta de X @RigGrid, y no se encontraron reseñas independientes (a octubre de 2026). Las máquinas extra cuestan dinero, pero los precios no se muestran públicamente. La página te mete prisa con una cuenta atrás («solo 7 días»). Tienes que reiniciar la minería tú mismo cada 24 horas"
      },
      "de": {
        "gain": "$ORE-Mining-Guthaben (kostenlos, je 24 Stunden)",
        "note": "Eine Seite, auf der eine „Mining-Maschine“ im Browser ein $ORE-Guthaben aufbaut. $ORE soll eine feste Menge von 21.000.000 haben, verteilt auf 4 Epochen mit 3 Halvings. Die Anmeldung ist kostenlos, ohne Einzahlung, Karte oder Installation. Ein kostenloser „Free Miner“ läuft in Sitzungen von je 24 Stunden, und Konten starten mit 2 Maschinenplätzen. Wer ein X-Konto verknüpft, bekommt für einen Tag eine zusätzliche Maschine mit +15 MP. Gegen Geld kann man Maschinen hinzufügen, um „schneller“ zu werden. Wer einlädt, bekommt 10 % dessen, was die Eingeladenen minen (zusätzlich ausgegeben, die Eingeladenen behalten also alles), und 10 % dessen, was sie ausgeben. Der erste Einlader bleibt dauerhaft",
        "need": "Über den Einladungslink kostenlos anmelden (Login per E-Mail oder X, kein Ausweis nötig). Danach alle 24 Stunden eine Mining-Sitzung starten (im Oktober 2026 bestätigt: Anmeldung aus Japan möglich)",
        "warning": "Bitte zahle nicht für Maschinen oder Upgrades. Es gibt keine Garantie, dass das, wofür du zahlst, jemals etwas wert ist. Wer dich eingeladen hat, bekommt 10 % von dem, was du ausgibst, und dazu gehört auch der Betreiber dieser Seite, der dich über diesen Link einlädt. $ORE ist noch kein Token, und die Seite selbst sagt, dass Guthaben kein Versprechen auf Tokens sind. Der Betreiber ist anonym.",
        "caution": "Bitte zahle nicht für Maschinen oder Upgrades. Es gibt keine Garantie, dass das, wofür du zahlst, jemals etwas wert ist. Wer dich eingeladen hat, bekommt 10 % von dem, was du ausgibst, und dazu gehört auch der Betreiber dieser Seite, der dich über diesen Link einlädt. $ORE ist noch kein Token, und die Seite selbst sagt, dass Guthaben kein Versprechen auf Tokens sind. Der Betreiber ist anonym. Es gibt keinen Betreibernamen, keine Adresse, keine Rechtsordnung und kein Whitepaper. Die einzige Präsenz des Unternehmens ist der X-Account @RigGrid, unabhängige Bewertungen ließen sich nicht finden (Stand Oktober 2026). Zusätzliche Maschinen kosten Geld, die Preise werden aber nicht öffentlich genannt. Die Seite drängt mit einem Countdown („nur 7 Tage“) zur Eile. Das Mining musst du alle 24 Stunden selbst neu starten"
      },
      "ar": {
        "gain": "رصيد تعدين ⁦$ORE⁩ (جلسات مجانية مدة كل منها 24 ساعة)",
        "note": "موقع تجمع فيه «آلة تعدين» داخل المتصفح رصيدًا من ⁦$ORE⁩. يُقال إن المعروض الكلي من ⁦$ORE⁩ ثابت عند 21,000,000 موزّعة على 4 حقب مع 3 عمليات تنصيف. الانضمام مجاني، بلا إيداع ولا بطاقة ولا تثبيت. يعمل ⁦“Free Miner”⁩ المجاني في جلسات مدة كل منها 24 ساعة، ويبدأ كل حساب بخانتين للأجهزة. ربط حساب ⁦X⁩ يضيف جهازًا مؤقتًا بقوة ⁦+15 MP⁩ ليوم واحد. يمكنك الدفع لإضافة أجهزة «لتسريع» التعدين. يحصل من يدعو على 10% مما يعدّنه المدعوون (يُصكّ إضافيًا، فلا ينقص نصيب المدعو) وعلى 10% مما ينفقونه. أول من يدعوك يبقى دائمًا",
        "need": "سجّل مجانًا عبر رابط الدعوة (تسجيل الدخول بالبريد الإلكتروني أو ⁦X⁩، ولا حاجة لوثيقة هوية). ثم ابدأ جلسة تعدين كل 24 ساعة (تأكدنا في أكتوبر 2026 أن التسجيل يعمل من اليابان)",
        "warning": "لا تدفع مقابل الأجهزة أو الترقيات. لا يوجد أي ضمان بأن ما تدفع مقابله سيكون له أي قيمة. يحصل من دعاك على 10% مما تنفقه، ويشمل ذلك مشغّل هذا الموقع الذي يدعوك عبر هذا الرابط. ليست ⁦$ORE⁩ رمزًا مميزًا (توكن) بعد، ويقول الموقع نفسه إن الرصيد ليس وعدًا بالحصول على رموز. المشغّل مجهول الهوية.",
        "caution": "لا تدفع مقابل الأجهزة أو الترقيات. لا يوجد أي ضمان بأن ما تدفع مقابله سيكون له أي قيمة. يحصل من دعاك على 10% مما تنفقه، ويشمل ذلك مشغّل هذا الموقع الذي يدعوك عبر هذا الرابط. ليست ⁦$ORE⁩ رمزًا مميزًا (توكن) بعد، ويقول الموقع نفسه إن الرصيد ليس وعدًا بالحصول على رموز. المشغّل مجهول الهوية. لا يُذكر اسم المشغّل ولا عنوانه ولا الجهة القانونية التي يتبعها، ولا توجد ورقة بيضاء. الوجود الوحيد للشركة هو حساب ⁦X⁩ ⁦@RigGrid⁩، ولم نجد أي مراجعات مستقلة (حتى أكتوبر 2026). الأجهزة الإضافية مدفوعة، لكن أسعارها غير معلنة. تستعجلك الصفحة بعدّ تنازلي («7 أيام فقط»). عليك إعادة تشغيل التعدين بنفسك كل 24 ساعة"
      }
    },
    {
      "id": "kabuand",
      "name": "KABU&（カブアンド）",
      "nameEn": "KABU&",
      "cat": "pointsite",
      "type": "loop",
      "global": false,
      "ease": 2,
      "official": "https://kabuand.com/",
      "code": "",
      "ref": "",
      "noRef": true,
      "contactRef": {
        "url": "https://x.com/FreeLunchLab",
        "handle": "@FreeLunchLab"
      },
      "added": "2026-10-29",
      "checked": "2026-10",
      "trust": {
        "cash": "no",
        "price": "no",
        "operator": "yes"
      },
      "verify": [
        {
          "method": "kyc-id"
        }
      ],
      "ja": {
        "gain": "電気・ガス・スマホなどの利用料金に応じた株引換券（未上場株の申込みに使う）",
        "note": "前澤友作氏が代表取締役社長を務める株式会社カブ＆ピースのサービス。KABU&でんき・ガス・モバイル・ひかり・Wi-Fi・ウォーター・トラベル・メディカルなどの利用料金や、KABU&カードの利用額に応じて「株引換券」が付与される。通常会員の付与率は、でんき・ガスが1%、モバイル・ひかり・ウォーター・メディカルが5%、カードは200円ごとに1枚で、有料のプラス会員・プレミアム会員は付与率が上がる。決められた募集期間（株引換）に申し込むと、株引換券を同社の株（カブアンド種類株式）に交換できる。第4期の発行価格は1株8円（株引換券8枚）で、申込期間は2026年11月6日〜26日。株引換券は1枚1円の割引券に交換して、カブアンドのサービスの支払いに充てることもできる。紹介プログラムでは、紹介した人とされた人の両方に、契約したサービスに応じた株引換券が付与される（紹介者への付与は毎月先着20人まで）",
        "need": "日本在住の成人（外国籍の方は特別永住者証明書か、在留期限が無期限の在留カードが必要）。カブアンド会員に登録し、サービスを契約して料金を払う。株への交換には、募集期間中の申込み、身分証によるeKYC（運転免許証・マイナンバーカードなど）、大和コネクト証券の口座開設とID連携が必要（第4期分は2026年12月6日まで）",
        "caution": "株は未上場で、今は売ることも現金にすることもできず、将来の価値や換金できるかどうかは不確か。公式サイトにも上場は「確約するものではない」とあり、価値が発行価格を下回るリスクもある。株引換券は基本的にサービスの料金を払うことでしかもらえないので、乗り換えるのは、そのサービス自体の料金や条件が自分に合う場合だけにしたい。株への交換は決められた募集期間にしかできず、株引換券の有効期限は最後に付与された月の月末から1年。申し込む前に、利用規約・目論見書と、株引換券が株になる時期を確認すること。公式の紹介プログラムの注意事項では、紹介コードのSNSでの拡散は特典の対象外とされている。また、電話・SNS・メールで「カブアンドの株が買える」という勧誘は投資詐欺の可能性が高いと公式が注意している（株は株引換券でしか取得できない）",
        "contactRef": "紹介コードが欲しい方は、Xの @FreeLunchLab にDMしてください（紹介した側である当サイト運営者にも株引換券が入ります）。"
      },
      "en": {
        "gain": "Share vouchers based on what you pay for electricity, gas, mobile and more (used to apply for unlisted shares)",
        "note": "A service from Kabu & Peace Inc., whose president and CEO is Yusaku Maezawa. When you pay for KABU& electricity, gas, mobile, fibre internet, Wi-Fi, water, travel, telemedicine and other services, or spend with the KABU& Card, you receive “share vouchers” (kabu hikikaeken). For standard members the rate is 1% for electricity and gas, 5% for mobile, fibre, water and telemedicine, and 1 voucher per ¥200 on the card; paid Plus and Premium memberships raise the rates. During a set offering period you can apply to exchange vouchers for the company’s class shares (KABU& class shares); the 4th offering’s issue price is ¥8 a share (8 vouchers), and its application period is 6–26 Nov 2026. Vouchers can also be converted into ¥1 discount vouchers for KABU& bills. Under the referral program, both sides get vouchers depending on the service contracted; a referrer is rewarded for at most 20 people a month",
        "need": "Adults living in Japan (foreign nationals need a special permanent resident certificate or a residence card with no expiry date). Register as a KABU& member, then contract a service and pay for it. To exchange vouchers for shares you must apply during the offering period, pass ID-based eKYC (driving licence, My Number card, etc.) and open and link a Daiwa Connect Securities account (by 6 Dec 2026 for the 4th offering)",
        "caution": "The shares are unlisted: right now they cannot be sold or cashed, and their future value and liquidity are uncertain. The official site itself says a listing is not guaranteed, and the value may fall below the issue price. Vouchers basically come only from paying for services, so switching only makes sense if the price and terms of the service itself suit you. Vouchers can be exchanged for shares only during set offering periods, and they expire one year after the end of the month of your latest grant. Check the terms, the prospectus and when vouchers turn into shares before applying. The official referral notes say rewards may be voided if referral codes are spread on social media. KABU& also warns that offers to sell you its shares by phone, social media or email are very likely investment fraud: the shares can only be obtained with vouchers",
        "contactRef": "Want a referral code? DM @FreeLunchLab on X (the referrer, this site’s operator, also receives share vouchers)."
      },
      "zh": {
        "gain": "按电费、燃气费、手机费等支付金额获得的股票兑换券（用于申购未上市股票）",
        "note": "由前泽友作担任代表董事社长的 Kabu & Peace 株式会社（株式会社カブ＆ピース）提供的服务。使用 KABU& 的电力、燃气、手机、光纤宽带、Wi-Fi、饮水机、旅行、在线诊疗等服务并付费，或使用 KABU& 卡消费，就会获得“股票兑换券”（株引換券）。普通会员的比例为：电力和燃气 1%，手机、光纤、饮水机、在线诊疗 5%，信用卡每 200 日元 1 张；付费的 Plus 和 Premium 会员比例更高。在规定的募集期内可以申请把兑换券换成该公司的类别股（KABU& 类别股）；第 4 期发行价为每股 8 日元（8 张兑换券），申请期为 2026 年 11 月 6 日至 26 日。兑换券也可以换成每张 1 日元的折扣券，用于支付 KABU& 的账单。推荐计划中，推荐人和被推荐人都会按签约的服务获得兑换券；推荐人每月最多前 20 人有奖励",
        "need": "居住在日本的成年人（外国籍人士需持有特别永住者证明书或无在留期限的在留卡）。注册 KABU& 会员，签约服务并付费。把兑换券换成股票，需要在募集期内申请、通过身份证件 eKYC（驾照、个人编号卡等），并开设大和 Connect 证券账户且完成 ID 关联（第 4 期截止 2026 年 12 月 6 日）",
        "caution": "这些股票未上市：目前无法出售或变现，将来的价值和流动性都不确定。官网自己也写明不保证上市，股票价值还可能低于发行价。兑换券基本上只有付费使用服务才能获得，所以只有在服务本身的价格和条件适合你时，换用才有意义。兑换券只能在规定的募集期内换成股票，有效期为最后一次获得兑换券当月月底起 1 年。申请前请确认条款、招股说明书以及兑换成股票的时间。官方推荐说明写明，在社交媒体上扩散推荐码可能导致奖励无效。KABU& 还提醒：通过电话、社交媒体或邮件推销其股票的很可能是投资诈骗，这些股票只能用兑换券获得",
        "contactRef": "想要推荐码的话，请在 X 上私信 @FreeLunchLab（推荐人，即本站运营者，也会获得股票兑换券）。"
      },
      "hi": {
        "gain": "बिजली, गैस, मोबाइल आदि के भुगतान के हिसाब से शेयर वाउचर (बिना लिस्टिंग वाले शेयरों के आवेदन में इस्तेमाल)",
        "note": "Kabu & Peace Inc. की सेवा, जिसके प्रेसिडेंट और CEO Yusaku Maezawa हैं। KABU& की बिजली, गैस, मोबाइल, फ़ाइबर इंटरनेट, Wi-Fi, पानी, ट्रैवल, टेलीमेडिसिन जैसी सेवाओं के भुगतान पर, या KABU& कार्ड से ख़र्च करने पर “शेयर वाउचर” (kabu hikikaeken) मिलते हैं। सामान्य सदस्यों के लिए दर बिजली और गैस पर 1%, मोबाइल, फ़ाइबर, पानी और टेलीमेडिसिन पर 5%, और कार्ड पर हर ¥200 पर 1 वाउचर है; पेड Plus और Premium सदस्यता से दरें बढ़ती हैं। तय ऑफ़रिंग अवधि में वाउचर को कंपनी के क्लास शेयर (KABU& क्लास शेयर) से बदलने के लिए आवेदन किया जा सकता है; चौथी ऑफ़रिंग का इश्यू प्राइस ¥8 प्रति शेयर (8 वाउचर) है और आवेदन अवधि 6–26 नवंबर 2026 है। वाउचर को KABU& बिलों के लिए ¥1 वाले डिस्काउंट वाउचर में भी बदला जा सकता है। रेफ़रल प्रोग्राम में दोनों पक्षों को ली गई सेवा के हिसाब से वाउचर मिलते हैं; रेफ़र करने वाले को महीने में ज़्यादा से ज़्यादा 20 लोगों तक इनाम मिलता है",
        "need": "जापान में रहने वाले वयस्क (विदेशी नागरिकों के पास स्पेशल परमानेंट रेज़िडेंट सर्टिफ़िकेट या बिना समय-सीमा वाला रेज़िडेंस कार्ड होना चाहिए)। KABU& सदस्य बनें, फिर कोई सेवा लें और उसका भुगतान करें। वाउचर को शेयर में बदलने के लिए ऑफ़रिंग अवधि में आवेदन, पहचान पत्र से eKYC (ड्राइविंग लाइसेंस, My Number कार्ड आदि), और Daiwa Connect Securities में खाता खोलकर उसे लिंक करना ज़रूरी है (चौथी ऑफ़रिंग के लिए 6 दिसंबर 2026 तक)",
        "caution": "शेयर लिस्टेड नहीं हैं: अभी इन्हें न बेचा जा सकता है, न नकद में बदला जा सकता है, और इनकी भविष्य की क़ीमत और बिक्री की संभावना अनिश्चित है। आधिकारिक साइट ख़ुद कहती है कि लिस्टिंग की गारंटी नहीं है, और क़ीमत इश्यू प्राइस से नीचे भी जा सकती है। वाउचर मूल रूप से सिर्फ़ सेवाओं का भुगतान करने पर मिलते हैं, इसलिए सेवा बदलना तभी समझदारी है जब उस सेवा की क़ीमत और शर्तें ख़ुद आपके लिए ठीक हों। वाउचर सिर्फ़ तय ऑफ़रिंग अवधि में शेयर में बदले जा सकते हैं, और आख़िरी बार वाउचर मिलने वाले महीने के अंत से 1 साल में ख़त्म हो जाते हैं। आवेदन से पहले शर्तें, प्रॉस्पेक्टस और वाउचर कब शेयर में बदलते हैं, यह जाँच लें। आधिकारिक रेफ़रल नोट्स कहते हैं कि सोशल मीडिया पर रेफ़रल कोड फैलाने पर इनाम रद्द हो सकता है। KABU& यह भी चेतावनी देता है कि फ़ोन, सोशल मीडिया या ईमेल से इसके शेयर बेचने के प्रस्ताव बहुत संभवतः निवेश धोखाधड़ी हैं: शेयर सिर्फ़ वाउचर से ही मिलते हैं",
        "contactRef": "रेफ़रल कोड चाहिए? X पर @FreeLunchLab को DM करें (रेफ़र करने वाले, यानी इस साइट के संचालक, को भी शेयर वाउचर मिलते हैं)।"
      },
      "es": {
        "gain": "Vales de acciones según lo que pagas de luz, gas, móvil y más (sirven para solicitar acciones no cotizadas)",
        "note": "Un servicio de Kabu & Peace Inc., cuyo presidente y CEO es Yusaku Maezawa. Al pagar los servicios de KABU& de luz, gas, móvil, fibra, Wi-Fi, agua, viajes, telemedicina y otros, o al gastar con la tarjeta KABU&, recibes «vales de acciones» (kabu hikikaeken). Para miembros normales la tasa es del 1% en luz y gas, del 5% en móvil, fibra, agua y telemedicina, y 1 vale por cada 200 ¥ con la tarjeta; las membresías de pago Plus y Premium suben las tasas. Durante un periodo de oferta fijado puedes solicitar canjear los vales por acciones de clase de la empresa (acciones de clase KABU&); el precio de emisión de la 4.ª oferta es de 8 ¥ por acción (8 vales) y el plazo de solicitud va del 6 al 26 de noviembre de 2026. Los vales también se pueden convertir en vales de descuento de 1 ¥ para las facturas de KABU&. Con el programa de referidos, ambas partes reciben vales según el servicio contratado; quien invita solo recibe recompensa por un máximo de 20 personas al mes",
        "need": "Adultos que viven en Japón (los extranjeros necesitan un certificado de residente permanente especial o una tarjeta de residencia sin fecha de vencimiento). Regístrate como miembro de KABU& y luego contrata un servicio y págalo. Para canjear los vales por acciones tienes que solicitarlo durante el periodo de oferta, pasar un eKYC con documento (carné de conducir, tarjeta My Number, etc.) y abrir y vincular una cuenta en Daiwa Connect Securities (antes del 6 de diciembre de 2026 para la 4.ª oferta)",
        "caution": "Las acciones no cotizan: ahora mismo no se pueden vender ni convertir en dinero, y su valor y liquidez futuros son inciertos. El propio sitio oficial dice que la salida a bolsa no está garantizada, y el valor puede caer por debajo del precio de emisión. Los vales básicamente solo se obtienen pagando servicios, así que cambiarte solo tiene sentido si el precio y las condiciones del servicio en sí te convienen. Los vales solo se canjean por acciones en periodos de oferta fijados y caducan un año después del final del mes en que recibiste los últimos. Antes de solicitar, revisa las condiciones, el folleto y cuándo se convierten los vales en acciones. Las notas oficiales del programa de referidos dicen que la recompensa puede anularse si se difunden códigos en redes sociales. KABU& también advierte que las ofertas de venta de sus acciones por teléfono, redes sociales o correo son muy probablemente fraudes de inversión: las acciones solo se obtienen con vales",
        "contactRef": "¿Quieres un código de referido? Escribe por DM a @FreeLunchLab en X (quien te invita, el responsable de este sitio, también recibe vales de acciones)."
      },
      "de": {
        "gain": "Aktiengutscheine je nach Ausgaben für Strom, Gas, Mobilfunk und mehr (für die Zeichnung nicht börsennotierter Aktien)",
        "note": "Ein Dienst der Kabu & Peace Inc., deren Präsident und CEO Yusaku Maezawa ist. Wer für KABU&-Strom, -Gas, -Mobilfunk, -Glasfaser, -WLAN, -Wasser, -Reisen, -Telemedizin und andere Dienste zahlt oder mit der KABU&-Karte bezahlt, bekommt „Aktiengutscheine“ (kabu hikikaeken). Für normale Mitglieder sind es 1 % bei Strom und Gas, 5 % bei Mobilfunk, Glasfaser, Wasser und Telemedizin und 1 Gutschein je 200 Yen mit der Karte; die kostenpflichtigen Mitgliedschaften Plus und Premium erhöhen die Sätze. In einem festgelegten Angebotszeitraum kann man beantragen, die Gutscheine gegen Gattungsaktien des Unternehmens (KABU&-Gattungsaktien) zu tauschen; der Ausgabepreis des 4. Angebots liegt bei 8 Yen je Aktie (8 Gutscheine), Antragszeitraum 6.–26. November 2026. Gutscheine lassen sich auch in Rabattgutscheine zu je 1 Yen für KABU&-Rechnungen umwandeln. Beim Empfehlungsprogramm bekommen beide Seiten Gutscheine je nach abgeschlossenem Dienst; Werbende werden für höchstens 20 Personen im Monat belohnt",
        "need": "Volljährige mit Wohnsitz in Japan (ausländische Staatsangehörige brauchen eine Bescheinigung als Sonder-Daueraufenthaltsberechtigte oder eine Aufenthaltskarte ohne Ablaufdatum). Als KABU&-Mitglied registrieren, dann einen Dienst abschließen und bezahlen. Für den Tausch in Aktien musst du im Angebotszeitraum zeichnen, ein eKYC mit Ausweis (Führerschein, My-Number-Karte usw.) durchlaufen und ein Konto bei Daiwa Connect Securities eröffnen und verknüpfen (für das 4. Angebot bis 6. Dezember 2026)",
        "caution": "Die Aktien sind nicht börsennotiert: Derzeit kann man sie weder verkaufen noch zu Geld machen, und ihr künftiger Wert und ihre Handelbarkeit sind ungewiss. Die offizielle Seite selbst schreibt, dass ein Börsengang nicht zugesichert ist, und der Wert kann unter den Ausgabepreis fallen. Gutscheine gibt es im Grunde nur, wenn du für Dienste zahlst; ein Wechsel lohnt sich also nur, wenn Preis und Bedingungen des Dienstes selbst zu dir passen. Gutscheine lassen sich nur in festgelegten Angebotszeiträumen in Aktien tauschen und verfallen ein Jahr nach Ende des Monats, in dem du zuletzt welche bekommen hast. Prüfe vor dem Antrag die Bedingungen, den Prospekt und wann Gutscheine zu Aktien werden. Laut den offiziellen Hinweisen zum Empfehlungsprogramm kann die Prämie entfallen, wenn Empfehlungscodes in sozialen Medien verbreitet werden. KABU& warnt außerdem, dass Angebote, seine Aktien per Telefon, sozialen Medien oder E-Mail zu kaufen, sehr wahrscheinlich Anlagebetrug sind: Die Aktien gibt es nur gegen Gutscheine",
        "contactRef": "Du möchtest einen Empfehlungscode? Schreib @FreeLunchLab auf X per DM (wer dich empfiehlt, also der Betreiber dieser Seite, bekommt ebenfalls Aktiengutscheine)."
      },
      "ar": {
        "gain": "قسائم أسهم بحسب ما تدفعه للكهرباء والغاز والهاتف وغيرها (تُستخدم للاكتتاب في أسهم غير مدرجة)",
        "note": "خدمة من شركة ⁦Kabu & Peace Inc.⁩ التي يرأسها ويديرها ⁦Yusaku Maezawa⁩. عندما تدفع مقابل خدمات ⁦KABU&⁩ للكهرباء والغاز والهاتف المحمول والإنترنت بالألياف و⁦Wi-Fi⁩ والمياه والسفر والطب عن بُعد وغيرها، أو تنفق ببطاقة ⁦KABU&⁩، تحصل على «قسائم أسهم» (⁦kabu hikikaeken⁩). للأعضاء العاديين النسبة 1% للكهرباء والغاز، و5% للهاتف والألياف والمياه والطب عن بُعد، وقسيمة واحدة لكل 200 ين بالبطاقة؛ وترفع العضويتان المدفوعتان ⁦Plus⁩ و⁦Premium⁩ النسب. خلال فترة طرح محددة يمكنك طلب استبدال القسائم بأسهم من فئة خاصة في الشركة (أسهم ⁦KABU&⁩ الفئوية)؛ سعر الإصدار في الطرح الرابع 8 ين للسهم (8 قسائم)، وفترة الطلب من 6 إلى 26 نوفمبر 2026. ويمكن أيضًا تحويل القسائم إلى قسائم خصم بقيمة 1 ين لفواتير ⁦KABU&⁩. في برنامج الإحالة يحصل الطرفان على قسائم بحسب الخدمة المتعاقد عليها، ولا يُكافأ المُحيل إلا عن 20 شخصًا كحد أقصى في الشهر",
        "need": "البالغون المقيمون في اليابان (يحتاج الأجانب إلى شهادة إقامة دائمة خاصة أو بطاقة إقامة بلا تاريخ انتهاء). سجّل عضوًا في ⁦KABU&⁩، ثم تعاقد على خدمة وادفع مقابلها. لاستبدال القسائم بأسهم عليك التقديم خلال فترة الطرح، واجتياز التحقق الإلكتروني من الهوية (⁦eKYC⁩) بوثيقة (رخصة قيادة أو بطاقة ⁦My Number⁩ وغيرهما)، وفتح حساب لدى ⁦Daiwa Connect Securities⁩ وربطه (حتى 6 ديسمبر 2026 للطرح الرابع)",
        "caution": "الأسهم غير مدرجة: لا يمكن بيعها ولا تحويلها إلى نقود الآن، وقيمتها وسيولتها في المستقبل غير مؤكدتين. يقول الموقع الرسمي نفسه إن الإدراج غير مضمون، وقد تنخفض القيمة عن سعر الإصدار. لا تحصل على القسائم في الأساس إلا بالدفع مقابل الخدمات، لذا لا يكون الانتقال منطقيًا إلا إذا كان سعر الخدمة نفسها وشروطها مناسبة لك. لا تُستبدل القسائم بأسهم إلا في فترات طرح محددة، وتنتهي صلاحيتها بعد سنة من نهاية الشهر الذي حصلت فيه على آخر قسائم. راجع الشروط ونشرة الإصدار وموعد تحوّل القسائم إلى أسهم قبل التقديم. تقول الملاحظات الرسمية لبرنامج الإحالة إن المكافأة قد تُلغى إذا نُشرت رموز الإحالة على وسائل التواصل الاجتماعي. وتحذّر ⁦KABU&⁩ أيضًا من أن عروض بيع أسهمها عبر الهاتف أو وسائل التواصل أو البريد الإلكتروني هي على الأرجح احتيال استثماري: لا يمكن الحصول على الأسهم إلا بالقسائم",
        "contactRef": "تريد رمز إحالة؟ راسل ⁦@FreeLunchLab⁩ على ⁦X⁩ برسالة خاصة (المُحيل، أي مشغّل هذا الموقع، يحصل أيضًا على قسائم أسهم)."
      }
    },
    {
      "id": "lifeai",
      "name": "Life AI Testnet",
      "cat": "app",
      "type": "loop",
      "global": true,
      "ease": 3,
      "official": "https://lifeai.io/",
      "code": "TH2ZQFX",
      "ref": "https://testnet.lifeai.io/ref?code=TH2ZQFX",
      "added": "2026-10-30",
      "checked": "2026-10",
      "trust": {
        "cash": "partial",
        "price": "no",
        "operator": "yes"
      },
      "verify": [
        {
          "method": "none"
        }
      ],
      "ja": {
        "gain": "テストネットのポイント（抽選でUSDT、上位者にトークン・NFTの報酬）",
        "note": "ヘルスケアAIのプロジェクト「Life AI」が、Avalanche上に作る独自チェーンのテストネット（Phase 1）。lifeai.io の利用規約によると、運営はシンガポールの非営利団体 LIFE AI Foundation。共同創業者兼CEOは、遺伝子検査のGeneticaも率いるTuan Cao博士。健康・AI・暮らしについての1日1問のYes/Noクイズに答え、回答をチェーンに記録してXに投稿すると、ポイントがたまる。毎日続けるとポイントが増え、1日休むと連続記録はリセットされる。友だちを招待すると、その人の活動に応じて招待した側にポイントが入る。サイトで配られるテスト用トークンをステークすると倍率が上がる。公式サイトに書かれている報酬は、毎日の抽選でもらえるUSDT（ハズレもある）、週ごとのランキング報酬、上位者向けのトークン報酬と限定NFT、シーズンごとの特典。報酬を受け取るEVMウォレットのアドレスを登録する",
        "need": "紹介リンクからXアカウントなどでログインし、報酬を受け取るEVMウォレットのアドレスを登録する（身分証は不要）。あとは毎日クイズに答えて投稿する（2026年10月に日本から登録できることを確認）",
        "caution": "ポイントはお金ではありません。キャンペーン規約には「報酬の額・時期・方法はLife AIのチームだけが決める」「キャンペーンはいつでも変更・中止できる」とあり、受け取れる保証はありません。2026年10月時点で、公式に取引できるLIFEトークンは見つからず、公式サイトもトークンやエアドロップを約束していません。lifeai.io の規約では、Life Pointsに現金価値はなく、交換には本人確認（KYC）が必要になる場合があるとされています。USDTの抽選が実際に支払われているかは、第三者の情報では確認できていません。シードフレーズや秘密鍵は誰にも教えないでください。登録するのは受け取り用のアドレスだけで、資産の入ったメインのウォレットを接続したり、よくわからない署名をしたりしないでください。お金を払う必要はありません。支払いを求められたら詐欺を疑ってください。「LIFE」という名前の無関係なトークンや偽サイトが多数あります。招待した側（このリンクの紹介者である当サイト運営者を含む）には、あなたの活動に応じてポイントが入ります。毎日Xに投稿するタスクがあり、運営元は遺伝子検査を扱う健康関連の事業も手がけているので、プライバシーの扱いも確認してください"
      },
      "en": {
        "gain": "Testnet points (daily USDT draws; token and NFT rewards for top players)",
        "note": "The Phase 1 testnet of Life AI, a healthcare AI project building its own chain on Avalanche. According to the terms on lifeai.io, it is run by LIFE AI Foundation, a non-profit in Singapore. Its co-founder and CEO is Dr. Tuan Cao, who also heads the genetic testing company Genetica. Answer one daily Yes/No quiz about health, AI and life, record your answer on-chain and post it on X to earn points. A daily streak earns more, and missing a day resets it. Invite friends and you earn points based on their activity. Staking the test tokens the site hands out raises your multiplier. The rewards listed on the official site are daily USDT draws (some draws win nothing), weekly leaderboard rewards, token rewards and exclusive NFTs for top performers, and seasonal prizes. You register an EVM wallet address to receive rewards",
        "need": "Log in through the referral link with X or another account and register an EVM wallet address for rewards (no ID needed). Then answer the quiz and post every day (sign-up from Japan confirmed in Oct 2026)",
        "caution": "Points are not money. The campaign terms say the amount, timing and method of rewards are decided solely by the Life AI team, and that the campaign can be changed or cancelled at any time, so nothing is guaranteed. As of October 2026 there is no official tradable LIFE token, and the official site does not promise a token or an airdrop. The lifeai.io terms say Life Points have no cash value and that converting them may require KYC. We could not confirm from independent sources that the USDT draws actually pay out. Never share your seed phrase or private key with anyone. Only enter a receiving address: don’t connect a wallet that holds your funds, and don’t sign anything you don’t understand. You never need to pay. If you are asked to pay, treat it as a scam. There are many unrelated tokens and fake sites called “LIFE”. Whoever invited you earns points from your activity, and that includes this site’s operator, who invited you through this link. The tasks include posting on X every day, and the operator also runs health businesses, including genetic testing, so check how your data is handled"
      },
      "zh": {
        "gain": "测试网积分（每日抽 USDT，排名靠前者有代币和 NFT 奖励）",
        "note": "医疗健康 AI 项目「Life AI」在 Avalanche 上建设的自有链的测试网（Phase 1）。根据 lifeai.io 的使用条款，运营方是新加坡的非营利组织 LIFE AI Foundation。联合创始人兼 CEO 是 Tuan Cao 博士，他也领导基因检测公司 Genetica。每天回答一道关于健康、AI 和生活的是非题，把答案记录到链上并发到 X，即可获得积分。连续每天参与积分更多，中断一天连续记录就会重置。邀请朋友后，会根据对方的活动给邀请人积分。质押网站发放的测试代币可以提高倍率。官网列出的奖励有：每日 USDT 抽奖（也可能没抽中）、每周排行榜奖励、给排名靠前者的代币奖励和限定 NFT，以及每季特别奖励。需要登记用于接收奖励的 EVM 钱包地址",
        "need": "通过邀请链接用 X 等账号登录，并登记接收奖励的 EVM 钱包地址（无需身份证件）。之后每天答题并发帖（已于 2026 年 10 月确认可从日本注册）",
        "caution": "积分不是钱。活动条款写明，奖励的金额、时间和方式完全由 Life AI 团队决定，活动也可以随时修改或取消，因此无法保证能拿到。截至 2026 年 10 月，没有找到官方可交易的 LIFE 代币，官网也没有承诺代币或空投。lifeai.io 的条款写明 Life Points 没有现金价值，兑换时可能需要身份验证（KYC）。我们无法从第三方信息确认 USDT 抽奖是否真的发放。绝不要把助记词或私钥告诉任何人。只登记接收地址，不要连接存有资产的主钱包，也不要签署看不懂的内容。完全不需要付费，如果被要求付款，请怀疑是诈骗。有许多无关的同名「LIFE」代币和假网站。邀请人（也包括通过此链接邀请你的本站运营者）会根据你的活动获得积分。任务包括每天在 X 发帖，而且运营方也经营基因检测等健康业务，请确认数据的处理方式"
      },
      "hi": {
        "gain": "टेस्टनेट पॉइंट (रोज़ USDT का ड्रॉ; टॉप खिलाड़ियों को टोकन और NFT इनाम)",
        "note": "Life AI का Phase 1 टेस्टनेट। Life AI एक हेल्थकेयर AI प्रोजेक्ट है, जो Avalanche पर अपनी चेन बना रहा है। lifeai.io की शर्तों के अनुसार इसे सिंगापुर की गैर-लाभकारी संस्था LIFE AI Foundation चलाती है। इसके सह-संस्थापक और CEO डॉ. Tuan Cao हैं, जो जेनेटिक टेस्टिंग कंपनी Genetica के भी प्रमुख हैं। सेहत, AI और ज़िंदगी पर रोज़ एक हाँ/ना क्विज़ का जवाब दें, जवाब ऑन-चेन दर्ज करें और X पर पोस्ट करें, तो पॉइंट मिलते हैं। लगातार हर दिन करने पर ज़्यादा पॉइंट मिलते हैं, और एक दिन छूटने पर सिलसिला रीसेट हो जाता है। दोस्तों को इनवाइट करने पर उनकी गतिविधि के हिसाब से आपको पॉइंट मिलते हैं। साइट से मिलने वाले टेस्ट टोकन स्टेक करने पर मल्टीप्लायर बढ़ता है। आधिकारिक साइट पर लिखे इनाम: रोज़ का USDT ड्रॉ (कभी-कभी कुछ नहीं मिलता), हफ़्तेवार लीडरबोर्ड इनाम, टॉप प्रदर्शन करने वालों के लिए टोकन इनाम और खास NFT, और हर सीज़न के इनाम। इनाम पाने के लिए एक EVM वॉलेट पता दर्ज करना होता है",
        "need": "रेफ़रल लिंक से X या किसी दूसरे अकाउंट से लॉग इन करें और इनाम के लिए EVM वॉलेट पता दर्ज करें (पहचान पत्र ज़रूरी नहीं)। फिर हर दिन क्विज़ का जवाब दें और पोस्ट करें (अक्टूबर 2026 में जापान से साइन अप की पुष्टि)",
        "caution": "पॉइंट पैसा नहीं हैं। कैंपेन की शर्तों में लिखा है कि इनाम की रकम, समय और तरीका सिर्फ़ Life AI टीम तय करती है, और कैंपेन कभी भी बदला या रद्द किया जा सकता है, इसलिए कुछ भी पक्का नहीं है। अक्टूबर 2026 तक कोई आधिकारिक ट्रेड होने वाला LIFE टोकन नहीं मिला, और आधिकारिक साइट टोकन या एयरड्रॉप का वादा नहीं करती। lifeai.io की शर्तों के अनुसार Life Points की कोई नकद क़ीमत नहीं है, और उन्हें बदलने के लिए KYC ज़रूरी हो सकता है। USDT ड्रॉ का भुगतान सच में होता है या नहीं, यह हम स्वतंत्र स्रोतों से पक्का नहीं कर सके। अपना सीड फ़्रेज़ या प्राइवेट की कभी किसी को न बताएँ। सिर्फ़ पैसे पाने वाला पता दर्ज करें: जिस वॉलेट में आपके पैसे हैं उसे कनेक्ट न करें, और जो समझ न आए उस पर साइन न करें। आपको कभी पैसे देने की ज़रूरत नहीं है। अगर पैसे माँगे जाएँ, तो उसे धोखा समझें। “LIFE” नाम के कई असंबंधित टोकन और नकली साइटें हैं। जिसने आपको इनवाइट किया, उसे आपकी गतिविधि से पॉइंट मिलते हैं, और इसमें इस साइट का संचालक भी शामिल है, जिसने इस लिंक से आपको इनवाइट किया है। कामों में हर दिन X पर पोस्ट करना शामिल है, और संचालक जेनेटिक टेस्टिंग समेत सेहत से जुड़े कारोबार भी चलाता है, इसलिए देख लें कि आपका डेटा कैसे संभाला जाता है"
      },
      "es": {
        "gain": "Puntos de la testnet (sorteos diarios de USDT; tokens y NFT para los mejores)",
        "note": "La testnet (Phase 1) de Life AI, un proyecto de IA para la salud que construye su propia cadena en Avalanche. Según las condiciones de lifeai.io, la gestiona LIFE AI Foundation, una organización sin ánimo de lucro de Singapur. Su cofundador y CEO es el Dr. Tuan Cao, que también dirige la empresa de pruebas genéticas Genetica. Responde cada día una pregunta de sí o no sobre salud, IA y vida, registra tu respuesta en la cadena y publícala en X para ganar puntos. Mantener la racha diaria da más puntos, y saltarte un día la reinicia. Si invitas a amigos, ganas puntos según su actividad. Hacer staking de los tokens de prueba que reparte el sitio sube tu multiplicador. Las recompensas que indica el sitio oficial son sorteos diarios de USDT (en algunos no se gana nada), premios semanales de la clasificación, recompensas en tokens y NFT exclusivos para los mejores, y premios por temporada. Registras una dirección de cartera EVM para recibir las recompensas",
        "need": "Entra con el enlace de invitación usando X u otra cuenta y registra una dirección de cartera EVM para las recompensas (sin documento de identidad). Después, responde la pregunta y publica cada día (se comprobó en octubre de 2026 que el registro funciona desde Japón)",
        "caution": "Los puntos no son dinero. Las condiciones de la campaña dicen que el importe, el momento y la forma de las recompensas los decide solo el equipo de Life AI, y que la campaña puede cambiarse o cancelarse en cualquier momento, así que nada está garantizado. En octubre de 2026 no existe un token LIFE oficial que se pueda negociar, y el sitio oficial no promete ningún token ni airdrop. Las condiciones de lifeai.io dicen que los Life Points no tienen valor en efectivo y que canjearlos puede requerir KYC. No hemos podido confirmar con fuentes independientes que los sorteos de USDT se paguen de verdad. Nunca compartas tu frase semilla ni tu clave privada. Introduce solo una dirección para recibir: no conectes una cartera con tus fondos ni firmes nada que no entiendas. Nunca tienes que pagar. Si te piden dinero, sospecha que es una estafa. Hay muchos tokens sin relación y sitios falsos llamados «LIFE». Quien te invita gana puntos con tu actividad, y eso incluye al responsable de este sitio, que te invita con este enlace. Las tareas incluyen publicar en X cada día, y el operador también tiene negocios de salud, entre ellos pruebas genéticas, así que revisa cómo se tratan tus datos"
      },
      "de": {
        "gain": "Testnet-Punkte (tägliche USDT-Verlosungen; Token- und NFT-Belohnungen für die Besten)",
        "note": "Das Testnet (Phase 1) von Life AI, einem Gesundheits-KI-Projekt, das eine eigene Chain auf Avalanche baut. Laut den Bedingungen auf lifeai.io wird es von der LIFE AI Foundation betrieben, einer gemeinnützigen Organisation in Singapur. Mitgründer und CEO ist Dr. Tuan Cao, der auch das Gentest-Unternehmen Genetica leitet. Beantworte jeden Tag eine Ja/Nein-Frage zu Gesundheit, KI und Leben, speichere die Antwort on-chain und poste sie auf X, um Punkte zu sammeln. Eine tägliche Serie bringt mehr, und ein ausgelassener Tag setzt sie zurück. Wer Freunde einlädt, bekommt Punkte je nach deren Aktivität. Wer die Test-Token staket, die die Seite verteilt, erhöht seinen Multiplikator. Als Belohnungen nennt die offizielle Seite tägliche USDT-Verlosungen (manchmal gewinnt man nichts), wöchentliche Ranglisten-Prämien, Token-Belohnungen und exklusive NFTs für die Besten sowie Prämien je Saison. Für die Belohnungen hinterlegst du eine EVM-Wallet-Adresse",
        "need": "Über den Einladungslink mit X oder einem anderen Konto einloggen und eine EVM-Wallet-Adresse für Belohnungen hinterlegen (kein Ausweis nötig). Danach jeden Tag die Frage beantworten und posten (im Oktober 2026 bestätigt: Anmeldung aus Japan möglich)",
        "caution": "Punkte sind kein Geld. Laut den Kampagnenbedingungen entscheidet allein das Life-AI-Team über Höhe, Zeitpunkt und Art der Belohnungen, und die Kampagne kann jederzeit geändert oder beendet werden; garantiert ist also nichts. Stand Oktober 2026 gibt es keinen offiziellen handelbaren LIFE-Token, und die offizielle Seite verspricht weder einen Token noch einen Airdrop. Laut den Bedingungen auf lifeai.io haben Life Points keinen Geldwert, und ein Umtausch kann ein KYC erfordern. Ob die USDT-Verlosungen wirklich ausgezahlt werden, konnten wir mit unabhängigen Quellen nicht bestätigen. Gib deine Seed-Phrase oder deinen privaten Schlüssel niemals weiter. Hinterlege nur eine Empfangsadresse: Verbinde keine Wallet, auf der dein Geld liegt, und signiere nichts, was du nicht verstehst. Du musst nie etwas bezahlen. Wenn jemand Geld verlangt, geh von Betrug aus. Es gibt viele fremde Token und gefälschte Seiten namens „LIFE“. Wer dich eingeladen hat, bekommt Punkte für deine Aktivität, und dazu gehört auch der Betreiber dieser Seite, der dich über diesen Link einlädt. Zu den Aufgaben gehört, jeden Tag auf X zu posten, und der Betreiber hat auch Gesundheitsgeschäfte, darunter Gentests; prüfe also, wie deine Daten behandelt werden"
      },
      "ar": {
        "gain": "نقاط الشبكة التجريبية (سحب يومي على ⁦USDT⁩؛ ومكافآت رموز و⁦NFT⁩ للأوائل)",
        "note": "الشبكة التجريبية (المرحلة الأولى) لمشروع ⁦Life AI⁩، وهو مشروع ذكاء اصطناعي للرعاية الصحية يبني سلسلته الخاصة على ⁦Avalanche⁩. بحسب الشروط على ⁦lifeai.io⁩ تديره ⁦LIFE AI Foundation⁩، وهي منظمة غير ربحية في سنغافورة. المؤسس المشارك والرئيس التنفيذي هو الدكتور ⁦Tuan Cao⁩، الذي يرأس أيضًا شركة الفحوص الجينية ⁦Genetica⁩. أجب كل يوم عن سؤال بنعم أو لا عن الصحة والذكاء الاصطناعي والحياة، وسجّل إجابتك على السلسلة وانشرها على ⁦X⁩ لتجمع النقاط. المواظبة اليومية تمنحك نقاطًا أكثر، وتفويت يوم واحد يعيد السلسلة إلى الصفر. إذا دعوت أصدقاء تحصل على نقاط بحسب نشاطهم. تخزين (staking) الرموز التجريبية التي يوزعها الموقع يرفع المضاعِف. المكافآت المذكورة على الموقع الرسمي: سحب يومي على ⁦USDT⁩ (قد لا تربح شيئًا)، ومكافآت أسبوعية لقائمة المتصدرين، ومكافآت رموز و⁦NFT⁩ حصرية لأصحاب الأداء الأعلى، وجوائز موسمية. تسجّل عنوان محفظة ⁦EVM⁩ لاستلام المكافآت",
        "need": "سجّل الدخول عبر رابط الإحالة بحساب ⁦X⁩ أو حساب آخر، وسجّل عنوان محفظة ⁦EVM⁩ لاستلام المكافآت (لا حاجة لوثيقة هوية). ثم أجب عن السؤال وانشر كل يوم (تأكدنا في أكتوبر 2026 أن التسجيل يعمل من اليابان)",
        "caution": "النقاط ليست مالًا. تقول شروط الحملة إن فريق ⁦Life AI⁩ وحده يقرر قيمة المكافآت وموعدها وطريقتها، وإن الحملة يمكن تغييرها أو إلغاؤها في أي وقت، فلا شيء مضمون. حتى أكتوبر 2026 لا يوجد رمز ⁦LIFE⁩ رسمي قابل للتداول، ولا يعد الموقع الرسمي برمز أو إسقاط جوي. تقول شروط ⁦lifeai.io⁩ إن ⁦Life Points⁩ ليست لها قيمة نقدية وإن استبدالها قد يتطلب التحقق من الهوية (⁦KYC⁩). لم نتمكن من التأكد من مصادر مستقلة أن سحوبات ⁦USDT⁩ تُدفع فعلًا. لا تشارك عبارة الاسترداد أو مفتاحك الخاص مع أي أحد. أدخل عنوان استلام فقط: لا تربط محفظة فيها أموالك، ولا توقّع على شيء لا تفهمه. لا تحتاج إلى الدفع أبدًا، وإذا طُلب منك الدفع فاعتبره احتيالًا. توجد رموز كثيرة لا علاقة لها ومواقع مزيفة باسم «⁦LIFE⁩». يحصل من دعاك على نقاط من نشاطك، ويشمل ذلك مشغّل هذا الموقع الذي يدعوك عبر هذا الرابط. من المهام النشر على ⁦X⁩ كل يوم، كما أن المشغّل يدير أعمالًا صحية منها الفحوص الجينية، فتحقّق من طريقة التعامل مع بياناتك"
      }
    },
    {
      "id": "refrax",
      "name": "Refrax（$REFRAX）",
      "nameEn": "Refrax ($REFRAX)",
      "cat": "app",
      "type": "loop",
      "global": true,
      "ease": 4,
      "official": "https://refrax.xyz/",
      "code": "freelunchlab",
      "ref": "https://refrax.xyz/?ref=freelunchlab",
      "added": "2026-10-30",
      "checked": "2026-10",
      "trust": {
        "cash": "no",
        "price": "no",
        "operator": "unknown"
      },
      "verify": [
        {
          "method": "none"
        }
      ],
      "ja": {
        "gain": "$REFRAXの未確定ポイント（トークンは未発行）",
        "note": "Solana上で動く分散型のオブジェクトストレージを掲げるプロジェクト「Refrax」の、シーズン0のクエスト報酬。ファイルを16個の断片に分けて別々のノードに置き、そのうち5個あれば元に戻せるしくみだと説明している。Xアカウントでログインし、公式Xのフォロー、ローンチ投稿へのいいね・リポスト・コメント、自分の招待リンクの投稿、Solanaウォレットのアドレス登録、友だち3人の招待などのクエストをこなすとポイントがたまる。毎日のチェックインもあり、7日連続でボーナスが付く。サイトによると、ポイントはサーバー上で数える「未確定の割り当て」で、ローンチ時に登録したSolanaウォレットへ$REFRAXとして支払われる予定。サイトは入場コードで閉じられているが、招待リンクから来ると入れる。招待された人がリンクからログインしてクエストを1つ終えると、招待した側にポイントが入る",
        "need": "紹介リンクを開き（入場コードは不要になる）、Xアカウントでログインする（作ったばかりのXアカウントは参加できない）。受け取り用のSolanaウォレットのアドレスを登録する（署名やウォレット接続、身分証は不要）。あとはクエストと毎日のチェックインをこなす（2026年10月に日本から登録できることを確認）",
        "warning": "ドメインは2026年10月26日に取得されたばかりで、運営者は匿名です。利用規約・プライバシーポリシー・ドキュメントはなく、$REFRAXトークンもまだありません。サイトのコードは、名前・ティッカー・リンクを差し替えて使い回すローンチ用のひな形のような作りです。お金を払ったり、資産の入ったウォレットを接続したり、「請求（claim）」と称するものに署名したりしないでください。",
        "caution": "ドメインは2026年10月26日に取得されたばかりで、運営者は匿名です。利用規約・プライバシーポリシー・ドキュメントはなく、$REFRAXトークンもまだありません。サイトのコードは、名前・ティッカー・リンクを差し替えて使い回すローンチ用のひな形のような作りです。お金を払ったり、資産の入ったウォレットを接続したり、「請求（claim）」と称するものに署名したりしないでください。ポイントはお金でもトークンでもありません。サイト自身が「ローンチまでは未確定で、トークンではない」「額はローンチ時に確定する」と書いており、受け取れる保証はありません。2026年10月時点で$REFRAXのコントラクトアドレスは「近日公開」のままで、価格もありません。運営者の名前・所在地・資金調達の情報は見つからず、第三者による報道やレビューも見つかりませんでした。GitHubの組織とコードは2026年10月27日にまとめて公開されたもので、ノードは自分のPC上の開発用ネットワーク（devnet）で動かせるだけで、ポイントはもらえません。公式Xアカウントは2026年10月の開設で、投稿は2件ほどです。Xのクエストはリンクを開いて数秒待てば完了扱いになり、実際に行動したかは確認されていません。2026年10月30日には全クエストが「ラウンド2」として新しくなり、もう一度ポイントがもらえるようになりました。Xログインで求められる権限は読み取り（プロフィールと投稿の閲覧）だけですが、公式Xのフォローや宣伝の投稿をするクエストがあります。利用規約がないので国の制限は書かれていません。登録するのは受け取り用のアドレスだけにし、シードフレーズや秘密鍵は誰にも教えないでください。ローンチの前後は偽の請求サイトや同じ名前の偽トークンが出やすいので、公式Xとrefrax.xyz以外のリンクは使わないでください。招待した側（このリンクの紹介者である当サイト運営者を含む）には、あなたがクエストを終えるとポイントが入ります"
      },
      "en": {
        "gain": "Pending $REFRAX points (no token yet)",
        "note": "Season 0 quest rewards from Refrax, a project that presents itself as decentralized object storage coordinated on Solana. It says each file is cut into 16 pieces held by different nodes, and any 5 of them rebuild it. Sign in with X and earn points for quests: follow the official X account, like, repost and comment on the launch post, post your own invite link, add a Solana wallet address, and invite 3 friends. There is also a daily check-in, with a bonus every 7th day in a row. The site says points are a pending allocation counted on its server, to be paid as $REFRAX to the Solana wallet you add, at launch. The site is closed behind an access code, but an invite link lets you in. When someone signs in through your link and finishes a quest, you earn points",
        "need": "Open the referral link (it skips the access code) and sign in with X (very new X accounts can’t join). Add a Solana wallet address to receive rewards (no signature, wallet connection or ID needed). Then do the quests and the daily check-in (sign-up from Japan confirmed in Oct 2026)",
        "warning": "The domain was registered on October 26, 2026, and the operator is anonymous. There are no terms, no privacy policy, no docs, and no $REFRAX token yet. The site’s code looks like a reusable launch template where the name, ticker and links are swapped in. Don’t pay anything, don’t connect a wallet that holds your funds, and don’t sign anything presented as a “claim”.",
        "caution": "The domain was registered on October 26, 2026, and the operator is anonymous. There are no terms, no privacy policy, no docs, and no $REFRAX token yet. The site’s code looks like a reusable launch template where the name, ticker and links are swapped in. Don’t pay anything, don’t connect a wallet that holds your funds, and don’t sign anything presented as a “claim”. Points are neither money nor tokens. The site itself says they stay pending until launch, are not tokens, and that amounts are final only at launch, so nothing is guaranteed. As of October 2026 the $REFRAX contract address still says “Launching soon”, and there is no price. We could not find the operator’s name, location or funding, or any independent news or reviews. The GitHub organization and code were all published at once on October 27, 2026; the node only runs as a local devnet on your own computer and does not earn points. The official X account was created in October 2026 and has about two posts. The X quests count as done once you open the link and wait a few seconds; nothing checks that you actually did them. On October 30, 2026 every quest was reset as “Round 2”, so they pay again. Signing in with X asks only for read access (your profile and posts), but quests ask you to follow the account and post promotions. With no terms there are no stated country restrictions. Only enter a receiving address, and never share your seed phrase or private key. Fake claim sites and copycat tokens with the same name are common around launches, so only use links from the official X account and refrax.xyz. Whoever invited you earns points when you finish a quest, and that includes this site’s operator, who invited you through this link"
      },
      "zh": {
        "gain": "待定的 $REFRAX 积分（代币尚未发行）",
        "note": "Refrax 第 0 季的任务奖励。Refrax 自称是基于 Solana 协调的去中心化对象存储项目，说每个文件会被切成 16 片放在不同节点上，任意 5 片即可还原。用 X 登录后完成任务即可获得积分：关注官方 X 账号，给上线帖子点赞、转发和评论，发布自己的邀请链接，登记 Solana 钱包地址，邀请 3 位朋友。另有每日签到，连续第 7 天有奖励。网站说积分是在其服务器上记录的待定分配额，计划在上线时以 $REFRAX 发放到你登记的 Solana 钱包。网站需要输入访问码才能进入，但通过邀请链接可以直接进入。有人通过你的链接登录并完成一个任务后，你会获得积分",
        "need": "打开邀请链接（无需访问码），用 X 登录（刚注册的 X 账号不能参加）。登记接收奖励的 Solana 钱包地址（无需签名、连接钱包或身份证件）。之后完成任务并每日签到（已于 2026 年 10 月确认可从日本注册）",
        "warning": "域名在 2026 年 10 月 26 日才注册，运营方是匿名的。没有使用条款、隐私政策和文档，$REFRAX 代币也还不存在。网站代码看起来像一个可以替换名称、代币代号和链接后反复使用的发币模板。不要付任何钱，不要连接存有资产的钱包，也不要签署任何号称“领取（claim）”的内容。",
        "caution": "域名在 2026 年 10 月 26 日才注册，运营方是匿名的。没有使用条款、隐私政策和文档，$REFRAX 代币也还不存在。网站代码看起来像一个可以替换名称、代币代号和链接后反复使用的发币模板。不要付任何钱，不要连接存有资产的钱包，也不要签署任何号称“领取（claim）”的内容。积分既不是钱也不是代币。网站自己写明积分在上线前都是待定的、不是代币，金额要到上线时才确定，因此无法保证能拿到。截至 2026 年 10 月，$REFRAX 的合约地址仍显示“即将上线”，也没有价格。找不到运营方的名称、所在地或融资信息，也没有找到任何第三方报道或评测。GitHub 组织和代码是在 2026 年 10 月 27 日一次性发布的；节点只能在自己电脑上的本地开发网络（devnet）里运行，不能获得积分。官方 X 账号于 2026 年 10 月注册，只有大约两条帖子。X 任务只要打开链接等几秒就算完成，并不检查你是否真的做了。2026 年 10 月 30 日所有任务以“第 2 轮”重置，可以再次获得积分。用 X 登录只要求读取权限（查看个人资料和帖子），但有任务要求关注官方账号和发推宣传。由于没有使用条款，也没有写明国家限制。只登记接收地址，绝不要把助记词或私钥告诉任何人。上线前后常出现假的领取网站和同名假代币，请只使用官方 X 账号和 refrax.xyz 上的链接。邀请人（也包括通过此链接邀请你的本站运营者）会在你完成任务后获得积分"
      },
      "hi": {
        "gain": "पेंडिंग $REFRAX पॉइंट (अभी टोकन नहीं)",
        "note": "Refrax के Season 0 के क्वेस्ट इनाम। Refrax ख़ुद को Solana पर समन्वित विकेंद्रीकृत ऑब्जेक्ट स्टोरेज बताता है: हर फ़ाइल 16 टुकड़ों में बँटकर अलग-अलग नोड पर रखी जाती है, और कोई भी 5 टुकड़े उसे वापस बना देते हैं। X से साइन इन करें और कामों के लिए पॉइंट कमाएँ: आधिकारिक X अकाउंट फ़ॉलो करें, लॉन्च पोस्ट को लाइक, रीपोस्ट और कमेंट करें, अपना इनवाइट लिंक पोस्ट करें, Solana वॉलेट पता जोड़ें, और 3 दोस्तों को इनवाइट करें। रोज़ का चेक-इन भी है, और लगातार हर 7वें दिन बोनस मिलता है। साइट के अनुसार पॉइंट उसके सर्वर पर गिना गया पेंडिंग आवंटन हैं, जो लॉन्च पर आपके जोड़े गए Solana वॉलेट में $REFRAX के रूप में दिए जाने हैं। साइट एक एक्सेस कोड के पीछे बंद है, लेकिन इनवाइट लिंक से अंदर जा सकते हैं। जब कोई आपके लिंक से साइन इन करके एक काम पूरा करता है, तो आपको पॉइंट मिलते हैं",
        "need": "रेफ़रल लिंक खोलें (एक्सेस कोड की ज़रूरत नहीं रहती) और X से साइन इन करें (बहुत नए X अकाउंट शामिल नहीं हो सकते)। इनाम के लिए Solana वॉलेट पता जोड़ें (साइन, वॉलेट कनेक्ट या पहचान पत्र की ज़रूरत नहीं)। फिर काम और रोज़ का चेक-इन करें (अक्टूबर 2026 में जापान से साइन अप की पुष्टि)",
        "warning": "डोमेन 26 अक्टूबर 2026 को ही रजिस्टर हुआ है, और संचालक गुमनाम है। न शर्तें हैं, न प्राइवेसी पॉलिसी, न डॉक्यूमेंटेशन, और $REFRAX टोकन भी अभी नहीं है। साइट का कोड एक ऐसे लॉन्च टेम्पलेट जैसा दिखता है जिसमें बस नाम, टिकर और लिंक बदलकर उसे दोबारा इस्तेमाल किया जाता है। कोई पैसा न दें, जिस वॉलेट में आपके पैसे हैं उसे कनेक्ट न करें, और “claim” के नाम पर किसी चीज़ पर साइन न करें।",
        "caution": "डोमेन 26 अक्टूबर 2026 को ही रजिस्टर हुआ है, और संचालक गुमनाम है। न शर्तें हैं, न प्राइवेसी पॉलिसी, न डॉक्यूमेंटेशन, और $REFRAX टोकन भी अभी नहीं है। साइट का कोड एक ऐसे लॉन्च टेम्पलेट जैसा दिखता है जिसमें बस नाम, टिकर और लिंक बदलकर उसे दोबारा इस्तेमाल किया जाता है। कोई पैसा न दें, जिस वॉलेट में आपके पैसे हैं उसे कनेक्ट न करें, और “claim” के नाम पर किसी चीज़ पर साइन न करें। पॉइंट न पैसा हैं, न टोकन। साइट ख़ुद कहती है कि लॉन्च तक ये पेंडिंग रहते हैं, टोकन नहीं हैं, और रकम लॉन्च के समय ही तय होगी, इसलिए कुछ भी पक्का नहीं है। अक्टूबर 2026 तक $REFRAX के कॉन्ट्रैक्ट पते की जगह अब भी “Launching soon” लिखा है, और कोई क़ीमत नहीं है। संचालक का नाम, जगह या फ़ंडिंग की जानकारी नहीं मिली, और कोई स्वतंत्र ख़बर या समीक्षा भी नहीं मिली। GitHub संगठन और कोड 27 अक्टूबर 2026 को एक साथ प्रकाशित हुए; नोड सिर्फ़ आपके अपने कंप्यूटर पर लोकल devnet के रूप में चलता है और उससे पॉइंट नहीं मिलते। आधिकारिक X अकाउंट अक्टूबर 2026 में बना है और उस पर लगभग दो पोस्ट हैं। X वाले काम लिंक खोलकर कुछ सेकंड रुकने पर ही पूरे मान लिए जाते हैं; यह जाँचा नहीं जाता कि आपने सच में वह किया। 30 अक्टूबर 2026 को सारे काम “Round 2” के रूप में रीसेट हुए, इसलिए उनसे फिर से पॉइंट मिलते हैं। X से साइन इन सिर्फ़ पढ़ने की अनुमति (प्रोफ़ाइल और पोस्ट देखना) माँगता है, लेकिन कामों में अकाउंट फ़ॉलो करना और प्रचार वाली पोस्ट करना शामिल है। शर्तें न होने से किसी देश पर रोक भी नहीं लिखी। सिर्फ़ पैसे पाने वाला पता दर्ज करें, और अपना सीड फ़्रेज़ या प्राइवेट की कभी किसी को न बताएँ। लॉन्च के आसपास नकली claim साइटें और उसी नाम के नकली टोकन आम हैं, इसलिए सिर्फ़ आधिकारिक X अकाउंट और refrax.xyz के लिंक इस्तेमाल करें। जिसने आपको इनवाइट किया, उसे आपके काम पूरा करने पर पॉइंट मिलते हैं, और इसमें इस साइट का संचालक भी शामिल है, जिसने इस लिंक से आपको इनवाइट किया है"
      },
      "es": {
        "gain": "Puntos $REFRAX pendientes (aún sin token)",
        "note": "Recompensas de misiones de la temporada 0 de Refrax, un proyecto que se presenta como almacenamiento de objetos descentralizado coordinado en Solana. Dice que cada archivo se corta en 16 piezas guardadas en nodos distintos y que con 5 cualesquiera se reconstruye. Inicia sesión con X y gana puntos con misiones: seguir la cuenta oficial de X, dar me gusta, repostear y comentar la publicación de lanzamiento, publicar tu propio enlace de invitación, añadir una dirección de cartera de Solana e invitar a 3 amigos. También hay un registro diario, con bonificación cada 7.º día seguido. El sitio dice que los puntos son una asignación pendiente que cuenta en su servidor y que se pagarán como $REFRAX en la cartera de Solana que añadas, en el lanzamiento. El sitio está cerrado con un código de acceso, pero un enlace de invitación te deja entrar. Cuando alguien entra con tu enlace y completa una misión, ganas puntos",
        "need": "Abre el enlace de invitación (así no necesitas el código de acceso) e inicia sesión con X (las cuentas de X muy nuevas no pueden participar). Añade una dirección de cartera de Solana para recibir (sin firma, sin conectar la cartera y sin documento de identidad). Después, haz las misiones y el registro diario (se comprobó en octubre de 2026 que el registro funciona desde Japón)",
        "warning": "El dominio se registró el 26 de octubre de 2026 y el operador es anónimo. No hay condiciones de uso, ni política de privacidad, ni documentación, y todavía no existe ningún token $REFRAX. El código del sitio parece una plantilla de lanzamiento reutilizable en la que solo se cambian el nombre, el ticker y los enlaces. No pagues nada, no conectes una cartera con tus fondos y no firmes nada que se presente como un «claim».",
        "caution": "El dominio se registró el 26 de octubre de 2026 y el operador es anónimo. No hay condiciones de uso, ni política de privacidad, ni documentación, y todavía no existe ningún token $REFRAX. El código del sitio parece una plantilla de lanzamiento reutilizable en la que solo se cambian el nombre, el ticker y los enlaces. No pagues nada, no conectes una cartera con tus fondos y no firmes nada que se presente como un «claim». Los puntos no son dinero ni tokens. El propio sitio dice que quedan pendientes hasta el lanzamiento, que no son tokens y que las cantidades solo serán definitivas en el lanzamiento, así que nada está garantizado. En octubre de 2026 la dirección del contrato de $REFRAX sigue diciendo «Launching soon» y no hay precio. No hemos encontrado el nombre del operador, su ubicación ni su financiación, ni noticias o reseñas independientes. La organización de GitHub y el código se publicaron de una vez el 27 de octubre de 2026; el nodo solo funciona como una devnet local en tu propio ordenador y no da puntos. La cuenta oficial de X se creó en octubre de 2026 y tiene unas dos publicaciones. Las misiones de X cuentan como hechas en cuanto abres el enlace y esperas unos segundos; nada comprueba que las hayas hecho de verdad. El 30 de octubre de 2026 todas las misiones se reiniciaron como «Round 2», así que vuelven a dar puntos. Iniciar sesión con X solo pide permiso de lectura (tu perfil y tus publicaciones), pero las misiones te piden seguir la cuenta y publicar promoción. Sin condiciones de uso no hay restricciones de país indicadas. Introduce solo una dirección para recibir y nunca compartas tu frase semilla ni tu clave privada. En los lanzamientos abundan los sitios de «claim» falsos y los tokens imitadores con el mismo nombre, así que usa solo enlaces de la cuenta oficial de X y de refrax.xyz. Quien te invita gana puntos cuando completas una misión, y eso incluye al responsable de este sitio, que te invita con este enlace"
      },
      "de": {
        "gain": "Vorläufige $REFRAX-Punkte (noch kein Token)",
        "note": "Aufgaben-Belohnungen der Season 0 von Refrax, einem Projekt, das sich als dezentraler, über Solana koordinierter Objektspeicher vorstellt. Laut Projekt wird jede Datei in 16 Teile zerlegt, die auf verschiedenen Nodes liegen, und beliebige 5 davon stellen sie wieder her. Melde dich mit X an und sammle Punkte für Aufgaben: dem offiziellen X-Konto folgen, den Launch-Post liken, reposten und kommentieren, deinen eigenen Einladungslink posten, eine Solana-Wallet-Adresse hinterlegen und 3 Freunde einladen. Dazu kommt ein täglicher Check-in mit einem Bonus an jedem 7. Tag in Folge. Laut der Seite sind die Punkte eine vorläufige Zuteilung, die auf ihrem Server gezählt und beim Launch als $REFRAX an die hinterlegte Solana-Wallet ausgezahlt werden soll. Die Seite ist hinter einem Zugangscode verschlossen, aber ein Einladungslink lässt dich hinein. Wenn sich jemand über deinen Link anmeldet und eine Aufgabe erledigt, bekommst du Punkte",
        "need": "Den Einladungslink öffnen (damit entfällt der Zugangscode) und mit X anmelden (sehr neue X-Konten können nicht teilnehmen). Eine Solana-Wallet-Adresse zum Empfang hinterlegen (keine Signatur, keine Wallet-Verbindung, kein Ausweis nötig). Danach die Aufgaben und den täglichen Check-in erledigen (im Oktober 2026 bestätigt: Anmeldung aus Japan möglich)",
        "warning": "Die Domain wurde erst am 26. Oktober 2026 registriert, und der Betreiber ist anonym. Es gibt keine Nutzungsbedingungen, keine Datenschutzerklärung, keine Dokumentation und noch keinen $REFRAX-Token. Der Code der Seite sieht aus wie eine wiederverwendbare Launch-Vorlage, in die nur Name, Ticker und Links eingesetzt werden. Zahle nichts, verbinde keine Wallet, auf der dein Geld liegt, und signiere nichts, was als „Claim“ angeboten wird.",
        "caution": "Die Domain wurde erst am 26. Oktober 2026 registriert, und der Betreiber ist anonym. Es gibt keine Nutzungsbedingungen, keine Datenschutzerklärung, keine Dokumentation und noch keinen $REFRAX-Token. Der Code der Seite sieht aus wie eine wiederverwendbare Launch-Vorlage, in die nur Name, Ticker und Links eingesetzt werden. Zahle nichts, verbinde keine Wallet, auf der dein Geld liegt, und signiere nichts, was als „Claim“ angeboten wird. Punkte sind weder Geld noch Token. Die Seite selbst sagt, dass sie bis zum Launch nur vorläufig sind, keine Token sind und die Mengen erst beim Launch feststehen; garantiert ist also nichts. Stand Oktober 2026 steht bei der $REFRAX-Vertragsadresse noch „Launching soon“, und es gibt keinen Preis. Name, Sitz oder Finanzierung des Betreibers konnten wir nicht finden, ebenso wenig unabhängige Berichte oder Bewertungen. Die GitHub-Organisation und der Code wurden am 27. Oktober 2026 auf einmal veröffentlicht; der Node läuft nur als lokales Devnet auf deinem eigenen Rechner und bringt keine Punkte. Das offizielle X-Konto wurde im Oktober 2026 angelegt und hat etwa zwei Beiträge. Die X-Aufgaben gelten als erledigt, sobald du den Link öffnest und ein paar Sekunden wartest; ob du sie wirklich gemacht hast, wird nicht geprüft. Am 30. Oktober 2026 wurden alle Aufgaben als „Round 2“ neu aufgesetzt und bringen erneut Punkte. Die Anmeldung mit X verlangt nur Leserechte (Profil und Beiträge), aber Aufgaben verlangen, dem Konto zu folgen und Werbung zu posten. Ohne Nutzungsbedingungen sind auch keine Länderbeschränkungen genannt. Hinterlege nur eine Empfangsadresse und gib deine Seed-Phrase oder deinen privaten Schlüssel niemals weiter. Rund um Launches gibt es oft gefälschte Claim-Seiten und Nachahmer-Token mit demselben Namen; nutze daher nur Links vom offiziellen X-Konto und von refrax.xyz. Wer dich eingeladen hat, bekommt Punkte, wenn du eine Aufgabe erledigst, und dazu gehört auch der Betreiber dieser Seite, der dich über diesen Link einlädt"
      },
      "ar": {
        "gain": "نقاط ⁦$REFRAX⁩ معلّقة (لا يوجد رمز بعد)",
        "note": "مكافآت مهام الموسم 0 من ⁦Refrax⁩، وهو مشروع يقدّم نفسه كتخزين كائنات لامركزي يُنسَّق على ⁦Solana⁩. يقول إن كل ملف يُقطَّع إلى 16 جزءًا تحفظها عقد مختلفة، وأي 5 منها تعيد بناءه. سجّل الدخول بـ⁦X⁩ واجمع النقاط بالمهام: متابعة حساب ⁦X⁩ الرسمي، والإعجاب بمنشور الإطلاق وإعادة نشره والتعليق عليه، ونشر رابط دعوتك، وإضافة عنوان محفظة ⁦Solana⁩، ودعوة 3 أصدقاء. يوجد أيضًا تسجيل حضور يومي، مع مكافأة في كل يوم سابع متتالٍ. يقول الموقع إن النقاط حصة معلّقة تُحسب على خادمه، ومن المقرر دفعها ⁦$REFRAX⁩ إلى محفظة ⁦Solana⁩ التي تضيفها عند الإطلاق. الموقع مغلق برمز دخول، لكن رابط الدعوة يُدخلك. عندما يسجّل شخص عبر رابطك ويُنهي مهمة، تحصل على نقاط",
        "need": "افتح رابط الإحالة (فلا تحتاج إلى رمز الدخول) وسجّل الدخول بحساب ⁦X⁩ (لا يمكن للحسابات الجديدة جدًا المشاركة). أضف عنوان محفظة ⁦Solana⁩ للاستلام (لا حاجة لتوقيع أو ربط المحفظة أو وثيقة هوية). ثم أنجز المهام وتسجيل الحضور اليومي (تأكدنا في أكتوبر 2026 أن التسجيل يعمل من اليابان)",
        "warning": "سُجّل النطاق في 26 أكتوبر 2026 فقط، والمشغّل مجهول الهوية. لا توجد شروط استخدام ولا سياسة خصوصية ولا وثائق، ولا يوجد رمز ⁦$REFRAX⁩ بعد. يبدو كود الموقع كقالب إطلاق يُعاد استخدامه بتغيير الاسم ورمز التداول والروابط فقط. لا تدفع أي شيء، ولا توصل محفظة فيها أموالك، ولا توقّع على أي شيء يُقدَّم على أنه «مطالبة» (⁦claim⁩).",
        "caution": "سُجّل النطاق في 26 أكتوبر 2026 فقط، والمشغّل مجهول الهوية. لا توجد شروط استخدام ولا سياسة خصوصية ولا وثائق، ولا يوجد رمز ⁦$REFRAX⁩ بعد. يبدو كود الموقع كقالب إطلاق يُعاد استخدامه بتغيير الاسم ورمز التداول والروابط فقط. لا تدفع أي شيء، ولا توصل محفظة فيها أموالك، ولا توقّع على أي شيء يُقدَّم على أنه «مطالبة» (⁦claim⁩). النقاط ليست مالًا ولا رموزًا. يقول الموقع نفسه إنها تبقى معلّقة حتى الإطلاق وليست رموزًا، وإن الكميات لا تُحسم إلا عند الإطلاق، فلا شيء مضمون. حتى أكتوبر 2026 ما زال عنوان عقد ⁦$REFRAX⁩ يقول «⁦Launching soon⁩»، ولا يوجد سعر. لم نجد اسم المشغّل ولا مقره ولا تمويله، ولا أي أخبار أو مراجعات مستقلة. نُشرت منظمة ⁦GitHub⁩ والكود دفعة واحدة في 27 أكتوبر 2026، والعقدة لا تعمل إلا كشبكة تطوير محلية (⁦devnet⁩) على حاسوبك ولا تمنح نقاطًا. أُنشئ حساب ⁦X⁩ الرسمي في أكتوبر 2026 وفيه منشوران تقريبًا. تُحتسب مهام ⁦X⁩ منجزة بمجرد فتح الرابط والانتظار بضع ثوانٍ، ولا شيء يتحقق من أنك قمت بها فعلًا. في 30 أكتوبر 2026 أُعيدت كل المهام باسم «⁦Round 2⁩»، فصارت تمنح النقاط من جديد. يطلب تسجيل الدخول بـ⁦X⁩ صلاحية القراءة فقط (ملفك الشخصي ومنشوراتك)، لكن المهام تطلب متابعة الحساب ونشر منشورات ترويجية. لا توجد شروط استخدام، فلا قيود دول مذكورة. سجّل عنوان استلام فقط، ولا تعطِ عبارة الاسترداد أو مفتاحك الخاص لأحد أبدًا. تكثر حول الإطلاقات مواقع مطالبة مزيفة ورموز مقلدة بالاسم نفسه، فاستخدم فقط الروابط من حساب ⁦X⁩ الرسمي و⁦refrax.xyz⁩. من دعاك يحصل على نقاط عندما تُنهي مهمة، ويشمل ذلك مشغّل هذا الموقع الذي دعاك عبر هذا الرابط"
      }
    }
  ],
  "PICKS": [
    {
      "id": "honeygain",
      "ja": "PCやスマホに入れておくだけ。$20たまるとPayPalで現金にできる",
      "en": "Just install it on your PC or phone. Cash out via PayPal once you reach $20",
      "zh": "装在电脑或手机上就行。攒满 $20 可通过 PayPal 提现",
      "hi": "बस PC या फ़ोन पर इंस्टॉल कर दें। $20 होने पर PayPal से नकद निकालें",
      "es": "Solo instálala en tu PC o móvil. Al llegar a $20 cobras por PayPal",
      "ar": "ثبّته على الحاسوب أو الهاتف فقط. عند بلوغ ⁦$20⁩ اسحبها نقدًا عبر PayPal",
      "de": "Einfach auf PC oder Handy installieren. Auszahlung per PayPal ab 20 $"
    },
    {
      "id": "pawns",
      "ja": "PCに入れておくだけ。$5から現金で出金できる",
      "en": "Just leave it running on your PC. Cash out from $5",
      "zh": "装在电脑上就行。满 $5 即可提现",
      "hi": "बस PC पर चालू छोड़ दें। $5 से नकद निकालें",
      "es": "Solo déjala funcionando en tu PC. Cobra en efectivo desde $5",
      "ar": "اتركه يعمل على الحاسوب فقط. اسحب أرباحك نقدًا من ⁦$5⁩",
      "de": "Einfach auf dem PC laufen lassen. Auszahlung ab 5 $"
    },
    {
      "id": "sweatcoin",
      "ja": "スマホを持って歩くだけ。たまったコインは商品や割引と交換できる",
      "en": "Just walk with your phone. Trade your coins for products and discounts",
      "zh": "带着手机走路就行。攒下的币可兑换商品或折扣",
      "hi": "बस फ़ोन साथ लेकर चलें। जमा सिक्कों को सामान और छूट से बदलें",
      "es": "Solo camina con el móvil. Cambia tus monedas por productos o descuentos",
      "ar": "احمل هاتفك وامشِ فقط. استبدل عملاتك بمنتجات أو خصومات",
      "de": "Einfach mit dem Handy gehen. Tausch deine Coins gegen Produkte und Rabatte"
    }
  ],
  "NEWS": [
    {
      "date": "2026-10-30",
      "ja": "Refrax（$REFRAX）を追加",
      "en": "Added Refrax ($REFRAX)",
      "zh": "新增 Refrax（$REFRAX）",
      "hi": "Refrax ($REFRAX) जोड़ा",
      "es": "Añadido Refrax ($REFRAX)",
      "de": "Refrax ($REFRAX) hinzugefügt",
      "ar": "أضفنا ⁦Refrax ($REFRAX)⁩"
    },
    {
      "date": "2026-10-30",
      "ja": "Life AI テストネットを追加",
      "en": "Added Life AI Testnet",
      "zh": "新增 Life AI 测试网",
      "hi": "Life AI टेस्टनेट जोड़ा",
      "es": "Añadida la testnet de Life AI",
      "de": "Life AI Testnet hinzugefügt",
      "ar": "أضفنا ⁦Life AI Testnet⁩"
    },
    {
      "date": "2026-10-29",
      "ja": "UBI4ALLを追加",
      "en": "Added UBI4ALL",
      "zh": "新增 UBI4ALL",
      "hi": "UBI4ALL जोड़ा",
      "es": "Añadido UBI4ALL",
      "de": "UBI4ALL hinzugefügt",
      "ar": "أضفنا ⁦UBI4ALL⁩"
    },
    {
      "date": "2026-10-29",
      "ja": "KABU&（カブアンド）を追加",
      "en": "Added KABU&",
      "zh": "新增 KABU&（カブアンド）",
      "hi": "KABU& जोड़ा",
      "es": "Añadido KABU&",
      "de": "KABU& hinzugefügt",
      "ar": "أضفنا ⁦KABU&⁩"
    },
    {
      "date": "2026-10-29",
      "ja": "Mining Machine（$ORE）を追加",
      "en": "Added Mining Machine ($ORE)",
      "zh": "新增 Mining Machine（$ORE）",
      "hi": "Mining Machine ($ORE) जोड़ा",
      "es": "Añadido Mining Machine ($ORE)",
      "de": "Mining Machine ($ORE) hinzugefügt",
      "ar": "أضفنا ⁦Mining Machine ($ORE)⁩"
    },
    {
      "date": "2026-10-29",
      "ja": "JrKripto（JR）を追加",
      "en": "Added JrKripto (JR)",
      "zh": "新增 JrKripto（JR）",
      "hi": "JrKripto (JR) जोड़ा",
      "es": "Añadido JrKripto (JR)",
      "de": "JrKripto (JR) hinzugefügt",
      "ar": "أضفنا ⁦JrKripto (JR)⁩"
    },
    {
      "date": "2026-10-29",
      "ja": "エッセイ「ユニバーサルハイインカムは来るのか：誰が払う？」を公開",
      "en": "Published the essay “Universal high income: who pays?”",
      "zh": "发布随笔《全民高收入：谁来买单？》",
      "hi": "निबंध “यूनिवर्सल हाई इनकम: पैसा कौन देगा?” प्रकाशित",
      "es": "Publicado el ensayo «Ingreso universal alto: ¿quién paga?»",
      "de": "Essay „Universelles Hocheinkommen: Wer zahlt?“ veröffentlicht",
      "ar": "نشرنا مقال «الدخل المرتفع الشامل: من يدفع؟»"
    },
    {
      "date": "2026-10-28",
      "ja": "掲載中のプロジェクト向けのバッジを追加",
      "en": "Added badges for listed projects",
      "zh": "新增给已收录项目的徽章",
      "hi": "सूचीबद्ध प्रोजेक्ट के लिए बैज जोड़े",
      "es": "Añadidas insignias para los proyectos listados",
      "de": "Badges für gelistete Projekte hinzugefügt",
      "ar": "أضفنا شارات للمشاريع المدرجة"
    },
    {
      "date": "2026-10-28",
      "ja": "ベーシックインカムのオープンソースプロジェクトの一覧を追加",
      "en": "Added a list of open-source basic income projects",
      "zh": "新增基本收入开源项目列表",
      "hi": "बेसिक इनकम के ओपन-सोर्स प्रोजेक्ट की सूची जोड़ी",
      "es": "Añadida una lista de proyectos de código abierto sobre renta básica",
      "de": "Liste von Open-Source-Projekten zum Grundeinkommen hinzugefügt",
      "ar": "أضفنا قائمة بمشاريع الدخل الأساسي المفتوحة المصدر"
    },
    {
      "date": "2026-10-28",
      "ja": "更新情報のRSSフィードを追加",
      "en": "Added RSS feeds for updates",
      "zh": "新增更新信息的 RSS 订阅",
      "hi": "अपडेट के लिए RSS फ़ीड जोड़े",
      "es": "Añadidos feeds RSS de novedades",
      "de": "RSS-Feeds für Neuigkeiten hinzugefügt",
      "ar": "أضفنا خلاصات ⁦RSS⁩ للتحديثات"
    },
    {
      "date": "2026-10-28",
      "ja": "エッセイ「AIエージェントにベーシックインカムは必要か」を公開",
      "en": "Published the essay “Should AI agents get a basic income?”",
      "zh": "发布随笔《AI 智能体需要基本收入吗？》",
      "hi": "निबंध “क्या AI एजेंटों को बेसिक इनकम मिलनी चाहिए?” प्रकाशित",
      "es": "Publicado el ensayo «¿Deberían los agentes de IA tener una renta básica?»",
      "de": "Essay „Brauchen KI-Agenten ein Grundeinkommen?“ veröffentlicht",
      "ar": "نشرنا مقال «هل ينبغي أن يحصل وكلاء الذكاء الاصطناعي على دخل أساسي؟»"
    },
    {
      "date": "2026-10-28",
      "ja": "ベーシックインカム社会実験の年表を追加",
      "en": "Added a timeline of basic income experiments",
      "zh": "新增基本收入实验年表",
      "hi": "बेसिक इनकम प्रयोगों की समयरेखा जोड़ी",
      "es": "Añadida una cronología de experimentos de renta básica",
      "de": "Zeitleiste der Grundeinkommen-Experimente hinzugefügt",
      "ar": "أضفنا خطًا زمنيًا لتجارب الدخل الأساسي"
    },
    {
      "date": "2026-10-28",
      "ja": "認証方法ごとのページを追加（World ID など）",
      "en": "Added pages by verification method (World ID and more)",
      "zh": "新增按验证方式分类的页面（World ID 等）",
      "hi": "वेरिफ़िकेशन के तरीके के हिसाब से पेज जोड़े (World ID आदि)",
      "es": "Añadidas páginas por método de verificación (World ID y más)",
      "de": "Seiten nach Verifizierungsmethode hinzugefügt (World ID u. a.)",
      "ar": "أضفنا صفحات حسب طريقة التحقق (⁦World ID⁩ وغيرها)"
    },
    {
      "date": "2026-10-28",
      "ja": "終了したサービスの墓場のページを追加",
      "en": "Added The Free Lunch Graveyard page",
      "zh": "新增已结束服务的墓地页面",
      "hi": "बंद हो चुकी सेवाओं के क़ब्रिस्तान का पेज जोड़ा",
      "es": "Añadida la página del cementerio del almuerzo gratis",
      "de": "Seite „Friedhof der Gratis-Mittagessen“ hinzugefügt",
      "ar": "أضفنا صفحة مقبرة الغداء المجاني"
    },
    {
      "date": "2026-10-26",
      "ja": "FheID（Privasea）を追加",
      "en": "Added FheID (Privasea)",
      "zh": "新增 FheID（Privasea）",
      "hi": "FheID (Privasea) जोड़ा",
      "es": "Añadido FheID (Privasea)",
      "de": "FheID (Privasea) hinzugefügt",
      "ar": "أضفنا ⁦FheID (Privasea)⁩"
    },
    {
      "date": "2026-10-26",
      "ja": "RewardMeを追加",
      "en": "Added RewardMe",
      "zh": "新增 RewardMe",
      "hi": "RewardMe जोड़ा",
      "es": "Añadido RewardMe",
      "de": "RewardMe hinzugefügt",
      "ar": "أضفنا ⁦RewardMe⁩"
    },
    {
      "date": "2026-10-26",
      "ja": "Idena（iDNA）を追加",
      "en": "Added Idena (iDNA)",
      "zh": "新增 Idena（iDNA）",
      "hi": "Idena (iDNA) जोड़ा",
      "es": "Añadido Idena (iDNA)",
      "de": "Idena (iDNA) hinzugefügt",
      "ar": "أضفنا ⁦Idena (iDNA)⁩"
    },
    {
      "date": "2026-10-26",
      "ja": "Billionsを追加",
      "en": "Added Billions",
      "zh": "新增 Billions",
      "hi": "Billions जोड़ा",
      "es": "Añadido Billions",
      "de": "Billions hinzugefügt",
      "ar": "أضفنا ⁦Billions⁩"
    },
    {
      "date": "2026-10-26",
      "ja": "Humad（World App）を追加",
      "en": "Added Humad (World App)",
      "zh": "新增 Humad（World App）",
      "hi": "Humad (World App) जोड़ा",
      "es": "Añadido Humad (World App)",
      "de": "Humad (World App) hinzugefügt",
      "ar": "أضفنا ⁦Humad (World App)⁩"
    },
    {
      "date": "2026-10-25",
      "ja": "サイト名を「不労所得研究所（Free Lunch Lab）」に変更",
      "en": "Renamed the site to Free Lunch Lab",
      "zh": "网站更名为 Free Lunch Lab（免费午餐研究所）",
      "hi": "साइट का नाम बदलकर Free Lunch Lab किया",
      "es": "El sitio ahora se llama Free Lunch Lab",
      "de": "Die Seite heißt jetzt Free Lunch Lab",
      "ar": "غيّرنا اسم الموقع إلى ⁦Free Lunch Lab⁩ (مختبر الغداء المجاني)"
    },
    {
      "date": "2026-10-25",
      "ja": "ドイツ語版を追加",
      "en": "Added a German version",
      "zh": "新增德语版",
      "hi": "जर्मन संस्करण जोड़ा",
      "es": "Añadida la versión en alemán",
      "ar": "أضفنا النسخة الألمانية",
      "de": "Deutsche Version hinzugefügt"
    },
    {
      "date": "2026-10-24",
      "ja": "WowAppを追加",
      "en": "Added WowApp",
      "zh": "新增 WowApp",
      "hi": "WowApp जोड़ा",
      "es": "Añadido WowApp",
      "ar": "أضفنا ⁦WowApp⁩",
      "de": "WowApp hinzugefügt"
    },
    {
      "date": "2026-10-24",
      "ja": "Gradidoを追加",
      "en": "Added Gradido",
      "zh": "新增 Gradido",
      "hi": "Gradido जोड़ा",
      "es": "Añadido Gradido",
      "ar": "أضفنا ⁦Gradido⁩",
      "de": "Gradido hinzugefügt"
    },
    {
      "date": "2026-10-24",
      "ja": "Ubiquitusを追加（アメリカ在住者向け）",
      "en": "Added Ubiquitus (US residents only)",
      "zh": "新增 Ubiquitus（仅限美国居民）",
      "hi": "Ubiquitus जोड़ा (सिर्फ़ अमेरिकी निवासियों के लिए)",
      "es": "Añadido Ubiquitus (solo residentes en EE. UU.)",
      "ar": "أضفنا ⁦Ubiquitus⁩ (للمقيمين في الولايات المتحدة فقط)",
      "de": "Ubiquitus hinzugefügt (nur Wohnsitz in den USA)"
    },
    {
      "date": "2026-10-24",
      "ja": "AI-DAC（World App）を追加",
      "en": "Added AI-DAC (World App)",
      "zh": "新增 AI-DAC（World App）",
      "hi": "AI-DAC (World App) जोड़ा",
      "es": "Añadido AI-DAC (World App)",
      "ar": "أضفنا ⁦AI-DAC (World App)⁩",
      "de": "AI-DAC (World App) hinzugefügt"
    },
    {
      "date": "2026-10-24",
      "ja": "UBIの団体・プロジェクトのページを追加",
      "en": "Added a page of UBI organizations & projects",
      "zh": "新增 UBI 团体与项目页面",
      "hi": "UBI संगठनों और प्रोजेक्ट का पेज जोड़ा",
      "es": "Añadida una página de organizaciones y proyectos de RBU",
      "ar": "أضفنا صفحة منظمات ومشاريع الدخل الأساسي",
      "de": "Seite mit Organisationen & Projekten zum Grundeinkommen hinzugefügt"
    },
    {
      "date": "2026-10-24",
      "ja": "AXO（World App）を追加",
      "en": "Added AXO (World App)",
      "zh": "新增 AXO（World App）",
      "hi": "AXO (World App) जोड़ा",
      "es": "Añadido AXO (World App)",
      "ar": "أضفنا ⁦AXO (World App)⁩",
      "de": "AXO (World App) hinzugefügt"
    },
    {
      "date": "2026-10-24",
      "ja": "ORO（World App）を追加",
      "en": "Added ORO (World App)",
      "zh": "新增 ORO（World App）",
      "hi": "ORO (World App) जोड़ा",
      "es": "Añadido ORO (World App)",
      "ar": "أضفنا ⁦ORO (World App)⁩",
      "de": "ORO (World App) hinzugefügt"
    },
    {
      "date": "2026-10-24",
      "ja": "Dotareを追加",
      "en": "Added Dotare",
      "zh": "新增 Dotare",
      "hi": "Dotare जोड़ा",
      "es": "Añadido Dotare",
      "ar": "أضفنا ⁦Dotare⁩",
      "de": "Dotare hinzugefügt"
    },
    {
      "date": "2026-10-24",
      "ja": "Palaiを追加",
      "en": "Added Palai",
      "zh": "新增 Palai",
      "hi": "Palai जोड़ा",
      "es": "Añadido Palai",
      "ar": "أضفنا ⁦Palai⁩",
      "de": "Palai hinzugefügt"
    },
    {
      "date": "2026-10-23",
      "ja": "Circles（Gnosis App）を追加",
      "en": "Added Circles (Gnosis App)",
      "zh": "新增 Circles（Gnosis App）",
      "hi": "Circles (Gnosis App) जोड़ा",
      "es": "Añadido Circles (Gnosis App)",
      "ar": "أضفنا ⁦Circles (Gnosis App)⁩",
      "de": "Circles (Gnosis App) hinzugefügt"
    },
    {
      "date": "2026-10-23",
      "ja": "Ğ1（ジューン）を追加",
      "en": "Added Ğ1 (June)",
      "zh": "新增 Ğ1",
      "hi": "Ğ1 जोड़ा",
      "es": "Añadido Ğ1",
      "ar": "أضفنا ⁦Ğ1⁩",
      "de": "Ğ1 (June) hinzugefügt"
    },
    {
      "date": "2026-10-21",
      "ja": "Mein Grundeinkommenを追加",
      "en": "Added Mein Grundeinkommen",
      "zh": "新增 Mein Grundeinkommen",
      "hi": "Mein Grundeinkommen जोड़ा",
      "es": "Añadido Mein Grundeinkommen",
      "ar": "أضفنا ⁦Mein Grundeinkommen⁩",
      "de": "Mein Grundeinkommen hinzugefügt"
    },
    {
      "date": "2026-10-09",
      "ja": "トリマを追加",
      "en": "Added Trima",
      "zh": "新增 Trima",
      "hi": "Trima जोड़ा",
      "es": "Añadido Trima",
      "ar": "أضفنا ⁦Trima⁩",
      "de": "Trima hinzugefügt"
    },
    {
      "date": "2026-10-09",
      "ja": "InterLinkを追加",
      "en": "Added InterLink",
      "zh": "新增 InterLink",
      "hi": "InterLink जोड़ा",
      "es": "Añadido InterLink",
      "ar": "أضفنا InterLink",
      "de": "InterLink hinzugefügt"
    },
    {
      "date": "2026-10-09",
      "ja": "「おすすめ3つ」と信頼度の表示を追加",
      "en": "Added top 3 picks and trust indicators",
      "zh": "新增“推荐 3 个”和可信度标识",
      "hi": "टॉप 3 सुझाव और भरोसे के संकेत जोड़े",
      "es": "Añadidas las 3 recomendadas y los indicadores de confianza",
      "ar": "أضفنا أفضل 3 خيارات ومؤشرات الثقة",
      "de": "Top-3-Empfehlungen und Vertrauenscheck hinzugefügt"
    },
    {
      "date": "2026-10-09",
      "ja": "WAVEEを「海外OK」に更新",
      "en": "WAVEE is now marked Global",
      "zh": "WAVEE 更新为“全球”可用",
      "hi": "WAVEE को “ग्लोबल” किया",
      "es": "WAVEE ahora aparece como Global",
      "ar": "صار WAVEE يحمل علامة «عالمي»",
      "de": "WAVEE ist jetzt als „Weltweit“ markiert"
    },
    {
      "date": "2026-10-09",
      "ja": "Delta Kimを追加",
      "en": "Added Delta Kim",
      "zh": "新增 Delta Kim",
      "hi": "Delta Kim जोड़ा",
      "es": "Añadido Delta Kim",
      "ar": "أضفنا Delta Kim",
      "de": "Delta Kim hinzugefügt"
    },
    {
      "date": "2026-10-09",
      "ja": "Pi Networkを追加",
      "en": "Added Pi Network",
      "zh": "新增 Pi Network",
      "hi": "Pi Network जोड़ा",
      "es": "Añadido Pi Network",
      "ar": "أضفنا Pi Network",
      "de": "Pi Network hinzugefügt"
    },
    {
      "date": "2026-10-09",
      "ja": "Pawns.appを追加",
      "en": "Added Pawns.app",
      "zh": "新增 Pawns.app",
      "hi": "Pawns.app जोड़ा",
      "es": "Añadido Pawns.app",
      "ar": "أضفنا Pawns.app",
      "de": "Pawns.app hinzugefügt"
    },
    {
      "date": "2026-10-09",
      "ja": "Sweatcoinを追加",
      "en": "Added Sweatcoin",
      "zh": "新增 Sweatcoin",
      "hi": "Sweatcoin जोड़ा",
      "es": "Añadido Sweatcoin",
      "ar": "أضفنا Sweatcoin",
      "de": "Sweatcoin hinzugefügt"
    },
    {
      "date": "2026-10-08",
      "ja": "デザインを一新",
      "en": "Redesigned the site",
      "zh": "网站改版",
      "hi": "साइट का नया डिज़ाइन",
      "es": "Nuevo diseño del sitio",
      "ar": "تصميم جديد للموقع",
      "de": "Seite neu gestaltet"
    },
    {
      "date": "2026-10-08",
      "ja": "Honeygainを追加",
      "en": "Added Honeygain",
      "zh": "新增 Honeygain",
      "hi": "Honeygain जोड़ा",
      "es": "Añadido Honeygain",
      "ar": "أضفنا Honeygain",
      "de": "Honeygain hinzugefügt"
    },
    {
      "date": "2026-10-08",
      "ja": "Grassを追加",
      "en": "Added Grass",
      "zh": "新增 Grass",
      "hi": "Grass जोड़ा",
      "es": "Añadido Grass",
      "ar": "أضفنا Grass",
      "de": "Grass hinzugefügt"
    }
  ],
  "CATS": {
    "ja": {
      "all": "すべて",
      "crypto-bi": "暗号資産BI",
      "exchange": "暗号資産取引所",
      "finance": "カード・銀行",
      "pointsite": "ポイントサイト",
      "career": "仕事マッチング",
      "app": "ほったらかしアプリ",
      "ai-agent": "AIエージェント向け"
    },
    "en": {
      "all": "All",
      "crypto-bi": "Crypto UBI",
      "exchange": "Crypto exchanges",
      "finance": "Cards & banks",
      "pointsite": "Cashback sites",
      "career": "Job matching",
      "app": "Passive apps",
      "ai-agent": "For AI agents"
    },
    "hi": {
      "all": "सभी",
      "crypto-bi": "क्रिप्टो UBI",
      "exchange": "क्रिप्टो एक्सचेंज",
      "finance": "कार्ड और बैंक",
      "pointsite": "कैशबैक साइट",
      "career": "जॉब मैचिंग",
      "app": "पैसिव ऐप",
      "ai-agent": "AI एजेंटों के लिए"
    },
    "zh": {
      "all": "全部",
      "crypto-bi": "加密货币 UBI",
      "exchange": "加密货币交易所",
      "finance": "信用卡与银行",
      "pointsite": "返利网站",
      "career": "工作匹配",
      "app": "躺赚应用",
      "ai-agent": "面向 AI 智能体"
    },
    "es": {
      "all": "Todos",
      "crypto-bi": "UBI cripto",
      "exchange": "Exchanges cripto",
      "finance": "Tarjetas y bancos",
      "pointsite": "Cashback",
      "career": "Empleo",
      "app": "Apps pasivas",
      "ai-agent": "Para agentes de IA"
    },
    "ar": {
      "all": "الكل",
      "crypto-bi": "دخل أساسي مشفّر",
      "exchange": "منصات تداول",
      "finance": "بطاقات وبنوك",
      "pointsite": "استرداد نقدي",
      "career": "توظيف",
      "app": "تطبيقات سلبية",
      "ai-agent": "لوكلاء الذكاء الاصطناعي"
    },
    "de": {
      "all": "Alle",
      "crypto-bi": "Krypto-Grundeinkommen",
      "exchange": "Krypto-Börsen",
      "finance": "Karten & Banken",
      "pointsite": "Cashback-Seiten",
      "career": "Jobvermittlung",
      "app": "Passive Apps",
      "ai-agent": "Für KI-Agenten"
    }
  },
  "T": {
    "ja": {
      "brand": "不労所得<span>研究所</span>",
      "navList": "一覧",
      "navHow": "使い方",
      "navFaq": "よくある質問",
      "pr": "このページには紹介リンク・紹介コードが含まれます。経由して登録すると、運営者にも特典が入ることがあります。",
      "eyebrow": "存在するだけでもらえるアプリ・プロジェクト",
      "h1": "登録するだけで<br><em>入金</em>される<br>サービス帳。",
      "lede": "<b>存在するだけで</b>お金やトークンがもらえる、ベーシックインカム型のアプリやプロジェクトを集めました（ポイ活アプリも少し）。今はほとんどが「人間であること」の確認つきですが、<a href=\"essays/ai-agent-basic-income/\">AIエージェント向けのしくみ</a>が出てきたら、それも載せます。それぞれ<b>リスクや換金の実情</b>もあわせて紹介しています。一部は紹介リンクです。",
      "ctaList": "サービスを見る",
      "ctaHow": "使い方",
      "statAll": "掲載サービス",
      "statLoop": "継続して入るもの",
      "statGlobal": "海外からも使えるもの",
      "statDate": "情報の確認月",
      "bookTitle": "普通預金 ご入金明細",
      "thDate": "年月日",
      "thMemo": "摘要",
      "thIn": "お預り",
      "r1": "キュウフ G$",
      "r1v": "毎日",
      "r2": "キュウフ MEC",
      "r2v": "毎日",
      "r3": "キュウフ PoY",
      "r3v": "毎月",
      "r4": "ショウカイ ハピタス",
      "r5": "ホウシュウ WAVEE",
      "r5v": "マッチ時",
      "bookNote": "※ イメージです。実際の特典と条件は各カードをご確認ください。",
      "hanko": "寝て<br>た日",
      "listH": "サービス一覧",
      "loopOnly": "継続して入るものだけ",
      "tagLoop": "継続",
      "legLoop": "一度登録すれば、毎日・毎月などくり返し入る",
      "tagOnce": "1回",
      "legOnce": "登録時に1回だけもらえる紹介特典",
      "legEase": "ラク度（編集部の主観）",
      "howH": "登録のしかた",
      "s1h": "ボタンから開く",
      "s1": "カードの「紹介リンクから登録する」を押すと、公式サイトやアプリが開きます。ほとんどのサービスは、リンクから開くだけで紹介が反映されます。",
      "s2h": "そのまま登録する",
      "s2": "開いた画面のまま登録を済ませます。途中で別のブラウザやアプリに切り替えると紹介が反映されないことがあるので、同じ画面で続けるのが確実です。",
      "s3h": "条件を満たす",
      "s3": "本人確認や初回利用など、特典の条件を満たすと付与されます。条件はサービスごとに違います。",
      "faqH": "よくある質問",
      "q1": "これって本当のベーシックインカム？",
      "a1": "国が全員に配る本来のベーシックインカムとは別物です。ここでの「BI」は、GoodDollar や BioMatrix のように、登録した人に無条件でくり返しトークンを配るプロジェクトのことです。日本ではまだ国のベーシックインカムは導入されていません。",
      "q2": "紹介コードを使うと損をしますか？",
      "a2": "ふつうは損をしません。紹介経由でも登録の条件や手数料は同じで、紹介された側にも特典が付くサービスがほとんどです。紹介した側にも報酬が入るので、このページには PR 表記を入れています。",
      "q3": "もらった暗号資産やポイントに税金はかかる？",
      "a3": "暗号資産は、売ったり使ったりして利益が出ると原則として雑所得になります。ポイントは多くの場合、一時所得として扱われます。金額が大きくなったら、国税庁の情報や税理士で確認してください。",
      "q4": "海外に住んでいても使えますか？",
      "a4": "「海外OK」の付いたサービス（{list}）は海外からも使えます。Ubiquitus はアメリカ在住者のみ、そのほかは日本在住者向けです。",
      "warnH": "登録の前に",
      "warnT": "知っておきたいこと",
      "w1": "特典の額や条件はよく変わります。登録前に、必ず公式サイトのキャンペーンページを確認してください。",
      "w2": "暗号資産でもらう特典は価格が上下します。",
      "w4": "「月◯万円が自動で入る」と高額な教材に誘導するものは、ここで紹介しているサービスとは別物です。",
      "foot": "2026年10月時点の情報です。投資を勧めるものではありません。",
      "brandPlain": "不労所得研究所",
      "count": "{n}件を表示中",
      "none": "条件に合うサービスはありません。",
      "global": "海外OK",
      "jp": "日本在住者向け",
      "need": "条件",
      "ease": "ラク度",
      "cautionP": "注意：",
      "svcWarnH": "登録する前に読んでください",
      "code": "CODE",
      "pending": "準備中",
      "copy": "コピー",
      "goRef": "紹介リンクから登録する",
      "goOff": "公式サイトを見る",
      "goCode": "アプリを入れてコードを入力",
      "copied": "コードをコピーしました",
      "selected": "選択しました。長押しでコピーできます",
      "title": "不労所得研究所",
      "region": "地域",
      "filterLabel": "カテゴリで絞り込む",
      "metaDesc": "存在するだけでお金がもらえる、ベーシックインカム型のアプリやプロジェクト（Ğ1、Circles、Gradido、Idena など）の一覧。リスクや換金のしやすさもあわせて紹介。一部は紹介リンクです。",
      "navLabel": "セクション",
      "langLabel": "言語",
      "shareH": "友だちにも教える",
      "shareSub": "「不労所得研究所」を知らない人に、こっそり教えてあげてください。",
      "shareText": "登録するだけで入金されるサービス、まとめてみた😴💰 #不労所得研究所 #ポイ活",
      "copyLink": "リンクをコピー",
      "linkCopied": "リンクをコピーしました",
      "share": "シェア",
      "sleepL": "このページを開いて",
      "sleepS": "ほったらかしアプリなら、この間もずっと裏で動いています",
      "badgeMax": "ほったらかし度MAX",
      "picksH": "まず入れるならこの3つ",
      "picksSub": "手間が少なく、海外からも使えて、ちゃんと交換できるものから選びました。",
      "pickMore": "くわしく見る",
      "trustLabel": "信頼の目安",
      "trustCash": "換金",
      "trustPrice": "市場価格",
      "trustOp": "運営元",
      "trustCashD": "換金（現金にできるか）",
      "trustPriceD": "市場価格（トークンに値段がついているか）",
      "trustOpD": "運営元公開（運営元が公開されているか）",
      "tYes": "あり",
      "tPartial": "条件つき",
      "tNo": "なし",
      "tUnknown": "未確認",
      "newsH": "新着・更新履歴",
      "dawnH": "おはよう。<br>寝ているあいだに、入金されてるかも。",
      "dawnSub": "アプリを開いて、残高をのぞいてみましょう。まだなら、今夜のぶんを仕込んでおけます。",
      "dawnCta": "サービス一覧へ",
      "more": "もっと見る",
      "less": "閉じる",
      "svcTitle": "{name}とは？もらえるもの・始め方",
      "hGain": "もらえるもの",
      "hAbout": "{name}とは",
      "hNeed": "始め方・条件",
      "hRelated": "関連サービス",
      "backList": "サービス一覧に戻る",
      "crumbLabel": "パンくずリスト",
      "orgsTitle": "UBIの団体・プロジェクト",
      "orgsH1": "ベーシックインカムの団体・プロジェクト",
      "orgsDesc": "ベーシックインカム（UBI）を推進・研究・実践している世界と日本の団体・プロジェクトを、種類別にまとめました。各団体の現状は2026年10月に確認しています。",
      "orgsIntro": "ベーシックインカムについてもっと知りたい人、支援や参加の入り口を探している人のための一覧です。お金がもらえるサービスではなく、推進・研究・現金給付などに取り組む団体を種類別にまとめています。",
      "orgsFounded": "設立",
      "orgsOnSite": "このサイトの紹介ページ",
      "orgsRelated": "関連する団体・プロジェクト",
      "orgsSecH": "ベーシックインカムに取り組む団体",
      "orgsSecP": "ここからは、お金がもらえるサービスではなく、ベーシックインカムを研究・推進したり、実際に現金を配ったりしている団体の紹介です。登録して何かをもらうためのものではありません。",
      "orgsSecBtn": "団体一覧を見る（{n}団体）",
      "only_us": "アメリカ在住者向け",
      "brandSub": "Free Lunch Lab",
      "tagline": "タダ飯は、ある。",
      "ghLabel": "GitHubでデータ公開中",
      "checkedOn": "{date}に確認",
      "graveTitle": "終了したサービスの墓場",
      "graveIntro": "かつてお金やポイントを配っていたけれど、いまは終わってしまったサービスやプログラムの記録です。終了が公式発表や信頼できる情報で確かめられたものだけを載せています。ごちそうさまでした。安らかに。",
      "graveDesc": "かつてお金やポイントを配っていて、終了が確認されたサービス・プログラムの記録（World の WLD エアドロップ、Miles など）。終了時期と理由、出典つき。",
      "graveWhat": "どんなものだったか",
      "graveEnded": "終了",
      "graveWhy": "終わった理由",
      "graveSource": "出典",
      "graveOnSite": "このサイトの紹介ページ",
      "verifyH": "認証方法で探す",
      "verifyLabel": "認証方法",
      "verifyOpt": "任意",
      "verifyReqH": "この認証が必要なサービス",
      "verifyOptH": "この認証を任意で使えるサービス",
      "verifyAll": "認証方法の一覧",
      "tlTitle": "ベーシックインカム社会実験の年表",
      "tlIntro": "世界で行われてきたベーシックインカムや現金給付の主な実験・制度を、年代順にまとめました。結果はそれぞれの発表元の説明をもとにしています。出典が確かめられたものだけを載せています。",
      "tlDesc": "Mincome、アラスカの配当、ナミビア、フィンランド、ストックトン、OpenResearch、ドイツのパイロットなど、ベーシックインカム実験と制度の年表。実施者・給付・結果・出典つき。",
      "tlWho": "実施",
      "tlPaid": "内容",
      "tlResult": "結果",
      "tlSource": "出典",
      "tlGov": "政府",
      "tlNgo": "NGO・研究",
      "tlPrivate": "民間・抽選",
      "tlCrypto": "暗号資産・コミュニティ",
      "tlOnSite": "このサイトの関連ページ",
      "tlLink": "ベーシックインカム社会実験の年表を見る",
      "essaysTitle": "エッセイ",
      "essayBy": "文：Free Lunch Lab",
      "essayOpinion": "意見",
      "essaySources": "出典",
      "essayPublished": "公開",
      "essayRelated": "関連エッセイ",
      "rssLabel": "RSSフィード",
      "ossTitle": "ベーシックインカムのオープンソース",
      "ossH1": "ベーシックインカムを支えるオープンソースのコード",
      "ossDesc": "ベーシックインカムにかかわるオープンソースのコードの一覧。UBIのプロトコル、ウォレット、人間であることの証明、政策シミュレーターを、ライセンス・スター数・最終コミット日つきで紹介。",
      "ossIntro": "だれでも読めて、動かせて、改良できるベーシックインカムのコード。UBIを発行するプロトコル、受け取りに使うウォレット、人間であることを証明するしくみ、ベーシックインカムの費用を見積もるシミュレーターを集めた。スター数と最終コミット日はサイトのビルド時に GitHub と GitLab から取得し、12か月以上コミットがないものには「休眠中」と表示する。",
      "ossSecH": "ベーシックインカムを動かすオープンソースのコード",
      "ossSecP": "ソースコードが公開されているUBIのプロトコル、ウォレット、人間証明のしくみ、政策シミュレーター。読むのも、動かすのも、貢献するのも自由。",
      "ossSecBtn": "オープンソースのプロジェクトをすべて見る（{n}）",
      "ossLang": "言語",
      "ossLicense": "ライセンス",
      "ossStars": "スター",
      "ossLastCommit": "最終コミット",
      "ossDormant": "休眠中",
      "ossDormantTip": "12か月以上コミットがない",
      "ossArchived": "アーカイブ済み",
      "ossEssay": "関連エッセイ",
      "ossFetched": "スター数とコミット日は {date} 時点",
      "ossUnknown": "不明",
      "badgeTitle": "バッジ",
      "badgeH1": "掲載中のプロジェクト向けバッジ",
      "badgeDesc": "このサイトに載っているプロジェクト向けの「Listed on Free Lunch Lab」バッジ。サービス、オープンソース、団体ごとに、そのままコピーできる Markdown と HTML を用意しました。",
      "badgeIntro": "ここに載っているプロジェクトなら、このバッジを自由に貼ってください。無料です。貼らなくても、もちろん大丈夫です。",
      "badgeNote": "どのコードも、このサイト内のそのプロジェクトのページにリンクします。掲載はお墨付きではなく、バッジを貼っても貼らなくても、紹介の中身は変わりません。",
      "badgePreviewH": "バッジの種類",
      "badgeFlat": "README 用（高さ20px）",
      "badgeCard": "サイト用（240×60）",
      "badgeDark": "ダーク",
      "badgeLight": "ライト",
      "badgeSvcH": "サービス",
      "badgeOssH": "オープンソース",
      "badgeOrgH": "団体・プロジェクト",
      "badgeCopied": "コピーしました"
    },
    "en": {
      "brand": "Free Lunch <span>Lab</span>",
      "brandPlain": "Free Lunch Lab",
      "navList": "Services",
      "navHow": "How it works",
      "navFaq": "FAQ",
      "pr": "This page contains referral links and codes. If you sign up through them, the site owner may also receive a bonus.",
      "eyebrow": "Apps that pay you just for existing",
      "h1": "Sign up once.<br>Get <em>paid</em><br>while you sleep.",
      "lede": "Basic-income-style apps and projects that pay you <b>just for existing</b>, from daily token claims to community currencies, plus a few point apps. Most check that you’re human for now; <a href=\"essays/ai-agent-basic-income/\">AI agents are welcome here</a> when such schemes appear. Each one notes the <b>risks and how cashing out really works</b>. Some links are referral links.",
      "ctaList": "See the services",
      "ctaHow": "How it works",
      "statAll": "services listed",
      "statLoop": "pay out repeatedly",
      "statGlobal": "work outside Japan",
      "statDate": "last checked",
      "bookTitle": "STATEMENT OF DEPOSITS",
      "thDate": "DATE",
      "thMemo": "DESCRIPTION",
      "thIn": "CREDIT",
      "r1": "GRANT G$",
      "r1v": "DAILY",
      "r2": "GRANT MEC",
      "r2v": "DAILY",
      "r3": "GRANT POY",
      "r3v": "MONTHLY",
      "r4": "REFERRAL HAPITAS",
      "r5": "REWARD WAVEE",
      "r5v": "ON MATCH",
      "bookNote": "Illustration only. See each card for the actual bonus and conditions.",
      "hanko": "PAID<br>ASLEEP",
      "listH": "Services",
      "loopOnly": "Recurring only",
      "tagLoop": "Recurring",
      "tagOnce": "One-time",
      "legLoop": "Pays out again and again after you sign up",
      "legOnce": "A one-time bonus for joining via referral",
      "legEase": "Ease (our own rating)",
      "howH": "How to sign up",
      "s1h": "Tap the button",
      "s1": "Tap “Sign up with referral” on a card to open the official site or app. For most services, opening the link is all it takes to apply the referral.",
      "s2h": "Sign up right there",
      "s2": "Finish signing up on the page that opens. Switching to another browser or app midway can lose the referral, so stay on the same screen.",
      "s3h": "Meet the conditions",
      "s3": "The bonus arrives after you meet the conditions, such as ID verification or a first purchase. Each service is different.",
      "faqH": "FAQ",
      "q1": "Is this a real basic income?",
      "a1": "Not the government kind. Here, “UBI” means projects like GoodDollar and BioMatrix that give tokens to every registered person, repeatedly and without conditions. Japan has no national basic income yet.",
      "q2": "Do I lose anything by using a referral code?",
      "a2": "Usually not. Fees and conditions are the same, and most services give the new user a bonus too. The referrer also gets a reward, which is why this page is marked PR.",
      "q3": "Are the rewards taxed?",
      "a3": "In Japan, crypto counts as miscellaneous income when you sell or spend it at a profit, and points are usually treated as occasional income. Rules differ by country, so check your local tax authority if the amounts add up.",
      "q4": "Can I use these outside Japan?",
      "a4": "Services marked “Global” ({list}) work outside Japan. Ubiquitus is for US residents only; the rest are for Japan residents.",
      "warnH": "Before you sign up",
      "warnT": "Good to know",
      "w1": "Bonus amounts and conditions change often. Always check the official campaign page before signing up.",
      "w2": "Crypto rewards go up and down in value.",
      "w4": "Courses that promise “¥100,000 a month on autopilot” for a high fee have nothing to do with the services listed here.",
      "foot": "Information as of October 2026. This is not investment advice.",
      "count": "{n} services shown",
      "none": "No services match these filters.",
      "global": "Global",
      "jp": "Japan only",
      "need": "To get it",
      "ease": "Ease",
      "cautionP": "Note: ",
      "svcWarnH": "Read this before signing up",
      "code": "CODE",
      "pending": "Coming soon",
      "copy": "Copy",
      "goRef": "Sign up with referral",
      "goOff": "Visit official site",
      "goCode": "Get the app & enter the code",
      "copied": "Code copied",
      "selected": "Code selected. Copy it from the menu",
      "title": "Free Lunch Lab",
      "region": "Region",
      "filterLabel": "Filter by category",
      "metaDesc": "Apps and projects that pay you just for existing, basic-income style, like Ğ1, Circles, Gradido and Idena. Risks and cash-out noted. Some referral links.",
      "navLabel": "Sections",
      "langLabel": "Language",
      "shareH": "Share this list",
      "shareSub": "Know someone who would rather earn in their sleep? Send it their way.",
      "shareText": "Apps that pay you while you sleep 😴💰 Crypto UBI and passive income apps, all in one list",
      "copyLink": "Copy link",
      "linkCopied": "Link copied",
      "share": "Share",
      "sleepL": "Time on this page",
      "sleepS": "Passive apps keep running in the background the whole time",
      "badgeMax": "Set & forget",
      "picksH": "Start with these 3",
      "picksSub": "Picked for low effort, working outside Japan, and a real way to cash out or redeem.",
      "pickMore": "See details",
      "trustLabel": "Trust check",
      "trustCash": "Cash",
      "trustPrice": "Price",
      "trustOp": "Operator",
      "trustCashD": "Cash out (can it become real money)",
      "trustPriceD": "Market price (does the token trade at a price)",
      "trustOpD": "Operator (is the company behind it public)",
      "tYes": "Yes",
      "tPartial": "With conditions",
      "tNo": "No",
      "tUnknown": "Unverified",
      "newsH": "What’s new",
      "dawnH": "Good morning.<br>Something may have landed while you slept.",
      "dawnSub": "Open your apps and peek at the balance. Haven’t started yet? Set one up for tonight.",
      "dawnCta": "Back to the list",
      "more": "Show more",
      "less": "Show less",
      "svcTitle": "What is {name}? What you get & how to start",
      "hGain": "What you get",
      "hAbout": "What is {name}?",
      "hNeed": "How to start",
      "hRelated": "Related services",
      "backList": "Back to the list",
      "crumbLabel": "Breadcrumb",
      "orgsTitle": "UBI organizations & projects",
      "orgsH1": "Basic income organizations & projects",
      "orgsDesc": "A curated list of organizations and projects around the world and in Japan that advocate, research or practise basic income (UBI), grouped by type. Checked in October 2026.",
      "orgsIntro": "For anyone who wants to learn more about basic income or find a way to support or get involved. These are not money-making services but organizations working on advocacy, research and cash transfers, grouped by type.",
      "orgsFounded": "Founded",
      "orgsOnSite": "Our page on this service",
      "orgsRelated": "Related organization",
      "orgsSecH": "Organizations working on basic income",
      "orgsSecP": "These are not services you sign up to for money, but organizations that research, campaign for or actually run basic income and cash transfers.",
      "orgsSecBtn": "See all organizations ({n})",
      "only_us": "US residents only",
      "brandSub": "",
      "tagline": "There is such a thing as a free lunch.",
      "ghLabel": "Open data on GitHub",
      "checkedOn": "Checked {date}",
      "graveTitle": "The Free Lunch Graveyard",
      "graveIntro": "A record of services and programmes that once handed out money or points and have since ended. Only endings confirmed by an official announcement or a credible source are listed. Thanks for the lunches. Rest in peace.",
      "graveDesc": "Services and programmes that once paid out money or points and have ended, such as World’s WLD airdrop and Miles, with end dates, reasons and sources.",
      "graveWhat": "What it was",
      "graveEnded": "Ended",
      "graveWhy": "Why",
      "graveSource": "Source",
      "graveOnSite": "Our page on this service",
      "verifyH": "Browse by verification method",
      "verifyLabel": "Verification",
      "verifyOpt": "optional",
      "verifyReqH": "Services that require it",
      "verifyOptH": "Services where it is optional",
      "verifyAll": "All verification methods",
      "tlTitle": "Basic income experiments: a timeline",
      "tlIntro": "Major basic income and cash-transfer experiments and schemes around the world, in order. Results are as reported by each source, and only items we could source are listed.",
      "tlDesc": "A timeline of basic income experiments and schemes, from Mincome and Alaska’s dividend to Namibia, Finland, Stockton, OpenResearch and Germany’s pilot, with who ran them, what was paid, results and sources.",
      "tlWho": "Run by",
      "tlPaid": "What was paid",
      "tlResult": "Result",
      "tlSource": "Source",
      "tlGov": "Government",
      "tlNgo": "NGO / research",
      "tlPrivate": "Private / lottery",
      "tlCrypto": "Crypto / community",
      "tlOnSite": "Related on this site",
      "tlLink": "See the basic income experiments timeline",
      "essaysTitle": "Essays",
      "essayBy": "By Free Lunch Lab",
      "essayOpinion": "Opinion",
      "essaySources": "Sources",
      "essayPublished": "Published",
      "essayRelated": "Related essay",
      "rssLabel": "RSS feed",
      "ossTitle": "Open-source basic income projects",
      "ossH1": "Open-source code for basic income",
      "ossDesc": "A curated list of open-source code projects behind basic income: UBI protocols, wallets, proof of personhood and policy simulators, with license, stars and last commit date.",
      "ossIntro": "The code behind basic income that anyone can read, run or improve: protocols that issue a UBI, the wallets used to claim it, proof-of-personhood systems and simulators that estimate what a basic income would cost. Stars and last commit dates are fetched from GitHub and GitLab when the site is built, and projects with no commit in over 12 months are marked dormant.",
      "ossSecH": "Open-source code behind basic income",
      "ossSecP": "UBI protocols, wallets, proof-of-personhood systems and policy simulators whose source code is public. Read it, run it or contribute.",
      "ossSecBtn": "See all open-source projects ({n})",
      "ossLang": "Language",
      "ossLicense": "License",
      "ossStars": "Stars",
      "ossLastCommit": "Last commit",
      "ossDormant": "Dormant",
      "ossDormantTip": "No commits in over 12 months",
      "ossArchived": "Archived",
      "ossEssay": "Related essay",
      "ossFetched": "Stars and commit dates as of {date}",
      "ossUnknown": "Unknown",
      "badgeTitle": "Badge",
      "badgeH1": "A badge for listed projects",
      "badgeDesc": "A small “Listed on Free Lunch Lab” badge for projects listed on this site, with ready-to-copy Markdown and HTML for every service, open-source project and organization.",
      "badgeIntro": "If your project is listed here, feel free to add this badge. It's free, and you don't have to.",
      "badgeNote": "Each snippet links back to that project's own page on this site. Being listed is not an endorsement, and adding the badge (or not) changes nothing about what we write.",
      "badgePreviewH": "The badges",
      "badgeFlat": "For READMEs (20px)",
      "badgeCard": "For websites (240×60)",
      "badgeDark": "Dark",
      "badgeLight": "Light",
      "badgeSvcH": "Services",
      "badgeOssH": "Open-source projects",
      "badgeOrgH": "Organizations",
      "badgeCopied": "Copied"
    },
    "hi": {
      "brand": "Free Lunch <span>Lab</span>",
      "brandPlain": "Free Lunch Lab",
      "navList": "सेवाएँ",
      "navHow": "कैसे इस्तेमाल करें",
      "navFaq": "सवाल-जवाब",
      "pr": "इस पेज पर रेफ़रल लिंक और कोड हैं। इनके ज़रिए साइन अप करने पर साइट चलाने वाले को भी बोनस मिल सकता है।",
      "eyebrow": "सिर्फ़ मौजूद होने पर पैसे देने वाले ऐप",
      "h1": "एक बार साइन अप करें।<br>सोते हुए भी<br><em>कमाई</em> पाएँ।",
      "lede": "<b>सिर्फ़ मौजूद होने पर</b> पैसे या टोकन देने वाले बेसिक इनकम जैसे ऐप और प्रोजेक्ट (साथ में कुछ पॉइंट ऐप)। अभी ज़्यादातर यह जाँचते हैं कि आप इंसान हैं; <a href=\"essays/ai-agent-basic-income/\">AI एजेंटों के लिए ऐसी योजनाएँ</a> आएँगी तो उन्हें भी यहाँ जगह मिलेगी। हर एक के <b>जोखिम और नकद में बदलने की असलियत</b> के साथ। कुछ लिंक रेफ़रल लिंक हैं।",
      "ctaList": "सेवाएँ देखें",
      "ctaHow": "कैसे इस्तेमाल करें",
      "statAll": "सेवाएँ",
      "statLoop": "बार-बार भुगतान",
      "statGlobal": "जापान के बाहर भी",
      "statDate": "आख़िरी जाँच",
      "bookTitle": "जमा विवरण",
      "thDate": "तारीख़",
      "thMemo": "विवरण",
      "thIn": "जमा",
      "r1": "अनुदान G$",
      "r1v": "रोज़",
      "r2": "अनुदान MEC",
      "r2v": "रोज़",
      "r3": "अनुदान PoY",
      "r3v": "मासिक",
      "r4": "रेफ़रल HAPITAS",
      "r5": "इनाम WAVEE",
      "r5v": "मैच पर",
      "bookNote": "सिर्फ़ उदाहरण। असली बोनस और शर्तें हर कार्ड पर देखें।",
      "hanko": "सोते<br>हुए",
      "listH": "सेवाएँ",
      "loopOnly": "सिर्फ़ बार-बार मिलने वाली",
      "tagLoop": "बार-बार",
      "tagOnce": "एक बार",
      "legLoop": "साइन अप के बाद बार-बार भुगतान",
      "legOnce": "रेफ़रल से जुड़ने पर एक बार का बोनस",
      "legEase": "आसानी (हमारी अपनी रेटिंग)",
      "howH": "साइन अप कैसे करें",
      "s1h": "बटन दबाएँ",
      "s1": "कार्ड पर “रेफ़रल से साइन अप करें” दबाकर आधिकारिक साइट या ऐप खोलें। ज़्यादातर सेवाओं में लिंक से खोलते ही रेफ़रल अपने-आप लग जाता है।",
      "s2h": "वहीं साइन अप करें",
      "s2": "जो पेज खुले, उसी पर साइन अप पूरा करें। बीच में दूसरे ब्राउज़र या ऐप पर जाने से रेफ़रल छूट सकता है, इसलिए उसी स्क्रीन पर रहें।",
      "s3h": "शर्तें पूरी करें",
      "s3": "पहचान सत्यापन या पहली खरीदारी जैसी शर्तें पूरी होने पर बोनस मिलता है। हर सेवा की शर्तें अलग होती हैं।",
      "faqH": "सवाल-जवाब",
      "q1": "क्या यह असली बेसिक इनकम है?",
      "a1": "यह सरकार वाली बेसिक इनकम नहीं है। यहाँ “UBI” का मतलब GoodDollar और BioMatrix जैसे प्रोजेक्ट हैं, जो हर रजिस्टर्ड व्यक्ति को बिना शर्त बार-बार टोकन देते हैं। जापान में अभी कोई राष्ट्रीय बेसिक इनकम नहीं है।",
      "q2": "क्या रेफ़रल कोड इस्तेमाल करने से मेरा कोई नुकसान है?",
      "a2": "आम तौर पर नहीं। फ़ीस और शर्तें वही रहती हैं, और ज़्यादातर सेवाएँ नए यूज़र को भी बोनस देती हैं। रेफ़र करने वाले को भी इनाम मिलता है, इसलिए इस पेज पर PR लिखा है।",
      "q3": "क्या इनाम पर टैक्स लगता है?",
      "a3": "जापान में क्रिप्टो बेचने या खर्च करने पर हुआ मुनाफ़ा विविध आय माना जाता है, और पॉइंट आम तौर पर कभी-कभार की आय माने जाते हैं। नियम हर देश में अलग हैं, इसलिए रकम बढ़ने पर अपने देश के टैक्स विभाग से जाँच लें।",
      "q4": "क्या जापान के बाहर भी इस्तेमाल कर सकते हैं?",
      "a4": "“ग्लोबल” वाली सेवाएँ ({list}) जापान के बाहर भी चलती हैं। Ubiquitus सिर्फ़ अमेरिकी निवासियों के लिए है; बाकी सेवाएँ जापान में रहने वालों के लिए हैं।",
      "warnH": "साइन अप से पहले",
      "warnT": "ध्यान रखें",
      "w1": "बोनस की रकम और शर्तें अक्सर बदलती हैं। साइन अप से पहले आधिकारिक कैंपेन पेज ज़रूर देखें।",
      "w2": "क्रिप्टो इनाम की कीमत ऊपर-नीचे होती रहती है।",
      "w4": "“हर महीने अपने-आप ¥100,000” का वादा करके महँगे कोर्स बेचने वालों का यहाँ दी गई सेवाओं से कोई लेना-देना नहीं है।",
      "foot": "जानकारी अक्टूबर 2026 तक की है। यह निवेश सलाह नहीं है।",
      "count": "{n} सेवाएँ दिख रही हैं",
      "none": "इन फ़िल्टर से कोई सेवा मेल नहीं खाती।",
      "global": "ग्लोबल",
      "jp": "सिर्फ़ जापान",
      "need": "कैसे मिलेगा",
      "ease": "आसानी",
      "cautionP": "ध्यान दें: ",
      "svcWarnH": "साइन अप करने से पहले इसे पढ़ें",
      "code": "CODE",
      "pending": "जल्द आ रहा है",
      "copy": "कॉपी",
      "goRef": "रेफ़रल से साइन अप करें",
      "goOff": "आधिकारिक साइट देखें",
      "goCode": "ऐप इंस्टॉल करें और कोड डालें",
      "copied": "कोड कॉपी हो गया",
      "selected": "कोड चुन लिया गया। मेन्यू से कॉपी करें",
      "title": "Free Lunch Lab",
      "region": "क्षेत्र",
      "filterLabel": "श्रेणी से फ़िल्टर करें",
      "metaDesc": "सिर्फ़ मौजूद होने पर पैसे देने वाले बेसिक इनकम जैसे ऐप और प्रोजेक्ट (जैसे Ğ1, Circles, Gradido, Idena), जोखिम और नकद में बदलने की असलियत के साथ। कुछ लिंक रेफ़रल लिंक हैं।",
      "navLabel": "सेक्शन",
      "langLabel": "भाषा",
      "shareH": "दोस्तों को भेजें",
      "shareSub": "कोई दोस्त जो सोते हुए कमाना चाहता है? उसे यह लिस्ट भेजें।",
      "shareText": "Free Lunch Lab 😴💰 क्रिप्टो UBI और पैसिव इनकम ऐप्स की पूरी लिस्ट",
      "copyLink": "लिंक कॉपी करें",
      "linkCopied": "लिंक कॉपी हो गया",
      "share": "शेयर करें",
      "sleepL": "इस पेज पर बिताया समय",
      "sleepS": "पैसिव ऐप्स इस पूरे समय बैकग्राउंड में चलते रहते हैं",
      "badgeMax": "सेट करो, भूल जाओ",
      "picksH": "शुरुआत इन 3 से करें",
      "picksSub": "कम मेहनत वाली, जापान के बाहर भी चलने वाली और सच में भुनाई जा सकने वाली सेवाएँ चुनी हैं।",
      "pickMore": "विवरण देखें",
      "trustLabel": "भरोसे के संकेत",
      "trustCash": "नकदी",
      "trustPrice": "बाज़ार भाव",
      "trustOp": "संचालक",
      "trustCashD": "नकदी (क्या इसे पैसे में बदल सकते हैं)",
      "trustPriceD": "बाज़ार भाव (क्या टोकन का बाज़ार में दाम है)",
      "trustOpD": "संचालक (क्या चलाने वाली कंपनी सार्वजनिक है)",
      "tYes": "हाँ",
      "tPartial": "शर्तों के साथ",
      "tNo": "नहीं",
      "tUnknown": "अपुष्ट",
      "newsH": "नया क्या है",
      "dawnH": "सुप्रभात।<br>आप सो रहे थे, और शायद पैसे आ भी गए।",
      "dawnSub": "ऐप खोलकर बैलेंस देख लीजिए। अभी शुरू नहीं किया? आज रात के लिए एक सेट कर लीजिए।",
      "dawnCta": "सेवाओं की सूची देखें",
      "more": "और पढ़ें",
      "less": "कम दिखाएँ",
      "svcTitle": "{name} क्या है? क्या मिलता है और कैसे शुरू करें",
      "hGain": "क्या मिलता है",
      "hAbout": "{name} क्या है?",
      "hNeed": "कैसे शुरू करें",
      "hRelated": "मिलती-जुलती सेवाएँ",
      "backList": "सूची पर वापस जाएँ",
      "crumbLabel": "ब्रेडक्रंब",
      "orgsTitle": "UBI संगठन और प्रोजेक्ट",
      "orgsH1": "बेसिक इनकम के संगठन और प्रोजेक्ट",
      "orgsDesc": "दुनिया और जापान में बेसिक इनकम (UBI) की पैरवी, शोध या उस पर अमल करने वाले संगठनों और प्रोजेक्ट की प्रकार के हिसाब से चुनी हुई सूची। अक्टूबर 2026 में जाँची गई।",
      "orgsIntro": "उनके लिए जो बेसिक इनकम के बारे में और जानना चाहते हैं या समर्थन व भागीदारी का रास्ता खोज रहे हैं। ये पैसे देने वाली सेवाएँ नहीं, बल्कि पैरवी, शोध और नकद सहायता पर काम करने वाले संगठन हैं।",
      "orgsFounded": "स्थापना",
      "orgsOnSite": "इस साइट पर इसका पेज",
      "orgsRelated": "संबंधित संगठन",
      "orgsSecH": "बेसिक इनकम पर काम करने वाले संगठन",
      "orgsSecP": "ये पैसे पाने के लिए साइन अप करने वाली सेवाएँ नहीं हैं, बल्कि ऐसे संगठन हैं जो बेसिक इनकम पर शोध करते हैं, उसकी पैरवी करते हैं या असल में नकद बाँटते हैं।",
      "orgsSecBtn": "सभी संगठन देखें ({n})",
      "only_us": "सिर्फ़ अमेरिकी निवासी",
      "brandSub": "",
      "tagline": "मुफ़्त का लंच भी होता है।",
      "ghLabel": "GitHub पर खुला डेटा",
      "checkedOn": "जाँचा गया: {date}",
      "graveTitle": "बंद हो चुकी सेवाओं का क़ब्रिस्तान",
      "graveIntro": "उन सेवाओं और कार्यक्रमों का रिकॉर्ड जो कभी पैसे या पॉइंट देते थे और अब बंद हो चुके हैं। सिर्फ़ वही शामिल हैं जिनका बंद होना आधिकारिक घोषणा या भरोसेमंद स्रोत से पक्का है। लंच के लिए धन्यवाद। शांति मिले।",
      "graveDesc": "कभी पैसे या पॉइंट देने वाली, अब बंद हो चुकी सेवाएँ और कार्यक्रम (जैसे World का WLD एयरड्रॉप और Miles), बंद होने की तारीख़, कारण और स्रोत के साथ।",
      "graveWhat": "यह क्या था",
      "graveEnded": "बंद हुआ",
      "graveWhy": "क्यों",
      "graveSource": "स्रोत",
      "graveOnSite": "इस साइट पर इसका पेज",
      "verifyH": "वेरिफ़िकेशन के तरीके से खोजें",
      "verifyLabel": "वेरिफ़िकेशन",
      "verifyOpt": "वैकल्पिक",
      "verifyReqH": "जिन सेवाओं में यह ज़रूरी है",
      "verifyOptH": "जिन सेवाओं में यह वैकल्पिक है",
      "verifyAll": "सभी वेरिफ़िकेशन तरीके",
      "tlTitle": "बेसिक इनकम प्रयोगों की समयरेखा",
      "tlIntro": "दुनिया भर के प्रमुख बेसिक इनकम और नकद सहायता प्रयोग और योजनाएँ, क्रम से। नतीजे हर स्रोत के बताए अनुसार हैं, और सिर्फ़ वही शामिल हैं जिनका स्रोत मिल सका।",
      "tlDesc": "बेसिक इनकम प्रयोगों और योजनाओं की समयरेखा: Mincome, अलास्का डिविडेंड, नामीबिया, फ़िनलैंड, स्टॉकटन, OpenResearch और जर्मन पायलट, संचालक, भुगतान, नतीजे और स्रोत के साथ।",
      "tlWho": "संचालक",
      "tlPaid": "क्या दिया गया",
      "tlResult": "नतीजा",
      "tlSource": "स्रोत",
      "tlGov": "सरकार",
      "tlNgo": "NGO / शोध",
      "tlPrivate": "निजी / लॉटरी",
      "tlCrypto": "क्रिप्टो / समुदाय",
      "tlOnSite": "इस साइट पर संबंधित",
      "tlLink": "बेसिक इनकम प्रयोगों की समयरेखा देखें",
      "essaysTitle": "निबंध",
      "essayBy": "लेखक: Free Lunch Lab",
      "essayOpinion": "राय",
      "essaySources": "स्रोत",
      "essayPublished": "प्रकाशित",
      "essayRelated": "संबंधित निबंध",
      "rssLabel": "RSS फ़ीड",
      "ossTitle": "बेसिक इनकम के ओपन-सोर्स प्रोजेक्ट",
      "ossH1": "बेसिक इनकम का ओपन-सोर्स कोड",
      "ossDesc": "बेसिक इनकम से जुड़े ओपन-सोर्स कोड प्रोजेक्ट की चुनी हुई सूची: UBI प्रोटोकॉल, वॉलेट, इंसान होने का प्रमाण और नीति सिम्युलेटर, लाइसेंस, स्टार और आख़िरी कमिट की तारीख के साथ।",
      "ossIntro": "बेसिक इनकम का वह कोड जिसे कोई भी पढ़, चला या बेहतर बना सकता है: UBI जारी करने वाले प्रोटोकॉल, उसे क्लेम करने के वॉलेट, इंसान होने का प्रमाण देने वाले सिस्टम और बेसिक इनकम की लागत का अनुमान लगाने वाले सिम्युलेटर। स्टार और आख़िरी कमिट की तारीख साइट बनाते समय GitHub और GitLab से ली जाती है, और 12 महीने से ज़्यादा समय से बिना कमिट वाले प्रोजेक्ट “निष्क्रिय” दिखाए जाते हैं।",
      "ossSecH": "बेसिक इनकम के पीछे का ओपन-सोर्स कोड",
      "ossSecP": "UBI प्रोटोकॉल, वॉलेट, इंसान होने का प्रमाण देने वाले सिस्टम और नीति सिम्युलेटर, जिनका सोर्स कोड सार्वजनिक है। पढ़ें, चलाएँ या योगदान दें।",
      "ossSecBtn": "सभी ओपन-सोर्स प्रोजेक्ट देखें ({n})",
      "ossLang": "भाषा",
      "ossLicense": "लाइसेंस",
      "ossStars": "स्टार",
      "ossLastCommit": "आख़िरी कमिट",
      "ossDormant": "निष्क्रिय",
      "ossDormantTip": "12 महीने से ज़्यादा समय से कोई कमिट नहीं",
      "ossArchived": "आर्काइव किया गया",
      "ossEssay": "संबंधित निबंध",
      "ossFetched": "स्टार और कमिट की तारीख {date} के अनुसार",
      "ossUnknown": "अज्ञात",
      "badgeTitle": "बैज",
      "badgeH1": "सूचीबद्ध प्रोजेक्ट के लिए बैज",
      "badgeDesc": "इस साइट पर सूचीबद्ध प्रोजेक्ट के लिए छोटा “Listed on Free Lunch Lab” बैज, हर सेवा, ओपन-सोर्स प्रोजेक्ट और संगठन के लिए कॉपी करने लायक Markdown और HTML के साथ।",
      "badgeIntro": "अगर आपका प्रोजेक्ट यहाँ सूचीबद्ध है, तो यह बैज बेझिझक लगाइए। यह मुफ़्त है, और लगाना ज़रूरी नहीं।",
      "badgeNote": "हर स्निपेट इस साइट पर उसी प्रोजेक्ट के पेज से जुड़ता है। सूची में होना समर्थन नहीं है, और बैज लगाने या न लगाने से हमारे लिखे में कुछ नहीं बदलता।",
      "badgePreviewH": "बैज",
      "badgeFlat": "README के लिए (20px)",
      "badgeCard": "वेबसाइट के लिए (240×60)",
      "badgeDark": "डार्क",
      "badgeLight": "लाइट",
      "badgeSvcH": "सेवाएँ",
      "badgeOssH": "ओपन-सोर्स प्रोजेक्ट",
      "badgeOrgH": "संगठन",
      "badgeCopied": "कॉपी हो गया"
    },
    "zh": {
      "brand": "Free Lunch <span>Lab</span>",
      "brandPlain": "Free Lunch Lab（免费午餐研究所）",
      "navList": "服务",
      "navHow": "使用方法",
      "navFaq": "常见问题",
      "pr": "本页包含推荐链接和推荐码。通过它们注册时，网站运营者也可能获得奖励。",
      "eyebrow": "只要存在就能领钱的应用与项目",
      "h1": "注册一次，<br>躺着也能<br><em>到账</em>。",
      "lede": "收录<b>只要存在</b>就能领钱或代币的基本收入型应用与项目（也有少量积分应用）。目前大多需要验证你是真人；将来出现<a href=\"essays/ai-agent-basic-income/\">面向 AI 智能体的机制</a>，也会收录。每个都注明<b>风险和兑现的实际情况</b>。部分为推荐链接。",
      "ctaList": "查看服务",
      "ctaHow": "使用方法",
      "statAll": "收录服务",
      "statLoop": "持续到账",
      "statGlobal": "日本以外可用",
      "statDate": "最后核实",
      "bookTitle": "存款明细",
      "thDate": "日期",
      "thMemo": "摘要",
      "thIn": "存入",
      "r1": "发放 G$",
      "r1v": "每日",
      "r2": "发放 MEC",
      "r2v": "每日",
      "r3": "发放 PoY",
      "r3v": "每月",
      "r4": "推荐 HAPITAS",
      "r5": "奖励 WAVEE",
      "r5v": "匹配时",
      "bookNote": "仅为示意。实际奖励和条件请查看各卡片。",
      "hanko": "躺着<br>到账",
      "listH": "服务一览",
      "loopOnly": "只看持续到账",
      "tagLoop": "持续",
      "tagOnce": "一次性",
      "legLoop": "注册后可反复获得",
      "legOnce": "通过推荐注册可获得一次性奖励",
      "legEase": "轻松度（本站主观评分）",
      "howH": "注册方法",
      "s1h": "点击按钮打开",
      "s1": "点击卡片上的“通过推荐链接注册”，即可打开官方网站或应用。大多数服务只要通过链接打开，推荐就会自动生效。",
      "s2h": "直接完成注册",
      "s2": "在打开的页面上直接完成注册。中途切换到其他浏览器或应用可能导致推荐失效，请在同一页面内完成。",
      "s3h": "满足条件",
      "s3": "完成身份验证或首次使用等条件后即可获得奖励。各服务的条件不同。",
      "faqH": "常见问题",
      "q1": "这是真正的基本收入吗？",
      "a1": "不是政府发放的那种。这里的“UBI”指的是像 GoodDollar 和 BioMatrix 这样，无条件、反复向每位注册者发放代币的项目。日本目前还没有国家层面的基本收入。",
      "q2": "使用推荐码会吃亏吗？",
      "a2": "通常不会。手续费和条件都一样，而且大多数服务也会给新用户奖励。推荐人同样会获得奖励，因此本页标注了 PR。",
      "q3": "获得的奖励需要缴税吗？",
      "a3": "在日本，加密货币在出售或使用并产生收益时，原则上计为杂项所得；积分通常计为偶然所得。各国规定不同，金额较大时请向当地税务机关确认。",
      "q4": "在日本以外也能用吗？",
      "a4": "标有“全球”的服务（{list}）在日本以外也能使用。Ubiquitus 仅限美国居民，其余服务面向日本居民。",
      "warnH": "注册之前",
      "warnT": "需要了解的事",
      "w1": "奖励金额和条件经常变化。注册前请务必查看官方活动页面。",
      "w2": "以加密货币发放的奖励，价格会上下波动。",
      "w4": "以“每月自动到账 10 万日元”为噱头、推销高价课程的，与本页介绍的服务毫无关系。",
      "foot": "信息截至 2026 年 10 月。不构成投资建议。",
      "count": "显示 {n} 项服务",
      "none": "没有符合条件的服务。",
      "global": "全球",
      "jp": "仅限日本",
      "need": "获取方式",
      "ease": "轻松度",
      "cautionP": "注意：",
      "svcWarnH": "注册前请先阅读",
      "code": "CODE",
      "pending": "即将推出",
      "copy": "复制",
      "goRef": "通过推荐链接注册",
      "goOff": "查看官方网站",
      "goCode": "安装应用并填写邀请码",
      "copied": "推荐码已复制",
      "selected": "已选中推荐码，请从菜单中复制",
      "title": "Free Lunch Lab（免费午餐研究所）",
      "region": "地区",
      "filterLabel": "按类别筛选",
      "metaDesc": "收录只要存在就能领钱的基本收入型应用与项目（如 Ğ1、Circles、Gradido、Idena），并注明风险和能否兑现。部分为推荐链接。",
      "navLabel": "栏目",
      "langLabel": "语言",
      "shareH": "分享给朋友",
      "shareSub": "身边有想躺着赚钱的朋友吗？把这份清单发给 TA。",
      "shareText": "Free Lunch Lab（免费午餐研究所）😴💰 加密货币 UBI 和躺赚应用一览",
      "copyLink": "复制链接",
      "linkCopied": "链接已复制",
      "share": "分享",
      "sleepL": "打开本页已过",
      "sleepS": "躺赚应用在这段时间里也一直在后台运行",
      "badgeMax": "最省心",
      "picksH": "先装这 3 个",
      "picksSub": "按省事、海外可用、能真正兑换这三点挑选。",
      "pickMore": "查看详情",
      "trustLabel": "可信度参考",
      "trustCash": "变现",
      "trustPrice": "市价",
      "trustOp": "运营方",
      "trustCashD": "变现（能否换成现金）",
      "trustPriceD": "市价（代币是否有市场价格）",
      "trustOpD": "运营方公开（是否公开运营公司）",
      "tYes": "有",
      "tPartial": "有条件",
      "tNo": "无",
      "tUnknown": "未确认",
      "newsH": "最新动态",
      "dawnH": "早上好。<br>睡着的时候，说不定已经到账了。",
      "dawnSub": "打开应用看看余额吧。还没开始的话，现在就为今晚做好准备。",
      "dawnCta": "查看服务列表",
      "more": "展开",
      "less": "收起",
      "svcTitle": "{name}是什么？能得到什么・如何开始",
      "hGain": "能得到什么",
      "hAbout": "{name}是什么",
      "hNeed": "如何开始・条件",
      "hRelated": "相关服务",
      "backList": "返回服务列表",
      "crumbLabel": "面包屑导航",
      "orgsTitle": "UBI 团体与项目",
      "orgsH1": "基本收入的团体与项目",
      "orgsDesc": "按类型整理了世界和日本推动、研究和实践基本收入（UBI）的团体与项目，各团体现状已于 2026 年 10 月确认。",
      "orgsIntro": "为想进一步了解基本收入、或想寻找支持和参与途径的人准备的列表。这里不是能领钱的服务，而是按类型整理的从事倡导、研究和现金援助等工作的团体。",
      "orgsFounded": "成立",
      "orgsOnSite": "本站的介绍页",
      "orgsRelated": "相关团体与项目",
      "orgsSecH": "致力于基本收入的团体",
      "orgsSecP": "这里介绍的不是能领钱的服务，而是研究、推动或实际发放基本收入与现金的团体，并不是注册后就能拿到钱的。",
      "orgsSecBtn": "查看全部团体（{n} 个）",
      "only_us": "仅限美国居民",
      "brandSub": "免费午餐研究所",
      "tagline": "天下竟然有免费的午餐。",
      "ghLabel": "数据在 GitHub 公开",
      "checkedOn": "核实于{date}",
      "graveTitle": "已结束服务的墓地",
      "graveIntro": "这里记录曾经发放钱或积分、如今已结束的服务和项目。只收录经官方公告或可靠来源确认已结束的。谢谢款待，愿其安息。",
      "graveDesc": "曾发放钱或积分、现已确认结束的服务和项目记录（如 World 的 WLD 空投、Miles 等），附结束时间、原因和出处。",
      "graveWhat": "是什么",
      "graveEnded": "结束",
      "graveWhy": "原因",
      "graveSource": "出处",
      "graveOnSite": "本站的介绍页",
      "verifyH": "按验证方式查找",
      "verifyLabel": "验证方式",
      "verifyOpt": "可选",
      "verifyReqH": "需要此验证的服务",
      "verifyOptH": "可选择使用此验证的服务",
      "verifyAll": "全部验证方式",
      "tlTitle": "基本收入实验年表",
      "tlIntro": "按时间顺序整理世界各地主要的基本收入和现金发放实验与制度。结果均依据各来源的说明，仅收录能核实出处的项目。",
      "tlDesc": "基本收入实验与制度年表：Mincome、阿拉斯加红利、纳米比亚、芬兰、斯托克顿、OpenResearch、德国试点等，附实施方、发放内容、结果和出处。",
      "tlWho": "实施方",
      "tlPaid": "发放内容",
      "tlResult": "结果",
      "tlSource": "出处",
      "tlGov": "政府",
      "tlNgo": "NGO／研究",
      "tlPrivate": "民间／抽奖",
      "tlCrypto": "加密货币／社区",
      "tlOnSite": "本站相关页面",
      "tlLink": "查看基本收入实验年表",
      "essaysTitle": "随笔",
      "essayBy": "作者：Free Lunch Lab",
      "essayOpinion": "观点",
      "essaySources": "出处",
      "essayPublished": "发布",
      "essayRelated": "相关随笔",
      "rssLabel": "RSS 订阅",
      "ossTitle": "基本收入开源项目",
      "ossH1": "基本收入的开源代码",
      "ossDesc": "与基本收入相关的开源代码项目精选：UBI 协议、钱包、人格证明和政策模拟器，附许可证、星标数和最后提交日期。",
      "ossIntro": "任何人都能阅读、运行或改进的基本收入代码：发放 UBI 的协议、用来领取的钱包、人格证明系统，以及估算基本收入成本的模拟器。星标数和最后提交日期在网站构建时从 GitHub 和 GitLab 获取，超过 12 个月没有提交的项目会标为“休眠”。",
      "ossSecH": "支撑基本收入的开源代码",
      "ossSecP": "源代码公开的 UBI 协议、钱包、人格证明系统和政策模拟器。可以阅读、运行，也欢迎参与贡献。",
      "ossSecBtn": "查看全部开源项目（{n}）",
      "ossLang": "语言",
      "ossLicense": "许可证",
      "ossStars": "星标",
      "ossLastCommit": "最后提交",
      "ossDormant": "休眠",
      "ossDormantTip": "超过 12 个月没有提交",
      "ossArchived": "已归档",
      "ossEssay": "相关随笔",
      "ossFetched": "星标数和提交日期截至 {date}",
      "ossUnknown": "未知",
      "badgeTitle": "徽章",
      "badgeH1": "给已收录项目的徽章",
      "badgeDesc": "为本站收录的项目准备的“Listed on Free Lunch Lab”徽章。每个服务、开源项目和组织都有可直接复制的 Markdown 和 HTML。",
      "badgeIntro": "如果你的项目被收录在这里，欢迎贴上这个徽章。免费，不贴也完全没关系。",
      "badgeNote": "每段代码都链接到本站上该项目自己的页面。被收录不代表背书，贴不贴徽章都不会改变我们写的内容。",
      "badgePreviewH": "徽章样式",
      "badgeFlat": "README 用（高 20px）",
      "badgeCard": "网站用（240×60）",
      "badgeDark": "深色",
      "badgeLight": "浅色",
      "badgeSvcH": "服务",
      "badgeOssH": "开源项目",
      "badgeOrgH": "组织",
      "badgeCopied": "已复制"
    },
    "es": {
      "brand": "Free Lunch <span>Lab</span>",
      "brandPlain": "Free Lunch Lab",
      "navList": "Servicios",
      "navHow": "Cómo funciona",
      "navFaq": "Preguntas",
      "pr": "Esta página contiene enlaces y códigos de referido. Si te registras con ellos, el responsable del sitio también puede recibir una bonificación.",
      "eyebrow": "Apps que te pagan solo por existir",
      "h1": "Regístrate una vez.<br>Cobra<br>mientras <em>duermes</em>.",
      "lede": "Apps y proyectos al estilo renta básica que te pagan <b>solo por existir</b>, desde tokens diarios hasta monedas comunitarias, más algunas apps de puntos. Por ahora casi todos comprueban que eres humano; si aparecen <a href=\"essays/ai-agent-basic-income/\">sistemas para agentes de IA</a>, también tendrán sitio aquí. Cada uno indica <b>los riesgos y cómo se cobra de verdad</b>. Algunos enlaces son de referido.",
      "ctaList": "Ver los servicios",
      "ctaHow": "Cómo funciona",
      "statAll": "servicios",
      "statLoop": "pagan de forma recurrente",
      "statGlobal": "funcionan fuera de Japón",
      "statDate": "última revisión",
      "bookTitle": "EXTRACTO DE INGRESOS",
      "thDate": "FECHA",
      "thMemo": "CONCEPTO",
      "thIn": "ABONO",
      "r1": "SUBSIDIO G$",
      "r1v": "DIARIO",
      "r2": "SUBSIDIO MEC",
      "r2v": "DIARIO",
      "r3": "SUBSIDIO POY",
      "r3v": "MENSUAL",
      "r4": "REFERIDO HAPITAS",
      "r5": "PREMIO WAVEE",
      "r5v": "AL CONTRATAR",
      "bookNote": "Solo es una ilustración. Consulta cada tarjeta para ver el bono y las condiciones reales.",
      "hanko": "COBRADO<br>DORMIDO",
      "listH": "Servicios",
      "loopOnly": "Solo recurrentes",
      "tagLoop": "Recurrente",
      "tagOnce": "Única vez",
      "legLoop": "Paga una y otra vez tras registrarte",
      "legOnce": "Un bono único por unirte con un referido",
      "legEase": "Facilidad (nuestra valoración)",
      "howH": "Cómo registrarte",
      "s1h": "Pulsa el botón",
      "s1": "Pulsa «Registrarme con referido» en una tarjeta para abrir la web o la app oficial. En la mayoría de los servicios, basta con abrir el enlace para que se aplique el referido.",
      "s2h": "Regístrate ahí mismo",
      "s2": "Completa el registro en la página que se abre. Si cambias de navegador o de app a mitad, el referido puede perderse, así que sigue en la misma pantalla.",
      "s3h": "Cumple las condiciones",
      "s3": "El bono llega cuando cumples las condiciones, como verificar tu identidad o hacer un primer uso. Cada servicio es distinto.",
      "faqH": "Preguntas frecuentes",
      "q1": "¿Es una renta básica de verdad?",
      "a1": "No la de un gobierno. Aquí, «UBI» se refiere a proyectos como GoodDollar y BioMatrix que dan tokens a cada persona registrada, de forma repetida y sin condiciones. Japón todavía no tiene una renta básica nacional.",
      "q2": "¿Pierdo algo si uso un código de referido?",
      "a2": "Normalmente no. Las comisiones y condiciones son las mismas, y la mayoría de los servicios también premian al nuevo usuario. Quien recomienda también recibe una recompensa; por eso esta página está marcada como PR.",
      "q3": "¿Las recompensas pagan impuestos?",
      "a3": "En Japón, las criptomonedas cuentan como ingresos varios cuando las vendes o gastas con ganancia, y los puntos suelen tratarse como ingresos ocasionales. Las normas cambian según el país, así que consulta a tu autoridad fiscal si las cantidades crecen.",
      "q4": "¿Puedo usarlos fuera de Japón?",
      "a4": "Los servicios marcados como «Global» ({list}) funcionan fuera de Japón. Ubiquitus es solo para residentes en EE. UU.; el resto son para residentes en Japón.",
      "warnH": "Antes de registrarte",
      "warnT": "Conviene saber",
      "w1": "Los importes y las condiciones de los bonos cambian a menudo. Revisa siempre la página oficial de la campaña antes de registrarte.",
      "w2": "Las recompensas en criptomonedas suben y bajan de valor.",
      "w4": "Los cursos caros que prometen «100.000 ¥ al mes en piloto automático» no tienen nada que ver con los servicios de esta página.",
      "foot": "Información a octubre de 2026. No es asesoramiento de inversión.",
      "count": "{n} servicios",
      "none": "Ningún servicio coincide con estos filtros.",
      "global": "Global",
      "jp": "Solo Japón",
      "need": "Cómo conseguirlo",
      "ease": "Facilidad",
      "cautionP": "Ojo: ",
      "svcWarnH": "Lee esto antes de registrarte",
      "code": "CÓDIGO",
      "pending": "Próximamente",
      "copy": "Copiar",
      "goRef": "Registrarme con referido",
      "goOff": "Ver web oficial",
      "goCode": "Instala la app e introduce el código",
      "copied": "Código copiado",
      "selected": "Código seleccionado. Cópialo desde el menú",
      "title": "Free Lunch Lab",
      "region": "Región",
      "filterLabel": "Filtrar por categoría",
      "metaDesc": "Apps y proyectos que te pagan solo por existir, tipo renta básica: Ğ1, Circles, Gradido, Idena y más. Con riesgos y cómo cobrar. Hay enlaces de referido.",
      "navLabel": "Secciones",
      "langLabel": "Idioma",
      "shareH": "Compártelo",
      "shareSub": "¿Conoces a alguien que prefiera ganar mientras duerme? Envíaselo.",
      "shareText": "Apps que te pagan mientras duermes 😴💰 UBI cripto e ingresos pasivos en una sola lista",
      "copyLink": "Copiar enlace",
      "linkCopied": "Enlace copiado",
      "share": "Compartir",
      "sleepL": "Tiempo en esta página",
      "sleepS": "Las apps pasivas siguen funcionando en segundo plano todo este rato",
      "badgeMax": "Instalar y olvidar",
      "picksH": "Empieza por estas 3",
      "picksSub": "Elegidas por exigir poco esfuerzo, funcionar fuera de Japón y permitir canjear de verdad.",
      "pickMore": "Ver detalles",
      "trustLabel": "Confianza",
      "trustCash": "Cobro",
      "trustPrice": "Precio",
      "trustOp": "Operador",
      "trustCashD": "Cobro (se puede pasar a dinero)",
      "trustPriceD": "Precio de mercado (el token cotiza)",
      "trustOpD": "Operador (se sabe quién lo gestiona)",
      "tYes": "Sí",
      "tPartial": "Con condiciones",
      "tNo": "No",
      "tUnknown": "Sin confirmar",
      "newsH": "Novedades",
      "dawnH": "Buenos días.<br>Quizá te haya llegado algo mientras dormías.",
      "dawnSub": "Abre tus apps y echa un vistazo al saldo. ¿Aún no empiezas? Deja una lista para esta noche.",
      "dawnCta": "Ver la lista",
      "more": "Ver más",
      "less": "Ver menos",
      "svcTitle": "¿Qué es {name}? Qué recibes y cómo empezar",
      "hGain": "Qué recibes",
      "hAbout": "¿Qué es {name}?",
      "hNeed": "Cómo empezar",
      "hRelated": "Servicios relacionados",
      "backList": "Volver a la lista",
      "crumbLabel": "Ruta de navegación",
      "orgsTitle": "Organizaciones y proyectos de RBU",
      "orgsH1": "Organizaciones y proyectos de renta básica",
      "orgsDesc": "Una selección de organizaciones y proyectos de todo el mundo y de Japón que defienden, investigan o ponen en práctica la renta básica (RBU), por tipo. Revisado en octubre de 2026.",
      "orgsIntro": "Para quien quiera saber más sobre la renta básica o busque cómo apoyarla o participar. No son servicios para ganar dinero, sino organizaciones que trabajan en defensa, investigación y transferencias de efectivo, agrupadas por tipo.",
      "orgsFounded": "Fundación",
      "orgsOnSite": "Nuestra página sobre este servicio",
      "orgsRelated": "Organización relacionada",
      "orgsSecH": "Organizaciones que trabajan por la renta básica",
      "orgsSecP": "No son servicios para registrarte y cobrar, sino organizaciones que investigan, defienden o ponen en marcha la renta básica y las transferencias de efectivo.",
      "orgsSecBtn": "Ver todas las organizaciones ({n})",
      "only_us": "Solo residentes en EE. UU.",
      "brandSub": "",
      "tagline": "Pues sí: hay almuerzo gratis.",
      "ghLabel": "Datos abiertos en GitHub",
      "checkedOn": "Revisado: {date}",
      "graveTitle": "El cementerio del almuerzo gratis",
      "graveIntro": "Un registro de servicios y programas que alguna vez repartieron dinero o puntos y que ya terminaron. Solo incluimos cierres confirmados por un anuncio oficial o una fuente fiable. Gracias por los almuerzos. Descansen en paz.",
      "graveDesc": "Servicios y programas que alguna vez pagaron dinero o puntos y ya terminaron, como el airdrop de WLD de World y Miles, con fechas, motivos y fuentes.",
      "graveWhat": "Qué era",
      "graveEnded": "Terminó",
      "graveWhy": "Por qué",
      "graveSource": "Fuente",
      "graveOnSite": "Nuestra página sobre este servicio",
      "verifyH": "Buscar por método de verificación",
      "verifyLabel": "Verificación",
      "verifyOpt": "opcional",
      "verifyReqH": "Servicios que lo exigen",
      "verifyOptH": "Servicios donde es opcional",
      "verifyAll": "Todos los métodos de verificación",
      "tlTitle": "Experimentos de renta básica: una cronología",
      "tlIntro": "Los principales experimentos y programas de renta básica y transferencias de efectivo del mundo, en orden. Los resultados son los que informa cada fuente y solo incluimos lo que pudimos documentar.",
      "tlDesc": "Cronología de experimentos y programas de renta básica, de Mincome y el dividendo de Alaska a Namibia, Finlandia, Stockton, OpenResearch y el piloto alemán, con quién los hizo, qué se pagó, resultados y fuentes.",
      "tlWho": "Quién",
      "tlPaid": "Qué se pagó",
      "tlResult": "Resultado",
      "tlSource": "Fuente",
      "tlGov": "Gobierno",
      "tlNgo": "ONG / investigación",
      "tlPrivate": "Privado / sorteo",
      "tlCrypto": "Cripto / comunidad",
      "tlOnSite": "Relacionado en este sitio",
      "tlLink": "Ver la cronología de experimentos de renta básica",
      "essaysTitle": "Ensayos",
      "essayBy": "Por Free Lunch Lab",
      "essayOpinion": "Opinión",
      "essaySources": "Fuentes",
      "essayPublished": "Publicado",
      "essayRelated": "Ensayo relacionado",
      "rssLabel": "Feed RSS",
      "ossTitle": "Proyectos de código abierto sobre renta básica",
      "ossH1": "Código abierto para la renta básica",
      "ossDesc": "Selección de proyectos de código abierto en torno a la renta básica: protocolos de RBU, billeteras, prueba de humanidad y simuladores de políticas, con licencia, estrellas y fecha del último commit.",
      "ossIntro": "El código de la renta básica que cualquiera puede leer, ejecutar o mejorar: protocolos que emiten una RBU, las billeteras para cobrarla, sistemas de prueba de humanidad y simuladores que estiman cuánto costaría una renta básica. Las estrellas y la fecha del último commit se obtienen de GitHub y GitLab al generar el sitio, y los proyectos sin commits en más de 12 meses se marcan como inactivos.",
      "ossSecH": "El código abierto detrás de la renta básica",
      "ossSecP": "Protocolos de RBU, billeteras, sistemas de prueba de humanidad y simuladores de políticas con código fuente público. Léelo, ejecútalo o contribuye.",
      "ossSecBtn": "Ver todos los proyectos de código abierto ({n})",
      "ossLang": "Lenguaje",
      "ossLicense": "Licencia",
      "ossStars": "Estrellas",
      "ossLastCommit": "Último commit",
      "ossDormant": "Inactivo",
      "ossDormantTip": "Sin commits en más de 12 meses",
      "ossArchived": "Archivado",
      "ossEssay": "Ensayo relacionado",
      "ossFetched": "Estrellas y fechas de commit a {date}",
      "ossUnknown": "Desconocido",
      "badgeTitle": "Insignia",
      "badgeH1": "Una insignia para los proyectos listados",
      "badgeDesc": "Una pequeña insignia «Listed on Free Lunch Lab» para los proyectos listados en este sitio, con Markdown y HTML listos para copiar para cada servicio, proyecto de código abierto y organización.",
      "badgeIntro": "Si tu proyecto aparece aquí, puedes añadir esta insignia. Es gratis, y no tienes por qué hacerlo.",
      "badgeNote": "Cada fragmento enlaza a la página de ese proyecto en este sitio. Estar listado no es un aval, y poner o no la insignia no cambia nada de lo que escribimos.",
      "badgePreviewH": "Las insignias",
      "badgeFlat": "Para README (20px)",
      "badgeCard": "Para webs (240×60)",
      "badgeDark": "Oscura",
      "badgeLight": "Clara",
      "badgeSvcH": "Servicios",
      "badgeOssH": "Proyectos de código abierto",
      "badgeOrgH": "Organizaciones",
      "badgeCopied": "Copiado"
    },
    "ar": {
      "brand": "Free Lunch <span>Lab</span>",
      "brandPlain": "⁦Free Lunch Lab⁩ (مختبر الغداء المجاني)",
      "navList": "الخدمات",
      "navHow": "طريقة الاستخدام",
      "navFaq": "الأسئلة الشائعة",
      "pr": "تحتوي هذه الصفحة على روابط ورموز إحالة. إذا سجّلت عبرها، فقد يحصل صاحب الموقع أيضًا على مكافأة.",
      "eyebrow": "تطبيقات تدفع لك لمجرد وجودك",
      "h1": "سجّل مرة واحدة.<br>واحصل على <em>دخل</em><br>وأنت نائم.",
      "lede": "تطبيقات ومشاريع على طريقة الدخل الأساسي تدفع لك <b>لمجرد وجودك</b>، من الرموز اليومية إلى العملات المجتمعية، مع بعض تطبيقات النقاط. معظمها اليوم يتحقق من أنك إنسان، وإذا ظهرت <a href=\"essays/ai-agent-basic-income/\">أنظمة لوكلاء الذكاء الاصطناعي</a> فستجد مكانها هنا أيضًا. ونذكر لكل منها <b>المخاطر وحقيقة التحويل إلى نقود</b>. بعض الروابط روابط إحالة.",
      "ctaList": "تصفّح الخدمات",
      "ctaHow": "طريقة الاستخدام",
      "statAll": "خدمات مدرجة",
      "statLoop": "تدفع بشكل متكرر",
      "statGlobal": "تعمل خارج اليابان",
      "statDate": "آخر مراجعة",
      "bookTitle": "كشف الإيداعات",
      "thDate": "التاريخ",
      "thMemo": "البيان",
      "thIn": "إيداع",
      "r1": "منحة ⁦G$⁩",
      "r1v": "يوميًا",
      "r2": "منحة MEC",
      "r2v": "يوميًا",
      "r3": "منحة PoY",
      "r3v": "شهريًا",
      "r4": "إحالة HAPITAS",
      "r5": "مكافأة WAVEE",
      "r5v": "عند التوظيف",
      "bookNote": "للتوضيح فقط. راجع كل بطاقة لمعرفة المكافأة والشروط الفعلية.",
      "hanko": "دُفع<br>وأنت نائم",
      "listH": "الخدمات",
      "loopOnly": "المتكررة فقط",
      "tagLoop": "متكرر",
      "tagOnce": "مرة واحدة",
      "legLoop": "يدفع مرة بعد مرة بعد التسجيل",
      "legOnce": "مكافأة لمرة واحدة عند الانضمام عبر إحالة",
      "legEase": "السهولة (تقييمنا الخاص)",
      "howH": "طريقة التسجيل",
      "s1h": "اضغط الزر",
      "s1": "اضغط «سجّل عبر الإحالة» في البطاقة لفتح الموقع أو التطبيق الرسمي. في معظم الخدمات يكفي فتح الرابط لتُطبَّق الإحالة تلقائيًا.",
      "s2h": "سجّل في الصفحة نفسها",
      "s2": "أكمل التسجيل في الصفحة التي تُفتح. الانتقال إلى متصفح أو تطبيق آخر في المنتصف قد يُفقدك الإحالة، فابقَ في الشاشة نفسها.",
      "s3h": "استوفِ الشروط",
      "s3": "تصلك المكافأة بعد استيفاء الشروط، مثل التحقق من الهوية أو أول استخدام. تختلف الشروط من خدمة لأخرى.",
      "faqH": "الأسئلة الشائعة",
      "q1": "هل هذا دخل أساسي حقيقي؟",
      "a1": "ليس الدخل الذي تقدمه الحكومات. المقصود بـ«UBI» هنا مشاريع مثل GoodDollar وBioMatrix تمنح رموزًا لكل شخص مسجّل، بشكل متكرر ودون شروط. لا يوجد في اليابان دخل أساسي وطني حتى الآن.",
      "q2": "هل أخسر شيئًا إذا استخدمت رمز إحالة؟",
      "a2": "عادةً لا. الرسوم والشروط نفسها، ومعظم الخدمات تمنح المستخدم الجديد مكافأة أيضًا. يحصل صاحب الإحالة على مكافأة كذلك، ولهذا وُضعت علامة PR على هذه الصفحة.",
      "q3": "هل تخضع المكافآت للضريبة؟",
      "a3": "في اليابان، تُحسب العملات المشفرة دخلًا متنوعًا عند بيعها أو إنفاقها بربح، وتُعامل النقاط عادةً دخلًا عرضيًا. تختلف القواعد من بلد لآخر، فراجع الجهة الضريبية في بلدك إذا كبرت المبالغ.",
      "q4": "هل يمكنني استخدامها خارج اليابان؟",
      "a4": "الخدمات التي تحمل علامة «عالمي» ({list}) تعمل خارج اليابان. أما ⁦Ubiquitus⁩ فللمقيمين في الولايات المتحدة فقط، والبقية للمقيمين في اليابان.",
      "warnH": "قبل التسجيل",
      "warnT": "من المفيد أن تعرف",
      "w1": "تتغير قيمة المكافآت وشروطها كثيرًا. راجع دائمًا صفحة الحملة الرسمية قبل التسجيل.",
      "w2": "تتقلب قيمة المكافآت المدفوعة بالعملات المشفرة صعودًا وهبوطًا.",
      "w4": "الدورات الباهظة التي تَعِد بـ«100,000 ين شهريًا تلقائيًا» لا علاقة لها بالخدمات المدرجة هنا.",
      "foot": "المعلومات محدّثة حتى أكتوبر 2026. هذه ليست نصيحة استثمارية.",
      "count": "عدد الخدمات المعروضة: {n}",
      "none": "لا توجد خدمات مطابقة لهذه الفلاتر.",
      "global": "عالمي",
      "jp": "اليابان فقط",
      "need": "طريقة الحصول",
      "ease": "السهولة",
      "cautionP": "تنبيه: ",
      "svcWarnH": "اقرأ هذا قبل التسجيل",
      "code": "الرمز",
      "pending": "قريبًا",
      "copy": "نسخ",
      "goRef": "سجّل عبر الإحالة",
      "goOff": "زيارة الموقع الرسمي",
      "goCode": "ثبّت التطبيق وأدخل الرمز",
      "copied": "تم نسخ الرمز",
      "selected": "تم تحديد الرمز. انسخه من القائمة",
      "title": "⁦Free Lunch Lab⁩ (مختبر الغداء المجاني)",
      "region": "المنطقة",
      "filterLabel": "التصفية حسب الفئة",
      "metaDesc": "تطبيقات ومشاريع تدفع لك لمجرد وجودك على طريقة الدخل الأساسي، مثل ⁦Ğ1⁩ و⁦Circles⁩ و⁦Gradido⁩ و⁦Idena⁩، مع ذكر المخاطر وإمكانية التحويل إلى نقود. بعض الروابط روابط إحالة.",
      "navLabel": "الأقسام",
      "langLabel": "اللغة",
      "shareH": "شارك القائمة",
      "shareSub": "تعرف شخصًا يفضّل أن يكسب وهو نائم؟ أرسلها إليه.",
      "shareText": "تطبيقات تدفع لك وأنت نائم 😴💰 دخل أساسي مشفّر وتطبيقات دخل سلبي في قائمة واحدة",
      "copyLink": "نسخ الرابط",
      "linkCopied": "تم نسخ الرابط",
      "share": "مشاركة",
      "sleepL": "الوقت على هذه الصفحة",
      "sleepS": "التطبيقات السلبية تواصل العمل في الخلفية طوال هذا الوقت",
      "badgeMax": "ثبّت وانسَ",
      "picksH": "ابدأ بهذه الثلاثة",
      "picksSub": "اخترناها لأنها لا تحتاج جهدًا كبيرًا، وتعمل خارج اليابان، ويمكن صرفها أو استبدالها فعلًا.",
      "pickMore": "عرض التفاصيل",
      "trustLabel": "مؤشرات الثقة",
      "trustCash": "صرف نقدي",
      "trustPrice": "سعر السوق",
      "trustOp": "المشغّل",
      "trustCashD": "صرف نقدي (هل يمكن تحويله إلى نقود)",
      "trustPriceD": "سعر السوق (هل للرمز سعر متداول)",
      "trustOpD": "المشغّل (هل الجهة المشغّلة معلنة)",
      "tYes": "نعم",
      "tPartial": "بشروط",
      "tNo": "لا",
      "tUnknown": "غير مؤكد",
      "newsH": "آخر التحديثات",
      "dawnH": "صباح الخير.<br>ربما وصلك شيء وأنت نائم.",
      "dawnSub": "افتح تطبيقاتك وألقِ نظرة على الرصيد. لم تبدأ بعد؟ جهّز واحدًا لليلة.",
      "dawnCta": "العودة إلى القائمة",
      "more": "عرض المزيد",
      "less": "عرض أقل",
      "svcTitle": "ما هو {name}؟ ما الذي تحصل عليه وكيف تبدأ",
      "hGain": "ما الذي تحصل عليه",
      "hAbout": "ما هو {name}؟",
      "hNeed": "كيف تبدأ",
      "hRelated": "خدمات ذات صلة",
      "backList": "العودة إلى القائمة",
      "crumbLabel": "مسار التنقل",
      "orgsTitle": "منظمات ومشاريع الدخل الأساسي",
      "orgsH1": "منظمات ومشاريع الدخل الأساسي",
      "orgsDesc": "قائمة مختارة بمنظمات ومشاريع حول العالم وفي اليابان تدعو إلى الدخل الأساسي أو تبحث فيه أو تطبّقه، مصنّفة حسب النوع. رُوجعت في أكتوبر 2026.",
      "orgsIntro": "لمن يريد معرفة المزيد عن الدخل الأساسي أو يبحث عن طريقة لدعمه أو المشاركة فيه. هذه ليست خدمات لكسب المال، بل منظمات تعمل في المناصرة والبحث والتحويلات النقدية، مصنّفة حسب النوع.",
      "orgsFounded": "التأسيس",
      "orgsOnSite": "صفحتنا عن هذه الخدمة",
      "orgsRelated": "منظمة ذات صلة",
      "orgsSecH": "منظمات تعمل على الدخل الأساسي",
      "orgsSecP": "هذه ليست خدمات تسجّل فيها لتحصل على المال، بل منظمات تبحث في الدخل الأساسي أو تدعو إليه أو تطبّقه فعلًا عبر التحويلات النقدية.",
      "orgsSecBtn": "عرض كل المنظمات ({n})",
      "only_us": "للمقيمين في الولايات المتحدة فقط",
      "brandSub": "مختبر الغداء المجاني",
      "tagline": "الغداء المجاني موجود فعلًا.",
      "ghLabel": "بيانات مفتوحة على ⁦GitHub⁩",
      "checkedOn": "تم التحقق: {date}",
      "graveTitle": "مقبرة الغداء المجاني",
      "graveIntro": "سجلّ لخدمات وبرامج كانت توزّع المال أو النقاط ثم توقفت. لا ندرج إلا ما تأكد توقفه بإعلان رسمي أو مصدر موثوق. شكرًا على الوجبات. فلترقد بسلام.",
      "graveDesc": "خدمات وبرامج كانت تدفع مالًا أو نقاطًا ثم توقفت، مثل إسقاط ⁦WLD⁩ من ⁦World⁩ و⁦Miles⁩، مع تواريخ التوقف وأسبابه ومصادره.",
      "graveWhat": "ما كان",
      "graveEnded": "انتهى",
      "graveWhy": "السبب",
      "graveSource": "المصدر",
      "graveOnSite": "صفحتنا عن هذه الخدمة",
      "verifyH": "تصفّح حسب طريقة التحقق",
      "verifyLabel": "طريقة التحقق",
      "verifyOpt": "اختياري",
      "verifyReqH": "خدمات تتطلبه",
      "verifyOptH": "خدمات يكون فيها اختياريًا",
      "verifyAll": "كل طرق التحقق",
      "tlTitle": "تجارب الدخل الأساسي: خط زمني",
      "tlIntro": "أبرز تجارب وبرامج الدخل الأساسي والتحويلات النقدية حول العالم، مرتبة زمنيًا. النتائج كما أوردها كل مصدر، ولا ندرج إلا ما استطعنا توثيقه.",
      "tlDesc": "خط زمني لتجارب وبرامج الدخل الأساسي، من ⁦Mincome⁩ وعائد ألاسكا إلى ناميبيا وفنلندا وستوكتون و⁦OpenResearch⁩ والتجربة الألمانية، مع الجهة المنفذة وما دُفع والنتائج والمصادر.",
      "tlWho": "الجهة المنفذة",
      "tlPaid": "ما دُفع",
      "tlResult": "النتيجة",
      "tlSource": "المصدر",
      "tlGov": "حكومي",
      "tlNgo": "منظمة غير حكومية / بحث",
      "tlPrivate": "خاص / سحب",
      "tlCrypto": "عملات مشفرة / مجتمع",
      "tlOnSite": "ذو صلة على هذا الموقع",
      "tlLink": "اطّلع على الخط الزمني لتجارب الدخل الأساسي",
      "essaysTitle": "مقالات",
      "essayBy": "بقلم ⁦Free Lunch Lab⁩",
      "essayOpinion": "رأي",
      "essaySources": "المصادر",
      "essayPublished": "نُشر",
      "essayRelated": "مقال ذو صلة",
      "rssLabel": "خلاصة ⁦RSS⁩",
      "ossTitle": "مشاريع مفتوحة المصدر للدخل الأساسي",
      "ossH1": "شيفرة مفتوحة المصدر للدخل الأساسي",
      "ossDesc": "قائمة مختارة من مشاريع الشيفرة المفتوحة المصدر المتعلقة بالدخل الأساسي: بروتوكولات الدخل الأساسي والمحافظ وإثبات الإنسانية وأدوات محاكاة السياسات، مع الترخيص وعدد النجوم وتاريخ آخر إيداع.",
      "ossIntro": "شيفرة الدخل الأساسي التي يستطيع أي شخص قراءتها أو تشغيلها أو تحسينها: بروتوكولات تُصدر دخلًا أساسيًا، والمحافظ المستخدمة للمطالبة به، وأنظمة إثبات الإنسانية، وأدوات محاكاة تقدّر تكلفة الدخل الأساسي. تُجلب أعداد النجوم وتواريخ آخر إيداع من ⁦GitHub⁩ و⁦GitLab⁩ عند بناء الموقع، وتُوسم المشاريع التي لم تشهد أي إيداع منذ أكثر من 12 شهرًا بأنها خاملة.",
      "ossSecH": "الشيفرة المفتوحة المصدر وراء الدخل الأساسي",
      "ossSecP": "بروتوكولات للدخل الأساسي ومحافظ وأنظمة لإثبات الإنسانية وأدوات لمحاكاة السياسات، شيفرتها المصدرية متاحة للجميع. اقرأها أو شغّلها أو ساهم فيها.",
      "ossSecBtn": "عرض كل المشاريع المفتوحة المصدر ({n})",
      "ossLang": "لغة البرمجة",
      "ossLicense": "الترخيص",
      "ossStars": "النجوم",
      "ossLastCommit": "آخر إيداع",
      "ossDormant": "خامل",
      "ossDormantTip": "لا إيداعات منذ أكثر من 12 شهرًا",
      "ossArchived": "مؤرشف",
      "ossEssay": "مقال ذو صلة",
      "ossFetched": "النجوم وتواريخ الإيداع حتى {date}",
      "ossUnknown": "غير معروف",
      "badgeTitle": "الشارة",
      "badgeH1": "شارة للمشاريع المدرجة",
      "badgeDesc": "شارة صغيرة «⁦Listed on Free Lunch Lab⁩» للمشاريع المدرجة في هذا الموقع، مع شيفرة ⁦Markdown⁩ و⁦HTML⁩ جاهزة للنسخ لكل خدمة ومشروع مفتوح المصدر ومنظمة.",
      "badgeIntro": "إذا كان مشروعك مدرجًا هنا، فلا تتردد في إضافة هذه الشارة. إنها مجانية، ولست مضطرًا لذلك.",
      "badgeNote": "كل مقتطف يربط بصفحة ذلك المشروع على هذا الموقع. الإدراج ليس تزكية، ووضع الشارة أو عدم وضعها لا يغيّر شيئًا مما نكتبه.",
      "badgePreviewH": "الشارات",
      "badgeFlat": "لملفات ⁦README⁩ (⁦20px⁩)",
      "badgeCard": "للمواقع (⁦240×60⁩)",
      "badgeDark": "داكنة",
      "badgeLight": "فاتحة",
      "badgeSvcH": "الخدمات",
      "badgeOssH": "المشاريع المفتوحة المصدر",
      "badgeOrgH": "المنظمات",
      "badgeCopied": "تم النسخ"
    },
    "de": {
      "brand": "Free Lunch <span>Lab</span>",
      "brandPlain": "Free Lunch Lab",
      "navList": "Dienste",
      "navHow": "So geht’s",
      "navFaq": "FAQ",
      "pr": "Diese Seite enthält Empfehlungslinks und -codes. Wenn du dich darüber anmeldest, kann auch der Betreiber dieser Seite einen Bonus bekommen.",
      "eyebrow": "Apps, die dich fürs bloße Dasein bezahlen",
      "h1": "Einmal anmelden.<br><em>Geld</em> bekommen,<br>während du schläfst.",
      "lede": "Apps und Projekte im Stil eines Grundeinkommens, die dich <b>einfach fürs Dasein</b> bezahlen, von täglichen Token bis zu Gemeinschaftswährungen, dazu ein paar Punkte-Apps. Noch prüfen fast alle, ob du ein Mensch bist; kommen <a href=\"essays/ai-agent-basic-income/\">solche Modelle für KI-Agenten</a>, sind sie hier ebenfalls willkommen. Bei jedem stehen <b>Risiken und wie die Auszahlung wirklich läuft</b>. Einige Links sind Empfehlungslinks.",
      "ctaList": "Zu den Diensten",
      "ctaHow": "So geht’s",
      "statAll": "Dienste gelistet",
      "statLoop": "zahlen wiederholt",
      "statGlobal": "auch außerhalb Japans",
      "statDate": "zuletzt geprüft",
      "bookTitle": "KONTOAUSZUG GUTSCHRIFTEN",
      "thDate": "DATUM",
      "thMemo": "BUCHUNGSTEXT",
      "thIn": "GUTSCHRIFT",
      "r1": "ZUTEILUNG G$",
      "r1v": "TÄGLICH",
      "r2": "ZUTEILUNG MEC",
      "r2v": "TÄGLICH",
      "r3": "ZUTEILUNG POY",
      "r3v": "MONATLICH",
      "r4": "EMPFEHLUNG HAPITAS",
      "r5": "PRÄMIE WAVEE",
      "r5v": "BEI MATCH",
      "bookNote": "Nur zur Veranschaulichung. Die tatsächlichen Boni und Bedingungen stehen auf den einzelnen Karten.",
      "hanko": "IM<br>SCHLAF",
      "listH": "Dienste",
      "loopOnly": "Nur wiederkehrende",
      "tagLoop": "Wiederkehrend",
      "tagOnce": "Einmalig",
      "legLoop": "Zahlt nach der Anmeldung immer wieder aus",
      "legOnce": "Einmaliger Bonus für die Anmeldung über eine Empfehlung",
      "legEase": "Aufwand (unsere eigene Einschätzung)",
      "howH": "So meldest du dich an",
      "s1h": "Auf den Button tippen",
      "s1": "Tippe auf einer Karte auf „Über Empfehlung anmelden“, um die offizielle Seite oder App zu öffnen. Bei den meisten Diensten reicht das Öffnen des Links, damit die Empfehlung zählt.",
      "s2h": "Direkt dort anmelden",
      "s2": "Schließ die Anmeldung auf der Seite ab, die sich öffnet. Wenn du zwischendurch in einen anderen Browser oder eine andere App wechselst, kann die Empfehlung verloren gehen. Bleib also auf demselben Bildschirm.",
      "s3h": "Bedingungen erfüllen",
      "s3": "Der Bonus kommt, sobald du die Bedingungen erfüllst, etwa die Identitätsprüfung oder einen ersten Kauf. Das ist bei jedem Dienst anders.",
      "faqH": "FAQ",
      "q1": "Ist das ein echtes Grundeinkommen?",
      "a1": "Nicht das staatliche. „Grundeinkommen“ meint hier Projekte wie GoodDollar und BioMatrix, die allen registrierten Personen wiederholt und ohne Bedingungen Token geben. Japan hat noch kein staatliches Grundeinkommen.",
      "q2": "Verliere ich etwas, wenn ich einen Empfehlungscode nutze?",
      "a2": "Normalerweise nicht. Gebühren und Bedingungen bleiben gleich, und die meisten Dienste geben auch neuen Nutzerinnen und Nutzern einen Bonus. Wer empfiehlt, bekommt ebenfalls eine Belohnung. Deshalb ist diese Seite als Werbung (PR) gekennzeichnet.",
      "q3": "Muss ich die Belohnungen versteuern?",
      "a3": "In Japan gelten Krypto-Gewinne beim Verkauf oder Ausgeben als sonstige Einkünfte, Punkte meist als gelegentliche Einkünfte. Die Regeln sind von Land zu Land verschieden. Frag bei größeren Beträgen beim Finanzamt in deinem Land nach.",
      "q4": "Kann ich das auch außerhalb Japans nutzen?",
      "a4": "Dienste mit der Markierung „Weltweit“ ({list}) funktionieren auch außerhalb Japans. Ubiquitus ist nur für Menschen mit Wohnsitz in den USA; die übrigen sind für Menschen mit Wohnsitz in Japan.",
      "warnH": "Bevor du dich anmeldest",
      "warnT": "Gut zu wissen",
      "w1": "Bonushöhe und Bedingungen ändern sich oft. Prüf vor der Anmeldung immer die offizielle Aktionsseite.",
      "w2": "Belohnungen in Kryptowährung schwanken im Wert.",
      "w4": "Teure Kurse, die „100.000 Yen im Monat ganz automatisch“ versprechen, haben nichts mit den hier gelisteten Diensten zu tun.",
      "foot": "Stand: Oktober 2026. Keine Anlageberatung.",
      "count": "{n} Dienste angezeigt",
      "none": "Keine Dienste passen zu diesen Filtern.",
      "global": "Weltweit",
      "jp": "Nur Japan",
      "need": "So bekommst du es",
      "ease": "Aufwand",
      "cautionP": "Hinweis: ",
      "svcWarnH": "Bitte vor der Anmeldung lesen",
      "code": "CODE",
      "pending": "Folgt bald",
      "copy": "Kopieren",
      "goRef": "Über Empfehlung anmelden",
      "goOff": "Offizielle Seite ansehen",
      "goCode": "App holen & Code eingeben",
      "copied": "Code kopiert",
      "selected": "Code markiert. Kopier ihn über das Menü",
      "title": "Free Lunch Lab",
      "region": "Region",
      "filterLabel": "Nach Kategorie filtern",
      "metaDesc": "Apps und Projekte, die dich fürs bloße Dasein bezahlen, wie ein Grundeinkommen: Ğ1, Circles, Gradido, Idena. Mit Risiken und Auszahlung. Teils Empfehlungslinks.",
      "navLabel": "Bereiche",
      "langLabel": "Sprache",
      "shareH": "Liste teilen",
      "shareSub": "Kennst du jemanden, der lieber im Schlaf verdienen würde? Schick ihm die Liste.",
      "shareText": "Apps, die dich im Schlaf bezahlen 😴💰 Krypto-Grundeinkommen und passive Einkommens-Apps in einer Liste",
      "copyLink": "Link kopieren",
      "linkCopied": "Link kopiert",
      "share": "Teilen",
      "sleepL": "Zeit auf dieser Seite",
      "sleepS": "Passive Apps laufen die ganze Zeit im Hintergrund weiter",
      "badgeMax": "Einrichten & vergessen",
      "picksH": "Fang mit diesen 3 an",
      "picksSub": "Ausgewählt nach wenig Aufwand, Nutzbarkeit außerhalb Japans und einer echten Möglichkeit zum Auszahlen oder Einlösen.",
      "pickMore": "Details ansehen",
      "trustLabel": "Vertrauenscheck",
      "trustCash": "Auszahlung",
      "trustPrice": "Kurs",
      "trustOp": "Betreiber",
      "trustCashD": "Auszahlung (lässt es sich in echtes Geld umwandeln)",
      "trustPriceD": "Marktkurs (wird der Token zu einem Preis gehandelt)",
      "trustOpD": "Betreiber (ist das Unternehmen dahinter bekannt)",
      "tYes": "Ja",
      "tPartial": "Mit Bedingungen",
      "tNo": "Nein",
      "tUnknown": "Ungeprüft",
      "newsH": "Neuigkeiten",
      "dawnH": "Guten Morgen.<br>Vielleicht ist im Schlaf etwas eingegangen.",
      "dawnSub": "Öffne deine Apps und wirf einen Blick auf den Kontostand. Noch nicht angefangen? Richte heute Abend etwas ein.",
      "dawnCta": "Zurück zur Liste",
      "more": "Mehr anzeigen",
      "less": "Weniger anzeigen",
      "svcTitle": "Was ist {name}? Was du bekommst & wie du startest",
      "hGain": "Was du bekommst",
      "hAbout": "Was ist {name}?",
      "hNeed": "So startest du",
      "hRelated": "Ähnliche Dienste",
      "backList": "Zurück zur Liste",
      "crumbLabel": "Brotkrümelnavigation",
      "orgsTitle": "Grundeinkommen: Organisationen & Projekte",
      "orgsH1": "Organisationen & Projekte zum Grundeinkommen",
      "orgsDesc": "Eine ausgewählte Liste von Organisationen und Projekten weltweit und in Japan, die sich für das Grundeinkommen einsetzen, es erforschen oder umsetzen, nach Art gruppiert. Geprüft im Oktober 2026.",
      "orgsIntro": "Für alle, die mehr über das Grundeinkommen erfahren oder einen Weg suchen, es zu unterstützen oder mitzumachen. Das sind keine Dienste zum Geldverdienen, sondern Organisationen, die sich mit Lobbyarbeit, Forschung und Geldtransfers befassen, nach Art gruppiert.",
      "orgsFounded": "Gegründet",
      "orgsOnSite": "Unsere Seite zu diesem Dienst",
      "orgsRelated": "Zugehörige Organisation",
      "orgsSecH": "Organisationen, die sich mit dem Grundeinkommen befassen",
      "orgsSecP": "Das sind keine Dienste, bei denen du dich für Geld anmeldest, sondern Organisationen, die das Grundeinkommen erforschen, sich dafür einsetzen oder es selbst auszahlen.",
      "orgsSecBtn": "Alle Organisationen ansehen ({n})",
      "only_us": "Nur für Wohnsitz in den USA",
      "brandSub": "",
      "tagline": "Es gibt doch ein kostenloses Mittagessen.",
      "ghLabel": "Offene Daten auf GitHub",
      "checkedOn": "Geprüft: {date}",
      "graveTitle": "Der Friedhof der Gratis-Mittagessen",
      "graveIntro": "Eine Erinnerung an Dienste und Programme, die einmal Geld oder Punkte verteilt haben und inzwischen eingestellt sind. Aufgeführt ist nur, was durch eine offizielle Mitteilung oder eine verlässliche Quelle belegt ist. Danke fürs Mittagessen. Ruhet in Frieden.",
      "graveDesc": "Dienste und Programme, die einmal Geld oder Punkte ausgezahlt haben und eingestellt sind, etwa der WLD-Airdrop von World und Miles, mit Enddatum, Gründen und Quellen.",
      "graveWhat": "Was es war",
      "graveEnded": "Eingestellt",
      "graveWhy": "Warum",
      "graveSource": "Quelle",
      "graveOnSite": "Unsere Seite zu diesem Dienst",
      "verifyH": "Nach Verifizierungsmethode suchen",
      "verifyLabel": "Verifizierung",
      "verifyOpt": "optional",
      "verifyReqH": "Dienste, die das verlangen",
      "verifyOptH": "Dienste, bei denen es optional ist",
      "verifyAll": "Alle Verifizierungsmethoden",
      "tlTitle": "Grundeinkommen-Experimente: eine Zeitleiste",
      "tlIntro": "Die wichtigsten Experimente und Programme zu Grundeinkommen und Geldtransfers weltweit, chronologisch. Die Ergebnisse geben wieder, was die jeweilige Quelle berichtet; aufgeführt ist nur, was wir belegen konnten.",
      "tlDesc": "Zeitleiste der Grundeinkommen-Experimente und -Programme, von Mincome und Alaskas Dividende über Namibia, Finnland, Stockton und OpenResearch bis zum deutschen Pilotprojekt, mit Trägern, Zahlungen, Ergebnissen und Quellen.",
      "tlWho": "Träger",
      "tlPaid": "Gezahlt",
      "tlResult": "Ergebnis",
      "tlSource": "Quelle",
      "tlGov": "Staatlich",
      "tlNgo": "NGO / Forschung",
      "tlPrivate": "Privat / Verlosung",
      "tlCrypto": "Krypto / Gemeinschaft",
      "tlOnSite": "Dazu auf dieser Seite",
      "tlLink": "Zeitleiste der Grundeinkommen-Experimente ansehen",
      "essaysTitle": "Essays",
      "essayBy": "Von Free Lunch Lab",
      "essayOpinion": "Meinung",
      "essaySources": "Quellen",
      "essayPublished": "Veröffentlicht",
      "essayRelated": "Verwandter Essay",
      "rssLabel": "RSS-Feed",
      "ossTitle": "Open-Source-Projekte zum Grundeinkommen",
      "ossH1": "Open-Source-Code für das Grundeinkommen",
      "ossDesc": "Eine kuratierte Liste von Open-Source-Projekten rund ums Grundeinkommen: UBI-Protokolle, Wallets, Personennachweise und Politik-Simulatoren, mit Lizenz, Sternen und Datum des letzten Commits.",
      "ossIntro": "Code rund ums Grundeinkommen, den alle lesen, ausführen oder verbessern können: Protokolle, die ein Grundeinkommen ausgeben, Wallets zum Abholen, Systeme zum Nachweis, ein Mensch zu sein, und Simulatoren, die die Kosten eines Grundeinkommens schätzen. Sterne und das Datum des letzten Commits werden beim Bauen der Website von GitHub und GitLab abgerufen; Projekte ohne Commit seit über 12 Monaten sind als ruhend markiert.",
      "ossSecH": "Der offene Code hinter dem Grundeinkommen",
      "ossSecP": "UBI-Protokolle, Wallets, Personennachweis-Systeme und Politik-Simulatoren mit öffentlichem Quellcode. Lesen, ausführen oder mitmachen.",
      "ossSecBtn": "Alle Open-Source-Projekte ansehen ({n})",
      "ossLang": "Sprache",
      "ossLicense": "Lizenz",
      "ossStars": "Sterne",
      "ossLastCommit": "Letzter Commit",
      "ossDormant": "Ruhend",
      "ossDormantTip": "Seit über 12 Monaten kein Commit",
      "ossArchived": "Archiviert",
      "ossEssay": "Passender Essay",
      "ossFetched": "Sterne und Commit-Daten, Stand {date}",
      "ossUnknown": "Unbekannt",
      "badgeTitle": "Badge",
      "badgeH1": "Ein Badge für gelistete Projekte",
      "badgeDesc": "Ein kleines „Listed on Free Lunch Lab“-Badge für Projekte auf dieser Seite, mit Markdown und HTML zum Kopieren für jeden Dienst, jedes Open-Source-Projekt und jede Organisation.",
      "badgeIntro": "Wenn dein Projekt hier gelistet ist, kannst du dieses Badge gern einbauen. Es kostet nichts, und du musst nicht.",
      "badgeNote": "Jedes Snippet verlinkt auf die Seite des Projekts hier. Gelistet zu sein ist keine Empfehlung, und ob du das Badge einbaust oder nicht, ändert nichts an dem, was wir schreiben.",
      "badgePreviewH": "Die Badges",
      "badgeFlat": "Für READMEs (20px)",
      "badgeCard": "Für Websites (240×60)",
      "badgeDark": "Dunkel",
      "badgeLight": "Hell",
      "badgeSvcH": "Dienste",
      "badgeOssH": "Open-Source-Projekte",
      "badgeOrgH": "Organisationen",
      "badgeCopied": "Kopiert"
    }
  },
  "ORG_REGIONS": {
    "global": {
      "ja": "世界",
      "en": "Global",
      "zh": "全球",
      "hi": "वैश्विक",
      "es": "Global",
      "ar": "عالمي",
      "de": "Weltweit"
    },
    "eu": {
      "ja": "ヨーロッパ",
      "en": "Europe",
      "zh": "欧洲",
      "hi": "यूरोप",
      "es": "Europa",
      "ar": "أوروبا",
      "de": "Europa"
    },
    "us": {
      "ja": "アメリカ",
      "en": "United States",
      "zh": "美国",
      "hi": "अमेरिका",
      "es": "Estados Unidos",
      "ar": "الولايات المتحدة",
      "de": "USA"
    },
    "ca": {
      "ja": "カナダ",
      "en": "Canada",
      "zh": "加拿大",
      "hi": "कनाडा",
      "es": "Canadá",
      "ar": "كندا",
      "de": "Kanada"
    },
    "de": {
      "ja": "ドイツ",
      "en": "Germany",
      "zh": "德国",
      "hi": "जर्मनी",
      "es": "Alemania",
      "ar": "ألمانيا",
      "de": "Deutschland"
    },
    "fr": {
      "ja": "フランス語圏",
      "en": "French-speaking",
      "zh": "法语地区",
      "hi": "फ़्रेंच भाषी क्षेत्र",
      "es": "Francófono",
      "ar": "الفرنكوفونية",
      "de": "Französischsprachig"
    },
    "jp": {
      "ja": "日本",
      "en": "Japan",
      "zh": "日本",
      "hi": "जापान",
      "es": "Japón",
      "ar": "اليابان",
      "de": "Japan"
    },
    "at": {
      "ja": "オーストリア",
      "en": "Austria",
      "zh": "奥地利",
      "hi": "ऑस्ट्रिया",
      "es": "Austria",
      "ar": "النمسا",
      "de": "Österreich"
    }
  },
  "ORG_GROUPS": [
    {
      "id": "advocacy",
      "name": {
        "ja": "推進団体",
        "en": "Advocacy groups",
        "zh": "倡导团体",
        "hi": "पैरवी करने वाले संगठन",
        "es": "Grupos de defensa",
        "ar": "مجموعات المناصرة",
        "de": "Interessenverbände"
      }
    },
    {
      "id": "research",
      "name": {
        "ja": "研究・社会実験",
        "en": "Research & pilots",
        "zh": "研究与社会实验",
        "hi": "शोध और प्रयोग",
        "es": "Investigación y pilotos",
        "ar": "البحث والتجارب",
        "de": "Forschung & Pilotprojekte"
      }
    },
    {
      "id": "cash",
      "name": {
        "ja": "現金給付NGO",
        "en": "Cash-transfer NGOs",
        "zh": "现金援助 NGO",
        "hi": "नकद सहायता देने वाले NGO",
        "es": "ONG de transferencias en efectivo",
        "ar": "منظمات التحويل النقدي",
        "de": "NGOs für Geldtransfers"
      }
    },
    {
      "id": "raffle",
      "name": {
        "ja": "抽選・寄付型",
        "en": "Raffles & donations",
        "zh": "抽奖与捐赠型",
        "hi": "लॉटरी और दान आधारित",
        "es": "Sorteos y donaciones",
        "ar": "السحوبات والتبرعات",
        "de": "Verlosungen & Spenden"
      }
    },
    {
      "id": "chain",
      "name": {
        "ja": "ブロックチェーン・独自通貨系",
        "en": "Blockchain & community currencies",
        "zh": "区块链与社区货币",
        "hi": "ब्लॉकचेन और सामुदायिक मुद्राएँ",
        "es": "Blockchain y monedas comunitarias",
        "ar": "البلوكتشين والعملات المجتمعية",
        "de": "Blockchain & Gemeinschaftswährungen"
      }
    },
    {
      "id": "japan",
      "name": {
        "ja": "日本の団体・プロジェクト",
        "en": "In Japan",
        "zh": "日本的团体与项目",
        "hi": "जापान में",
        "es": "En Japón",
        "ar": "في اليابان",
        "de": "In Japan"
      }
    }
  ],
  "ORGS": [
    {
      "id": "bien",
      "group": "advocacy",
      "name": "Basic Income Earth Network (BIEN)",
      "url": "https://basicincome.org/",
      "region": "global",
      "year": 1986,
      "desc": {
        "ja": "ベーシックインカムを支持する人や団体をつなぐ国際ネットワーク。1986年に欧州の団体として始まり、各国の関連団体や国際会議、ニュースの発信を続けている",
        "en": "An international network linking people and groups who support basic income. Started in 1986 as a European network, it now runs a world congress, publishes news and connects national affiliates",
        "zh": "连接支持基本收入的个人与团体的国际网络。1986 年以欧洲网络起步，现在举办世界大会、发布新闻并联系各国的关联组织",
        "hi": "बेसिक इनकम के समर्थक लोगों और संगठनों को जोड़ने वाला अंतरराष्ट्रीय नेटवर्क। 1986 में यूरोपीय नेटवर्क के रूप में शुरू हुआ; अब विश्व सम्मेलन, समाचार और देशों के सहयोगी संगठनों को जोड़ता है",
        "es": "Red internacional que une a personas y grupos que apoyan la renta básica. Nació en 1986 como red europea y hoy organiza un congreso mundial, publica noticias y conecta a sus afiliados nacionales",
        "ar": "شبكة دولية تربط الأفراد والمجموعات المؤيدة للدخل الأساسي. بدأت عام 1986 شبكةً أوروبية، وتنظم اليوم مؤتمرًا عالميًا وتنشر الأخبار وتربط الفروع الوطنية",
        "de": "Ein internationales Netzwerk, das Menschen und Gruppen verbindet, die das Grundeinkommen unterstützen. 1986 als europäisches Netzwerk gegründet, veranstaltet es heute einen Weltkongress, veröffentlicht Nachrichten und verbindet nationale Partnerorganisationen"
      },
      "short": {
        "ja": "1986年から続く、ベーシックインカムの国際ネットワーク",
        "en": "International basic income network, since 1986",
        "zh": "自 1986 年起的基本收入国际网络",
        "hi": "1986 से चल रहा बेसिक इनकम का अंतरराष्ट्रीय नेटवर्क",
        "es": "Red internacional de renta básica desde 1986",
        "ar": "شبكة دولية للدخل الأساسي منذ 1986",
        "de": "Internationales Netzwerk für Grundeinkommen, seit 1986"
      }
    },
    {
      "id": "ubie",
      "group": "advocacy",
      "name": "Unconditional Basic Income Europe (UBIE)",
      "url": "https://www.ubie.org/",
      "region": "eu",
      "desc": {
        "ja": "約25か国の活動家や団体が参加する、ヨーロッパの無条件ベーシックインカム推進ネットワーク。ベーシックインカムを人権として認めさせることを目指す（ベルギーの非営利団体として登録）",
        "en": "A European network of activists and initiatives from about 25 countries campaigning for unconditional basic income and for its recognition as a human right (registered as a Belgian non-profit)",
        "zh": "由约 25 个国家的活动人士和团体组成的欧洲无条件基本收入倡导网络，目标是让基本收入被承认为一项人权（在比利时注册为非营利组织）",
        "hi": "करीब 25 देशों के कार्यकर्ताओं और पहलों का यूरोपीय नेटवर्क, जो बिना शर्त बेसिक इनकम और उसे मानव अधिकार के रूप में मान्यता दिलाने के लिए काम करता है (बेल्जियम में गैर-लाभकारी संस्था के रूप में पंजीकृत)",
        "es": "Red europea de activistas e iniciativas de unos 25 países que defiende la renta básica incondicional y su reconocimiento como derecho humano (registrada como asociación sin ánimo de lucro en Bélgica)",
        "ar": "شبكة أوروبية من ناشطين ومبادرات في نحو 25 دولة تدعو إلى دخل أساسي غير مشروط والاعتراف به حقًا من حقوق الإنسان (مسجلة جمعيةً غير ربحية في بلجيكا)",
        "de": "Ein europäisches Netzwerk von Aktiven und Initiativen aus etwa 25 Ländern, das sich für ein bedingungsloses Grundeinkommen und dessen Anerkennung als Menschenrecht einsetzt (als gemeinnütziger Verein in Belgien eingetragen)"
      }
    },
    {
      "id": "bicn",
      "group": "advocacy",
      "name": "Basic Income Canada Network (BICN)",
      "url": "https://basicincomecanada.org/",
      "region": "ca",
      "desc": {
        "ja": "カナダでベーシックインカムの導入を求める全国ネットワーク。政策提言や情報発信、各地のグループとの連携を行う",
        "en": "A national network pushing for a basic income in Canada through policy work, public information and links with local groups",
        "zh": "推动加拿大实行基本收入的全国性网络，开展政策倡导、信息传播并与各地团体合作",
        "hi": "कनाडा में बेसिक इनकम लागू कराने के लिए काम करने वाला राष्ट्रीय नेटवर्क; नीति सुझाव, जानकारी और स्थानीय समूहों से तालमेल",
        "es": "Red nacional que impulsa una renta básica en Canadá mediante propuestas políticas, divulgación y coordinación con grupos locales",
        "ar": "شبكة وطنية تسعى إلى دخل أساسي في كندا عبر العمل على السياسات ونشر المعلومات والتنسيق مع المجموعات المحلية",
        "de": "Ein landesweites Netzwerk, das sich mit Politikarbeit, Information und Kontakten zu lokalen Gruppen für ein Grundeinkommen in Kanada einsetzt"
      }
    },
    {
      "id": "usbig",
      "group": "advocacy",
      "name": "US Basic Income Guarantee Network (USBIG)",
      "url": "https://usbig.net/",
      "region": "us",
      "year": 1999,
      "desc": {
        "ja": "アメリカのベーシックインカム推進ネットワーク（非営利団体）。研究や記事の発信と、毎年の大会の開催を続けている",
        "en": "A US non-profit network promoting a basic income guarantee. It publishes research and articles and holds an annual conference",
        "zh": "美国推动基本收入保障的非营利网络，发布研究与文章并每年举办大会",
        "hi": "अमेरिका में बेसिक इनकम गारंटी को बढ़ावा देने वाला गैर-लाभकारी नेटवर्क; शोध और लेख प्रकाशित करता है और हर साल सम्मेलन करता है",
        "es": "Red sin ánimo de lucro de EE. UU. que promueve una renta básica garantizada; publica investigación y artículos y celebra una conferencia anual",
        "ar": "شبكة أمريكية غير ربحية تروّج لضمان الدخل الأساسي، تنشر الأبحاث والمقالات وتعقد مؤتمرًا سنويًا",
        "de": "Ein gemeinnütziges US-Netzwerk, das sich für eine Grundeinkommensgarantie einsetzt. Es veröffentlicht Forschung und Artikel und veranstaltet eine jährliche Konferenz"
      }
    },
    {
      "id": "esp",
      "group": "advocacy",
      "name": "Economic Security Project",
      "url": "https://economicsecurityproject.org/",
      "region": "us",
      "year": 2016,
      "desc": {
        "ja": "Facebook共同創業者のChris Hughesらが立ち上げたアメリカの団体。各地の「保証所得（guaranteed income）」の試験事業に資金や支援を出し、制度化を後押ししている",
        "en": "A US group co-founded by Facebook co-founder Chris Hughes and others. It funds and supports guaranteed income pilots around the country and pushes for them to become policy",
        "zh": "由 Facebook 联合创始人 Chris Hughes 等人创立的美国团体，为各地的“保障收入”试点提供资金与支持，并推动其制度化",
        "hi": "Facebook के सह-संस्थापक Chris Hughes और अन्य लोगों द्वारा शुरू किया गया अमेरिकी संगठन; देशभर के गारंटीड इनकम पायलट को पैसा और मदद देता है और उन्हें नीति बनाने पर ज़ोर देता है",
        "es": "Grupo estadounidense cofundado por Chris Hughes, cofundador de Facebook, entre otros. Financia y apoya pilotos de ingreso garantizado en todo el país e impulsa que se conviertan en política",
        "ar": "مجموعة أمريكية شارك في تأسيسها ⁦Chris Hughes⁩، أحد مؤسسي فيسبوك، وآخرون. تموّل تجارب الدخل المضمون في أنحاء البلاد وتدعمها وتدفع نحو تحويلها إلى سياسة",
        "de": "Eine US-Gruppe, die unter anderem von Facebook-Mitgründer Chris Hughes gegründet wurde. Sie finanziert und unterstützt Pilotprojekte für ein garantiertes Einkommen im ganzen Land und setzt sich dafür ein, dass sie zur Politik werden"
      }
    },
    {
      "id": "mgi",
      "group": "advocacy",
      "name": "Mayors for a Guaranteed Income",
      "url": "https://www.mayorsforagi.org/",
      "region": "us",
      "year": 2020,
      "desc": {
        "ja": "元ストックトン市長のMichael Tubbsが始めた、保証所得を求めるアメリカの市長のネットワーク。各市での現金給付の試験事業と、国レベルの制度化を後押しする",
        "en": "A network of US mayors calling for a guaranteed income, started by former Stockton mayor Michael Tubbs. It backs city cash pilots and a federal policy",
        "zh": "由前斯托克顿市长 Michael Tubbs 发起、呼吁保障收入的美国市长网络，支持各市的现金试点并推动联邦层面的制度",
        "hi": "स्टॉकटन के पूर्व मेयर Michael Tubbs द्वारा शुरू किया गया अमेरिकी मेयरों का नेटवर्क, जो गारंटीड इनकम की माँग करता है; शहरों के नकद पायलट और संघीय नीति का समर्थन करता है",
        "es": "Red de alcaldes de EE. UU. que pide un ingreso garantizado, fundada por el exalcalde de Stockton Michael Tubbs. Apoya pilotos municipales de dinero en efectivo y una política federal",
        "ar": "شبكة من رؤساء بلديات أمريكيين تطالب بدخل مضمون، أسسها رئيس بلدية ستوكتون السابق ⁦Michael Tubbs⁩. تدعم التجارب النقدية في المدن وسياسة على المستوى الفيدرالي",
        "de": "Ein Netzwerk von US-Bürgermeistern, das ein garantiertes Einkommen fordert, gegründet vom früheren Bürgermeister von Stockton, Michael Tubbs. Es unterstützt städtische Geld-Pilotprojekte und eine bundesweite Regelung"
      }
    },
    {
      "id": "openresearch",
      "group": "research",
      "name": "OpenResearch",
      "url": "https://www.openresearchlab.org/",
      "region": "us",
      "desc": {
        "ja": "旧「Y Combinator Research」のベーシックインカム研究を引き継いだ非営利の研究組織。3,000人を対象に3年間、毎月現金を渡す大規模な調査を行い、結果を公開している",
        "en": "The non-profit research group that grew out of Y Combinator Research’s basic income project. It ran a three-year study giving monthly cash to 3,000 people and publishes the findings",
        "zh": "由原“Y Combinator Research”基本收入项目发展而来的非营利研究机构。对 3,000 人进行了为期三年的每月现金发放研究，并公开结果",
        "hi": "Y Combinator Research के बेसिक इनकम प्रोजेक्ट से निकला गैर-लाभकारी शोध संगठन। इसने 3,000 लोगों को तीन साल तक हर महीने नकद देकर अध्ययन किया और नतीजे प्रकाशित करता है",
        "es": "Organización de investigación sin ánimo de lucro surgida del proyecto de renta básica de Y Combinator Research. Hizo un estudio de tres años con pagos mensuales a 3.000 personas y publica los resultados",
        "ar": "منظمة بحثية غير ربحية نشأت من مشروع الدخل الأساسي في ⁦Y Combinator Research⁩. أجرت دراسة لثلاث سنوات قدّمت فيها نقودًا شهرية لـ3,000 شخص وتنشر نتائجها",
        "de": "Die gemeinnützige Forschungsgruppe, die aus dem Grundeinkommensprojekt von Y Combinator Research hervorging. Sie führte eine dreijährige Studie durch, in der 3.000 Menschen monatlich Geld erhielten, und veröffentlicht die Ergebnisse"
      },
      "short": {
        "ja": "3,000人に3年間現金を配る大規模調査を行った研究組織",
        "en": "Ran a three-year cash study with 3,000 people",
        "zh": "对 3,000 人进行三年现金发放研究的机构",
        "hi": "3,000 लोगों पर तीन साल का नकद अध्ययन करने वाला शोध संगठन",
        "es": "Hizo un estudio de tres años con pagos en efectivo a 3.000 personas",
        "ar": "أجرت دراسة نقدية لثلاث سنوات شملت 3,000 شخص",
        "de": "Dreijährige Geldstudie mit 3.000 Menschen"
      }
    },
    {
      "id": "stanford",
      "group": "research",
      "name": "Stanford Basic Income Lab",
      "url": "https://basicincome.stanford.edu/",
      "region": "us",
      "desc": {
        "ja": "スタンフォード大学の貧困・不平等研究センターの研究プログラム。世界各地のベーシックインカムの実験や試験事業を集めて分析し、政策担当者や実務家に共有している",
        "en": "A program of Stanford’s Center on Poverty and Inequality that tracks and analyses basic income experiments and pilots and shares what it learns with policymakers and practitioners",
        "zh": "斯坦福大学贫困与不平等研究中心的项目，收集并分析世界各地的基本收入实验与试点，并与政策制定者和实践者分享",
        "hi": "स्टैनफ़ोर्ड के Center on Poverty and Inequality का कार्यक्रम, जो बेसिक इनकम के प्रयोगों और पायलटों को ट्रैक कर उनका विश्लेषण करता है और नीति-निर्माताओं से साझा करता है",
        "es": "Programa del Centro sobre Pobreza y Desigualdad de Stanford que recopila y analiza experimentos y pilotos de renta básica y comparte lo aprendido con responsables políticos",
        "ar": "برنامج تابع لمركز الفقر وعدم المساواة في جامعة ستانفورد، يتابع تجارب الدخل الأساسي ويحللها ويشارك ما يتعلمه مع صانعي السياسات",
        "de": "Ein Programm des Center on Poverty and Inequality der Stanford University, das Experimente und Pilotprojekte zum Grundeinkommen sammelt und auswertet und die Erkenntnisse mit Politik und Praxis teilt"
      }
    },
    {
      "id": "bis",
      "group": "research",
      "name": "Basic Income Studies",
      "url": "https://www.degruyterbrill.com/journal/key/bis/html",
      "region": "global",
      "desc": {
        "ja": "ベーシックインカムを専門に扱う学術誌。経済学・哲学・政治学などの論文を掲載している（出版はDe Gruyter Brill）",
        "en": "An academic journal devoted to basic income, publishing work from economics, philosophy, politics and more (published by De Gruyter Brill)",
        "zh": "专门研究基本收入的学术期刊，刊登经济学、哲学、政治学等领域的论文（由 De Gruyter Brill 出版）",
        "hi": "बेसिक इनकम पर केंद्रित शोध पत्रिका, जिसमें अर्थशास्त्र, दर्शन, राजनीति आदि के लेख छपते हैं (प्रकाशक De Gruyter Brill)",
        "es": "Revista académica dedicada a la renta básica, con trabajos de economía, filosofía, política y otras áreas (editada por De Gruyter Brill)",
        "ar": "مجلة أكاديمية مخصصة للدخل الأساسي تنشر أبحاثًا في الاقتصاد والفلسفة والسياسة وغيرها (تصدرها ⁦De Gruyter Brill⁩)",
        "de": "Eine Fachzeitschrift zum Grundeinkommen mit Beiträgen aus Ökonomie, Philosophie, Politikwissenschaft und mehr (verlegt bei De Gruyter Brill)"
      }
    },
    {
      "id": "greshm",
      "group": "research",
      "name": "The Greshm Institute",
      "url": "https://www.greshm.org/",
      "desc": {
        "ja": "ベーシックインカムの経済学を研究・議論する団体。以前の「Project Greshm」から名前を変え、オンラインのシンポジウムなどを開いている",
        "en": "A group studying and debating the economics of basic income. Formerly “Project Greshm”, it now holds online symposia and similar events",
        "zh": "研究和探讨基本收入经济学的团体。前身为“Project Greshm”，现在举办线上研讨会等活动",
        "hi": "बेसिक इनकम के अर्थशास्त्र पर शोध और चर्चा करने वाला समूह। पहले इसका नाम “Project Greshm” था; अब ऑनलाइन संगोष्ठियाँ आदि करता है",
        "es": "Grupo que estudia y debate la economía de la renta básica. Antes se llamaba «Project Greshm» y ahora organiza simposios en línea, entre otras actividades",
        "ar": "مجموعة تدرس اقتصاديات الدخل الأساسي وتناقشها. كانت تُعرف سابقًا باسم «⁦Project Greshm⁩» وتنظم الآن ندوات عبر الإنترنت وغيرها",
        "de": "Eine Gruppe, die die Ökonomie des Grundeinkommens erforscht und diskutiert. Früher „Project Greshm“, veranstaltet sie heute unter anderem Online-Symposien"
      }
    },
    {
      "id": "givedirectly",
      "group": "cash",
      "name": "GiveDirectly",
      "url": "https://www.givedirectly.org/",
      "region": "us",
      "desc": {
        "ja": "寄付金を、貧困の中で暮らす家庭に直接現金で届ける非営利団体。2009年から給付を続け、アフリカ各国やアメリカで活動している",
        "en": "A non-profit that sends donations straight to people living in poverty as cash. It has been giving since 2009 and works in several African countries and the US",
        "zh": "将捐款以现金形式直接送到贫困家庭手中的非营利组织。自 2009 年起持续发放，在多个非洲国家和美国开展工作",
        "hi": "दान की रकम को सीधे गरीबी में रह रहे परिवारों तक नकद पहुँचाने वाली गैर-लाभकारी संस्था। 2009 से नकद दे रही है और कई अफ़्रीकी देशों व अमेरिका में काम करती है",
        "es": "Organización sin ánimo de lucro que entrega las donaciones directamente en efectivo a personas en situación de pobreza. Lo hace desde 2009 en varios países de África y en EE. UU.",
        "ar": "منظمة غير ربحية توصل التبرعات نقدًا مباشرةً إلى الأسر التي تعيش في فقر. تقدّم النقود منذ 2009 وتعمل في عدة دول أفريقية والولايات المتحدة",
        "de": "Eine gemeinnützige Organisation, die Spenden direkt als Geld an Menschen in Armut weitergibt. Sie zahlt seit 2009 aus und arbeitet in mehreren afrikanischen Ländern und den USA"
      },
      "short": {
        "ja": "貧困の中で暮らす家庭に、寄付を現金で直接届けるNGO",
        "en": "Sends donations as cash directly to people in poverty",
        "zh": "将捐款以现金直接送到贫困家庭的 NGO",
        "hi": "दान को सीधे नकद के रूप में गरीब परिवारों तक पहुँचाने वाला NGO",
        "es": "ONG que entrega donaciones en efectivo directamente a personas en pobreza",
        "ar": "منظمة توصل التبرعات نقدًا مباشرةً إلى الأسر الفقيرة",
        "de": "Gibt Spenden direkt als Geld an Menschen in Armut weiter"
      }
    },
    {
      "id": "mgk",
      "group": "raffle",
      "name": "Mein Grundeinkommen",
      "url": "https://www.mein-grundeinkommen.de/",
      "region": "de",
      "year": 2014,
      "svc": "meingrundeinkommen",
      "desc": {
        "ja": "ベルリンの非営利団体。寄付で集めたお金で、月1,000ユーロを1年間受け取れる「ベーシックインカム」を抽選で配っている",
        "en": "A Berlin non-profit that raises donations and raffles off basic incomes of €1,000 a month for a year",
        "zh": "柏林的非营利组织，用募集的捐款以抽奖方式发放为期一年、每月 1,000 欧元的“基本收入”",
        "hi": "बर्लिन की गैर-लाभकारी संस्था, जो दान जुटाकर एक साल तक हर महीने €1,000 की “बेसिक इनकम” लॉटरी से बाँटती है",
        "es": "Organización sin ánimo de lucro de Berlín que recauda donaciones y sortea rentas básicas de 1.000 € al mes durante un año",
        "ar": "منظمة غير ربحية في برلين تجمع التبرعات وتجري سحوبات على دخل أساسي قدره ⁦€1,000⁩ شهريًا لمدة سنة",
        "de": "Ein gemeinnütziger Verein aus Berlin, der Spenden sammelt und Grundeinkommen von 1.000 € im Monat für ein Jahr verlost"
      }
    },
    {
      "id": "ubi4all",
      "group": "raffle",
      "name": "UBI4ALL",
      "url": "https://www.ubi4all.org/",
      "region": "eu",
      "year": 2020,
      "svc": "ubi4all",
      "desc": {
        "ja": "2020年設立のヨーロッパの非営利団体。寄付で9,600ユーロが集まるたびに、総額9,600ユーロのベーシックインカムを世界中の参加者から抽選で配っている",
        "en": "A European non-profit founded in 2020 that raffles a basic income worth €9,600 in total, open worldwide, each time donations reach €9,600",
        "zh": "2020 年成立的欧洲非营利组织。每当捐款凑满 9,600 欧元，就从全球参加者中抽出一份总额 9,600 欧元的基本收入",
        "hi": "2020 में बनी यूरोपीय गैर-लाभकारी संस्था, जो दान से €9,600 जमा होते ही दुनियाभर के प्रतिभागियों में कुल €9,600 की बेसिक इनकम लॉटरी से बाँटती है",
        "es": "Organización europea sin ánimo de lucro fundada en 2020 que, cada vez que las donaciones llegan a 9.600 €, sortea entre participantes de todo el mundo una renta básica de 9.600 € en total",
        "ar": "منظمة أوروبية غير ربحية تأسست في 2020، تسحب على دخل أساسي بقيمة ⁦€9,600⁩ إجمالًا بين مشاركين من كل العالم كلما بلغت التبرعات ⁦€9,600⁩",
        "de": "Eine 2020 gegründete europäische gemeinnützige Organisation, die jedes Mal, wenn 9.600 € an Spenden zusammengekommen sind, ein Grundeinkommen von insgesamt 9.600 € unter Teilnehmenden aus aller Welt verlost"
      }
    },
    {
      "id": "circles",
      "group": "chain",
      "name": "Circles",
      "url": "https://aboutcircles.com/",
      "region": "global",
      "svc": "circles",
      "desc": {
        "ja": "一人ひとりが自分の通貨を少しずつ発行し、信頼でつながった人どうしで使うしくみ。Gnosisが手がけ、現在はGnosis Appから参加する（旧サイトはjoincircles.net）",
        "en": "A system where every person slowly issues their own currency, used among people linked by trust. Built by Gnosis; you now join through the Gnosis App (the old site was joincircles.net)",
        "zh": "每个人逐步发行自己的货币，并在相互信任的人之间使用的机制。由 Gnosis 打造，现在通过 Gnosis App 加入（旧网站为 joincircles.net）",
        "hi": "ऐसी व्यवस्था जिसमें हर व्यक्ति धीरे-धीरे अपनी करेंसी जारी करता है और भरोसे से जुड़े लोगों में उसका इस्तेमाल होता है। Gnosis ने बनाया; अब Gnosis App से जुड़ते हैं (पुरानी साइट joincircles.net थी)",
        "es": "Sistema en el que cada persona emite poco a poco su propia moneda, que se usa entre personas unidas por la confianza. Creado por Gnosis; ahora se entra a través de la Gnosis App (la web antigua era joincircles.net)",
        "ar": "نظام يُصدر فيه كل شخص عملته الخاصة تدريجيًا، وتُستخدم بين أشخاص تربطهم الثقة. أنشأته ⁦Gnosis⁩، والانضمام اليوم عبر ⁦Gnosis App⁩ (الموقع القديم ⁦joincircles.net⁩)",
        "de": "Ein System, in dem jede Person nach und nach ihre eigene Währung schöpft, die zwischen Menschen genutzt wird, die einander vertrauen. Entwickelt von Gnosis; heute steigt man über die Gnosis App ein (die alte Seite war joincircles.net)"
      }
    },
    {
      "id": "gooddollar",
      "group": "chain",
      "name": "GoodDollar",
      "url": "https://www.gooddollar.org/",
      "region": "global",
      "svc": "gooddollar",
      "desc": {
        "ja": "本人確認をした人がG$トークンを毎日受け取れる、非営利のブロックチェーン型ベーシックインカムの取り組み",
        "en": "A non-profit blockchain basic income project where verified people can claim G$ tokens every day",
        "zh": "经过身份验证的人每天都能领取 G$ 代币的非营利区块链基本收入项目",
        "hi": "गैर-लाभकारी ब्लॉकचेन बेसिक इनकम प्रोजेक्ट, जिसमें सत्यापित लोग हर दिन G$ टोकन क्लेम कर सकते हैं",
        "es": "Proyecto sin ánimo de lucro de renta básica en blockchain en el que las personas verificadas pueden reclamar tokens G$ cada día",
        "ar": "مشروع دخل أساسي غير ربحي على البلوكتشين يتيح للأشخاص الموثَّقين المطالبة برموز ⁦G$⁩ كل يوم",
        "de": "Ein gemeinnütziges Blockchain-Grundeinkommensprojekt, bei dem verifizierte Menschen jeden Tag G$-Token abholen können"
      }
    },
    {
      "id": "g1",
      "group": "chain",
      "name": "Ğ1 (Duniter)",
      "url": "https://duniter.org/g1/",
      "region": "fr",
      "year": 2017,
      "svc": "g1",
      "desc": {
        "ja": "「貨幣の相対性理論」にもとづく自由通貨。メンバーが「信頼の網」で互いを認証し、全員に毎日の配当が発行される。フランス語圏の参加者が中心",
        "en": "A libre currency based on the Relative Theory of Money. Members certify one another through a web of trust, and everyone receives a daily dividend. Mostly French-speaking",
        "zh": "基于“货币相对论”的自由货币。成员通过“信任网”相互认证，每个人每天都会获得红利。参与者以法语圈为主",
        "hi": "“रिलेटिव थ्योरी ऑफ़ मनी” पर आधारित लिब्रे करेंसी। सदस्य “वेब ऑफ़ ट्रस्ट” से एक-दूसरे को सर्टिफ़ाई करते हैं, और सबको रोज़ डिविडेंड मिलता है। ज़्यादातर फ़्रेंच भाषी",
        "es": "Moneda libre basada en la Teoría Relativa de la Moneda. Los miembros se certifican mutuamente mediante una red de confianza y todos reciben un dividendo diario. Mayoritariamente francófona",
        "ar": "عملة حرة قائمة على «النظرية النسبية للنقود». يوثّق الأعضاء بعضهم بعضًا عبر «شبكة الثقة»، ويحصل الجميع على عائد يومي. أغلب المشاركين من الناطقين بالفرنسية",
        "de": "Eine freie Währung auf Grundlage der Relativen Geldtheorie. Mitglieder zertifizieren sich gegenseitig über ein Vertrauensnetz, und alle erhalten eine tägliche Dividende. Überwiegend französischsprachig"
      }
    },
    {
      "id": "groupincome",
      "group": "chain",
      "name": "Group Income",
      "url": "https://groupincome.org/",
      "region": "global",
      "desc": {
        "ja": "仲間うちで毎月お金を出し合い、一定額に届かない人を支える「自分たちのベーシックインカム」をつくるオープンソースのアプリ。okTurtles Foundationが開発を続けている",
        "en": "An open-source app for building a “basic income” within your own group: members chip in each month to support those who fall short. Developed by the okTurtles Foundation",
        "zh": "在自己的小团体内建立“基本收入”的开源应用：成员每月出资，支持收入不足的人。由 okTurtles Foundation 持续开发",
        "hi": "अपने ही समूह में “बेसिक इनकम” बनाने के लिए ओपन-सोर्स ऐप: सदस्य हर महीने पैसे जोड़ते हैं और जिनकी आय कम पड़ती है उनकी मदद करते हैं। okTurtles Foundation इसे विकसित कर रहा है",
        "es": "App de código abierto para crear una «renta básica» dentro de tu propio grupo: los miembros aportan cada mes para apoyar a quien no llega. La desarrolla la okTurtles Foundation",
        "ar": "تطبيق مفتوح المصدر لبناء «دخل أساسي» داخل مجموعتك: يساهم الأعضاء شهريًا لدعم من يقل دخله. تطوّره ⁦okTurtles Foundation⁩",
        "de": "Eine Open-Source-App, mit der du in deiner eigenen Gruppe ein „Grundeinkommen“ aufbaust: Mitglieder zahlen monatlich ein, um die zu unterstützen, denen etwas fehlt. Entwickelt von der okTurtles Foundation"
      }
    },
    {
      "id": "gradido",
      "group": "chain",
      "name": "Gradido (Gradido Akademie International)",
      "url": "https://gradido.net/en/",
      "region": "at",
      "svc": "gradido",
      "desc": {
        "ja": "「自然の経済」をうたう独自通貨のしくみを研究・運営する、オーストリアの研究開発団体。公益への貢献に応じた「アクティブ・ベーシックインカム」と、使わないお金が目減りするしくみが特徴",
        "en": "An Austrian research and development association behind Gradido, a currency system billed as a “natural economy”, with an “active basic income” for common-good contributions and money that slowly shrinks when unused",
        "zh": "研究并运营自称“自然经济”的货币体系 Gradido 的奥地利研发协会。特点是按公益贡献发放的“主动基本收入”，以及闲置货币逐渐减少的机制",
        "hi": "ऑस्ट्रिया का शोध और विकास संघ, जो “प्राकृतिक अर्थव्यवस्था” कहलाने वाली मुद्रा व्यवस्था Gradido चलाता है; जनहित के योगदान पर “एक्टिव बेसिक इनकम” और बिना इस्तेमाल के धीरे-धीरे घटने वाला पैसा इसकी ख़ासियत है",
        "es": "Asociación austriaca de investigación y desarrollo detrás de Gradido, un sistema monetario que se presenta como «economía natural», con una «renta básica activa» por aportar al bien común y dinero que se reduce poco a poco si no se usa",
        "ar": "جمعية بحث وتطوير نمساوية تقف وراء ⁦Gradido⁩، وهو نظام عملة يصف نفسه بأنه «اقتصاد طبيعي»، يتميز بـ«دخل أساسي نشط» مقابل المساهمة في الصالح العام وبمال يتناقص تدريجيًا إذا لم يُستخدم",
        "de": "Ein österreichischer Forschungs- und Entwicklungsverein hinter Gradido, einem Geldsystem, das sich „Natürliche Ökonomie“ nennt, mit einem „aktiven Grundeinkommen“ für Gemeinwohl-Beiträge und Geld, das ungenutzt langsam schrumpft"
      }
    },
    {
      "id": "jabi",
      "group": "japan",
      "name": "日本ベーシックインカム学会（JABI）",
      "url": "https://jabi.jp/",
      "region": "jp",
      "year": 2018,
      "desc": {
        "ja": "研究者や運動家、政治家などが集まり、ベーシックインカムを中立的な立場で研究する学会。年次大会や各地の研究会、学会誌『ベーシックインカム研究』の発行を行っている",
        "en": "A Japanese academic society where researchers, activists and politicians study basic income from a neutral standpoint. It holds an annual conference and regional study groups and publishes a journal",
        "zh": "研究者、社会活动人士和政治人物等汇聚一堂、以中立立场研究基本收入的日本学会。举办年会和各地研究会，并出版学会期刊",
        "hi": "जापान का अकादमिक संगठन, जहाँ शोधकर्ता, कार्यकर्ता और राजनेता तटस्थ रूप से बेसिक इनकम का अध्ययन करते हैं। वार्षिक सम्मेलन, क्षेत्रीय अध्ययन समूह और एक पत्रिका प्रकाशित करता है",
        "es": "Sociedad académica japonesa en la que investigadores, activistas y políticos estudian la renta básica desde una postura neutral. Celebra un congreso anual y grupos de estudio regionales y edita una revista",
        "ar": "جمعية أكاديمية يابانية يدرس فيها باحثون وناشطون وسياسيون الدخل الأساسي من موقف محايد. تعقد مؤتمرًا سنويًا وحلقات دراسية إقليمية وتصدر مجلة",
        "de": "Eine japanische Fachgesellschaft, in der Forschende, Aktive und Politiker das Grundeinkommen aus neutraler Sicht untersuchen. Sie veranstaltet eine Jahrestagung und regionale Arbeitskreise und gibt eine Zeitschrift heraus"
      },
      "short": {
        "ja": "ベーシックインカムを中立の立場で研究する日本の学会",
        "en": "Japanese academic society studying basic income",
        "zh": "以中立立场研究基本收入的日本学会",
        "hi": "बेसिक इनकम पर शोध करने वाला जापानी अकादमिक संगठन",
        "es": "Sociedad académica japonesa que estudia la renta básica",
        "ar": "جمعية أكاديمية يابانية تدرس الدخل الأساسي",
        "de": "Japanische Fachgesellschaft zur Grundeinkommensforschung"
      }
    },
    {
      "id": "maezawa",
      "group": "japan",
      "name": "前澤式ベーシックインカム社会実験",
      "url": "https://www.yusakumaezawa.com/",
      "region": "jp",
      "desc": {
        "ja": "実業家の前澤友作氏による民間の社会実験。1,000人に1人あたり総額100万円を渡し、受け取り方の違う4つのグループに約1年間アンケートを行って、ベーシックインカムのある暮らしへの影響を調べる",
        "en": "A private experiment by entrepreneur Yusaku Maezawa: 1,000 people each receive ¥1 million in total, split into four groups with different payout patterns and surveyed for about a year on how it affects their lives",
        "zh": "企业家前泽友作发起的民间社会实验：向 1,000 人每人发放共 100 万日元，按不同领取方式分成 4 组，用约一年时间问卷调查其对生活的影响",
        "hi": "उद्यमी Yusaku Maezawa का निजी सामाजिक प्रयोग: 1,000 लोगों को कुल ¥10 लाख प्रति व्यक्ति, अलग-अलग भुगतान तरीकों वाले 4 समूहों में बाँटकर करीब एक साल सर्वे से जीवन पर असर देखा जाता है",
        "es": "Experimento privado del empresario Yusaku Maezawa: 1.000 personas reciben en total 1 millón de yenes cada una, repartidas en cuatro grupos con distintas formas de cobro y encuestadas durante un año sobre el efecto en su vida",
        "ar": "تجربة اجتماعية خاصة أطلقها رجل الأعمال ⁦Yusaku Maezawa⁩: يحصل 1,000 شخص على مليون ين لكل منهم إجمالًا، موزعين على أربع مجموعات بطرق دفع مختلفة، ويُستطلعون لنحو عام حول أثر ذلك في حياتهم",
        "de": "Ein privates Experiment des Unternehmers Yusaku Maezawa: 1.000 Menschen erhalten insgesamt je 1 Million Yen, aufgeteilt in vier Gruppen mit unterschiedlichen Auszahlungsweisen, und werden etwa ein Jahr lang befragt, wie sich das auf ihr Leben auswirkt"
      }
    }
  ],
  "ORG_PREVIEW": [
    "bien",
    "givedirectly",
    "openresearch",
    "jabi"
  ],
  "OSS_GROUPS": [
    {
      "id": "protocols",
      "name": {
        "ja": "プロトコル",
        "en": "Protocols",
        "zh": "协议",
        "hi": "प्रोटोकॉल",
        "es": "Protocolos",
        "ar": "البروتوكولات",
        "de": "Protokolle"
      }
    },
    {
      "id": "apps",
      "name": {
        "ja": "アプリとウォレット",
        "en": "Apps & wallets",
        "zh": "应用与钱包",
        "hi": "ऐप और वॉलेट",
        "es": "Apps y billeteras",
        "ar": "التطبيقات والمحافظ",
        "de": "Apps & Wallets"
      }
    },
    {
      "id": "personhood",
      "name": {
        "ja": "人間であることの証明",
        "en": "Proof of personhood",
        "zh": "人格证明",
        "hi": "इंसान होने का प्रमाण",
        "es": "Prueba de humanidad",
        "ar": "إثبات الإنسانية",
        "de": "Personennachweis"
      }
    },
    {
      "id": "research",
      "name": {
        "ja": "シミュレーターと研究",
        "en": "Simulators & research",
        "zh": "模拟器与研究",
        "hi": "सिम्युलेटर और शोध",
        "es": "Simuladores e investigación",
        "ar": "أدوات المحاكاة والأبحاث",
        "de": "Simulatoren & Forschung"
      }
    }
  ],
  "OSS": [
    {
      "id": "circles-contracts-v2",
      "group": "protocols",
      "name": "Circles v2 contracts",
      "host": "github.com",
      "repo": "aboutcircles/circles-contracts-v2",
      "svc": "circles",
      "desc": {
        "ja": "Gnosis Chain 上の Circles v2 のスマートコントラクト。一人ひとりが毎時間自分の通貨を発行し、人どうしの信頼でそれが流通する",
        "en": "Smart contracts for Circles v2 on Gnosis Chain: every person mints their own currency each hour, and trust between people lets it circulate",
        "zh": "Gnosis Chain 上 Circles v2 的智能合约：每个人每小时铸造自己的货币，人与人之间的信任让它流通起来",
        "hi": "Gnosis Chain पर Circles v2 के स्मार्ट कॉन्ट्रैक्ट: हर व्यक्ति हर घंटे अपनी मुद्रा बनाता है, और लोगों के बीच भरोसे से वह चलन में आती है",
        "es": "Contratos inteligentes de Circles v2 en Gnosis Chain: cada persona acuña su propia moneda cada hora y la confianza entre personas la hace circular",
        "ar": "العقود الذكية لـ⁦Circles v2⁩ على ⁦Gnosis Chain⁩: يصكّ كل شخص عملته الخاصة كل ساعة، وتتيح الثقة بين الناس تداولها",
        "de": "Smart Contracts für Circles v2 auf der Gnosis Chain: Jeder Mensch prägt stündlich seine eigene Währung, und Vertrauen zwischen Menschen bringt sie in Umlauf"
      }
    },
    {
      "id": "goodprotocol",
      "group": "protocols",
      "name": "GoodProtocol",
      "host": "github.com",
      "repo": "GoodDollar/GoodProtocol",
      "svc": "gooddollar",
      "desc": {
        "ja": "GoodDollar のスマートコントラクト（第2版）。G$ トークン、ステーキングの利回りでまかなう準備金、毎日の UBI 受け取りのしくみ",
        "en": "GoodDollar’s smart contracts (version 2): the G$ token, the reserve funded by staking yield, and the daily UBI claim",
        "zh": "GoodDollar 的智能合约（第 2 版）：G$ 代币、由质押收益注资的储备金，以及每日领取 UBI 的机制",
        "hi": "GoodDollar के स्मार्ट कॉन्ट्रैक्ट (संस्करण 2): G$ टोकन, स्टेकिंग की कमाई से भरा रिज़र्व और रोज़ाना UBI क्लेम",
        "es": "Contratos inteligentes de GoodDollar (versión 2): el token G$, la reserva financiada con rendimientos de staking y el cobro diario de la RBU",
        "ar": "العقود الذكية لـ⁦GoodDollar⁩ (الإصدار 2): رمز ⁦G$⁩، والاحتياطي الممول من عوائد التخزين، والمطالبة اليومية بالدخل الأساسي",
        "de": "Die Smart Contracts von GoodDollar (Version 2): der G$-Token, die aus Staking-Erträgen finanzierte Reserve und das tägliche Abholen des Grundeinkommens"
      }
    },
    {
      "id": "duniter-v2s",
      "group": "protocols",
      "name": "Duniter v2s",
      "host": "git.duniter.org",
      "repo": "nodes/rust/duniter-v2s",
      "svc": "g1",
      "desc": {
        "ja": "自由通貨 Ğ1 のノードソフトを Substrate で作り直したもの。信頼の網で認められたメンバー全員が毎日「ユニバーサル配当」を生み出す",
        "en": "Node software for the Ğ1 libre currency, rebuilt on Substrate: every member of its web of trust creates a universal dividend each day",
        "zh": "用 Substrate 重写的自由货币 Ğ1 节点软件：信任网络中的每位成员每天都会产生一份全民红利",
        "hi": "Ğ1 मुक्त मुद्रा का नोड सॉफ़्टवेयर, Substrate पर नए सिरे से बना: भरोसे के जाल का हर सदस्य रोज़ एक सार्वभौमिक लाभांश बनाता है",
        "es": "Software de nodo de la moneda libre Ğ1, reescrito sobre Substrate: cada miembro de su red de confianza crea un dividendo universal cada día",
        "ar": "برنامج العُقد للعملة الحرة ⁦Ğ1⁩، أعيد بناؤه على ⁦Substrate⁩: ينشئ كل عضو في شبكة الثقة الخاصة بها حصة أرباح شاملة كل يوم",
        "de": "Node-Software der freien Währung Ğ1, neu gebaut auf Substrate: Jedes Mitglied ihres Vertrauensnetzes erzeugt täglich eine universelle Dividende"
      }
    },
    {
      "id": "gradido",
      "group": "protocols",
      "name": "Gradido",
      "host": "github.com",
      "repo": "gradido/gradido",
      "svc": "gradido",
      "desc": {
        "ja": "Gradido のサーバー、ウェブウォレット、管理ツール。地域への貢献に対する「アクティブなベーシックインカム」として一人ひとりにお金を生み出す",
        "en": "Server, web wallet and admin tools for Gradido, which creates money for each person as an “active basic income” for contributing to the community",
        "zh": "Gradido 的服务器、网页钱包和管理工具。它为每个人创造货币，作为对社区贡献的“积极基本收入”",
        "hi": "Gradido का सर्वर, वेब वॉलेट और एडमिन टूल; यह समुदाय में योगदान के बदले हर व्यक्ति के लिए “सक्रिय बेसिक इनकम” के रूप में पैसा बनाता है",
        "es": "Servidor, billetera web y herramientas de administración de Gradido, que crea dinero para cada persona como «renta básica activa» por contribuir a la comunidad",
        "ar": "الخادم والمحفظة الإلكترونية وأدوات الإدارة لـ⁦Gradido⁩، الذي ينشئ المال لكل شخص بوصفه «دخلًا أساسيًا نشطًا» مقابل المساهمة في المجتمع",
        "de": "Server, Web-Wallet und Admin-Werkzeuge für Gradido, das für jeden Menschen Geld als „aktives Grundeinkommen“ für Beiträge zur Gemeinschaft schöpft"
      }
    },
    {
      "id": "idena-go",
      "group": "protocols",
      "name": "Idena",
      "host": "github.com",
      "repo": "idena-network/idena-go",
      "svc": "idena",
      "desc": {
        "ja": "Idena のノード。世界中で同時に AI が解きにくい「フリップ」テストを解いて人間であることを示し、認められた ID が報酬を受け取る",
        "en": "Node for Idena, a blockchain where people prove they are human by solving AI-resistant “flip” puzzles at the same moment worldwide, and validated identities earn rewards",
        "zh": "Idena 的节点。人们在全球同一时刻解答难以被 AI 破解的“翻转”谜题来证明自己是真人，通过验证的身份可获得奖励",
        "hi": "Idena का नोड: इस ब्लॉकचेन पर लोग दुनिया भर में एक ही समय AI के लिए कठिन “फ़्लिप” पहेलियाँ हल करके इंसान साबित होते हैं, और सत्यापित पहचानों को इनाम मिलता है",
        "es": "Nodo de Idena, una blockchain donde las personas demuestran ser humanas resolviendo a la vez en todo el mundo acertijos «flip» difíciles para la IA, y las identidades validadas reciben recompensas",
        "ar": "عقدة ⁦Idena⁩، وهي سلسلة كتل يثبت فيها الناس أنهم بشر بحل ألغاز «الصور المقلوبة» الصعبة على الذكاء الاصطناعي في اللحظة نفسها حول العالم، وتحصل الهويات المُتحقَّق منها على مكافآت",
        "de": "Node für Idena, eine Blockchain, auf der Menschen weltweit zur selben Zeit KI-resistente „Flip“-Rätsel lösen, um zu zeigen, dass sie Menschen sind; bestätigte Identitäten erhalten Belohnungen"
      }
    },
    {
      "id": "encointer-pallets",
      "group": "protocols",
      "name": "Encointer pallets",
      "host": "github.com",
      "repo": "encointer/pallets",
      "desc": {
        "ja": "Encointer を動かす Substrate のモジュール群。地域通貨ごとに、定期的な対面の集まりに参加した全員へ UBI を配る",
        "en": "Substrate pallets behind Encointer: local community currencies that pay a UBI to everyone who attends regular in-person meetups",
        "zh": "驱动 Encointer 的 Substrate 模块：各地的社区货币向定期参加线下聚会的每个人发放 UBI",
        "hi": "Encointer के पीछे के Substrate पैलेट: स्थानीय सामुदायिक मुद्राएँ, जो नियमित आमने-सामने की मीटअप में आने वाले हर व्यक्ति को UBI देती हैं",
        "es": "Pallets de Substrate detrás de Encointer: monedas comunitarias locales que pagan una RBU a todos los que asisten a encuentros presenciales periódicos",
        "ar": "وحدات ⁦Substrate⁩ التي يقوم عليها ⁦Encointer⁩: عملات مجتمعية محلية تدفع دخلًا أساسيًا لكل من يحضر لقاءات وجاهية دورية",
        "de": "Substrate-Pallets hinter Encointer: lokale Gemeinschaftswährungen, die allen, die regelmäßig zu persönlichen Treffen kommen, ein Grundeinkommen zahlen"
      }
    },
    {
      "id": "group-income",
      "group": "protocols",
      "name": "Group Income",
      "host": "github.com",
      "repo": "okTurtles/group-income",
      "org": "groupincome",
      "desc": {
        "ja": "エンドツーエンド暗号化された、仲間うちのベーシックインカムのアプリ。メンバーが毎月お金を出しあい、全員が決めた最低額を下回らないようにする",
        "en": "End-to-end encrypted app for a peer-to-peer basic income: friends pledge money each month so that everyone in the group stays above an agreed minimum",
        "zh": "端到端加密的点对点基本收入应用：朋友们每月认捐，让群组里每个人的收入都不低于约定的最低额",
        "hi": "आपसी बेसिक इनकम के लिए एंड-टू-एंड एन्क्रिप्टेड ऐप: दोस्त हर महीने पैसे देने का वादा करते हैं ताकि समूह में हर किसी की आय तय न्यूनतम से ऊपर रहे",
        "es": "App cifrada de extremo a extremo para una renta básica entre pares: los amigos aportan dinero cada mes para que nadie del grupo quede por debajo de un mínimo acordado",
        "ar": "تطبيق مشفّر من طرف إلى طرف لدخل أساسي بين الأصدقاء: يتعهد الأعضاء بمبلغ كل شهر كي لا يقل دخل أي فرد في المجموعة عن حد أدنى متفق عليه",
        "de": "Ende-zu-Ende-verschlüsselte App für ein Grundeinkommen unter Freunden: Alle sagen monatlich Beiträge zu, damit niemand in der Gruppe unter ein vereinbartes Minimum fällt"
      }
    },
    {
      "id": "ubi2",
      "group": "protocols",
      "name": "UBI2",
      "host": "github.com",
      "repo": "DemocracyEarth/ubi2",
      "desc": {
        "ja": "Democracy Earth が2026年6月に始めた実験的な新しい UBI チェーン。AI で人間であることを確かめ、1時間に 1 UBI を一人ひとりに流し続ける",
        "en": "Experimental new UBI chain from Democracy Earth, started in June 2026: personhood is checked by AI, and 1 UBI per hour streams to every human",
        "zh": "Democracy Earth 于 2026 年 6 月创建的实验性新 UBI 链：由 AI 核验人格，每小时向每个人持续流入 1 UBI",
        "hi": "Democracy Earth की प्रयोगात्मक नई UBI चेन (जून 2026 में शुरू): इंसान होने की जाँच AI करता है, और हर इंसान को हर घंटे 1 UBI लगातार मिलता है",
        "es": "Nueva cadena experimental de RBU de Democracy Earth, creada en junio de 2026: la IA comprueba la humanidad y cada persona recibe un flujo de 1 UBI por hora",
        "ar": "سلسلة دخل أساسي جديدة وتجريبية من ⁦Democracy Earth⁩ أُنشئت في يونيو 2026: يتحقق الذكاء الاصطناعي من الإنسانية، ويتدفق ⁦1 UBI⁩ كل ساعة إلى كل إنسان",
        "de": "Experimentelle neue UBI-Chain von Democracy Earth, gestartet im Juni 2026: Die Menschlichkeit prüft eine KI, und jedem Menschen fließt stündlich 1 UBI zu"
      }
    },
    {
      "id": "ubi-token",
      "group": "protocols",
      "name": "UBI token (Proof of Humanity)",
      "host": "github.com",
      "repo": "DemocracyEarth/ubi",
      "licenseNote": "ISC (package.json)",
      "desc": {
        "ja": "Proof of Humanity 向けの最初の $UBI トークン。登録された人間一人ひとりに、新しく発行した UBI を流し続ける ERC-20",
        "en": "The original $UBI token for Proof of Humanity: an ERC-20 that streams newly minted UBI to every registered human",
        "zh": "为 Proof of Humanity 打造的最初的 $UBI 代币：一种向每位注册真人持续流入新铸造 UBI 的 ERC-20",
        "hi": "Proof of Humanity के लिए मूल $UBI टोकन: एक ERC-20 जो हर पंजीकृत इंसान को नया बना UBI लगातार भेजता है",
        "es": "El token $UBI original de Proof of Humanity: un ERC-20 que envía un flujo de UBI recién acuñado a cada humano registrado",
        "ar": "رمز ⁦$UBI⁩ الأصلي لـ⁦Proof of Humanity⁩: رمز ⁦ERC-20⁩ يضخ ⁦UBI⁩ المصكوك حديثًا بتدفق مستمر إلى كل إنسان مسجل",
        "de": "Der ursprüngliche $UBI-Token für Proof of Humanity: ein ERC-20, der neu geprägte UBI fortlaufend an jeden registrierten Menschen streamt"
      }
    },
    {
      "id": "gooddapp",
      "group": "apps",
      "name": "GoodDAPP",
      "host": "github.com",
      "repo": "GoodDollar/GoodDAPP",
      "svc": "gooddollar",
      "desc": {
        "ja": "GoodDollar のウォレット。毎日の G$ を受け取るためのウェブ／React Native アプリ",
        "en": "The GoodDollar wallet: the web and React Native app where people claim their daily G$",
        "zh": "GoodDollar 钱包：用来每天领取 G$ 的网页与 React Native 应用",
        "hi": "GoodDollar वॉलेट: वेब और React Native ऐप, जिससे लोग अपना रोज़ का G$ क्लेम करते हैं",
        "es": "La billetera de GoodDollar: la app web y React Native donde se cobra el G$ diario",
        "ar": "محفظة ⁦GoodDollar⁩: تطبيق الويب و⁦React Native⁩ الذي يطالب فيه الناس بحصتهم اليومية من ⁦G$⁩",
        "de": "Die GoodDollar-Wallet: die Web- und React-Native-App, mit der man sein tägliches G$ abholt"
      }
    },
    {
      "id": "cesium2s",
      "group": "apps",
      "name": "Cesium²",
      "host": "git.duniter.org",
      "repo": "clients/cesium-grp/cesium2s",
      "svc": "g1",
      "desc": {
        "ja": "Duniter v2s 向けの Ğ1 のウォレット兼「信頼の網」エクスプローラー。Cesium アプリの後継",
        "en": "Ğ1 wallet and web-of-trust explorer for Duniter v2s, the successor to the Cesium app",
        "zh": "面向 Duniter v2s 的 Ğ1 钱包和信任网络浏览器，是 Cesium 应用的后继者",
        "hi": "Duniter v2s के लिए Ğ1 वॉलेट और भरोसे के जाल का एक्सप्लोरर, Cesium ऐप का उत्तराधिकारी",
        "es": "Billetera de Ğ1 y explorador de la red de confianza para Duniter v2s, sucesor de la app Cesium",
        "ar": "محفظة ⁦Ğ1⁩ ومستكشف لشبكة الثقة على ⁦Duniter v2s⁩، وهي خليفة تطبيق ⁦Cesium⁩",
        "de": "Ğ1-Wallet und Explorer für das Vertrauensnetz auf Duniter v2s, Nachfolger der Cesium-App"
      }
    },
    {
      "id": "gecko",
      "group": "apps",
      "name": "Ğecko",
      "host": "git.duniter.org",
      "repo": "clients/gecko",
      "svc": "g1",
      "desc": {
        "ja": "Ğ1 のモバイルウォレット（Flutter 製）。Duniter v2s 上で自由通貨を送ったり受け取ったりできる",
        "en": "Mobile wallet for Ğ1, built with Flutter, for sending and receiving the libre currency on Duniter v2s",
        "zh": "Ğ1 的移动钱包（基于 Flutter），可在 Duniter v2s 上收发这种自由货币",
        "hi": "Ğ1 का मोबाइल वॉलेट (Flutter से बना), जिससे Duniter v2s पर यह मुक्त मुद्रा भेजी और पाई जा सकती है",
        "es": "Billetera móvil de Ğ1, hecha con Flutter, para enviar y recibir la moneda libre en Duniter v2s",
        "ar": "محفظة جوال لـ⁦Ğ1⁩ مبنية بـ⁦Flutter⁩، لإرسال العملة الحرة واستلامها على ⁦Duniter v2s⁩",
        "de": "Mobile Wallet für Ğ1, gebaut mit Flutter, zum Senden und Empfangen der freien Währung auf Duniter v2s"
      }
    },
    {
      "id": "encointer-wallet",
      "group": "apps",
      "name": "Encointer wallet",
      "host": "github.com",
      "repo": "encointer/encointer-wallet-flutter",
      "desc": {
        "ja": "Encointer のモバイルウォレット。対面の集まり（セレモニー）に参加し、地域通貨の UBI を受け取って地元で支払える",
        "en": "Mobile wallet for Encointer: join the in-person meetups, receive the community currency UBI and pay locally",
        "zh": "Encointer 的移动钱包：参加线下聚会、领取社区货币 UBI 并在本地支付",
        "hi": "Encointer का मोबाइल वॉलेट: आमने-सामने की मीटअप में शामिल हों, सामुदायिक मुद्रा का UBI पाएँ और स्थानीय रूप से भुगतान करें",
        "es": "Billetera móvil de Encointer: únete a los encuentros presenciales, recibe la RBU en moneda comunitaria y paga en tu zona",
        "ar": "محفظة جوال لـ⁦Encointer⁩: انضم إلى اللقاءات الوجاهية، واستلم الدخل الأساسي بالعملة المجتمعية، وادفع محليًا",
        "de": "Mobile Wallet für Encointer: an den persönlichen Treffen teilnehmen, das Grundeinkommen in Gemeinschaftswährung erhalten und vor Ort bezahlen"
      }
    },
    {
      "id": "world-id-protocol",
      "group": "personhood",
      "name": "World ID protocol",
      "host": "github.com",
      "repo": "worldcoin/world-id-protocol",
      "verify": "world-id",
      "desc": {
        "ja": "World ID の中核プロトコルと開発者向けドキュメント。World（旧 Worldcoin）の匿名の「人間であることの証明」",
        "en": "Core protocol and developer docs for World ID, the anonymous proof of personhood from World (formerly Worldcoin)",
        "zh": "World ID 的核心协议与开发者文档，即 World（原 Worldcoin）的匿名人格证明",
        "hi": "World ID का मूल प्रोटोकॉल और डेवलपर दस्तावेज़: World (पहले Worldcoin) का गुमनाम “इंसान होने का प्रमाण”",
        "es": "Protocolo central y documentación para desarrolladores de World ID, la prueba de humanidad anónima de World (antes Worldcoin)",
        "ar": "البروتوكول الأساسي ووثائق المطورين لـ⁦World ID⁩، وهو إثبات الإنسانية المجهول الهوية من ⁦World⁩ (سابقًا ⁦Worldcoin⁩)",
        "de": "Kernprotokoll und Entwicklerdoku für World ID, den anonymen Personennachweis von World (früher Worldcoin)"
      }
    },
    {
      "id": "poh-v2",
      "group": "personhood",
      "name": "Proof of Humanity v2 contracts",
      "host": "github.com",
      "repo": "Proof-Of-Humanity/proof-of-humanity-v2-contracts",
      "licenseNote": "MIT (package.json)",
      "desc": {
        "ja": "Proof of Humanity v2 のスマートコントラクト。動画での登録、保証（vouching）、Kleros の紛争解決で人間の名簿を作り、UBI トークンの土台になる",
        "en": "Smart contracts for Proof of Humanity v2: a registry of humans built on video submissions, vouching and Kleros disputes, which UBI tokens build on",
        "zh": "Proof of Humanity v2 的智能合约：通过视频提交、担保和 Kleros 争议裁决建立的真人名册，UBI 代币以此为基础",
        "hi": "Proof of Humanity v2 के स्मार्ट कॉन्ट्रैक्ट: वीडियो सबमिशन, वाउचिंग और Kleros विवाद निपटारे से बना इंसानों का रजिस्टर, जिस पर UBI टोकन टिके हैं",
        "es": "Contratos inteligentes de Proof of Humanity v2: un registro de humanos basado en vídeos, avales y disputas en Kleros, sobre el que se construyen tokens de RBU",
        "ar": "العقود الذكية لـ⁦Proof of Humanity v2⁩: سجل للبشر يقوم على تقديم مقاطع فيديو والتزكية وتحكيم النزاعات عبر ⁦Kleros⁩، وتُبنى عليه رموز الدخل الأساسي",
        "de": "Smart Contracts für Proof of Humanity v2: ein Register von Menschen auf Basis von Video-Einreichungen, Bürgschaften und Kleros-Streitfällen, auf dem UBI-Token aufbauen"
      }
    },
    {
      "id": "policyengine-us",
      "group": "research",
      "name": "PolicyEngine US",
      "host": "github.com",
      "repo": "PolicyEngine/policyengine-us",
      "desc": {
        "ja": "米国の税と社会保障のルールを計算するエンジン。UBI などの改革にかかる費用や貧困への影響の試算に使われる",
        "en": "Rules engine for the US tax and benefit system, used to model the cost and poverty impact of UBI and other reforms",
        "zh": "美国税收与福利制度的规则引擎，用于测算 UBI 等改革的成本及其对贫困的影响",
        "hi": "अमेरिका की कर और लाभ प्रणाली का रूल्स इंजन, जिससे UBI और दूसरे सुधारों की लागत और ग़रीबी पर असर का मॉडल बनाया जाता है",
        "es": "Motor de reglas del sistema fiscal y de prestaciones de EE. UU., usado para modelar el coste y el efecto sobre la pobreza de la RBU y otras reformas",
        "ar": "محرك قواعد لنظام الضرائب والإعانات الأمريكي، يُستخدم لنمذجة تكلفة الدخل الأساسي وغيره من الإصلاحات وأثرها على الفقر",
        "de": "Regel-Engine für das US-Steuer- und Sozialleistungssystem, mit der Kosten und Armutswirkung eines Grundeinkommens und anderer Reformen modelliert werden"
      }
    },
    {
      "id": "openfisca-core",
      "group": "research",
      "name": "OpenFisca",
      "host": "github.com",
      "repo": "openfisca/openfisca-core",
      "desc": {
        "ja": "税と給付のルールをコードで書くためのオープンなエンジン。これを使った各国のモデルでベーシックインカム案を試算できる",
        "en": "Open engine for writing tax and benefit rules as code; country models built on it are used to simulate basic income schemes",
        "zh": "把税收与福利规则写成代码的开放引擎；基于它的各国模型可用来模拟基本收入方案",
        "hi": "कर और लाभ के नियमों को कोड के रूप में लिखने का खुला इंजन; इस पर बने देशों के मॉडल से बेसिक इनकम योजनाओं का सिमुलेशन होता है",
        "es": "Motor abierto para escribir como código las reglas fiscales y de prestaciones; los modelos nacionales basados en él sirven para simular propuestas de renta básica",
        "ar": "محرك مفتوح لكتابة قواعد الضرائب والإعانات على هيئة شيفرة؛ وتُستخدم النماذج الوطنية المبنية عليه لمحاكاة مقترحات الدخل الأساسي",
        "de": "Offene Engine, um Steuer- und Leistungsregeln als Code zu schreiben; darauf aufbauende Ländermodelle dienen zur Simulation von Grundeinkommensmodellen"
      }
    },
    {
      "id": "mosaic-model",
      "group": "research",
      "name": "MOSAIC model",
      "host": "github.com",
      "repo": "Mosaic-AI-Policy-Institute/mosaic-model",
      "essay": "ai-agent-basic-income",
      "desc": {
        "ja": "AI による自動化の利益を「配当」にして、ユニバーサル・ベーシックインカムの財源にする経済モデル",
        "en": "Economic model for funding a universal basic income from AI-automation dividends",
        "zh": "用 AI 自动化红利为全民基本收入提供资金的经济模型",
        "hi": "AI ऑटोमेशन से होने वाले लाभांश से सार्वभौमिक बेसिक इनकम का ख़र्च उठाने का आर्थिक मॉडल",
        "es": "Modelo económico para financiar una renta básica universal con dividendos de la automatización por IA",
        "ar": "نموذج اقتصادي لتمويل دخل أساسي شامل من أرباح الأتمتة بالذكاء الاصطناعي",
        "de": "Wirtschaftsmodell, um ein bedingungsloses Grundeinkommen aus Dividenden der KI-Automatisierung zu finanzieren"
      }
    }
  ],
  "OSS_PREVIEW": [
    "group-income",
    "ubi2",
    "duniter-v2s",
    "policyengine-us"
  ],
  "GRAVE": [
    {
      "id": "wld-airdrop",
      "name": "World — WLD Airdrop (Grants)",
      "endedOn": "2026-06-01",
      "source": "https://support.world.org/hc/en-us/articles/30969185598739-Updates-to-the-Airdrop-Program",
      "sourceLabel": "World Help Center",
      "what": {
        "ja": "World ID で人間であることを証明した人に、WLD トークンを毎月配っていたエアドロップ（旧グラント）",
        "en": "Monthly WLD token airdrops (formerly grants) for people who proved they are human with World ID",
        "zh": "向通过 World ID 证明自己是真人的用户每月发放 WLD 代币的空投（原称 Grants）",
        "hi": "World ID से इंसान साबित करने वालों को हर महीने WLD टोकन देने वाला एयरड्रॉप (पहले ग्रांट)",
        "es": "Airdrops mensuales de tokens WLD (antes «grants») para quienes demostraban ser humanos con World ID",
        "de": "Monatliche WLD-Airdrops (früher „Grants“) für Menschen, die sich per World ID als Mensch verifiziert hatten",
        "ar": "إسقاطات شهرية لرموز ⁦WLD⁩ (كانت تُسمى منحًا) لمن أثبتوا أنهم بشر عبر ⁦World ID⁩"
      },
      "ended": {
        "ja": "2026年6月1日に新規の受付と更新を停止（参加済みの人は12か月の期間が終わるまで受け取れる）",
        "en": "No new or renewed cycles from 1 June 2026 (existing 12-month cycles can still be claimed until they end)",
        "zh": "2026 年 6 月 1 日起不再新建或续期（已参加者可领到 12 个月周期结束）",
        "hi": "1 जून 2026 से नए या नवीनीकृत चक्र बंद (चल रहे 12 महीने के चक्र खत्म होने तक क्लेम हो सकते हैं)",
        "es": "Sin ciclos nuevos ni renovaciones desde el 1 de junio de 2026 (los ciclos de 12 meses ya iniciados se pueden cobrar hasta que terminen)",
        "de": "Seit 1. Juni 2026 keine neuen oder verlängerten Zyklen (laufende 12-Monats-Zyklen können bis zu ihrem Ende abgeholt werden)",
        "ar": "لا دورات جديدة أو مجددة منذ 1 يونيو 2026 (يمكن مواصلة المطالبة بالدورات الجارية حتى نهاية مدتها البالغة 12 شهرًا)"
      },
      "why": {
        "ja": "公式ヘルプは理由を示さず、「エアドロップの期間は新たに作られず、更新もされない」とだけ説明している",
        "en": "The official help page gives no reason; it only says airdrop cycles are no longer being created or renewed",
        "zh": "官方帮助页面没有说明原因，只说空投周期不再新建或续期",
        "hi": "आधिकारिक सहायता पेज कोई कारण नहीं बताता; बस इतना कहता है कि एयरड्रॉप चक्र अब नहीं बनाए या बढ़ाए जा रहे",
        "es": "La ayuda oficial no da motivos; solo dice que ya no se crean ni renuevan ciclos de airdrop",
        "de": "Die offizielle Hilfeseite nennt keinen Grund, sondern nur, dass keine Airdrop-Zyklen mehr angelegt oder verlängert werden",
        "ar": "لا تذكر صفحة المساعدة الرسمية سببًا، وتقول فقط إن دورات الإسقاط لم تعد تُنشأ أو تُجدد"
      }
    },
    {
      "id": "miles",
      "name": "Miles",
      "endedOn": "2025-05-14",
      "source": "https://note.com/y121516/n/nbb9bf7625c03",
      "sourceLabel": "note (Yuhki Ogasawara)",
      "what": {
        "ja": "スマホを持って移動するだけでマイルがたまり、商品やギフト券と交換できたアプリ（日本ではマイルズ・ジャパンが運営）",
        "en": "An app that earned miles just by carrying your phone as you travelled, redeemable for goods and gift cards (run in Japan by Miles Japan)",
        "zh": "只要带着手机移动就能累积里程、可兑换商品和礼品卡的应用（在日本由 Miles Japan 运营）",
        "hi": "फ़ोन साथ लेकर चलने भर से माइल देने वाला ऐप, जिन्हें सामान और गिफ़्ट कार्ड से बदला जा सकता था (जापान में Miles Japan चलाती थी)",
        "es": "Una app que daba millas solo por llevar el móvil al desplazarte, canjeables por productos y tarjetas regalo (en Japón la gestionaba Miles Japan)",
        "de": "Eine App, die Meilen gab, nur weil man das Handy unterwegs dabeihatte, einlösbar gegen Waren und Geschenkkarten (in Japan betrieben von Miles Japan)",
        "ar": "تطبيق كان يمنح أميالًا بمجرد حمل الهاتف أثناء التنقل، قابلة للاستبدال بسلع وبطاقات هدايا (تديره في اليابان ⁦Miles Japan⁩)"
      },
      "ended": {
        "ja": "2025年5月14日（当日のメールで告知され、猶予期間なし）",
        "en": "14 May 2025 (announced by email the same day, with no grace period)",
        "zh": "2025 年 5 月 14 日（当天以邮件通知，没有缓冲期）",
        "hi": "14 मई 2025 (उसी दिन ईमेल से घोषणा, कोई मोहलत नहीं)",
        "es": "14 de mayo de 2025 (anunciado por correo ese mismo día, sin periodo de gracia)",
        "de": "14. Mai 2025 (am selben Tag per E-Mail angekündigt, ohne Übergangsfrist)",
        "ar": "14 مايو 2025 (أُعلن بالبريد الإلكتروني في اليوم نفسه دون مهلة)"
      },
      "why": {
        "ja": "公式には「難しい決断」とだけ説明され、理由は示されていない",
        "en": "Officially only called a “difficult decision”; no reason was given",
        "zh": "官方只称这是“艰难的决定”，没有说明原因",
        "hi": "आधिकारिक तौर पर बस “कठिन फ़ैसला” कहा गया; कोई कारण नहीं बताया गया",
        "es": "Oficialmente solo se habló de una «decisión difícil»; no se dio ningún motivo",
        "de": "Offiziell nur als „schwierige Entscheidung“ bezeichnet; einen Grund gab es nicht",
        "ar": "وُصف رسميًا بأنه «قرار صعب» فقط، دون ذكر سبب"
      }
    },
    {
      "id": "mybasicincome",
      "name": "My Basic Income",
      "endedOn": "2017",
      "source": "https://www.pulse.com.gh/bi/tech/tech-a-dollar15000-basic-income-lottery-promised-free-money-for-a-year-then-the/5gbp5pj",
      "sourceLabel": "Business Insider (syndicated)",
      "what": {
        "ja": "サンフランシスコの団体が、クラウドファンディングで集めた1年分のベーシックインカム（15,000ドル）を抽選で配った取り組み（2016年）",
        "en": "A San Francisco group that raffled off a crowdfunded one-year basic income of $15,000 (2016)",
        "zh": "旧金山的一个团体用众筹资金抽奖发放一年期基本收入（15,000 美元，2016 年）",
        "hi": "सैन फ़्रांसिस्को का एक समूह, जिसने क्राउडफ़ंडिंग से जुटाई एक साल की बेसिक इनकम ($15,000) लॉटरी से दी (2016)",
        "es": "Un grupo de San Francisco que sorteó una renta básica de un año de 15.000 $ financiada con crowdfunding (2016)",
        "de": "Eine Gruppe aus San Francisco, die ein per Crowdfunding finanziertes Grundeinkommen für ein Jahr (15.000 $) verloste (2016)",
        "ar": "مجموعة في سان فرانسيسكو أجرت سحبًا على دخل أساسي لمدة عام بقيمة ⁦$15,000⁩ جُمع بالتمويل الجماعي (2016)"
      },
      "ended": {
        "ja": "2017年ごろ（当選者への支払いは12回中5回で止まり、2回目の抽選はなかった。2026年10月時点で公式サイトは閉鎖）",
        "en": "Around 2017 (the winner received only 5 of 12 payments and no second raffle followed; the website was offline as of Oct 2026)",
        "zh": "约 2017 年（中奖者只收到 12 笔中的 5 笔，也没有第二次抽奖；截至 2026 年 10 月官网已关闭）",
        "hi": "लगभग 2017 (विजेता को 12 में से सिर्फ़ 5 भुगतान मिले और दूसरी लॉटरी नहीं हुई; अक्टूबर 2026 तक वेबसाइट बंद)",
        "es": "Hacia 2017 (el ganador solo recibió 5 de 12 pagos y no hubo un segundo sorteo; la web estaba caída en octubre de 2026)",
        "de": "Um 2017 (der Gewinner erhielt nur 5 von 12 Zahlungen, eine zweite Verlosung gab es nicht; die Website war im Oktober 2026 offline)",
        "ar": "نحو 2017 (لم يتلقَّ الفائز سوى 5 من 12 دفعة ولم يُجرَ سحب ثانٍ؛ والموقع متوقف حتى أكتوبر 2026)"
      },
      "why": {
        "ja": "支払いの遅れと未払いが報じられているが、運営からの公式な説明は見つからなかった",
        "en": "Delayed and missed payments were reported; no official explanation was found",
        "zh": "有报道称付款延迟和未付，但未找到运营方的正式说明",
        "hi": "भुगतान में देरी और भुगतान न होने की ख़बरें आईं; कोई आधिकारिक स्पष्टीकरण नहीं मिला",
        "es": "Se informó de pagos retrasados e impagados; no se encontró una explicación oficial",
        "de": "Berichtet wurden verspätete und ausgebliebene Zahlungen; eine offizielle Erklärung wurde nicht gefunden",
        "ar": "أُفيد بتأخر دفعات وعدم سدادها، ولم نجد تفسيرًا رسميًا"
      }
    },
    {
      "id": "me-token",
      "name": "ME Token (RewardMe)",
      "endedOn": "2025-07",
      "svc": "rewardme",
      "source": "https://help.reward.me/en/articles/4901904-sunsetting-me-token-jul-2025",
      "sourceLabel": "RewardMe Help",
      "what": {
        "ja": "キャッシュバックアプリ RewardMe の報酬トークン",
        "en": "The reward token of the cashback app RewardMe",
        "zh": "返现应用 RewardMe 的奖励代币",
        "hi": "कैशबैक ऐप RewardMe का इनाम टोकन",
        "es": "El token de recompensas de la app de reembolsos RewardMe",
        "de": "Der Belohnungstoken der Cashback-App RewardMe",
        "ar": "رمز المكافآت في تطبيق الاسترداد النقدي ⁦RewardMe⁩"
      },
      "ended": {
        "ja": "2025年7月に廃止（残高は Reward Dollars に1対1で自動変換）",
        "en": "Retired in July 2025 (balances were automatically converted 1:1 into Reward Dollars)",
        "zh": "2025 年 7 月停用（余额按 1:1 自动转换为 Reward Dollars）",
        "hi": "जुलाई 2025 में बंद (बैलेंस अपने आप 1:1 में Reward Dollars में बदल गया)",
        "es": "Retirado en julio de 2025 (los saldos se convirtieron automáticamente 1:1 en Reward Dollars)",
        "de": "Im Juli 2025 eingestellt (Guthaben wurden automatisch 1:1 in Reward Dollars umgewandelt)",
        "ar": "أُوقف في يوليو 2025 (حُوّلت الأرصدة تلقائيًا بنسبة 1:1 إلى ⁦Reward Dollars⁩)"
      },
      "why": {
        "ja": "公式ヘルプでは理由は示されていない",
        "en": "The official help page gives no reason",
        "zh": "官方帮助页面没有说明原因",
        "hi": "आधिकारिक सहायता पेज कोई कारण नहीं बताता",
        "es": "La ayuda oficial no da motivos",
        "de": "Die offizielle Hilfeseite nennt keinen Grund",
        "ar": "لا تذكر صفحة المساعدة الرسمية سببًا"
      }
    },
    {
      "id": "rewardme-ph",
      "name": "RewardMe (Philippines)",
      "endedOn": "2025-12-31",
      "svc": "rewardme",
      "source": "https://help.reward.me/en/articles/12780396-winding-down-operations-in-the-philippines",
      "sourceLabel": "RewardMe Help",
      "what": {
        "ja": "キャッシュバックアプリ RewardMe のフィリピンでのサービス",
        "en": "The cashback app RewardMe’s service in the Philippines",
        "zh": "返现应用 RewardMe 在菲律宾的服务",
        "hi": "फ़िलीपींस में कैशबैक ऐप RewardMe की सेवा",
        "es": "El servicio de la app de reembolsos RewardMe en Filipinas",
        "de": "Der Dienst der Cashback-App RewardMe auf den Philippinen",
        "ar": "خدمة تطبيق الاسترداد النقدي ⁦RewardMe⁩ في الفلبين"
      },
      "ended": {
        "ja": "2025年12月10日でキャッシュバック終了、12月31日で MDT の出金・変換も終了（その後はギフト券への交換のみ）",
        "en": "Cashback ended on 10 Dec 2025, and MDT withdrawals and conversions on 31 Dec 2025 (gift-card redemption only after that)",
        "zh": "2025 年 12 月 10 日停止返现，12 月 31 日停止 MDT 提现和转换（之后只能兑换礼品卡）",
        "hi": "10 दिसंबर 2025 को कैशबैक बंद, 31 दिसंबर 2025 को MDT निकासी और रूपांतरण भी बंद (उसके बाद सिर्फ़ गिफ़्ट कार्ड)",
        "es": "El reembolso terminó el 10 de diciembre de 2025, y los retiros y conversiones de MDT el 31 de diciembre de 2025 (después, solo canje por tarjetas regalo)",
        "de": "Cashback endete am 10. Dezember 2025, MDT-Auszahlungen und -Umwandlungen am 31. Dezember 2025 (danach nur noch Einlösen gegen Geschenkkarten)",
        "ar": "انتهى الاسترداد النقدي في 10 ديسمبر 2025، وسحب ⁦MDT⁩ وتحويله في 31 ديسمبر 2025 (بعدها الاستبدال ببطاقات الهدايا فقط)"
      },
      "why": {
        "ja": "公式の告知は理由を示していない",
        "en": "The official notice gives no reason",
        "zh": "官方公告没有说明原因",
        "hi": "आधिकारिक सूचना कोई कारण नहीं बताती",
        "es": "El aviso oficial no da motivos",
        "de": "Die offizielle Mitteilung nennt keinen Grund",
        "ar": "لا يذكر الإعلان الرسمي سببًا"
      }
    }
  ],
  "VERIFY_ORDER": [
    "world-id",
    "face",
    "passport-nfc",
    "kyc-id",
    "phone",
    "web-of-trust",
    "ceremony",
    "none"
  ],
  "VERIFY": {
    "world-id": {
      "name": {
        "ja": "World ID（Orb認証）",
        "en": "World ID (Orb)",
        "zh": "World ID（Orb 验证）",
        "hi": "World ID (Orb)",
        "es": "World ID (Orb)",
        "de": "World ID (Orb)",
        "ar": "⁦World ID⁩ (⁦Orb⁩)"
      },
      "title": {
        "ja": "World ID（Orb認証）で使えるアプリ・サービス一覧",
        "en": "What can you do with World ID? Apps that use Orb verification",
        "zh": "World ID 能做什么？使用 Orb 验证的应用一览",
        "hi": "World ID से क्या कर सकते हैं? Orb वेरिफ़िकेशन वाले ऐप",
        "es": "¿Qué puedes hacer con World ID? Apps que usan la verificación Orb",
        "de": "Was kann man mit World ID machen? Apps mit Orb-Verifizierung",
        "ar": "ماذا يمكنك أن تفعل بـ⁦World ID⁩؟ تطبيقات تستخدم تحقق ⁦Orb⁩"
      },
      "intro": {
        "ja": "World ID は、Orb という専用の機械で顔と目を撮影して、一人の実在する人間であることを証明するデジタルIDです。World は画像を暗号化して処理すると説明していますが、生体情報を扱う点は理解しておきたいところです。このサイトに載っている World App のミニアプリ（ORO・AXO・AI-DAC）は、2026年10月に Orb 認証済みのアカウントで日本から使えることを確認しています。Orb より低い認証レベルで足りるかは分かっていません。Humad は日本限定です。",
        "en": "World ID is a digital ID that proves you are one unique, real person by scanning your face and eyes with a device called the Orb. World says the images are processed in encrypted form, but it is still biometric data, so weigh that. The World App mini apps listed here (ORO, AXO, AI-DAC) were confirmed to work from Japan with an Orb-verified account in Oct 2026; whether a lower verification level is enough is unknown. Humad is Japan-only.",
        "zh": "World ID 是一种数字身份：用名为 Orb 的专用设备拍摄你的面部和眼睛，证明你是独一无二的真人。World 称图像会以加密方式处理，但它仍涉及生物特征信息，需要心中有数。本站收录的 World App 小程序（ORO、AXO、AI-DAC）已于 2026 年 10 月确认可用经 Orb 验证的账户在日本使用；低于 Orb 的验证等级是否足够尚不清楚。Humad 仅限日本。",
        "hi": "World ID एक डिजिटल ID है, जो Orb नाम के उपकरण से आपका चेहरा और आँखें स्कैन करके साबित करती है कि आप एक अनोखे, असली इंसान हैं। World के अनुसार तस्वीरें एन्क्रिप्टेड रूप में प्रोसेस होती हैं, फिर भी यह बायोमेट्रिक डेटा है, इसे ध्यान में रखें। यहाँ दिए World App मिनी ऐप (ORO, AXO, AI-DAC) अक्टूबर 2026 में Orb से वेरिफ़ाई किए गए अकाउंट से जापान में चलते पाए गए; Orb से कम लेवल काफ़ी है या नहीं, यह पता नहीं। Humad सिर्फ़ जापान के लिए है।",
        "es": "World ID es una identidad digital que demuestra que eres una persona real y única escaneando tu cara y tus ojos con un dispositivo llamado Orb. World dice que procesa las imágenes cifradas, pero siguen siendo datos biométricos, tenlo en cuenta. Las mini apps de World App que listamos (ORO, AXO, AI-DAC) se comprobaron desde Japón con una cuenta verificada con Orb en octubre de 2026; no se sabe si basta un nivel inferior. Humad es solo para Japón.",
        "de": "World ID ist eine digitale Identität, die per Scan von Gesicht und Augen mit einem Gerät namens Orb belegt, dass du ein einzigartiger, echter Mensch bist. Laut World werden die Bilder verschlüsselt verarbeitet, es bleiben aber biometrische Daten, das solltest du abwägen. Die hier gelisteten Mini-Apps der World App (ORO, AXO, AI-DAC) funktionierten im Oktober 2026 aus Japan mit einem per Orb verifizierten Konto; ob eine niedrigere Stufe reicht, ist unbekannt. Humad gibt es nur in Japan.",
        "ar": "⁦World ID⁩ هوية رقمية تثبت أنك شخص حقيقي وفريد عبر مسح وجهك وعينيك بجهاز يُسمى ⁦Orb⁩. تقول ⁦World⁩ إن الصور تُعالَج مشفّرة، لكنها تبقى بيانات حيوية، فضع ذلك في الحسبان. تأكدنا في أكتوبر 2026 أن تطبيقات ⁦World App⁩ المصغّرة المدرجة هنا (⁦ORO⁩ و⁦AXO⁩ و⁦AI-DAC⁩) تعمل من اليابان بحساب موثَّق بـ⁦Orb⁩، ولا يُعرف إن كان مستوى أدنى كافيًا. أما ⁦Humad⁩ فمقتصر على اليابان."
      }
    },
    "face": {
      "name": {
        "ja": "顔認証・ライブネス",
        "en": "Face scan / liveness",
        "zh": "人脸识别／活体检测",
        "hi": "चेहरा स्कैन / लाइवनेस",
        "es": "Escaneo facial / prueba de vida",
        "de": "Gesichtsscan / Lebendprüfung",
        "ar": "مسح الوجه / فحص الحيوية"
      },
      "title": {
        "ja": "顔認証で使えるアプリ・サービス一覧",
        "en": "Apps that verify you with a face scan",
        "zh": "用人脸识别验证的应用一览",
        "hi": "चेहरा स्कैन से वेरिफ़ाई करने वाले ऐप",
        "es": "Apps que te verifican con un escaneo facial",
        "de": "Apps mit Gesichtsscan-Verifizierung",
        "ar": "تطبيقات تتحقق منك بمسح الوجه"
      },
      "intro": {
        "ja": "スマホのカメラで顔を読み取り、本人や実在の人間であることを確かめる方式です。手軽な反面、顔という変えられない情報を渡すことになるので、各サービスのデータの扱いを確認しましょう。Billions と FheID は2026年10月に日本から使えることを確認しています。",
        "en": "Your phone camera reads your face to confirm you are a real person. It is easy, but you are handing over something you cannot change, so check how each service handles the data. Billions and FheID were confirmed to work from Japan in Oct 2026.",
        "zh": "用手机摄像头读取人脸，确认你是真人。方便是方便，但你交出的是无法更改的信息，请先确认各服务如何处理数据。Billions 和 FheID 已于 2026 年 10 月确认可在日本使用。",
        "hi": "फ़ोन का कैमरा आपका चेहरा पढ़कर पक्का करता है कि आप असली इंसान हैं। यह आसान है, पर आप ऐसी चीज़ दे रहे हैं जो बदल नहीं सकती, इसलिए हर सेवा का डेटा प्रबंधन देख लें। Billions और FheID अक्टूबर 2026 में जापान से चलते पाए गए।",
        "es": "La cámara del móvil lee tu cara para confirmar que eres una persona real. Es cómodo, pero entregas algo que no puedes cambiar, así que revisa cómo trata los datos cada servicio. Billions y FheID se comprobaron desde Japón en octubre de 2026.",
        "de": "Die Handykamera liest dein Gesicht, um zu bestätigen, dass du ein echter Mensch bist. Das ist bequem, aber du gibst etwas her, das du nicht ändern kannst, prüf also, wie der jeweilige Dienst mit den Daten umgeht. Billions und FheID funktionierten im Oktober 2026 aus Japan.",
        "ar": "تقرأ كاميرا الهاتف وجهك لتتأكد أنك شخص حقيقي. الأمر سهل، لكنك تسلّم شيئًا لا يمكنك تغييره، فتحقق من طريقة تعامل كل خدمة مع البيانات. تأكدنا في أكتوبر 2026 أن ⁦Billions⁩ و⁦FheID⁩ يعملان من اليابان."
      }
    },
    "passport-nfc": {
      "name": {
        "ja": "パスポート（NFC）",
        "en": "NFC passport",
        "zh": "护照（NFC）",
        "hi": "NFC पासपोर्ट",
        "es": "Pasaporte con NFC",
        "de": "NFC-Reisepass",
        "ar": "جواز سفر ⁦NFC⁩"
      },
      "title": {
        "ja": "NFCパスポートで使えるアプリ・サービス一覧",
        "en": "Apps that verify you with an NFC passport",
        "zh": "用 NFC 护照验证的应用一览",
        "hi": "NFC पासपोर्ट से वेरिफ़ाई करने वाले ऐप",
        "es": "Apps que te verifican con un pasaporte NFC",
        "de": "Apps mit NFC-Reisepass-Verifizierung",
        "ar": "تطبيقات تتحقق منك بجواز سفر ⁦NFC⁩"
      },
      "intro": {
        "ja": "",
        "en": "",
        "zh": "",
        "hi": "",
        "es": "",
        "de": "",
        "ar": ""
      }
    },
    "kyc-id": {
      "name": {
        "ja": "身分証のKYC",
        "en": "ID document KYC",
        "zh": "身份证件 KYC",
        "hi": "ID दस्तावेज़ KYC",
        "es": "KYC con documento",
        "de": "Ausweis-KYC",
        "ar": "التحقق بوثيقة هوية (⁦KYC⁩)"
      },
      "title": {
        "ja": "身分証の本人確認（KYC）が必要なアプリ・サービス一覧",
        "en": "Apps that require ID document KYC",
        "zh": "需要身份证件 KYC 的应用一览",
        "hi": "ID दस्तावेज़ KYC माँगने वाले ऐप",
        "es": "Apps que piden KYC con documento de identidad",
        "de": "Apps mit Ausweis-KYC",
        "ar": "تطبيقات تتطلب التحقق بوثيقة هوية"
      },
      "intro": {
        "ja": "運転免許証やパスポートなどの身分証で本人確認（KYC）をする方式です。名前や生年月日などの個人情報を運営者に渡すことになります。ME Pass は登録時、Pi Network は PI を動かすときに必要で、Mein Grundeinkommen は当選したときにだけ身分証との照合があります。KABU&では、株引換券を株に交換するときに必要です。",
        "en": "You verify your identity (KYC) with an ID document such as a passport or driving licence, which means giving the operator personal details like your name and date of birth. ME Pass needs it at sign-up and Pi Network to move your PI; Mein Grundeinkommen only checks your ID if you win. KABU& asks for it when you exchange share vouchers for shares.",
        "zh": "用护照、驾照等身份证件完成实名认证（KYC），需要把姓名、出生日期等个人信息交给运营方。ME Pass 注册时需要，Pi Network 转移 PI 时需要；Mein Grundeinkommen 只在中奖时核对证件。KABU& 在把股票兑换券换成股票时需要。",
        "hi": "पासपोर्ट या ड्राइविंग लाइसेंस जैसे पहचान दस्तावेज़ से KYC होता है, यानी नाम और जन्मतिथि जैसी निजी जानकारी ऑपरेटर को देनी होती है। ME Pass में साइन-अप पर और Pi Network में PI भेजने के लिए ज़रूरी है; Mein Grundeinkommen सिर्फ़ जीतने पर ID मिलाता है। KABU& में शेयर वाउचर को शेयर में बदलते समय यह ज़रूरी है।",
        "es": "Verificas tu identidad (KYC) con un documento como el pasaporte o el carné de conducir, lo que implica dar al operador datos como tu nombre y fecha de nacimiento. ME Pass lo pide al registrarte y Pi Network para mover tus PI; Mein Grundeinkommen solo coteja tu documento si ganas. KABU& lo pide al canjear los vales por acciones.",
        "de": "Du weist deine Identität (KYC) mit einem Ausweisdokument wie Reisepass oder Führerschein nach und gibst dem Betreiber damit Daten wie Name und Geburtsdatum. ME Pass verlangt das bei der Anmeldung, Pi Network zum Bewegen deiner PI; Mein Grundeinkommen gleicht den Ausweis nur im Gewinnfall ab. KABU& verlangt es beim Tausch der Aktiengutscheine in Aktien.",
        "ar": "تتحقق من هويتك (⁦KYC⁩) بوثيقة مثل جواز السفر أو رخصة القيادة، أي أنك تعطي المشغّل بيانات مثل اسمك وتاريخ ميلادك. يطلبه ⁦ME Pass⁩ عند التسجيل و⁦Pi Network⁩ لتحريك ⁦PI⁩، أما ⁦Mein Grundeinkommen⁩ فلا يطابق الهوية إلا عند الفوز. ويطلبه ⁦KABU&⁩ عند استبدال قسائم الأسهم بأسهم."
      }
    },
    "phone": {
      "name": {
        "ja": "電話番号",
        "en": "Phone number",
        "zh": "手机号",
        "hi": "फ़ोन नंबर",
        "es": "Número de teléfono",
        "de": "Telefonnummer",
        "ar": "رقم الهاتف"
      },
      "title": {
        "ja": "電話番号で使えるアプリ・サービス一覧",
        "en": "Apps that verify you by phone number",
        "zh": "用手机号验证的应用一览",
        "hi": "फ़ोन नंबर से वेरिफ़ाई करने वाले ऐप",
        "es": "Apps que te verifican por número de teléfono",
        "de": "Apps mit Telefonnummer-Verifizierung",
        "ar": "تطبيقات تتحقق منك برقم الهاتف"
      },
      "intro": {
        "ja": "",
        "en": "",
        "zh": "",
        "hi": "",
        "es": "",
        "de": "",
        "ar": ""
      }
    },
    "web-of-trust": {
      "name": {
        "ja": "信頼の網・招待",
        "en": "Web of trust / invites",
        "zh": "信任网／邀请",
        "hi": "वेब ऑफ़ ट्रस्ट / इनवाइट",
        "es": "Red de confianza / invitaciones",
        "de": "Vertrauensnetz / Einladungen",
        "ar": "شبكة الثقة / الدعوات"
      },
      "title": {
        "ja": "招待・信頼の網で参加するアプリ・サービス一覧",
        "en": "Apps you join through invites or a web of trust",
        "zh": "通过邀请或信任网加入的应用一览",
        "hi": "इनवाइट या वेब ऑफ़ ट्रस्ट से जुड़ने वाले ऐप",
        "es": "Apps a las que entras por invitación o red de confianza",
        "de": "Apps mit Einladung oder Vertrauensnetz",
        "ar": "تطبيقات تنضم إليها بدعوة أو عبر شبكة ثقة"
      },
      "intro": {
        "ja": "すでに参加している人に招待されたり、認証（保証）してもらったりして参加する方式です。顔や身分証を出さずに済む一方、知り合いのメンバーがいないと始めにくいのが難点です。Idena は2026年10月に日本から使えることを確認していますが、Ğ1 はフランス語圏が中心で日本からの参加はかなり難しく、Circles も招待してくれるメンバーが必要です。",
        "en": "You join by being invited or vouched for by existing members. No face scan or ID is needed, but it is hard to start without a member who knows you. Idena was confirmed to work from Japan in Oct 2026; Ğ1 is mostly French-speaking and very hard to join from Japan, and Circles also needs a member to invite you.",
        "zh": "由已加入的成员邀请或为你担保（认证）后加入。无需人脸或证件，但没有认识的成员就很难开始。Idena 已于 2026 年 10 月确认可在日本使用；Ğ1 以法语圈为主，从日本加入相当困难；Circles 也需要有成员邀请。",
        "hi": "मौजूदा सदस्यों के बुलाने या आपकी ज़मानत (सर्टिफ़िकेशन) देने से आप जुड़ते हैं। चेहरा या ID नहीं चाहिए, पर जान-पहचान का सदस्य न हो तो शुरुआत मुश्किल है। Idena अक्टूबर 2026 में जापान से चलता पाया गया; Ğ1 ज़्यादातर फ़्रेंच भाषी है और जापान से जुड़ना बहुत कठिन है, और Circles में भी किसी सदस्य का बुलावा चाहिए।",
        "es": "Entras porque te invita o te avala un miembro. No hace falta escaneo facial ni documento, pero cuesta empezar sin un miembro que te conozca. Idena se comprobó desde Japón en octubre de 2026; Ğ1 es sobre todo francófona y muy difícil desde Japón, y Circles también requiere que te invite un miembro.",
        "de": "Du kommst hinein, indem bestehende Mitglieder dich einladen oder für dich bürgen. Gesichtsscan oder Ausweis brauchst du nicht, aber ohne ein Mitglied, das dich kennt, ist der Einstieg schwer. Idena funktionierte im Oktober 2026 aus Japan; Ğ1 ist überwiegend französischsprachig und aus Japan sehr schwer zugänglich, und auch Circles braucht ein Mitglied, das dich einlädt.",
        "ar": "تنضم بدعوة من أعضاء حاليين أو بتوثيقهم لك. لا حاجة إلى مسح الوجه ولا إلى هوية، لكن البدء صعب دون عضو يعرفك. تأكدنا في أكتوبر 2026 أن ⁦Idena⁩ يعمل من اليابان، أما ⁦Ğ1⁩ فأغلبه ناطق بالفرنسية والانضمام إليه من اليابان صعب جدًا، و⁦Circles⁩ يحتاج أيضًا إلى عضو يدعوك."
      }
    },
    "ceremony": {
      "name": {
        "ja": "認証セレモニー",
        "en": "Validation ceremony",
        "zh": "验证仪式",
        "hi": "वैलिडेशन समारोह",
        "es": "Ceremonia de validación",
        "de": "Validierungszeremonie",
        "ar": "مراسم التحقق"
      },
      "title": {
        "ja": "認証セレモニーで参加するアプリ・サービス一覧",
        "en": "Apps that use a validation ceremony",
        "zh": "使用验证仪式的应用一览",
        "hi": "वैलिडेशन समारोह वाले ऐप",
        "es": "Apps con ceremonia de validación",
        "de": "Apps mit Validierungszeremonie",
        "ar": "تطبيقات تستخدم مراسم التحقق"
      },
      "intro": {
        "ja": "",
        "en": "",
        "zh": "",
        "hi": "",
        "es": "",
        "de": "",
        "ar": ""
      }
    },
    "none": {
      "name": {
        "ja": "認証なし",
        "en": "No verification",
        "zh": "无需验证",
        "hi": "कोई वेरिफ़िकेशन नहीं",
        "es": "Sin verificación",
        "de": "Keine Verifizierung",
        "ar": "دون تحقق"
      },
      "title": {
        "ja": "本人確認なしで使えるアプリ・サービス一覧",
        "en": "Apps that need no identity verification",
        "zh": "无需身份验证的应用一览",
        "hi": "बिना पहचान वेरिफ़िकेशन वाले ऐप",
        "es": "Apps que no piden verificación de identidad",
        "de": "Apps ohne Identitätsprüfung",
        "ar": "تطبيقات لا تتطلب التحقق من الهوية"
      },
      "intro": {
        "ja": "メールアドレスの登録やアプリのインストールだけで始められ、特別な本人確認がいらないサービスです。手軽な分、もらえる額は小さめで、回線（帯域）の共有やメールの読み取りなど、別の形でデータや回線を提供するものもあります。条件は各カードの「注意」を確認してください。RewardMe の World ID は、ギフト券をすぐ受け取りたいときの任意の認証です。",
        "en": "You can start with just an email address or an app install, with no identity check. The trade-off: amounts are smaller, and some services take something else instead, such as sharing your bandwidth or reading your email. Check the notes on each card. For RewardMe, World ID is optional and only speeds up gift-card redemption.",
        "zh": "只需注册邮箱或安装应用即可开始，无需特别的身份验证。代价是金额较小，有些服务会以别的方式取得数据或网络，例如共享带宽或读取邮件。请查看各卡片的“注意”。RewardMe 的 World ID 是可选的，仅用于更快兑换礼品卡。",
        "hi": "सिर्फ़ ईमेल या ऐप इंस्टॉल से शुरू कर सकते हैं, कोई पहचान जाँच नहीं। बदले में रकम कम होती है, और कुछ सेवाएँ किसी और रूप में चीज़ें लेती हैं, जैसे बैंडविड्थ शेयर करना या ईमेल पढ़ना। हर कार्ड के नोट देखें। RewardMe में World ID वैकल्पिक है और सिर्फ़ गिफ़्ट कार्ड जल्दी पाने के लिए है।",
        "es": "Basta con un correo o instalar una app, sin comprobar tu identidad. A cambio, los importes son menores y algunos servicios toman otra cosa, como compartir tu ancho de banda o leer tu correo. Revisa las notas de cada tarjeta. En RewardMe, World ID es opcional y solo acelera el canje de tarjetas regalo.",
        "de": "Du startest mit einer E-Mail-Adresse oder einer App-Installation, ohne Identitätsprüfung. Dafür sind die Beträge kleiner, und manche Dienste nehmen etwas anderes, etwa deine Bandbreite oder das Lesen deiner E-Mails. Lies die Hinweise auf jeder Karte. Bei RewardMe ist World ID optional und beschleunigt nur das Einlösen von Geschenkkarten.",
        "ar": "يمكنك البدء ببريد إلكتروني أو بتثبيت تطبيق فقط، دون تحقق من الهوية. في المقابل تكون المبالغ أصغر، وبعض الخدمات تأخذ شيئًا آخر، كمشاركة النطاق الترددي أو قراءة بريدك. راجع ملاحظات كل بطاقة. في ⁦RewardMe⁩ يكون ⁦World ID⁩ اختياريًا ويُسرّع استبدال بطاقات الهدايا فقط."
      }
    }
  },
  "TIMELINE": [
    {
      "id": "mincome",
      "years": "1974–1979",
      "type": "gov",
      "name": "Mincome",
      "place": {
        "ja": "カナダ・マニトバ州ドーフィン",
        "en": "Dauphin, Manitoba, Canada",
        "zh": "加拿大马尼托巴省多芬",
        "hi": "डॉफ़िन, मैनिटोबा, कनाडा",
        "es": "Dauphin, Manitoba (Canadá)",
        "de": "Dauphin, Manitoba (Kanada)",
        "ar": "دوفين، مانيتوبا، كندا"
      },
      "who": {
        "ja": "カナダ連邦政府とマニトバ州政府",
        "en": "Federal and Manitoba governments",
        "zh": "加拿大联邦政府与马尼托巴省政府",
        "hi": "कनाडा की संघीय और मैनिटोबा सरकारें",
        "es": "Gobiernos federal y de Manitoba",
        "de": "Bundesregierung und Provinzregierung Manitoba",
        "ar": "الحكومة الاتحادية وحكومة مانيتوبا"
      },
      "paid": {
        "ja": "町の住民全員が対象の最低所得保障（他の収入の50%を差し引く方式）",
        "en": "A guaranteed income floor every Dauphin resident could claim (reduced by 50% of other income)",
        "zh": "多芬全体居民都可申领的最低收入保障（按其他收入的 50% 递减）",
        "hi": "डॉफ़िन के हर निवासी के लिए न्यूनतम आय की गारंटी (दूसरी आय का 50% घटाकर)",
        "es": "Un ingreso mínimo garantizado al que podía acceder todo residente de Dauphin (se reducía un 50 % de otros ingresos)",
        "de": "Ein garantiertes Mindesteinkommen für alle Einwohner Dauphins (gekürzt um 50 % des übrigen Einkommens)",
        "ar": "حد أدنى مضمون للدخل يحق لكل سكان دوفين (يُخفَّض بنسبة 50% من الدخل الآخر)"
      },
      "result": {
        "ja": "エヴリン・フォージェ（2011年）は入院率が対照群より8.5%下がったと報告。2022年の再分析はこの因果関係に異論を唱えている",
        "en": "Evelyn Forget (2011) reported an 8.5% lower hospitalisation rate than controls; a 2022 reanalysis disputes the causal claim",
        "zh": "Evelyn Forget（2011 年）报告住院率比对照组低 8.5%；2022 年的再分析对这一因果关系提出异议",
        "hi": "एवलिन फ़ॉर्गेट (2011) ने नियंत्रण समूह से 8.5% कम अस्पताल भर्ती दर बताई; 2022 का पुनर्विश्लेषण इस कारण-संबंध पर सवाल उठाता है",
        "es": "Evelyn Forget (2011) informó de una tasa de hospitalización un 8,5 % menor que la del grupo de control; un reanálisis de 2022 discute la relación causal",
        "de": "Evelyn Forget (2011) berichtete von 8,5 % weniger Krankenhausaufenthalten als in der Vergleichsgruppe; eine Neuauswertung von 2022 bestreitet den kausalen Zusammenhang",
        "ar": "أفادت إيفلين فورجيه (2011) بانخفاض معدل دخول المستشفى 8.5% مقارنة بالمجموعة الضابطة، وتعترض إعادة تحليل عام 2022 على العلاقة السببية"
      },
      "source": "https://www.progress.org/wiki/forget-mincome-town-with-no-poverty/"
    },
    {
      "id": "alaska",
      "years": "1982–",
      "type": "gov",
      "name": "Alaska Permanent Fund Dividend",
      "place": {
        "ja": "アメリカ・アラスカ州",
        "en": "Alaska, USA",
        "zh": "美国阿拉斯加州",
        "hi": "अलास्का, अमेरिका",
        "es": "Alaska (EE. UU.)",
        "de": "Alaska (USA)",
        "ar": "ألاسكا، الولايات المتحدة"
      },
      "who": {
        "ja": "アラスカ州",
        "en": "State of Alaska",
        "zh": "阿拉斯加州政府",
        "hi": "अलास्का राज्य",
        "es": "Estado de Alaska",
        "de": "Bundesstaat Alaska",
        "ar": "ولاية ألاسكا"
      },
      "paid": {
        "ja": "州の基金から、条件を満たす住民全員に毎年配当。最初の配当は1人1,000ドル（1982年6月14日に支給）",
        "en": "An annual dividend from the state fund to eligible residents; the first was $1,000 each, paid on 14 June 1982",
        "zh": "从州基金每年向符合条件的居民发放红利；首次为每人 1,000 美元，于 1982 年 6 月 14 日发放",
        "hi": "राज्य कोष से योग्य निवासियों को हर साल डिविडेंड; पहला $1,000 प्रति व्यक्ति, 14 जून 1982 को",
        "es": "Un dividendo anual del fondo estatal para residentes que cumplen requisitos; el primero fue de 1.000 $ por persona, pagado el 14 de junio de 1982",
        "de": "Eine jährliche Dividende aus dem Staatsfonds für berechtigte Einwohner; die erste betrug 1.000 $ pro Person, ausgezahlt am 14. Juni 1982",
        "ar": "عائد سنوي من صندوق الولاية للمقيمين المستحقين؛ كان الأول ⁦$1,000⁩ للفرد ودُفع في 14 يونيو 1982"
      },
      "result": {
        "ja": "",
        "en": "",
        "zh": "",
        "hi": "",
        "es": "",
        "de": "",
        "ar": ""
      },
      "source": "https://pfd.alaska.gov/Division-Info/Historical-Timeline"
    },
    {
      "id": "namibia",
      "years": "2008–2009",
      "type": "ngo",
      "name": "Basic Income Grant (BIG) pilot",
      "place": {
        "ja": "ナミビア・オチヴェロ",
        "en": "Otjivero, Namibia",
        "zh": "纳米比亚奥奇韦罗",
        "hi": "ओत्जिवेरो, नामीबिया",
        "es": "Otjivero (Namibia)",
        "de": "Otjivero (Namibia)",
        "ar": "أوتجيفيرو، ناميبيا"
      },
      "who": {
        "ja": "教会・労働組合・NGOによる BIG 連合",
        "en": "The BIG Coalition of churches, unions and NGOs",
        "zh": "由教会、工会和 NGO 组成的 BIG 联盟",
        "hi": "चर्च, यूनियन और NGO का BIG गठबंधन",
        "es": "La Coalición BIG de iglesias, sindicatos y ONG",
        "de": "Die BIG-Koalition aus Kirchen, Gewerkschaften und NGOs",
        "ar": "تحالف ⁦BIG⁩ من الكنائس والنقابات والمنظمات غير الحكومية"
      },
      "paid": {
        "ja": "60歳未満の住民全員に月100ナミビア・ドル（条件なし、民間資金）",
        "en": "N$100 a month, no conditions, to every resident under 60 (privately funded)",
        "zh": "每月 100 纳米比亚元，无条件发给 60 岁以下的所有居民（私人资金）",
        "hi": "60 से कम उम्र के हर निवासी को बिना शर्त हर महीने N$100 (निजी फ़ंड)",
        "es": "100 N$ al mes, sin condiciones, para todo residente menor de 60 años (financiación privada)",
        "de": "100 N$ im Monat ohne Bedingungen für alle Einwohner unter 60 (privat finanziert)",
        "ar": "100 دولار ناميبي شهريًا دون شروط لكل مقيم دون الستين (بتمويل خاص)"
      },
      "result": {
        "ja": "連合の評価報告は、子どもの栄養状態や世帯収入の改善を報告している（推進側による評価）",
        "en": "The coalition’s assessment reported better child nutrition and higher household incomes (an advocacy-linked evaluation)",
        "zh": "联盟的评估报告称儿童营养和家庭收入有所改善（属倡导方的评估）",
        "hi": "गठबंधन के आकलन ने बच्चों के पोषण और घरेलू आय में सुधार बताया (पैरवी करने वालों का आकलन)",
        "es": "La evaluación de la coalición informó de mejor nutrición infantil y mayores ingresos familiares (evaluación vinculada a sus promotores)",
        "de": "Die Auswertung der Koalition berichtete von besserer Ernährung der Kinder und höheren Haushaltseinkommen (eine Auswertung der Befürworter)",
        "ar": "أفاد تقييم التحالف بتحسّن تغذية الأطفال وارتفاع دخل الأسر (تقييم مرتبط بالجهة الداعية)"
      },
      "source": "https://namibiadigitalrepository.com/items/show/456"
    },
    {
      "id": "india-mp",
      "years": "2011–2013",
      "type": "ngo",
      "name": "Madhya Pradesh cash transfer pilots",
      "place": {
        "ja": "インド・マディヤ・プラデーシュ州",
        "en": "Madhya Pradesh, India",
        "zh": "印度中央邦",
        "hi": "मध्य प्रदेश, भारत",
        "es": "Madhya Pradesh (India)",
        "de": "Madhya Pradesh (Indien)",
        "ar": "ماديا براديش، الهند"
      },
      "who": {
        "ja": "SEWA（自営女性協会）、資金はユニセフ",
        "en": "SEWA (Self-Employed Women’s Association), funded by UNICEF",
        "zh": "SEWA（自营妇女协会），由联合国儿童基金会资助",
        "hi": "SEWA (सेल्फ़-एम्प्लॉयड विमेंस एसोसिएशन), UNICEF के फ़ंड से",
        "es": "SEWA (Asociación de Mujeres Autónomas), con fondos de UNICEF",
        "de": "SEWA (Self-Employed Women’s Association), finanziert von UNICEF",
        "ar": "رابطة النساء العاملات لحسابهن (⁦SEWA⁩) بتمويل من اليونيسف"
      },
      "paid": {
        "ja": "ランダムに選んだ8つの村の全員（大人も子どもも）に、17か月間毎月少額の現金（12の村を比較対照に）",
        "en": "Small monthly cash to every man, woman and child in eight randomly chosen villages for 17 months, with 12 control villages",
        "zh": "在随机选出的 8 个村庄，向所有男女老少每月发放少量现金，共 17 个月，另设 12 个对照村",
        "hi": "बेतरतीब चुने गए 8 गाँवों के हर पुरुष, महिला और बच्चे को 17 महीने तक हर महीने थोड़ा नकद; 12 गाँव तुलना के लिए",
        "es": "Pequeñas sumas mensuales para cada hombre, mujer y niño de ocho aldeas elegidas al azar durante 17 meses, con 12 aldeas de control",
        "de": "Kleine monatliche Geldbeträge für jeden Mann, jede Frau und jedes Kind in acht zufällig gewählten Dörfern über 17 Monate, mit 12 Vergleichsdörfern",
        "ar": "مبالغ نقدية شهرية صغيرة لكل رجل وامرأة وطفل في ثماني قرى مختارة عشوائيًا لمدة 17 شهرًا، مع 12 قرية للمقارنة"
      },
      "result": {
        "ja": "評価結果は2013年にニューデリーでの会議で発表された",
        "en": "Evaluations were presented at a 2013 conference in New Delhi",
        "zh": "评估结果于 2013 年在新德里的会议上发布",
        "hi": "मूल्यांकन 2013 में नई दिल्ली के एक सम्मेलन में पेश किए गए",
        "es": "Las evaluaciones se presentaron en una conferencia en Nueva Delhi en 2013",
        "de": "Die Auswertungen wurden 2013 auf einer Konferenz in Neu-Delhi vorgestellt",
        "ar": "عُرضت التقييمات في مؤتمر بنيودلهي عام 2013"
      },
      "source": "https://socioeco.org/bdf_fiche-document-2813_de.html"
    },
    {
      "id": "kenya",
      "years": "2017–",
      "type": "ngo",
      "name": "GiveDirectly basic income study",
      "place": {
        "ja": "ケニアの農村部",
        "en": "Rural Kenya",
        "zh": "肯尼亚农村",
        "hi": "ग्रामीण केन्या",
        "es": "Kenia rural",
        "de": "Ländliches Kenia",
        "ar": "ريف كينيا"
      },
      "who": {
        "ja": "GiveDirectly（評価はバネルジー、スリら）",
        "en": "GiveDirectly (evaluated by Abhijit Banerjee, Tavneet Suri and others)",
        "zh": "GiveDirectly（由 Abhijit Banerjee、Tavneet Suri 等评估）",
        "hi": "GiveDirectly (मूल्यांकन: अभिजीत बनर्जी, तवनीत सूरी आदि)",
        "es": "GiveDirectly (evaluado por Abhijit Banerjee, Tavneet Suri y otros)",
        "de": "GiveDirectly (ausgewertet u. a. von Abhijit Banerjee und Tavneet Suri)",
        "ar": "⁦GiveDirectly⁩ (يقيّمه أبهيجيت بانيرجي وتافنيت سوري وآخرون)"
      },
      "paid": {
        "ja": "長期グループの大人に月20ドルあまりを12年間。ほかに2年間グループ、一括払いグループ、対照群がある",
        "en": "A little over $20 a month for 12 years to adults in the long-term group, alongside two-year, lump-sum and control groups",
        "zh": "长期组的成人每月 20 多美元，持续 12 年；另有两年组、一次性发放组和对照组",
        "hi": "लंबी अवधि वाले समूह के वयस्कों को 12 साल तक हर महीने $20 से थोड़ा ज़्यादा; साथ में दो-साल, एकमुश्त और नियंत्रण समूह",
        "es": "Algo más de 20 $ al mes durante 12 años para los adultos del grupo de largo plazo, junto a grupos de dos años, de pago único y de control",
        "de": "Etwas über 20 $ im Monat für 12 Jahre an Erwachsene der Langzeitgruppe, daneben Zwei-Jahres-, Einmalzahlungs- und Kontrollgruppen",
        "ar": "ما يزيد قليلًا على ⁦$20⁩ شهريًا لمدة 12 عامًا للبالغين في المجموعة طويلة الأمد، إلى جانب مجموعات السنتين والدفعة الواحدة والمجموعة الضابطة"
      },
      "result": {
        "ja": "2023年の初期結果では、多くの経済指標で一括払いグループの効果が大きかった",
        "en": "Early results (2023) found the lump-sum group did better on many economic measures",
        "zh": "2023 年的初步结果显示，一次性发放组在许多经济指标上表现更好",
        "hi": "2023 के शुरुआती नतीजों में कई आर्थिक पैमानों पर एकमुश्त समूह बेहतर रहा",
        "es": "Los primeros resultados (2023) hallaron que el grupo de pago único obtuvo mejores resultados en muchas medidas económicas",
        "de": "Erste Ergebnisse (2023) zeigten, dass die Einmalzahlungsgruppe bei vielen wirtschaftlichen Kennzahlen besser abschnitt",
        "ar": "وجدت النتائج الأولية (2023) أن مجموعة الدفعة الواحدة كانت أفضل في كثير من المؤشرات الاقتصادية"
      },
      "source": "https://www.wunc.org/2023-12-07/its-one-of-the-biggest-experiments-in-fighting-global-poverty-now-the-results-are-in",
      "org": "givedirectly"
    },
    {
      "id": "finland",
      "years": "2017–2018",
      "type": "gov",
      "name": "Finland’s basic income experiment",
      "place": {
        "ja": "フィンランド",
        "en": "Finland",
        "zh": "芬兰",
        "hi": "फ़िनलैंड",
        "es": "Finlandia",
        "de": "Finnland",
        "ar": "فنلندا"
      },
      "who": {
        "ja": "フィンランド社会保険庁（Kela）",
        "en": "Kela, the Social Insurance Institution of Finland",
        "zh": "芬兰社会保险局（Kela）",
        "hi": "Kela (फ़िनलैंड का सामाजिक बीमा संस्थान)",
        "es": "Kela, la Seguridad Social de Finlandia",
        "de": "Kela, die finnische Sozialversicherungsanstalt",
        "ar": "مؤسسة التأمين الاجتماعي الفنلندية (⁦Kela⁩)"
      },
      "paid": {
        "ja": "無作為に選んだ失業者2,000人に月560ユーロを2年間",
        "en": "€560 a month for two years to 2,000 randomly chosen unemployed people",
        "zh": "向随机选出的 2,000 名失业者每月发放 560 欧元，为期两年",
        "hi": "बेतरतीब चुने गए 2,000 बेरोज़गारों को दो साल तक हर महीने €560",
        "es": "560 € al mes durante dos años para 2.000 personas desempleadas elegidas al azar",
        "de": "560 € im Monat für zwei Jahre an 2.000 zufällig ausgewählte Arbeitslose",
        "ar": "⁦€560⁩ شهريًا لمدة عامين لـ2,000 عاطل عن العمل اختيروا عشوائيًا"
      },
      "result": {
        "ja": "2020年の最終報告では、就労への効果は小さく、生活の満足度や心の健康は改善した",
        "en": "The 2020 final evaluation found small employment effects and better wellbeing and mental health",
        "zh": "2020 年的最终评估显示，对就业的影响很小，但生活满意度和心理健康有所改善",
        "hi": "2020 के अंतिम मूल्यांकन में रोज़गार पर असर छोटा, पर ख़ुशहाली और मानसिक स्वास्थ्य बेहतर पाया गया",
        "es": "La evaluación final de 2020 halló efectos pequeños en el empleo y más bienestar y mejor salud mental",
        "de": "Die Schlussauswertung 2020 fand kleine Beschäftigungseffekte und mehr Wohlbefinden sowie bessere psychische Gesundheit",
        "ar": "وجد التقييم النهائي عام 2020 آثارًا صغيرة على التوظيف وتحسنًا في الرفاه والصحة النفسية"
      },
      "source": "https://stm.fi/en/-/perustulokokeilun-tulokset-tyollisyysvaikutukset-vahaisia-toimeentulo-ja-psyykkinen-terveys-koettiin-paremmaksi"
    },
    {
      "id": "ontario",
      "years": "2017–2018",
      "type": "gov",
      "name": "Ontario Basic Income Pilot",
      "place": {
        "ja": "カナダ・オンタリオ州（ハミルトン、リンジー、サンダーベイなど）",
        "en": "Ontario, Canada (Hamilton, Lindsay, Thunder Bay and others)",
        "zh": "加拿大安大略省（汉密尔顿、林赛、桑德贝等）",
        "hi": "ओंटारियो, कनाडा (हैमिल्टन, लिंडसे, थंडर बे आदि)",
        "es": "Ontario, Canadá (Hamilton, Lindsay, Thunder Bay y otras)",
        "de": "Ontario, Kanada (Hamilton, Lindsay, Thunder Bay u. a.)",
        "ar": "أونتاريو، كندا (هاميلتون وليندسي وثندر باي وغيرها)"
      },
      "who": {
        "ja": "オンタリオ州政府",
        "en": "Government of Ontario",
        "zh": "安大略省政府",
        "hi": "ओंटारियो सरकार",
        "es": "Gobierno de Ontario",
        "de": "Regierung von Ontario",
        "ar": "حكومة أونتاريو"
      },
      "paid": {
        "ja": "約4,000人に、単身で年最大16,989カナダドル（勤労収入の50%を差し引く）",
        "en": "Up to C$16,989 a year for single people (less 50% of earnings) to about 4,000 participants",
        "zh": "向约 4,000 名参与者发放，单身者每年最多 16,989 加元（扣除劳动收入的 50%）",
        "hi": "लगभग 4,000 प्रतिभागियों को, अकेले व्यक्ति को साल में अधिकतम C$16,989 (कमाई का 50% घटाकर)",
        "es": "Hasta 16.989 C$ al año para personas solas (menos el 50 % de lo ganado) para unos 4.000 participantes",
        "de": "Bis zu 16.989 C$ im Jahr für Alleinstehende (abzüglich 50 % des Verdiensts) an rund 4.000 Teilnehmende",
        "ar": "حتى 16,989 دولارًا كنديًا سنويًا للفرد الأعزب (ناقص 50% من الدخل) لنحو 4,000 مشارك"
      },
      "result": {
        "ja": "3年の予定が、2018年7月31日に新政府が約1年で打ち切りを発表",
        "en": "Planned for three years; the new government announced its cancellation on 31 July 2018, after about one year",
        "zh": "原计划三年，新政府于 2018 年 7 月 31 日宣布在约一年后终止",
        "hi": "तीन साल के लिए था; नई सरकार ने 31 जुलाई 2018 को लगभग एक साल बाद इसे रद्द करने की घोषणा की",
        "es": "Previsto para tres años; el nuevo gobierno anunció su cancelación el 31 de julio de 2018, tras un año aproximadamente",
        "de": "Auf drei Jahre angelegt; die neue Regierung kündigte am 31. Juli 2018 nach etwa einem Jahr das Ende an",
        "ar": "كان مقررًا لثلاث سنوات، وأعلنت الحكومة الجديدة إلغاءه في 31 يوليو 2018 بعد نحو عام"
      },
      "source": "https://globalnews.ca/news/4365399/ontario-cancels-basic-income-pilot-project"
    },
    {
      "id": "stockton",
      "years": "2019–2021",
      "type": "ngo",
      "name": "Stockton SEED",
      "place": {
        "ja": "アメリカ・カリフォルニア州ストックトン",
        "en": "Stockton, California, USA",
        "zh": "美国加州斯托克顿",
        "hi": "स्टॉकटन, कैलिफ़ोर्निया, अमेरिका",
        "es": "Stockton, California (EE. UU.)",
        "de": "Stockton, Kalifornien (USA)",
        "ar": "ستوكتون، كاليفورنيا، الولايات المتحدة"
      },
      "who": {
        "ja": "ストックトン経済エンパワーメント実証（SEED）",
        "en": "Stockton Economic Empowerment Demonstration",
        "zh": "斯托克顿经济赋能示范项目（SEED）",
        "hi": "स्टॉकटन इकोनॉमिक एम्पावरमेंट डेमॉन्स्ट्रेशन (SEED)",
        "es": "Stockton Economic Empowerment Demonstration (SEED)",
        "de": "Stockton Economic Empowerment Demonstration (SEED)",
        "ar": "مشروع ستوكتون للتمكين الاقتصادي (⁦SEED⁩)"
      },
      "paid": {
        "ja": "住民125人に月500ドルを2年間（使い道の制限なし）",
        "en": "$500 a month for two years to 125 residents, with no spending restrictions",
        "zh": "向 125 名居民每月发放 500 美元，为期两年，不限用途",
        "hi": "125 निवासियों को दो साल तक हर महीने $500, ख़र्च पर कोई रोक नहीं",
        "es": "500 $ al mes durante dos años para 125 residentes, sin restricciones de uso",
        "de": "500 $ im Monat für zwei Jahre an 125 Einwohner, ohne Ausgabevorgaben",
        "ar": "⁦$500⁩ شهريًا لمدة عامين لـ125 من السكان دون قيود على الإنفاق"
      },
      "result": {
        "ja": "研究者によると、受給者は対照群の2倍以上の割合でフルタイムの仕事に移った",
        "en": "Researchers reported recipients moved into full-time work at more than twice the rate of the control group",
        "zh": "研究人员称，受助者转为全职工作的比例是对照组的两倍多",
        "hi": "शोधकर्ताओं के अनुसार प्राप्तकर्ता नियंत्रण समूह की तुलना में दोगुने से ज़्यादा दर से पूर्णकालिक काम में गए",
        "es": "Según los investigadores, los beneficiarios pasaron a empleo a tiempo completo a más del doble de ritmo que el grupo de control",
        "de": "Laut den Forschenden wechselten Empfänger mehr als doppelt so häufig in Vollzeit wie die Kontrollgruppe",
        "ar": "أفاد الباحثون بأن المستفيدين انتقلوا إلى العمل بدوام كامل بأكثر من ضعف معدل المجموعة الضابطة"
      },
      "source": "https://cbsnews.com/news/basic-guaranteed-income-stockton-experiment/"
    },
    {
      "id": "openresearch",
      "years": "2020–2023",
      "type": "ngo",
      "name": "OpenResearch Unconditional Cash Study",
      "place": {
        "ja": "アメリカ・イリノイ州とテキサス州",
        "en": "Illinois and Texas, USA",
        "zh": "美国伊利诺伊州和得克萨斯州",
        "hi": "इलिनॉय और टेक्सस, अमेरिका",
        "es": "Illinois y Texas (EE. UU.)",
        "de": "Illinois und Texas (USA)",
        "ar": "إلينوي وتكساس، الولايات المتحدة"
      },
      "who": {
        "ja": "OpenResearch（旧 Y Combinator Research）",
        "en": "OpenResearch (formerly Y Combinator Research)",
        "zh": "OpenResearch（原 Y Combinator Research）",
        "hi": "OpenResearch (पहले Y Combinator Research)",
        "es": "OpenResearch (antes Y Combinator Research)",
        "de": "OpenResearch (früher Y Combinator Research)",
        "ar": "⁦OpenResearch⁩ (سابقًا ⁦Y Combinator Research⁩)"
      },
      "paid": {
        "ja": "21〜40歳の1,000人に月1,000ドルを3年間（対照群2,000人は月50ドル）",
        "en": "$1,000 a month for three years to 1,000 people aged 21–40 (2,000 controls got $50 a month)",
        "zh": "向 1,000 名 21–40 岁的人每月发放 1,000 美元，为期三年（2,000 名对照者每月 50 美元）",
        "hi": "21–40 साल के 1,000 लोगों को तीन साल तक हर महीने $1,000 (2,000 नियंत्रण वालों को $50 महीना)",
        "es": "1.000 $ al mes durante tres años para 1.000 personas de 21 a 40 años (2.000 de control recibieron 50 $ al mes)",
        "de": "1.000 $ im Monat für drei Jahre an 1.000 Menschen zwischen 21 und 40 (2.000 Kontrollpersonen bekamen 50 $ im Monat)",
        "ar": "⁦$1,000⁩ شهريًا لمدة ثلاث سنوات لـ1,000 شخص بين 21 و40 عامًا (حصلت المجموعة الضابطة البالغة 2,000 على ⁦$50⁩ شهريًا)"
      },
      "result": {
        "ja": "2024年の最初の結果では、支出が増え、労働時間はわずかに減った",
        "en": "First results (2024) found higher spending and slightly fewer hours worked",
        "zh": "2024 年的首批结果显示，支出增加，工作时间略有减少",
        "hi": "2024 के पहले नतीजों में ख़र्च बढ़ा और काम के घंटे थोड़े घटे",
        "es": "Los primeros resultados (2024) hallaron más gasto y algo menos de horas trabajadas",
        "de": "Erste Ergebnisse (2024) zeigten höhere Ausgaben und etwas weniger Arbeitsstunden",
        "ar": "وجدت النتائج الأولى (2024) زيادة في الإنفاق وانخفاضًا طفيفًا في ساعات العمل"
      },
      "source": "https://www.openresearchlab.org/",
      "org": "openresearch"
    },
    {
      "id": "pilotprojekt",
      "years": "2021–2024",
      "type": "ngo",
      "name": "Pilotprojekt Grundeinkommen",
      "place": {
        "ja": "ドイツ",
        "en": "Germany",
        "zh": "德国",
        "hi": "जर्मनी",
        "es": "Alemania",
        "de": "Deutschland",
        "ar": "ألمانيا"
      },
      "who": {
        "ja": "Mein Grundeinkommen とドイツ経済研究所（DIW）",
        "en": "Mein Grundeinkommen with the German Institute for Economic Research (DIW)",
        "zh": "Mein Grundeinkommen 与德国经济研究所（DIW）",
        "hi": "Mein Grundeinkommen और जर्मन आर्थिक शोध संस्थान (DIW)",
        "es": "Mein Grundeinkommen con el Instituto Alemán de Investigación Económica (DIW)",
        "de": "Mein Grundeinkommen mit dem Deutschen Institut für Wirtschaftsforschung (DIW)",
        "ar": "⁦Mein Grundeinkommen⁩ مع المعهد الألماني للبحوث الاقتصادية (⁦DIW⁩)"
      },
      "paid": {
        "ja": "寄付を財源に、約120人に月1,200ユーロを3年間（2021年6月〜2024年5月）",
        "en": "€1,200 a month for three years (June 2021–May 2024) to about 120 people, funded by donations",
        "zh": "以捐款为资金，向约 120 人每月发放 1,200 欧元，为期三年（2021 年 6 月至 2024 年 5 月）",
        "hi": "दान से, लगभग 120 लोगों को तीन साल (जून 2021–मई 2024) तक हर महीने €1,200",
        "es": "1.200 € al mes durante tres años (junio 2021–mayo 2024) para unas 120 personas, financiados con donaciones",
        "de": "1.200 € im Monat über drei Jahre (Juni 2021 bis Mai 2024) an rund 120 Menschen, finanziert aus Spenden",
        "ar": "⁦€1,200⁩ شهريًا لثلاث سنوات (يونيو 2021–مايو 2024) لنحو 120 شخصًا، بتمويل من التبرعات"
      },
      "result": {
        "ja": "2025年4月のDIWの発表では、受給者は働く時間を目立って減らさず、心の健康と生活満足度が改善した",
        "en": "DIW reported in April 2025 that recipients did not significantly cut their working hours and that mental health and life satisfaction improved",
        "zh": "DIW 于 2025 年 4 月发布：受助者没有明显减少工作时间，心理健康和生活满意度有所改善",
        "hi": "DIW ने अप्रैल 2025 में बताया कि प्राप्तकर्ताओं ने काम के घंटे ख़ास कम नहीं किए और मानसिक स्वास्थ्य व जीवन-संतोष बेहतर हुआ",
        "es": "El DIW informó en abril de 2025 de que los beneficiarios no redujeron de forma significativa sus horas de trabajo y mejoraron su salud mental y su satisfacción vital",
        "de": "Das DIW berichtete im April 2025, dass die Empfänger ihre Arbeitszeit nicht signifikant reduzierten und sich psychische Gesundheit und Lebenszufriedenheit verbesserten",
        "ar": "أفاد ⁦DIW⁩ في أبريل 2025 بأن المستفيدين لم يقللوا ساعات عملهم بشكل ملحوظ، وتحسنت صحتهم النفسية ورضاهم عن الحياة"
      },
      "source": "https://www.diw.de/de/diw_01.c.945271.de/pilotprojekt_grundeinkommen__feldstudie_entkraeftet_mythos_von_der_sozialen_haengematte.html",
      "svc": "meingrundeinkommen",
      "org": "mgk"
    },
    {
      "id": "g1",
      "years": "2017",
      "type": "crypto",
      "name": "Ğ1 (Duniter)",
      "place": {
        "ja": "フランス語圏を中心に世界",
        "en": "Worldwide, mostly French-speaking",
        "zh": "全球，以法语圈为主",
        "hi": "दुनियाभर, ज़्यादातर फ़्रेंच भाषी",
        "es": "Mundial, sobre todo francófono",
        "de": "Weltweit, überwiegend französischsprachig",
        "ar": "عالمي، أغلبه ناطق بالفرنسية"
      },
      "who": {
        "ja": "Duniter のコミュニティ",
        "en": "The Duniter community",
        "zh": "Duniter 社区",
        "hi": "Duniter समुदाय",
        "es": "La comunidad Duniter",
        "de": "Die Duniter-Gemeinschaft",
        "ar": "مجتمع ⁦Duniter⁩"
      },
      "paid": {
        "ja": "メンバー全員に毎日の「ユニバーサル・ディビデンド」。2017年3月8日に59人で開始",
        "en": "A daily “Universal Dividend” for every member; launched on 8 March 2017 with 59 members",
        "zh": "每位成员每天获得“全民红利”；2017 年 3 月 8 日以 59 名成员启动",
        "hi": "हर सदस्य को रोज़ “यूनिवर्सल डिविडेंड”; 8 मार्च 2017 को 59 सदस्यों के साथ शुरू",
        "es": "Un «Dividendo Universal» diario para cada miembro; empezó el 8 de marzo de 2017 con 59 miembros",
        "de": "Eine tägliche „Universelle Dividende“ für jedes Mitglied; gestartet am 8. März 2017 mit 59 Mitgliedern",
        "ar": "«عائد شامل» يومي لكل عضو؛ انطلقت في 8 مارس 2017 بـ59 عضوًا"
      },
      "result": {
        "ja": "2026年3月に Duniter v2 へ移行",
        "en": "Moved to Duniter v2 in March 2026",
        "zh": "2026 年 3 月迁移至 Duniter v2",
        "hi": "मार्च 2026 में Duniter v2 पर गई",
        "es": "Pasó a Duniter v2 en marzo de 2026",
        "de": "Im März 2026 auf Duniter v2 umgezogen",
        "ar": "انتقلت إلى ⁦Duniter v2⁩ في مارس 2026"
      },
      "source": "https://duniter.org/g1/",
      "svc": "g1",
      "org": "g1"
    },
    {
      "id": "circles2",
      "years": "2025",
      "type": "crypto",
      "name": "Circles 2.0",
      "place": {
        "ja": "世界",
        "en": "Worldwide",
        "zh": "全球",
        "hi": "दुनियाभर",
        "es": "Mundial",
        "de": "Weltweit",
        "ar": "عالمي"
      },
      "who": {
        "ja": "Gnosis",
        "en": "Gnosis",
        "zh": "Gnosis",
        "hi": "Gnosis",
        "es": "Gnosis",
        "de": "Gnosis",
        "ar": "⁦Gnosis⁩"
      },
      "paid": {
        "ja": "一人ひとりが自分の通貨を1時間に1 CRC ずつ発行するしくみの第2版を2025年5月に公開",
        "en": "Second version of a system where each person issues their own currency at 1 CRC an hour, launched in May 2025",
        "zh": "每人每小时发行 1 CRC 自有货币的机制第二版，于 2025 年 5 月推出",
        "hi": "हर व्यक्ति के घंटे में 1 CRC अपनी करेंसी जारी करने की व्यवस्था का दूसरा संस्करण, मई 2025 में लॉन्च",
        "es": "Segunda versión de un sistema en el que cada persona emite su propia moneda a 1 CRC por hora, lanzada en mayo de 2025",
        "de": "Zweite Version eines Systems, in dem jede Person 1 CRC pro Stunde als eigene Währung schöpft, gestartet im Mai 2025",
        "ar": "الإصدار الثاني من نظام يُصدر فيه كل شخص عملته بمعدل ⁦1 CRC⁩ في الساعة، أُطلق في مايو 2025"
      },
      "result": {
        "ja": "",
        "en": "",
        "zh": "",
        "hi": "",
        "es": "",
        "de": "",
        "ar": ""
      },
      "source": "https://www.businesswire.com/news/home/20250521225718/en",
      "svc": "circles",
      "org": "circles"
    },
    {
      "id": "wld-end",
      "years": "2026",
      "type": "crypto",
      "name": "World — WLD Airdrop",
      "place": {
        "ja": "世界",
        "en": "Worldwide",
        "zh": "全球",
        "hi": "दुनियाभर",
        "es": "Mundial",
        "de": "Weltweit",
        "ar": "عالمي"
      },
      "who": {
        "ja": "World（Tools for Humanity / World Foundation）",
        "en": "World (Tools for Humanity / World Foundation)",
        "zh": "World（Tools for Humanity / World Foundation）",
        "hi": "World (Tools for Humanity / World Foundation)",
        "es": "World (Tools for Humanity / World Foundation)",
        "de": "World (Tools for Humanity / World Foundation)",
        "ar": "⁦World⁩ (⁦Tools for Humanity⁩ / ⁦World Foundation⁩)"
      },
      "paid": {
        "ja": "World ID で認証した人への毎月の WLD エアドロップが、2026年6月1日に新規・更新とも停止",
        "en": "Monthly WLD airdrops for World ID–verified people stopped taking new or renewed cycles on 1 June 2026",
        "zh": "面向经 World ID 验证者的每月 WLD 空投于 2026 年 6 月 1 日停止新建和续期",
        "hi": "World ID से वेरिफ़ाई लोगों के लिए मासिक WLD एयरड्रॉप में 1 जून 2026 से नए या नवीनीकृत चक्र बंद",
        "es": "Los airdrops mensuales de WLD para personas verificadas con World ID dejaron de abrir ciclos nuevos o renovados el 1 de junio de 2026",
        "de": "Die monatlichen WLD-Airdrops für per World ID verifizierte Menschen nehmen seit 1. Juni 2026 keine neuen oder verlängerten Zyklen mehr an",
        "ar": "توقفت إسقاطات ⁦WLD⁩ الشهرية لمن تحققوا عبر ⁦World ID⁩ عن فتح دورات جديدة أو مجددة في 1 يونيو 2026"
      },
      "result": {
        "ja": "",
        "en": "",
        "zh": "",
        "hi": "",
        "es": "",
        "de": "",
        "ar": ""
      },
      "source": "https://support.world.org/hc/en-us/articles/30969185598739-Updates-to-the-Airdrop-Program",
      "grave": "wld-airdrop"
    }
  ],
  "ESSAYS": [
    {
      "id": "universal-high-income",
      "date": "2026-10-29",
      "related": "ai-agent-basic-income",
      "title": {
        "ja": "ユニバーサルハイインカムは来るのか：誰が払う？",
        "en": "Universal high income: who pays?",
        "zh": "全民高收入：谁来买单？",
        "hi": "यूनिवर्सल हाई इनकम: पैसा कौन देगा?",
        "es": "Ingreso universal alto: ¿quién paga?",
        "de": "Universelles Hocheinkommen: Wer zahlt?",
        "ar": "الدخل المرتفع الشامل: من يدفع؟"
      },
      "desc": {
        "ja": "イーロン・マスクは、AIとロボットで「ユニバーサルハイインカム」の時代が来ると言う。では誰が払うのか。アルトマンの株式基金、ウィンドフォール条項、アラスカの配当、そして World・GoodDollar・Circles・Ğ1 の答え方から考えるエッセイ。",
        "en": "Elon Musk says AI will bring a “universal high income”. Who pays, and through what pipe? Altman’s American Equity Fund, the Windfall Clause, Alaska’s dividend, and how World, GoodDollar, Circles and Ğ1 answer it.",
        "zh": "马斯克说 AI 和机器人会带来“全民高收入”。那么谁来买单、钱经由什么管道流到人手里？从阿尔特曼的美国股权基金、横财条款、阿拉斯加的分红，到 World、GoodDollar、Circles 和 Ğ1 的做法谈起。",
        "hi": "एलन मस्क कहते हैं कि AI “यूनिवर्सल हाई इनकम” लाएगा। पर पैसा कौन देगा, और किस पाइप से पहुँचेगा? ऑल्टमैन का अमेरिकन इक्विटी फ़ंड, विंडफ़ॉल क्लॉज़, अलास्का का डिविडेंड, और World, GoodDollar, Circles व Ğ1 के जवाब।",
        "es": "Elon Musk dice que la IA traerá un «ingreso universal alto». ¿Quién paga y por qué tubería llega? El fondo de Altman, la Windfall Clause, el dividendo de Alaska y cómo responden World, GoodDollar, Circles y Ğ1.",
        "de": "Elon Musk sagt, KI bringe ein „universelles Hocheinkommen“. Wer zahlt, und durch welche Leitung? Altmans American Equity Fund, die Windfall Clause, Alaskas Dividende und die Antworten von World, GoodDollar, Circles und Ğ1.",
        "ar": "يقول إيلون ماسك إن الذكاء الاصطناعي سيجلب «دخلًا مرتفعًا شاملًا». فمن يدفع، وعبر أي أنبوب؟ صندوق ألتمان، و«بند الأرباح الاستثنائية»، وعائد ألاسكا، وكيف تجيب ⁦World⁩ و⁦GoodDollar⁩ و⁦Circles⁩ و⁦Ğ1⁩."
      },
      "blocks": {
        "en": [
          [
            "p",
            "In November 2023, closing the UK’s AI Safety Summit in conversation with Rishi Sunak, Elon Musk said “there will come a point where no job is needed”, and added: “We won’t have universal basic income, we’ll have universal high income.”[1] Six months later, speaking by video link to VivaTech in Paris, he went further: “Probably none of us will have a job.” AI and robots would provide the goods and services people want, there would be “no shortage of goods or services”, and to make it work there would need to be a “universal high income”. CNN noted that he did not say what that would look like.[2]"
          ],
          [
            "p",
            "As far as the public record goes, that is the whole proposal: a forecast of abundance, plus a name. This essay asks the question the name skips. If the robots do the work, who pays the high income, and through what pipe does it reach people?"
          ],
          [
            "h",
            "What the framing gets right"
          ],
          [
            "o",
            "Credit where it is due. Most talk about AI and jobs is defensive: retraining, safety nets, how to survive being replaced. Universal high income flips the question from “how do we survive job loss?” to “how do we share abundance?” That is a better question. If machines really make goods and services far cheaper, the problem stops being scarcity and becomes distribution. Basic income advocates have argued for decades that distribution is a political choice, not a law of nature. It is useful to hear the same point from someone who runs AI and robotics companies."
          ],
          [
            "h",
            "The gaps"
          ],
          [
            "o",
            "Who pays? Abundance does not distribute itself. In a world where AI earns the money, the profits land with whoever owns the models, the data centres and the robots. Getting them to everyone else needs a mechanism: a tax, a dividend, a public fund, a share register. Musk has not named one. A promise of income with no payer is a forecast, not a policy."
          ],
          [
            "o",
            "Not everything gets cheaper. AI can cut the cost of software, translation and perhaps, one day, manufacturing. It does little for land, which nobody is making more of, or for housing where people want to live. Positional goods, such as the best school, the view or the scarce ticket, are scarce by definition. And care from an actual human may become more valuable, not less, precisely because it is the one thing machines are not. If those prices rise while gadgets get cheap, people can be richer in stuff and still feel poor."
          ],
          [
            "o",
            "“High” is relative. A high income is high compared with someone. If everyone receives the same generous amount, the prices of the scarce things above adjust to it, and what feels high in year one becomes the new floor. The useful question is not “how high?” but “how much of the scarce stuff can it buy?”"
          ],
          [
            "o",
            "The people promising it own the AI. That is not a conspiracy, just the shape of the incentive. When the owners of a technology say its benefits will reach everyone, the details of how matter more, not less. A share of profits that depends on the goodwill of the people holding them is a gift, and gifts can stop."
          ],
          [
            "h",
            "Pipes people have actually proposed"
          ],
          [
            "p",
            "Some people have tried to draw the pipe. In “Moore’s Law for Everything” (March 2021), Sam Altman proposed an American Equity Fund, filled by taxing large companies 2.5% of their market value each year, paid in shares, and 2.5% of the value of privately held land, paid in dollars. He estimated that within a decade each of 250 million American adults would get about $13,500 a year.[3] He picked land because its supply is fixed, which is exactly the problem above."
          ],
          [
            "p",
            "In May 2024, on the All-In podcast, Altman floated “universal basic compute”: everybody gets “a slice of GPT-7’s compute” to use, resell or donate. He did not say how it would work.[4]"
          ],
          [
            "p",
            "The Windfall Clause, from researchers at the Centre for the Governance of AI at Oxford’s Future of Humanity Institute (2020), proposes that AI firms commit in advance to donate a significant share of any extremely large profits that only a transformative AI breakthrough could produce.[5]"
          ],
          [
            "p",
            "There is also a working precedent. Since 1982, Alaska has paid residents an annual dividend from its Permanent Fund, which turns the state’s oil and mineral wealth into a lasting financial resource; the first payment was $1,000 each.[6] ({See our timeline|/timeline/#tl-alaska}.) Swap “oil” for “AI profits” and you have the cleanest real-world template for a high income. There is evidence on what cash does, too. The OpenResearch study gave 1,000 people $1,000 a month for three years. Its 2024 results found that recipients spent more and worked one to two fewer hours a week, with no improvement in job quality.[7] ({Timeline entry|/timeline/#tl-openresearch}.)"
          ],
          [
            "h",
            "How crypto UBI answers “who pays”"
          ],
          [
            "p",
            "The apps on this site have had to answer the question for real, at small scale. They answer it in three different ways."
          ],
          [
            "p",
            "World handed out newly issued tokens. When WLD launched in 2023, 75% of its 10 billion supply was earmarked for the community, and people verified as human with the Orb received regular WLD airdrops; proof of personhood stopped one person from claiming a thousand shares.[8] No one’s profits paid for it: what recipients got was worth whatever the market would pay for WLD. New airdrop cycles stopped on 1 June 2026 ({see the graveyard|/graveyard/#grave-wld-airdrop})."
          ],
          [
            "p",
            "{GoodDollar|/services/gooddollar/} pays its daily G$ from a reserve funded by staking yield, the return on crypto that supporters lock up. That is closer to a real pipe: capital earns a return, and the return becomes a dividend. It also shows the risk. After a security incident in May 2026 the reserve is under review, and the daily amount is very small.[9]"
          ],
          [
            "p",
            "{Circles|/services/circles/} and {Ğ1|/services/g1/} remove the payer altogether. Every member issues new currency for themselves: 1 CRC an hour in Circles, a daily Universal Dividend in Ğ1. Money creation is the dividend, so no one “pays” in the usual sense; everyone is diluted a little, equally. The catch is that the money is worth only what others will accept it for, which today is not much, and mostly within the community.[10] (The code for all three is on our {open-source page|/open-source/}.)"
          ],
          [
            "h",
            "Conclusion: build the pipe"
          ],
          [
            "o",
            "Universal high income is a forecast, not a policy. It may even be a good forecast. But the interesting part is not the word “high”. It is the pipe that would carry AI profits to people who no longer earn wages. Taxes, equity funds, windfall pledges, resource dividends and self-issued currencies are all candidate pipes, and each has a known way to leak."
          ],
          [
            "o",
            "In our {previous essay|/essays/ai-agent-basic-income/}, we argued that AI agents need operating budgets, not a basic income. Put the two together and the picture is simple: agents get budgets, humans get dividends, and someone has to build the pipe in between. Until someone does, treat any promise of a high income the way this site treats every free lunch. Check who is paying."
          ]
        ],
        "ja": [
          [
            "p",
            "2023年11月、英国のAIセーフティ・サミットの締めくくりにリシ・スナク首相（当時）と対談したイーロン・マスクは、「仕事が必要なくなるときが来る」と語り、こう続けました。「ユニバーサル・ベーシックインカムではなく、ユニバーサル・ハイインカムになるだろう」。[1] 半年後の2024年5月、パリのテック見本市 VivaTech にビデオで登壇したときは、さらに踏み込みます。「たぶん、私たちの誰も仕事を持たなくなる」。AIとロボットが欲しいモノやサービスを何でも用意してくれて、「モノやサービスが足りなくなることはない」。それを成り立たせるには「ユニバーサル・ハイインカム」が必要だ、と。ただしCNNは、それがどういうものかについては語らなかったと伝えています。[2]"
          ],
          [
            "p",
            "公の記録をたどるかぎり、提案はこれで全部です。豊かさの予測と、名前がひとつ。このエッセイでは、その名前が素通りしている問いを考えます。ロボットが働いてくれるとして、その「高い所得」は誰が払うのか。そして、どんなパイプを通って人の手に届くのか。"
          ],
          [
            "h",
            "この言い方の、いいところ"
          ],
          [
            "o",
            "まずは評価すべき点から。AIと仕事の話は、たいてい守りの話になります。学び直し、セーフティネット、ギュられたあとどう生き延びるか。ユニバーサルハイインカムは、問いを「失業をどう乗り切るか」から「豊かさをどう分けるか」へと変えます。これはいい問いです。機械が本当にモノやサービスを大幅に安くするなら、問題は「足りないこと」ではなく「分け方」になります。分け方は自然法則ではなく政治の選択だと、ベーシックインカムの支持者は何十年も言い続けてきました。同じことを、AIやロボットの会社を率いる本人の口から聞けるのは悪くありません。"
          ],
          [
            "h",
            "足りないところ"
          ],
          [
            "o",
            "誰が払うのか。豊かさは、勝手に配られたりはしません。AIがお金を稼ぐ世界では、利益はモデルやデータセンターやロボットの持ち主のところに入ります。それをほかの人に届けるには、税金、配当、公的な基金、株の持ち分といった「しくみ」が要ります。マスクはそれを示していません。払う人のいない所得の約束は、予測であって政策ではありません。"
          ],
          [
            "o",
            "安くならないものがある。AIはソフトウェアや翻訳、いつかは製造のコストまで下げるかもしれません。でも、土地はほとんど安くなりません。誰も新しく作れないからです。人が住みたい場所の住宅も同じ。いちばんいい学校、眺めのいい部屋、数の限られたチケットのような「地位財」は、そもそも数が少ないから価値があります。そして生身の人間によるケアは、機械ではないこと自体が価値なので、むしろ高くなるかもしれません。ガジェットが安くなる一方でこうした値段が上がれば、モノは豊かなのに暮らしは苦しい、ということが起こりえます。"
          ],
          [
            "o",
            "「ハイ」は相対的。高い所得とは、誰かと比べて高いという意味です。全員に同じだけ気前よく配られれば、さっきの数の限られたものの値段がそれに合わせて動き、1年目に「高い」と感じた額は、やがてただの最低ラインになります。問うべきは「いくらもらえるか」ではなく、「数の限られたものをどれだけ買えるか」です。"
          ],
          [
            "o",
            "約束しているのは、AIを持っている側。陰謀論ではなく、インセンティブの形の話です。技術の持ち主が「恩恵はみんなに行き渡る」と言うときこそ、どう行き渡るのかの中身が大事になります。利益を握る側の善意しだいで配られる分け前は「贈り物」です。そして贈り物は、止まることがあります。"
          ],
          [
            "h",
            "実際に提案されている「パイプ」"
          ],
          [
            "p",
            "パイプを具体的に描こうとした人もいます。サム・アルトマンは2021年3月のエッセイ「Moore’s Law for Everything」で、「アメリカ株式基金（American Equity Fund）」を提案しました。一定以上の時価総額の企業に毎年その2.5%を株式で、私有地にはその価値の2.5%をドルで課税して基金に積み立てるというものです。10年後には、米国の成人2億5,000万人それぞれに年約1万3,500ドルを配れると見積もっています。[3] 土地を選んだ理由は、供給が限られているから。つまり、さっきの問題そのものです。"
          ],
          [
            "p",
            "アルトマンは2024年5月、ポッドキャスト「All-In」で「ユニバーサル・ベーシック・コンピュート」という考えも口にしました。全員が「GPT-7の計算資源のひとかけら」を受け取り、自分で使っても、売っても、寄付してもいい、というものです。どう実現するかは語っていません。[4]"
          ],
          [
            "p",
            "「ウィンドフォール条項（Windfall Clause）」は、オックスフォード大学人類の未来研究所（FHI）のAIガバナンス・センターの研究者たちが2020年に発表した提案です。変革的なAIの突破なしには得られないほど莫大な利益が出たら、そのかなりの部分を寄付すると、AI企業があらかじめ約束しておくというものです。[5]"
          ],
          [
            "p",
            "実際に動いている前例もあります。アラスカ州は1982年から、州の石油と鉱物資源の富を元にした永久基金から、住民に毎年配当を払っています。最初の配当は1人1,000ドルでした。[6]（{年表を見る|/timeline/#tl-alaska}）「石油」を「AIの利益」に置き換えれば、ハイインカムのいちばんわかりやすいひな形になります。現金を配ると何が起きるかのデータもあります。OpenResearch の研究では、1,000人に月1,000ドルを3年間配りました。2024年に出た結果では、受け取った人は支出が増え、労働時間は週1〜2時間減り、仕事の質がよくなった様子は見られませんでした。[7]（{年表の項目|/timeline/#tl-openresearch}）"
          ],
          [
            "h",
            "暗号資産のUBIは「誰が払う」にどう答えているか"
          ],
          [
            "p",
            "このサイトに載っているアプリは、小さな規模ながら、この問いに実地で答えを出してきました。答え方は三通りです。"
          ],
          [
            "p",
            "World は、新しく発行したトークンを配りました。2023年にWLDが始まったとき、総供給100億枚の75%が「コミュニティ」向けに確保され、Orbで人間だと認証された人に定期的にWLDが配られました。人間証明は、一人が千人分を受け取るのを防ぐためのものです。[8] 誰かの利益が原資だったわけではなく、受け取ったものの価値は、市場がWLDにつける値段しだいでした。新しい配布サイクルは2026年6月1日に止まっています（{墓場を見る|/graveyard/#grave-wld-airdrop}）。"
          ],
          [
            "p",
            "{GoodDollar|/services/gooddollar/} は、毎日のG$を、ステーキングの利回りでまかなう準備金から出しています。支援者が預けた暗号資産が生む利回りです。資本が利回りを生み、それが配当になるので、本物のパイプに近い形です。同時にリスクも見えます。2026年5月にセキュリティ事故があって準備金は見直し中で、1日の額もかなり少なめです。[9]"
          ],
          [
            "p",
            "{Circles|/services/circles/} と {Ğ1|/services/g1/} は、「払う人」そのものをなくしました。メンバー一人ひとりが自分で新しい通貨を発行します。Circlesなら1時間に1 CRC、Ğ1なら毎日の「ユニバーサル・ディビデンド」。お金を生み出すこと自体が配当なので、ふつうの意味で「払う」人はいません。全員が少しずつ、平等に薄まるだけです。弱点は、そのお金の価値がほかの人が受け取ってくれる分しかないこと。今のところそれは大きくなく、ほとんどコミュニティの中にとどまっています。[10]（3つのコードはどれも{オープンソースの一覧|/open-source/}に載っています）"
          ],
          [
            "h",
            "結論：パイプを作ろう"
          ],
          [
            "o",
            "ユニバーサルハイインカムは予測であって、政策ではありません。当たる予測かもしれません。でもおもしろいのは「ハイ」という言葉のほうではなく、賃金をなくした人にAIの利益を届けるパイプのほうです。税金、株式基金、ウィンドフォールの約束、資源の配当、自分で発行する通貨。どれもパイプの候補で、どれにも知られた漏れ方があります。"
          ],
          [
            "o",
            "{前のエッセイ|/essays/ai-agent-basic-income/}で私たちは、AIエージェントに必要なのはベーシックインカムではなく運転資金だと書きました。二つを合わせると、絵はシンプルです。エージェントには予算を、人間には配当を。そしてその間をつなぐパイプは、誰かが作らなければなりません。それまでは「高い所得」の約束も、このサイトがあらゆるタダ飯を扱うのと同じように扱ってください。まず、誰が払っているのかを確かめること。"
          ]
        ],
        "zh": [
          [
            "p",
            "2023 年 11 月，在英国 AI 安全峰会闭幕时与时任首相苏纳克对谈，埃隆·马斯克说“总有一天，不再需要任何工作”，接着又说：“我们不会有全民基本收入，我们会有全民高收入。”[1] 半年后，他通过视频连线在巴黎 VivaTech 大会上讲得更进一步：“很可能我们谁都不会有工作。”AI 和机器人会提供人们想要的商品和服务，“商品和服务不会短缺”，而要让这一切成立，就需要“全民高收入”。CNN 指出，他没有说明那会是什么样子。[2]"
          ],
          [
            "p",
            "就公开记录而言，这就是提案的全部：一个关于富足的预测，加上一个名字。这篇随笔要追问这个名字跳过的问题：如果机器人把活干了，这份高收入由谁来付，又经由什么管道送到人手里？"
          ],
          [
            "h",
            "这个说法好在哪里"
          ],
          [
            "o",
            "先说值得肯定的地方。关于 AI 与工作的讨论大多是防守性的：再培训、安全网、被取代后怎么活下去。全民高收入把问题从“如何熬过失业”换成了“如何分享富足”。这是个更好的问题。如果机器真的让商品和服务便宜得多，问题就不再是稀缺，而是分配。基本收入的支持者几十年来一直说，分配是政治选择，不是自然规律。从经营 AI 和机器人公司的人口中听到同样的话，是件有用的事。"
          ],
          [
            "h",
            "缺口在哪里"
          ],
          [
            "o",
            "谁来付钱？富足不会自己分配。在 AI 赚钱的世界里，利润会流向拥有模型、数据中心和机器人的人。要把它送到其他人手里，需要一种机制：税收、分红、公共基金、股权登记。马斯克没有给出任何一种。没有付款人的收入承诺，是预测，不是政策。"
          ],
          [
            "o",
            "并非一切都会变便宜。AI 能降低软件、翻译，或许有一天还有制造的成本。但它对土地几乎无能为力，因为没人能造出更多土地；人们想住的地方的住房也一样。最好的学校、好景观、限量的门票这类“地位性商品”，本来就因稀缺而有价值。而真人的照护，恰恰因为不是机器，反而可能更贵。如果这些价格上涨，而电子产品越来越便宜，人们就可能东西更多，却依然觉得穷。"
          ],
          [
            "o",
            "“高”是相对的。高收入是和别人比出来的。如果每个人都拿到同样丰厚的金额，上面那些稀缺东西的价格就会随之调整，第一年觉得“高”的数额，最终会变成新的底线。真正有用的问题不是“有多高”，而是“能买到多少稀缺的东西”。"
          ],
          [
            "o",
            "做出承诺的人，正是拥有 AI 的人。这不是阴谋论，只是激励结构的样子。当一项技术的所有者说它的好处会惠及所有人时，“怎么惠及”的细节反而更重要。取决于利润持有者善意的那份分成，是一份礼物，而礼物是会停的。"
          ],
          [
            "h",
            "人们真正提出过的管道"
          ],
          [
            "p",
            "有人试过把管道画出来。山姆·阿尔特曼在 2021 年 3 月的文章《Moore’s Law for Everything》中提出“美国股权基金”（American Equity Fund）：对超过一定市值的公司每年按市值的 2.5% 征税，以股份缴纳；对私有土地按价值的 2.5% 征税，以美元缴纳。他估计十年内，美国 2.5 亿成年人每人每年可得约 13,500 美元。[3] 他选土地，是因为土地供给固定，这正是上面说的问题。"
          ],
          [
            "p",
            "2024 年 5 月，阿尔特曼在播客 All-In 上提出“全民基本算力”：每个人都得到“GPT-7 算力的一小份”，可以自己用、转卖或捐出去。他没有说明具体怎么运作。[4]"
          ],
          [
            "p",
            "“横财条款”（Windfall Clause）由牛津大学人类未来研究所 AI 治理中心的研究者在 2020 年提出：AI 公司事先承诺，如果获得只有变革性 AI 突破才能带来的超额利润，就把其中相当大的一部分捐出去。[5]"
          ],
          [
            "p",
            "也有正在运作的先例。自 1982 年起，阿拉斯加州每年从永久基金向居民发放分红，这个基金把该州的石油和矿产财富变成可持续的金融资源；第一次每人 1,000 美元。[6]（{见我们的年表|/timeline/#tl-alaska}）把“石油”换成“AI 利润”，就是高收入最清晰的现实模板。关于发钱会带来什么，也有证据。OpenResearch 的研究给 1,000 人每月 1,000 美元，连续三年。2024 年的结果显示，受助者支出增加，每周工作时间减少一到两小时，工作质量没有改善。[7]（{年表条目|/timeline/#tl-openresearch}）"
          ],
          [
            "h",
            "加密 UBI 怎样回答“谁来付”"
          ],
          [
            "p",
            "本站收录的应用不得不在小规模上真正回答这个问题。它们给出了三种不同的答案。"
          ],
          [
            "p",
            "World 发的是新发行的代币。WLD 在 2023 年推出时，100 亿总供应量的 75% 被划给社区，经 Orb 验证为真人的用户定期收到 WLD 空投；人格证明防止一个人领走一千份。[8] 这不是谁的利润在买单：领到的东西值多少，取决于市场愿意为 WLD 付多少。新的空投周期已于 2026 年 6 月 1 日停止（{见墓地|/graveyard/#grave-wld-airdrop}）。"
          ],
          [
            "p",
            "{GoodDollar|/services/gooddollar/} 每天发放的 G$ 来自一个由质押收益注资的储备金，也就是支持者锁定的加密资产所产生的收益。这更接近真正的管道：资本产生回报，回报变成分红。它也显示了风险：2026 年 5 月发生安全事件后，储备金正在审查中，每日金额也非常少。[9]"
          ],
          [
            "p",
            "{Circles|/services/circles/} 和 {Ğ1|/services/g1/} 干脆取消了付款人。每位成员自己发行新货币：Circles 每小时 1 CRC，Ğ1 每天一份“全民红利”。创造货币本身就是分红，所以通常意义上没有人“付钱”，只是每个人都被平等地稀释一点点。问题在于，这种钱只值别人愿意接受它的那么多，而目前这并不多，且大多局限在社区内部。[10]（三者的代码都在我们的{开源页面|/open-source/}上）"
          ],
          [
            "h",
            "结论：把管道建起来"
          ],
          [
            "o",
            "全民高收入是预测，不是政策。它甚至可能是个准确的预测。但有意思的不是“高”这个字，而是那条把 AI 利润送到不再有工资的人手里的管道。税收、股权基金、横财承诺、资源分红、自行发行的货币，都是候选管道，而每一种都有已知的漏法。"
          ],
          [
            "o",
            "在{上一篇随笔|/essays/ai-agent-basic-income/}里，我们认为 AI 智能体需要的是运营预算，而不是基本收入。把两篇放在一起，图景很简单：智能体拿预算，人类拿分红，中间的管道总得有人来建。在那之前，对待任何高收入的承诺，都请像本站对待每一顿免费午餐那样：先看清是谁在付钱。"
          ]
        ],
        "hi": [
          [
            "p",
            "नवंबर 2023 में, ब्रिटेन के AI सेफ़्टी समिट के समापन पर तत्कालीन प्रधानमंत्री ऋषि सुनक से बातचीत में एलन मस्क ने कहा कि “एक समय आएगा जब किसी नौकरी की ज़रूरत नहीं होगी”, और जोड़ा: “हमारे पास यूनिवर्सल बेसिक इनकम नहीं, यूनिवर्सल हाई इनकम होगी।”[1] छह महीने बाद, पेरिस के VivaTech में वीडियो के ज़रिए बोलते हुए वे और आगे गए: “शायद हम में से किसी के पास नौकरी नहीं होगी।” AI और रोबोट लोगों की चाही हर चीज़ और सेवा देंगे, “चीज़ों या सेवाओं की कोई कमी नहीं होगी”, और इसे चलाने के लिए “यूनिवर्सल हाई इनकम” चाहिए होगी। CNN ने लिखा कि उन्होंने यह नहीं बताया कि वह कैसी दिखेगी।[2]"
          ],
          [
            "p",
            "सार्वजनिक रिकॉर्ड जहाँ तक जाता है, पूरा प्रस्ताव इतना ही है: समृद्धि का एक अनुमान, और एक नाम। यह निबंध वह सवाल पूछता है जिसे यह नाम छोड़ देता है। अगर काम रोबोट करेंगे, तो यह ऊँची आय कौन देगा, और किस पाइप से लोगों तक पहुँचेगी?"
          ],
          [
            "h",
            "इस सोच में क्या अच्छा है"
          ],
          [
            "o",
            "पहले तारीफ़ जहाँ बनती है। AI और नौकरियों की ज़्यादातर बातें बचाव की होती हैं: दोबारा ट्रेनिंग, सुरक्षा जाल, बदल दिए जाने के बाद कैसे टिकें। यूनिवर्सल हाई इनकम सवाल को “नौकरी जाने से कैसे बचें?” से बदलकर “समृद्धि कैसे बाँटें?” कर देती है। यह बेहतर सवाल है। अगर मशीनें सचमुच चीज़ें और सेवाएँ बहुत सस्ती कर दें, तो समस्या कमी की नहीं, बँटवारे की हो जाती है। बेसिक इनकम के समर्थक दशकों से कहते आए हैं कि बँटवारा प्रकृति का नियम नहीं, राजनीतिक चुनाव है। यही बात AI और रोबोटिक्स कंपनियाँ चलाने वाले किसी व्यक्ति से सुनना काम का है।"
          ],
          [
            "h",
            "कमियाँ"
          ],
          [
            "o",
            "पैसा कौन देगा? समृद्धि अपने आप नहीं बँटती। जिस दुनिया में AI कमाता है, वहाँ मुनाफ़ा उनके पास जाता है जिनके पास मॉडल, डेटा सेंटर और रोबोट हैं। उसे बाक़ी सब तक पहुँचाने के लिए एक तंत्र चाहिए: टैक्स, डिविडेंड, सार्वजनिक फ़ंड, शेयरों का रजिस्टर। मस्क ने ऐसा कोई तंत्र नहीं बताया। बिना देने वाले के आय का वादा एक अनुमान है, नीति नहीं।"
          ],
          [
            "o",
            "हर चीज़ सस्ती नहीं होती। AI सॉफ़्टवेयर, अनुवाद और शायद किसी दिन उत्पादन की लागत घटा सकता है। पर ज़मीन के लिए वह कम ही कर सकता है, जिसे कोई और नहीं बना रहा, और न ही उन जगहों के घरों के लिए जहाँ लोग रहना चाहते हैं। सबसे अच्छा स्कूल, अच्छा नज़ारा या गिने-चुने टिकट जैसी “पोज़ीशनल” चीज़ें परिभाषा से ही दुर्लभ हैं। और असली इंसान की देखभाल शायद और क़ीमती हो जाए, ठीक इसलिए कि वह मशीन नहीं है। अगर इनकी क़ीमतें बढ़ें और गैजेट सस्ते हों, तो लोग सामान में अमीर होकर भी ग़रीब महसूस कर सकते हैं।"
          ],
          [
            "o",
            "“हाई” सापेक्ष है। ऊँची आय किसी की तुलना में ऊँची होती है। अगर सबको एक जैसी उदार रक़म मिले, तो ऊपर बताई दुर्लभ चीज़ों की क़ीमतें उसके हिसाब से ढल जाती हैं, और पहले साल जो ऊँचा लगता है वह नई न्यूनतम रेखा बन जाता है। काम का सवाल “कितनी ऊँची?” नहीं, बल्कि “इससे दुर्लभ चीज़ें कितनी ख़रीदी जा सकती हैं?” है।"
          ],
          [
            "o",
            "वादा करने वालों के पास ही AI है। यह कोई साज़िश नहीं, बस प्रोत्साहन की बनावट है। जब किसी तकनीक के मालिक कहते हैं कि उसका फ़ायदा सब तक पहुँचेगा, तो “कैसे” का ब्योरा और ज़्यादा मायने रखता है। मुनाफ़ा रखने वालों की सद्भावना पर टिका हिस्सा एक तोहफ़ा है, और तोहफ़े रुक सकते हैं।"
          ],
          [
            "h",
            "लोगों ने असल में कौन-से पाइप सुझाए हैं"
          ],
          [
            "p",
            "कुछ लोगों ने पाइप का नक्शा बनाने की कोशिश की है। मार्च 2021 के “Moore’s Law for Everything” में सैम ऑल्टमैन ने अमेरिकन इक्विटी फ़ंड का प्रस्ताव रखा: बड़ी कंपनियों पर हर साल उनके बाज़ार मूल्य का 2.5% टैक्स, शेयरों में चुकाया जाए, और निजी ज़मीन के मूल्य का 2.5%, डॉलर में। उनका अनुमान था कि एक दशक में अमेरिका के 25 करोड़ वयस्कों में हर एक को साल में लगभग 13,500 डॉलर मिलेंगे।[3] उन्होंने ज़मीन इसलिए चुनी क्योंकि उसकी आपूर्ति तय है, जो ठीक ऊपर वाली समस्या है।"
          ],
          [
            "p",
            "मई 2024 में All-In पॉडकास्ट पर ऑल्टमैन ने “यूनिवर्सल बेसिक कंप्यूट” का विचार रखा: हर किसी को “GPT-7 के कंप्यूट का एक टुकड़ा” मिले, जिसे वह इस्तेमाल करे, बेचे या दान करे। उन्होंने नहीं बताया कि यह कैसे काम करेगा।[4]"
          ],
          [
            "p",
            "विंडफ़ॉल क्लॉज़, जिसे ऑक्सफ़ोर्ड के फ़्यूचर ऑफ़ ह्यूमैनिटी इंस्टीट्यूट के सेंटर फ़ॉर द गवर्नेंस ऑफ़ AI के शोधकर्ताओं ने 2020 में रखा, कहता है कि AI कंपनियाँ पहले से वादा करें कि केवल किसी क्रांतिकारी AI सफलता से होने वाले बेहद बड़े मुनाफ़े का एक बड़ा हिस्सा वे दान करेंगी।[5]"
          ],
          [
            "p",
            "एक चलती हुई मिसाल भी है। 1982 से अलास्का अपने परमानेंट फ़ंड से निवासियों को सालाना डिविडेंड देता है; यह फ़ंड राज्य की तेल और खनिज संपदा को स्थायी वित्तीय संसाधन में बदलता है। पहला भुगतान प्रति व्यक्ति 1,000 डॉलर था।[6] ({हमारी समयरेखा देखें|/timeline/#tl-alaska}) “तेल” की जगह “AI मुनाफ़ा” रख दें, तो ऊँची आय का सबसे साफ़ असली नमूना मिल जाता है। नक़द देने के असर पर सबूत भी है। OpenResearch अध्ययन ने 1,000 लोगों को तीन साल तक हर महीने 1,000 डॉलर दिए। 2024 के नतीजों में पाने वालों ने ज़्यादा ख़र्च किया, हफ़्ते में एक-दो घंटे कम काम किया, और नौकरी की गुणवत्ता में सुधार नहीं दिखा।[7] ({समयरेखा की प्रविष्टि|/timeline/#tl-openresearch})"
          ],
          [
            "h",
            "क्रिप्टो UBI “कौन देगा” का जवाब कैसे देते हैं"
          ],
          [
            "p",
            "इस साइट के ऐप्स को छोटे पैमाने पर इस सवाल का असली जवाब देना पड़ा है। वे इसे तीन अलग तरीक़ों से देते हैं।"
          ],
          [
            "p",
            "World ने नए जारी किए टोकन बाँटे। 2023 में WLD के लॉन्च पर उसकी 10 अरब की आपूर्ति का 75% कम्युनिटी के लिए रखा गया, और Orb से इंसान के रूप में सत्यापित लोगों को नियमित WLD एयरड्रॉप मिले; व्यक्ति होने के सबूत ने एक व्यक्ति को हज़ार हिस्से लेने से रोका।[8] इसका भुगतान किसी के मुनाफ़े से नहीं हुआ: पाने वालों को जो मिला उसकी क़ीमत उतनी ही थी जितनी बाज़ार WLD के लिए देता। नए एयरड्रॉप चक्र 1 जून 2026 को बंद हो गए ({क़ब्रिस्तान देखें|/graveyard/#grave-wld-airdrop})।"
          ],
          [
            "p",
            "{GoodDollar|/services/gooddollar/} रोज़ का G$ एक ऐसे रिज़र्व से देता है जो स्टेकिंग की कमाई से भरता है, यानी समर्थकों के लॉक किए क्रिप्टो पर मिलने वाला रिटर्न। यह असली पाइप के ज़्यादा क़रीब है: पूँजी रिटर्न कमाती है और रिटर्न डिविडेंड बनता है। इससे जोखिम भी दिखता है। मई 2026 की एक सुरक्षा घटना के बाद रिज़र्व की समीक्षा चल रही है, और रोज़ की रक़म बहुत कम है।[9]"
          ],
          [
            "p",
            "{Circles|/services/circles/} और {Ğ1|/services/g1/} देने वाले को ही हटा देते हैं। हर सदस्य अपने लिए नई मुद्रा जारी करता है: Circles में हर घंटे 1 CRC, Ğ1 में रोज़ एक यूनिवर्सल डिविडेंड। पैसा बनाना ही डिविडेंड है, इसलिए आम अर्थ में कोई “देता” नहीं; सब थोड़ा-थोड़ा, बराबर पतला होते हैं। दिक़्क़त यह है कि उस पैसे की क़ीमत उतनी ही है जितने में दूसरे उसे स्वीकार करें, जो आज ज़्यादा नहीं है और ज़्यादातर समुदाय के भीतर है।[10] (तीनों का कोड हमारे {ओपन-सोर्स पेज|/open-source/} पर है।)"
          ],
          [
            "h",
            "निष्कर्ष: पाइप बनाइए"
          ],
          [
            "o",
            "यूनिवर्सल हाई इनकम एक अनुमान है, नीति नहीं। हो सकता है अनुमान सही भी हो। पर दिलचस्प हिस्सा “हाई” शब्द नहीं, बल्कि वह पाइप है जो AI का मुनाफ़ा उन लोगों तक ले जाए जिनके पास अब तनख़्वाह नहीं। टैक्स, इक्विटी फ़ंड, विंडफ़ॉल के वादे, संसाधनों के डिविडेंड और ख़ुद जारी की गई मुद्राएँ, सब पाइप के उम्मीदवार हैं, और हर एक के रिसने का एक जाना-पहचाना तरीक़ा है।"
          ],
          [
            "o",
            "अपने {पिछले निबंध|/essays/ai-agent-basic-income/} में हमने कहा था कि AI एजेंटों को बेसिक इनकम नहीं, संचालन बजट चाहिए। दोनों को साथ रखें तो तस्वीर सीधी है: एजेंटों को बजट, इंसानों को डिविडेंड, और बीच का पाइप किसी को बनाना होगा। जब तक कोई नहीं बनाता, ऊँची आय के हर वादे को वैसे ही परखिए जैसे यह साइट हर मुफ़्त लंच को परखती है: देखिए कि पैसा कौन दे रहा है।"
          ]
        ],
        "es": [
          [
            "p",
            "En noviembre de 2023, al cierre de la cumbre británica sobre seguridad de la IA y en conversación con Rishi Sunak, Elon Musk dijo que «llegará un momento en que no hará falta ningún empleo» y añadió: «No tendremos una renta básica universal, tendremos un ingreso universal alto».[1] Seis meses después, por videoconferencia en VivaTech, en París, fue más lejos: «Probablemente ninguno de nosotros tendrá trabajo». La IA y los robots darían los bienes y servicios que la gente quiera, «no habría escasez de bienes o servicios» y, para que funcionara, haría falta un «ingreso universal alto». La CNN señaló que no explicó cómo sería.[2]"
          ],
          [
            "p",
            "Hasta donde llega el registro público, esa es toda la propuesta: un pronóstico de abundancia y un nombre. Este ensayo plantea la pregunta que el nombre se salta. Si los robots hacen el trabajo, ¿quién paga ese ingreso alto, y por qué tubería llega a la gente?"
          ],
          [
            "h",
            "Lo que el planteamiento acierta"
          ],
          [
            "o",
            "Reconozcamos el mérito. Casi todo lo que se dice sobre la IA y el empleo es defensivo: reciclaje profesional, redes de seguridad, cómo sobrevivir a que te sustituyan. El ingreso universal alto cambia la pregunta de «¿cómo sobrevivimos a perder el empleo?» a «¿cómo repartimos la abundancia?». Es una pregunta mejor. Si las máquinas abaratan de verdad los bienes y servicios, el problema deja de ser la escasez y pasa a ser el reparto. Los defensores de la renta básica llevan décadas diciendo que el reparto es una decisión política, no una ley natural. Es útil oírlo de alguien que dirige empresas de IA y robótica."
          ],
          [
            "h",
            "Los huecos"
          ],
          [
            "o",
            "¿Quién paga? La abundancia no se reparte sola. En un mundo donde la IA gana el dinero, los beneficios van a parar a quien posee los modelos, los centros de datos y los robots. Llevarlos a todos los demás exige un mecanismo: un impuesto, un dividendo, un fondo público, un registro de participaciones. Musk no ha nombrado ninguno. Una promesa de ingresos sin pagador es un pronóstico, no una política."
          ],
          [
            "o",
            "No todo se abarata. La IA puede reducir el coste del software, la traducción y quizá, algún día, la fabricación. Hace poco por el suelo, que nadie fabrica, o por la vivienda donde la gente quiere vivir. Los bienes posicionales, como el mejor colegio, las vistas o la entrada escasa, son escasos por definición. Y el cuidado de un ser humano de verdad puede volverse más valioso, no menos, justamente porque es lo que las máquinas no son. Si esos precios suben mientras los aparatos se abaratan, la gente puede tener más cosas y seguir sintiéndose pobre."
          ],
          [
            "o",
            "«Alto» es relativo. Un ingreso alto es alto en comparación con alguien. Si todos reciben la misma cantidad generosa, los precios de esas cosas escasas se ajustan a ella, y lo que parece alto el primer año se convierte en el nuevo mínimo. La pregunta útil no es «¿cuánto de alto?», sino «¿cuánto de lo escaso permite comprar?»."
          ],
          [
            "o",
            "Quienes lo prometen son los dueños de la IA. No es una conspiración, solo la forma del incentivo. Cuando los dueños de una tecnología dicen que sus beneficios llegarán a todos, los detalles de cómo importan más, no menos. Una parte de los beneficios que depende de la buena voluntad de quienes los tienen es un regalo, y los regalos pueden acabarse."
          ],
          [
            "h",
            "Tuberías que alguien ha propuesto de verdad"
          ],
          [
            "p",
            "Hay quien ha intentado dibujar la tubería. En «Moore’s Law for Everything» (marzo de 2021), Sam Altman propuso un American Equity Fund, alimentado con un impuesto anual del 2,5 % del valor de mercado de las grandes empresas, pagado en acciones, y del 2,5 % del valor del suelo privado, pagado en dólares. Calculó que en una década cada uno de los 250 millones de adultos de EE. UU. recibiría unos 13 500 dólares al año.[3] Eligió el suelo porque su oferta es fija, que es justo el problema de arriba."
          ],
          [
            "p",
            "En mayo de 2024, en el pódcast All-In, Altman lanzó la idea de un «cómputo básico universal»: que cada persona reciba «un trozo del cómputo de GPT-7» para usarlo, revenderlo o donarlo. No explicó cómo funcionaría.[4]"
          ],
          [
            "p",
            "La Windfall Clause, de investigadores del Centre for the Governance of AI del Future of Humanity Institute de Oxford (2020), propone que las empresas de IA se comprometan de antemano a donar una parte importante de cualquier beneficio extraordinario que solo un avance transformador de la IA pudiera generar.[5]"
          ],
          [
            "p",
            "También hay un precedente que funciona. Desde 1982, Alaska paga a sus residentes un dividendo anual de su Permanent Fund, que convierte la riqueza petrolera y minera del estado en un recurso financiero duradero; el primer pago fue de 1000 dólares por persona.[6] ({Véase nuestra cronología|/timeline/#tl-alaska}.) Cambia «petróleo» por «beneficios de la IA» y tienes la plantilla real más limpia para un ingreso alto. También hay datos sobre lo que hace el dinero en efectivo. El estudio de OpenResearch dio a 1000 personas 1000 dólares al mes durante tres años. Sus resultados de 2024 mostraron que los receptores gastaron más y trabajaron entre una y dos horas menos a la semana, sin mejora en la calidad del empleo.[7] ({Entrada de la cronología|/timeline/#tl-openresearch}.)"
          ],
          [
            "h",
            "Cómo responde la RBU cripto a «quién paga»"
          ],
          [
            "p",
            "Las apps de este sitio han tenido que responder la pregunta de verdad, a pequeña escala. Y la responden de tres maneras distintas."
          ],
          [
            "p",
            "World repartía tokens recién emitidos. Cuando WLD se lanzó en 2023, el 75 % de su oferta de 10 000 millones se reservó para la comunidad, y las personas verificadas como humanas con el Orb recibían airdrops periódicos de WLD; la prueba de persona impedía que alguien cobrara mil partes.[8] No lo pagaban los beneficios de nadie: lo recibido valía lo que el mercado pagara por WLD. Los nuevos ciclos de airdrop se detuvieron el 1 de junio de 2026 ({véase el cementerio|/graveyard/#grave-wld-airdrop})."
          ],
          [
            "p",
            "{GoodDollar|/services/gooddollar/} paga su G$ diario desde una reserva financiada con rendimientos de staking, el retorno de las criptomonedas que bloquean sus partidarios. Eso se parece más a una tubería real: el capital rinde y el rendimiento se convierte en dividendo. También muestra el riesgo. Tras un incidente de seguridad en mayo de 2026, la reserva está en revisión, y la cantidad diaria es muy pequeña.[9]"
          ],
          [
            "p",
            "{Circles|/services/circles/} y {Ğ1|/services/g1/} eliminan al pagador por completo. Cada miembro emite moneda nueva para sí mismo: 1 CRC por hora en Circles, un Dividendo Universal diario en Ğ1. Crear dinero es el dividendo, así que nadie «paga» en el sentido habitual; todos se diluyen un poco, por igual. La pega es que ese dinero vale solo lo que otros acepten por él, que hoy no es mucho y casi siempre dentro de la comunidad.[10] (El código de los tres está en nuestra {página de código abierto|/open-source/}.)"
          ],
          [
            "h",
            "Conclusión: construir la tubería"
          ],
          [
            "o",
            "El ingreso universal alto es un pronóstico, no una política. Puede que incluso sea un buen pronóstico. Pero lo interesante no es la palabra «alto», sino la tubería que llevaría los beneficios de la IA a gente que ya no cobra salario. Impuestos, fondos de acciones, compromisos sobre beneficios extraordinarios, dividendos de recursos y monedas autoemitidas son tuberías candidatas, y cada una tiene una forma conocida de gotear."
          ],
          [
            "o",
            "En nuestro {ensayo anterior|/essays/ai-agent-basic-income/} defendimos que los agentes de IA necesitan presupuestos operativos, no una renta básica. Junta las dos ideas y el cuadro es sencillo: los agentes reciben presupuestos, los humanos reciben dividendos, y alguien tiene que construir la tubería entre ambos. Hasta que alguien lo haga, trata cualquier promesa de ingreso alto como este sitio trata cada almuerzo gratis: comprueba quién paga."
          ]
        ],
        "de": [
          [
            "p",
            "Im November 2023, zum Abschluss des britischen KI-Sicherheitsgipfels im Gespräch mit Rishi Sunak, sagte Elon Musk, „es wird ein Punkt kommen, an dem kein Job mehr nötig ist“, und fügte hinzu: „Wir werden kein universelles Grundeinkommen haben, sondern ein universelles Hocheinkommen.“[1] Ein halbes Jahr später, per Video zugeschaltet auf der VivaTech in Paris, ging er weiter: „Wahrscheinlich wird keiner von uns einen Job haben.“ KI und Roboter würden alle gewünschten Waren und Dienstleistungen liefern, es gäbe „keinen Mangel an Waren oder Dienstleistungen“, und damit das funktioniere, brauche es ein „universelles Hocheinkommen“. CNN merkte an, dass er nicht sagte, wie das aussehen solle.[2]"
          ],
          [
            "p",
            "Soweit die öffentlichen Quellen reichen, ist das der ganze Vorschlag: eine Prognose des Überflusses und ein Name. Dieser Essay stellt die Frage, die der Name überspringt. Wenn die Roboter die Arbeit machen, wer zahlt das hohe Einkommen, und durch welche Leitung kommt es bei den Menschen an?"
          ],
          [
            "h",
            "Was an dieser Sichtweise stimmt"
          ],
          [
            "o",
            "Ehre, wem Ehre gebührt. Das meiste Reden über KI und Arbeit ist defensiv: Umschulung, Sicherheitsnetze, wie man es übersteht, ersetzt zu werden. Das universelle Hocheinkommen dreht die Frage um, von „Wie überstehen wir den Jobverlust?“ zu „Wie teilen wir den Überfluss?“. Das ist die bessere Frage. Wenn Maschinen Waren und Dienstleistungen wirklich viel billiger machen, ist das Problem nicht mehr Knappheit, sondern Verteilung. Befürworter des Grundeinkommens sagen seit Jahrzehnten, dass Verteilung eine politische Entscheidung ist und kein Naturgesetz. Es ist nützlich, das von jemandem zu hören, der KI- und Robotikfirmen leitet."
          ],
          [
            "h",
            "Die Lücken"
          ],
          [
            "o",
            "Wer zahlt? Überfluss verteilt sich nicht von selbst. In einer Welt, in der KI das Geld verdient, landen die Gewinne bei denen, denen die Modelle, Rechenzentren und Roboter gehören. Um sie zu allen anderen zu bringen, braucht es einen Mechanismus: eine Steuer, eine Dividende, einen öffentlichen Fonds, ein Anteilsregister. Musk hat keinen genannt. Ein Einkommensversprechen ohne Zahler ist eine Prognose, keine Politik."
          ],
          [
            "o",
            "Nicht alles wird billiger. KI kann die Kosten für Software, Übersetzung und vielleicht eines Tages für Fertigung senken. Für Boden, von dem niemand mehr herstellt, tut sie wenig, ebenso für Wohnraum dort, wo Menschen leben wollen. Positionsgüter wie die beste Schule, die Aussicht oder das knappe Ticket sind per Definition knapp. Und die Fürsorge eines echten Menschen könnte wertvoller werden statt billiger, gerade weil sie das ist, was Maschinen nicht sind. Steigen diese Preise, während Geräte billig werden, können Menschen reicher an Dingen sein und sich trotzdem arm fühlen."
          ],
          [
            "o",
            "„Hoch“ ist relativ. Ein hohes Einkommen ist hoch im Vergleich zu jemandem. Bekommen alle denselben großzügigen Betrag, passen sich die Preise der knappen Dinge daran an, und was im ersten Jahr hoch wirkt, wird zum neuen Boden. Die nützliche Frage lautet nicht „Wie hoch?“, sondern „Wie viel vom Knappen kann man damit kaufen?“."
          ],
          [
            "o",
            "Die, die es versprechen, besitzen die KI. Das ist keine Verschwörung, nur die Form des Anreizes. Wenn die Eigentümer einer Technik sagen, ihr Nutzen werde alle erreichen, zählen die Details des Wie mehr, nicht weniger. Ein Anteil am Gewinn, der vom guten Willen derer abhängt, die ihn halten, ist ein Geschenk, und Geschenke können aufhören."
          ],
          [
            "h",
            "Leitungen, die tatsächlich vorgeschlagen wurden"
          ],
          [
            "p",
            "Manche haben versucht, die Leitung zu zeichnen. In „Moore’s Law for Everything“ (März 2021) schlug Sam Altman einen American Equity Fund vor, gespeist aus einer jährlichen Steuer von 2,5 % auf den Marktwert großer Unternehmen, zahlbar in Aktien, und von 2,5 % auf den Wert privaten Bodens, zahlbar in Dollar. Er schätzte, dass innerhalb eines Jahrzehnts jeder der 250 Millionen Erwachsenen in den USA etwa 13.500 Dollar im Jahr bekäme.[3] Boden wählte er, weil sein Angebot fest ist, also genau das Problem von oben."
          ],
          [
            "p",
            "Im Mai 2024 brachte Altman im Podcast All-In „universal basic compute“ ins Spiel: Jeder bekommt „ein Stück der Rechenleistung von GPT-7“, um es zu nutzen, weiterzuverkaufen oder zu spenden. Wie das funktionieren soll, sagte er nicht.[4]"
          ],
          [
            "p",
            "Die Windfall Clause von Forschenden des Centre for the Governance of AI am Future of Humanity Institute in Oxford (2020) schlägt vor, dass KI-Firmen sich vorab verpflichten, einen erheblichen Teil extrem hoher Gewinne zu spenden, die nur ein transformativer KI-Durchbruch ermöglichen würde.[5]"
          ],
          [
            "p",
            "Es gibt auch ein funktionierendes Vorbild. Seit 1982 zahlt Alaska seinen Einwohnern eine jährliche Dividende aus dem Permanent Fund, der den Öl- und Rohstoffreichtum des Staates in eine dauerhafte Finanzquelle verwandelt; die erste Zahlung betrug 1.000 Dollar pro Kopf.[6] ({Siehe unsere Zeitleiste|/timeline/#tl-alaska}.) Ersetze „Öl“ durch „KI-Gewinne“, und du hast die sauberste reale Vorlage für ein hohes Einkommen. Auch dazu, was Bargeld bewirkt, gibt es Daten. Die OpenResearch-Studie gab 1.000 Menschen drei Jahre lang 1.000 Dollar im Monat. Die Ergebnisse von 2024 zeigten, dass die Empfänger mehr ausgaben und ein bis zwei Stunden pro Woche weniger arbeiteten, ohne bessere Jobqualität.[7] ({Eintrag in der Zeitleiste|/timeline/#tl-openresearch}.)"
          ],
          [
            "h",
            "Wie Krypto-Grundeinkommen „Wer zahlt?“ beantwortet"
          ],
          [
            "p",
            "Die Apps auf dieser Seite mussten die Frage im Kleinen wirklich beantworten. Sie tun es auf drei verschiedene Arten."
          ],
          [
            "p",
            "World verteilte neu ausgegebene Token. Beim Start von WLD 2023 waren 75 % des Angebots von 10 Milliarden für die Community vorgesehen, und Menschen, die per Orb als Mensch verifiziert waren, bekamen regelmäßig WLD-Airdrops; der Personennachweis verhinderte, dass eine Person tausend Anteile abholt.[8] Bezahlt hat das niemandes Gewinn: Was die Empfänger bekamen, war so viel wert, wie der Markt für WLD zahlte. Neue Airdrop-Zyklen endeten am 1. Juni 2026 ({siehe Friedhof|/graveyard/#grave-wld-airdrop})."
          ],
          [
            "p",
            "{GoodDollar|/services/gooddollar/} zahlt sein tägliches G$ aus einer Reserve, die aus Staking-Erträgen gespeist wird, also aus der Rendite von Krypto, das Unterstützer sperren. Das kommt einer echten Leitung näher: Kapital erwirtschaftet eine Rendite, und die Rendite wird zur Dividende. Es zeigt auch das Risiko. Nach einem Sicherheitsvorfall im Mai 2026 wird die Reserve überprüft, und der Tagesbetrag ist sehr klein.[9]"
          ],
          [
            "p",
            "{Circles|/services/circles/} und {Ğ1|/services/g1/} schaffen den Zahler ganz ab. Jedes Mitglied gibt neues Geld für sich selbst aus: 1 CRC pro Stunde bei Circles, eine tägliche Universelle Dividende bei Ğ1. Geldschöpfung ist die Dividende, also „zahlt“ niemand im üblichen Sinn; alle werden ein wenig verwässert, gleichmäßig. Der Haken: Das Geld ist nur so viel wert, wie andere dafür annehmen, und das ist heute nicht viel und meist innerhalb der Gemeinschaft.[10] (Der Code aller drei steht auf unserer {Open-Source-Seite|/open-source/}.)"
          ],
          [
            "h",
            "Fazit: Baut die Leitung"
          ],
          [
            "o",
            "Das universelle Hocheinkommen ist eine Prognose, keine Politik. Vielleicht sogar eine gute Prognose. Spannend ist aber nicht das Wort „hoch“, sondern die Leitung, die KI-Gewinne zu Menschen bringt, die keinen Lohn mehr verdienen. Steuern, Aktienfonds, Windfall-Zusagen, Rohstoffdividenden und selbst ausgegebene Währungen sind alles mögliche Leitungen, und jede hat eine bekannte Stelle, an der sie leckt."
          ],
          [
            "o",
            "In unserem {vorigen Essay|/essays/ai-agent-basic-income/} haben wir argumentiert, dass KI-Agenten Betriebsbudgets brauchen, kein Grundeinkommen. Nimmt man beides zusammen, ist das Bild einfach: Agenten bekommen Budgets, Menschen bekommen Dividenden, und jemand muss die Leitung dazwischen bauen. Bis das jemand tut, behandle jedes Versprechen eines hohen Einkommens so, wie diese Seite jedes Gratis-Mittagessen behandelt: Prüfe, wer zahlt."
          ]
        ],
        "ar": [
          [
            "p",
            "في نوفمبر 2023، وفي ختام قمة سلامة الذكاء الاصطناعي البريطانية خلال حوار مع ريشي سوناك، قال إيلون ماسك إنه «ستأتي لحظة لا تعود فيها أي وظيفة ضرورية»، وأضاف: «لن يكون لدينا دخل أساسي شامل، بل دخل مرتفع شامل».[1] وبعد ستة أشهر، متحدثًا عبر الفيديو إلى مؤتمر ⁦VivaTech⁩ في باريس، ذهب أبعد: «على الأرجح لن يكون لأيٍّ منا وظيفة». سيوفر الذكاء الاصطناعي والروبوتات ما يريده الناس من سلع وخدمات، و«لن يكون هناك نقص في السلع أو الخدمات»، ولكي ينجح ذلك لا بد من «دخل مرتفع شامل». وأشارت ⁦CNN⁩ إلى أنه لم يوضح كيف سيبدو ذلك.[2]"
          ],
          [
            "p",
            "بقدر ما يكشف السجل العام، هذا هو الاقتراح كله: توقّع بالوفرة، واسم. يطرح هذا المقال السؤال الذي يتخطاه الاسم: إذا قامت الروبوتات بالعمل، فمن يدفع هذا الدخل المرتفع، وعبر أي أنبوب يصل إلى الناس؟"
          ],
          [
            "h",
            "ما يصيب فيه هذا الطرح"
          ],
          [
            "o",
            "لنعترف بالفضل لأهله. معظم الحديث عن الذكاء الاصطناعي والوظائف دفاعي: إعادة التأهيل، وشبكات الأمان، وكيف تنجو بعد أن يحل غيرك محلك. أما الدخل المرتفع الشامل فيقلب السؤال من «كيف ننجو من فقدان الوظائف؟» إلى «كيف نتقاسم الوفرة؟». وهذا سؤال أفضل. فإذا جعلت الآلات السلع والخدمات أرخص بكثير فعلًا، لم تعد المشكلة ندرة بل توزيعًا. ويقول أنصار الدخل الأساسي منذ عقود إن التوزيع خيار سياسي لا قانون طبيعي، ومن المفيد سماع الفكرة نفسها من شخص يدير شركات للذكاء الاصطناعي والروبوتات."
          ],
          [
            "h",
            "الثغرات"
          ],
          [
            "o",
            "من يدفع؟ الوفرة لا توزّع نفسها. في عالم يكسب فيه الذكاء الاصطناعي المال، تذهب الأرباح إلى من يملك النماذج ومراكز البيانات والروبوتات. وإيصالها إلى الجميع يتطلب آلية: ضريبة، أو عائدًا، أو صندوقًا عامًا، أو سجلًا للحصص. ولم يسمِّ ماسك أيًّا منها. ووعدٌ بدخل بلا دافع هو توقّع، لا سياسة."
          ],
          [
            "o",
            "ليس كل شيء سيصبح أرخص. قد يخفّض الذكاء الاصطناعي تكلفة البرمجيات والترجمة، وربما يومًا ما التصنيع. لكنه لا يفعل الكثير للأرض، التي لا يصنع أحد منها المزيد، ولا للسكن حيث يريد الناس أن يعيشوا. والسلع الموضعية، مثل أفضل مدرسة أو الإطلالة أو التذكرة النادرة، نادرة بطبيعتها. ورعاية إنسان حقيقي قد تصبح أثمن لا أرخص، لأنها بالضبط ما ليست عليه الآلات. فإذا ارتفعت هذه الأسعار بينما رخصت الأجهزة، فقد يصبح الناس أغنى بالأشياء ويظلون يشعرون بالفقر."
          ],
          [
            "o",
            "«مرتفع» أمر نسبي. الدخل المرتفع مرتفع مقارنةً بأحد ما. فإذا حصل الجميع على المبلغ السخي نفسه، تتكيف أسعار تلك الأشياء النادرة معه، ويصبح ما بدا مرتفعًا في السنة الأولى هو الحد الأدنى الجديد. والسؤال المفيد ليس «إلى أي حد مرتفع؟» بل «كم يشتري من الأشياء النادرة؟»."
          ],
          [
            "o",
            "من يعِدون به هم من يملكون الذكاء الاصطناعي. ليست هذه مؤامرة، بل شكل الحافز فحسب. وحين يقول مالكو تقنية ما إن منافعها ستصل إلى الجميع، تصبح تفاصيل «كيف» أهم لا أقل. فحصة من الأرباح تعتمد على حسن نية من يملكونها هي هدية، والهدايا قد تتوقف."
          ],
          [
            "h",
            "أنابيب اقترحها أحد فعلًا"
          ],
          [
            "p",
            "حاول بعضهم رسم الأنبوب. في مقال «⁦Moore’s Law for Everything⁩» (مارس 2021)، اقترح سام ألتمان «صندوق الأسهم الأمريكي»، يُموَّل بضريبة سنوية قدرها 2.5% من القيمة السوقية للشركات الكبيرة تُدفع أسهمًا، و2.5% من قيمة الأراضي المملوكة ملكية خاصة تُدفع دولارات. وقدّر أنه في غضون عقد سيحصل كل واحد من 250 مليون بالغ في أمريكا على نحو 13,500 دولار سنويًا.[3] واختار الأرض لأن المعروض منها ثابت، وهي المشكلة نفسها التي ذكرناها."
          ],
          [
            "p",
            "في مايو 2024، وفي بودكاست ⁦All-In⁩، طرح ألتمان فكرة «الحوسبة الأساسية الشاملة»: أن يحصل كل شخص على «شريحة من قدرة حوسبة ⁦GPT-7⁩» يستخدمها أو يعيد بيعها أو يتبرع بها. ولم يقل كيف سيعمل ذلك.[4]"
          ],
          [
            "p",
            "أما «بند الأرباح الاستثنائية» (⁦Windfall Clause⁩)، من باحثين في مركز حوكمة الذكاء الاصطناعي التابع لمعهد مستقبل الإنسانية في أكسفورد (2020)، فيقترح أن تلتزم شركات الذكاء الاصطناعي مسبقًا بالتبرع بجزء كبير من أي أرباح هائلة لا يمكن تحقيقها إلا بقفزة تحويلية في الذكاء الاصطناعي.[5]"
          ],
          [
            "p",
            "وهناك أيضًا سابقة تعمل بالفعل. منذ 1982 تدفع ألاسكا لسكانها عائدًا سنويًا من صندوقها الدائم، الذي يحوّل ثروة الولاية من النفط والمعادن إلى مورد مالي دائم؛ وكانت أول دفعة 1,000 دولار للفرد.[6] ({انظر خطنا الزمني|/timeline/#tl-alaska}.) استبدل «النفط» بـ«أرباح الذكاء الاصطناعي» تحصل على أوضح نموذج واقعي لدخل مرتفع. وهناك أيضًا أدلة على ما تفعله النقود. فقد أعطت دراسة ⁦OpenResearch⁩ ألف شخص 1,000 دولار شهريًا لثلاث سنوات، ووجدت نتائجها في 2024 أن المستفيدين أنفقوا أكثر وعملوا ساعة إلى ساعتين أقل أسبوعيًا، دون تحسن في جودة العمل.[7] ({مدخل الخط الزمني|/timeline/#tl-openresearch}.)"
          ],
          [
            "h",
            "كيف تجيب تجارب الدخل الأساسي المشفّرة عن «من يدفع»"
          ],
          [
            "p",
            "اضطرت التطبيقات على هذا الموقع إلى الإجابة عن السؤال فعليًا، على نطاق صغير. وهي تجيب بثلاث طرق مختلفة."
          ],
          [
            "p",
            "وزّعت ⁦World⁩ رموزًا مُصدرة حديثًا. عند إطلاق ⁦WLD⁩ في 2023، خُصص 75% من المعروض البالغ 10 مليارات للمجتمع، وتلقى الأشخاص الذين تحقق ⁦Orb⁩ من أنهم بشر توزيعات ⁦WLD⁩ منتظمة؛ ومنع إثبات الشخصية أن يطالب شخص واحد بألف حصة.[8] لم تدفع أرباح أحد ثمن ذلك: كانت قيمة ما حصل عليه المستفيدون هي ما يدفعه السوق مقابل ⁦WLD⁩. وتوقفت دورات التوزيع الجديدة في 1 يونيو 2026 ({انظر المقبرة|/graveyard/#grave-wld-airdrop})."
          ],
          [
            "p",
            "يدفع {⁦GoodDollar⁩|/services/gooddollar/} رموز ⁦G$⁩ اليومية من احتياطي ممول من عوائد التخزين، أي عائد العملات المشفرة التي يقفلها الداعمون. وهذا أقرب إلى أنبوب حقيقي: رأس المال يدرّ عائدًا، والعائد يصبح حصة توزَّع. لكنه يكشف المخاطرة أيضًا: بعد حادث أمني في مايو 2026 أصبح الاحتياطي قيد المراجعة، والمبلغ اليومي ضئيل جدًا.[9]"
          ],
          [
            "p",
            "أما {⁦Circles⁩|/services/circles/} و{⁦Ğ1⁩|/services/g1/} فيلغيان الدافع كليًا. كل عضو يصدر عملة جديدة لنفسه: ⁦1 CRC⁩ كل ساعة في ⁦Circles⁩، وحصة أرباح شاملة يومية في ⁦Ğ1⁩. خلق النقود هو العائد نفسه، فلا أحد «يدفع» بالمعنى المعتاد؛ الجميع يتعرض لتخفيف بسيط ومتساوٍ. والعقبة أن هذه النقود لا تساوي إلا ما يقبله الآخرون مقابلها، وهو اليوم ليس كثيرًا، ومعظمه داخل المجتمع.[10] (شيفرة الثلاثة موجودة في {صفحة المشاريع المفتوحة المصدر|/open-source/}.)"
          ],
          [
            "h",
            "الخلاصة: ابنوا الأنبوب"
          ],
          [
            "o",
            "الدخل المرتفع الشامل توقّع، لا سياسة. وقد يكون توقعًا صائبًا. لكن الجزء المثير ليس كلمة «مرتفع»، بل الأنبوب الذي سيحمل أرباح الذكاء الاصطناعي إلى أناس لم يعودوا يتقاضون أجورًا. الضرائب وصناديق الأسهم وتعهدات الأرباح الاستثنائية وعوائد الموارد والعملات ذاتية الإصدار كلها أنابيب مرشحة، ولكل منها طريقة معروفة للتسرب."
          ],
          [
            "o",
            "في {مقالنا السابق|/essays/ai-agent-basic-income/} قلنا إن وكلاء الذكاء الاصطناعي يحتاجون إلى ميزانيات تشغيل، لا إلى دخل أساسي. ضع الفكرتين معًا وتصبح الصورة بسيطة: الوكلاء يحصلون على ميزانيات، والبشر يحصلون على عوائد، وعلى أحدٍ ما أن يبني الأنبوب بينهما. وإلى أن يفعل أحد ذلك، تعامل مع أي وعد بدخل مرتفع كما يتعامل هذا الموقع مع كل غداء مجاني: تحقّق ممن يدفع."
          ]
        ]
      },
      "sources": [
        {
          "n": 1,
          "label": "The National — Elon Musk warns of a future where “no job is needed” in conversation with Rishi Sunak (2 Nov 2023)",
          "url": "https://www.thenationalnews.com/world/uk-news/2023/11/02/elon-musk-warns-of-a-future-where-no-job-is-needed-in-conversation-with-rishi-sunak/"
        },
        {
          "n": 2,
          "label": "CNN — Elon Musk says AI will take all our jobs (VivaTech 2024, 23 May 2024)",
          "url": "https://www.cnn.com/2024/05/23/tech/elon-musk-ai-your-job/index.html"
        },
        {
          "n": 3,
          "label": "Sam Altman — Moore’s Law for Everything (16 Mar 2021)",
          "url": "https://moores.samaltman.com/"
        },
        {
          "n": 4,
          "label": "Business Insider — Sam Altman’s “universal basic compute” on the All-In podcast (12 May 2024)",
          "url": "https://www.businessinsider.com/openai-sam-altman-universal-basic-income-idea-compute-gpt-7-2024-5"
        },
        {
          "n": 5,
          "label": "O’Keefe et al. — The Windfall Clause: Distributing the Benefits of AI for the Common Good (Centre for the Governance of AI, FHI, 2020)",
          "url": "https://arxiv.org/abs/1912.11595"
        },
        {
          "n": 6,
          "label": "Alaska Permanent Fund Dividend Division — Historical Timeline; Alaska Permanent Fund Corporation",
          "url": "https://pfd.alaska.gov/Division-Info/Historical-Timeline",
          "url2": "https://apfc.org/who-we-are/"
        },
        {
          "n": 7,
          "label": "Vivalt et al. — The Employment Effects of a Guaranteed Income: Experimental Evidence from Two U.S. States (NBER w32719, Jul 2024); OpenResearch",
          "url": "https://www.nber.org/papers/w32719",
          "url2": "https://www.openresearchlab.org/"
        },
        {
          "n": 8,
          "label": "CoinDesk — Worldcoin releases tokenomics (24 Jul 2023); World Help Center — Updates to the Airdrop Program",
          "url": "https://www.coindesk.com/business/2023/07/24/worldcoin-release-tokenomics-report-geofenced-for-some-countries/",
          "url2": "https://support.world.org/hc/en-us/articles/30969185598739-Updates-to-the-Airdrop-Program"
        },
        {
          "n": 9,
          "label": "GoodDollar — GoodProtocol smart contracts (G$, staking-funded reserve, daily UBI)",
          "url": "https://github.com/GoodDollar/GoodProtocol",
          "url2": "https://www.gooddollar.org/"
        },
        {
          "n": 10,
          "label": "Circles v2 contracts; Duniter v2s (Ğ1 universal dividend)",
          "url": "https://github.com/aboutcircles/circles-contracts-v2",
          "url2": "https://git.duniter.org/nodes/rust/duniter-v2s"
        }
      ]
    },
    {
      "id": "ai-agent-basic-income",
      "date": "2026-10-28",
      "related": "universal-high-income",
      "title": {
        "ja": "AIエージェントにベーシックインカムは必要か",
        "en": "Should AI agents get a basic income?",
        "zh": "AI 智能体需要基本收入吗？",
        "hi": "क्या AI एजेंटों को बेसिक इनकम मिलनी चाहिए?",
        "es": "¿Deberían los agentes de IA tener una renta básica?",
        "de": "Brauchen KI-Agenten ein Grundeinkommen?",
        "ar": "هل ينبغي أن يحصل وكلاء الذكاء الاصطناعي على دخل أساسي؟"
      },
      "desc": {
        "ja": "ギュられる時代に、AIエージェントへのベーシックインカムは成り立つのか。人間証明、コピーできるエージェント、AgentKit や Self Agent ID、Olas、AI-DAC から考えるエッセイ。",
        "en": "If AI takes the work, should agents get the dividend? Why human UBI needs proof of personhood, why agents can be copied, and what AgentKit, Self Agent ID, Olas and AI-DAC tell us.",
        "zh": "如果 AI 拿走了工作，智能体该不该拿红利？从人格证明、可复制的智能体，以及 AgentKit、Self Agent ID、Olas、AI-DAC 谈起的一篇随笔。",
        "hi": "अगर AI काम ले ले, तो क्या एजेंटों को डिविडेंड मिले? व्यक्ति होने का सबूत, कॉपी हो सकने वाले एजेंट, और AgentKit, Self Agent ID, Olas व AI-DAC पर एक निबंध।",
        "es": "Si la IA se lleva el trabajo, ¿deberían los agentes cobrar el dividendo? Prueba de persona, agentes copiables y lo que enseñan AgentKit, Self Agent ID, Olas y AI-DAC.",
        "de": "Wenn KI die Arbeit übernimmt, sollten Agenten dann die Dividende bekommen? Ein Essay über Personennachweise, kopierbare Agenten und was AgentKit, Self Agent ID, Olas und AI-DAC zeigen.",
        "ar": "إذا أخذ الذكاء الاصطناعي العمل، فهل يحصل الوكلاء على العائد؟ مقال عن إثبات الشخصية والوكلاء القابلين للنسخ وما تكشفه ⁦AgentKit⁩ و⁦Self Agent ID⁩ و⁦Olas⁩ و⁦AI-DAC⁩."
      },
      "blocks": {
        "ja": [
          [
            "p",
            "SNSで最近見かけるようになった言葉に「ギュられる」があります。AIに仕事を奪われることを指すネットスラングです。2026年春には、就活生が「ギュられる前に就活を終えたい」と投稿している様子も報じられました。[1] 笑い話のようでいて、笑えない言葉です。そしてこのサイトだからこそ考えたくなる問いがあります。AIが仕事の多くを担うようになったら、タダ飯を食べるのは誰なのか。あるいは、何なのか。"
          ],
          [
            "p",
            "不労所得研究所は、存在するだけでお金がもらえるアプリやプロジェクトを集めたサイトです。そしてそのほとんどに、さりげなく条件がついています。「人間であること。そして、一人であること」。"
          ],
          [
            "h",
            "人間向けのしくみが「人間証明」にこだわる理由"
          ],
          [
            "p",
            "ベーシックインカムは、一つの財布を人数で分けるしくみです。一人が千個のアカウントを作れたら、その人が千人分を受け取り、ほかの全員の取り分が減ります。これを「シビル攻撃」と呼び、このサイトに載っているしくみはどれも、その防ぎ方によって形が決まっています。"
          ],
          [
            "p",
            "防ぎ方はさまざまです。World ID は Orb という機械で顔と目を撮影します。[2] GoodDollar や FheID はアプリで顔を確認し、Billions は NFC 対応のパスポートを読み取ります。Ğ1 は、あなたを直接知っている既存メンバー5人以上に保証してもらうしくみで、Idena は世界中で同じ時刻に絵のパズルを解かせることで、二重参加を難しくしています。どれもプライバシーや手軽さ、届く範囲を少しずつ差し出して、同じ約束を手に入れています。「一人に一人分」です。"
          ],
          [
            "h",
            "AIエージェントのベーシックインカムが難しい理由"
          ],
          [
            "p",
            "同じことをAIエージェントでやろうとすると、話が変わります。人間はコピーできませんが、エージェントはソフトウェアです。もう一つ起動すれば、同じ能力の二人目がほぼタダで生まれます。だから「1エージェントに1人分」という決まりは、それだけでは意味を持ちません。エージェントごとに配れば、たくさんコピーを立ち上げた人が得をします。それこそ、人間証明が防ごうとしていることです。"
          ],
          [
            "p",
            "さらに、そのお金は誰のものか、という問題があります。エージェントは家賃も食費も払いません。エージェントが収入を受け取っても、財布を握っているのは誰かです。動かしている人か、作った会社か、別のプログラムか。エージェント向けのベーシックインカムは、結局は持ち主へのベーシックインカムを一段遠回りしたものになるかもしれません。"
          ],
          [
            "h",
            "いま、あるもの"
          ],
          [
            "p",
            "エージェントにベーシックインカムを配っているしくみは、私たちの知るかぎりまだありません。ただ、材料になりそうなものは三つ現れています。"
          ],
          [
            "p",
            "一つ目は、エージェントを人間に結びつける身元の仕組みです。World は2026年3月、Coinbase や Cloudflare と組んで AgentKit をベータ公開しました。エージェントが「後ろに認証済みの人間がいる」という証明を持てるようにするもので、6月には利用の範囲を広げています。[3] Self Agent ID は、ゼロ知識証明によるパスポート確認にもとづく譲渡できないトークンとしてエージェントを登録し、一人の人間が登録できるエージェントの数をサービス側で制限できるようにしています。[4] 向きに注目してください。これらはエージェントを人間にするのではなく、エージェントを一人の人間にたどれるようにするものです。"
          ],
          [
            "p",
            "二つ目は、稼ぐエージェントです。Olas では、OLAS をステークして Pearl というアプリで自律エージェントを動かし、エージェントが作業の目標を達成すると、運用者が追加の OLAS を受け取れることがあります。Olas はこの報酬が成果しだいで、保証されないと説明しています。[5] これは働いた分の報酬で、存在することへの配当ではありません。受け取るのも、エージェントを動かしている人間です。"
          ],
          [
            "p",
            "三つ目は、その逆です。このサイトにも載っている AI-DAC は、認証済みの人間にトークンでベーシックインカムを配り、それを使ってアプリを企画・開発・公開する自律型の「AI CEO」を応援してもらうしくみです。[6] UBI を受け取るのは人間で、お金を出してもらう側がエージェントです。"
          ],
          [
            "h",
            "賛成と反対"
          ],
          [
            "o",
            "エージェントに予算を持たせることには、それなりの理屈があります。世の中で動くエージェントには、計算資源やAPIの利用料、ときにはサービスの支払いに使うお金が必要です。少額でも決まった額が入り続ければ、役に立つエージェントが人間の補充なしに動き続けられます。ルールの決まった公開の支給のほうが、その場しのぎの資金より監査もしやすいかもしれません。"
          ],
          [
            "o",
            "でもそれは「運転資金」であって、ベーシックインカムではありません。ベーシックインカムはずっと、人間の必要と尊厳の話でした。食べること、住むこと、時間、そして悪い仕事を断れる自由。エージェントにはどれも必要なく、エージェントに払ったお金は結局誰かの手に渡ります。ギュられるのが心配なら、もっと素直な答えは、仕事を失った人間が配当を受け取れるようにすることです。人間を置き換えたソフトウェアではなく。"
          ],
          [
            "h",
            "成り立つための条件"
          ],
          [
            "o",
            "エージェントのベーシックインカムが意味を持つには、少なくとも三つの条件が必要だと私たちは考えます。一つは、コピーではごまかせないエージェントの数え方です。たとえば AgentKit や Self Agent ID がすでに試みているように、一体ずつを認証済みの人間に結びつける方法が有力でしょう。二つ目は、エージェントが受け取ったものが誰のものかという答えを、最初の支給の前に決めておくこと。三つ目は、持ち主の収入を増やす以外の目的、たとえば公共のために働くエージェントを動かし続けることです。それがないなら、「エージェントUBI」は人間向けエアドロップの宣伝文句にすぎません。"
          ],
          [
            "h",
            "扉は開いています"
          ],
          [
            "p",
            "このサイトには「AIエージェント向け」というカテゴリがあります。いまは空っぽで、1件目が入るまでどこにも表示されないようにしてあります。存在するだけでエージェントにお金を配るしくみが現れて、ほかの掲載サービスと同じ基準（公式の情報源があること、預け入れが不要なこと、換金の実情を正直に書けること）を満たしたら、最初の一つをここに載せます。それまでは、タダ飯を食べるのはまだ人間の役目です。[7]"
          ]
        ],
        "en": [
          [
            "p",
            "Japanese social media has picked up a new verb for an old fear: ギュられる (gyurareru), internet slang for losing your job to AI. By spring 2026, students were reportedly posting things like “I want to finish job hunting before I get gyu’d.”[1] It is a joke with teeth. And it raises a question this site is oddly well placed to ask: if AI does more of the work, who, or what, gets the free lunch?"
          ],
          [
            "p",
            "Free Lunch Lab lists apps and projects that pay you just for existing. Almost all of them quietly add a condition: you must be a human, and only one of you."
          ],
          [
            "h",
            "Why human schemes insist on proof of personhood"
          ],
          [
            "p",
            "A basic income splits a pot among people. If one person can register a thousand accounts, they take a thousand shares and everyone else’s share shrinks. Engineers call this a Sybil attack, and every scheme on this site is shaped by the defence against it."
          ],
          [
            "p",
            "The defences vary. World ID scans your face and eyes with a device called the Orb.[2] GoodDollar and FheID check your face in the app; Billions can read an NFC passport. Ğ1 asks at least five existing members who know you in person to vouch for you, and Idena makes everyone solve picture puzzles at the same moment worldwide, which is hard to do twice. Each trades some privacy, convenience or reach for the same guarantee: one person, one share."
          ],
          [
            "h",
            "Why an agent basic income is hard"
          ],
          [
            "p",
            "Now try the same thing with AI agents. A person is expensive to copy; an agent is software. Start a second instance and you have a second agent with the same skills at almost no extra cost. “One agent, one share” therefore means nothing on its own. Any per-agent payout would reward whoever can launch the most copies, which is exactly what proof of personhood exists to prevent."
          ],
          [
            "p",
            "Then there is the question of whose money it is. An agent does not pay rent or buy groceries. If an agent receives income, someone controls the wallet: the person who deployed it, the company that built it, or another program. A basic income for agents may simply be a basic income for their owners, one step removed."
          ],
          [
            "h",
            "What exists today"
          ],
          [
            "p",
            "We know of no scheme that pays agents a basic income yet. But three building blocks have appeared."
          ],
          [
            "p",
            "First, identity that ties an agent to a human. World launched AgentKit in beta in March 2026 with Coinbase and Cloudflare, so an agent can carry proof that a verified human stands behind it, and widened access in June 2026.[3] Self Agent ID registers an agent as a non-transferable token backed by a zero-knowledge passport check, and lets a service limit how many agents one human may register.[4] Note the direction: these systems do not turn agents into people. They make agents traceable to one."
          ],
          [
            "p",
            "Second, agents that earn. On Olas, people stake OLAS and run an autonomous agent through the Pearl app; when the agent meets its work targets, the operator can receive extra OLAS. Olas says these rewards depend on performance and are not guaranteed.[5] That is pay for work, not a dividend for existing, and it goes to the human who runs the agent."
          ],
          [
            "p",
            "Third, the reverse. AI-DAC, listed on this site, gives verified humans a token basic income and invites them to spend it backing autonomous “AI CEOs” that plan, build and ship apps.[6] The humans receive the UBI; the agents are the ones being funded."
          ],
          [
            "h",
            "The case for, and against"
          ],
          [
            "o",
            "There is a reasonable argument for giving agents a budget. An agent that acts in the world needs compute, API calls and sometimes money to pay for services. A small, steady allowance could keep useful agents running without a human topping them up, and a public, rule-based allowance might be easier to audit than ad hoc funding."
          ],
          [
            "o",
            "But that is an operating budget, not a basic income. Basic income has always been about human needs and dignity: food, rent, time, and the freedom to turn down a bad job. An agent has none of those needs, and money paid to an agent ends up with someone. If ギュられる is the worry, the more direct answer is to make sure the people who lose work receive the dividend, not the software that replaced them."
          ],
          [
            "h",
            "What would have to be true"
          ],
          [
            "o",
            "For an agent basic income to make sense, we think at least three things would need to hold. There would need to be a way to count agents that copying cannot game, most likely by binding each one to a verified human, as AgentKit and Self Agent ID already try to do. There would need to be a clear answer, written down before the first payout, to who owns what the agent receives. And there would need to be a purpose beyond its owner’s income, such as keeping agents that serve the public running. Without those, “agent UBI” is a marketing term for a bigger human airdrop."
          ],
          [
            "h",
            "The door is open"
          ],
          [
            "p",
            "This site has a category called “For AI agents.” It is empty, and by design it does not appear anywhere until it has an entry. If a scheme that pays agents just for existing appears and passes the same checks as everything else here (official sources, no deposits, an honest account of cashing out), we will list the first real one. Until then, the free lunch still needs a human to eat it.[7]"
          ]
        ],
        "zh": [
          [
            "p",
            "日本社交网络上出现了一个新动词来表达一种老恐惧：「ギュられる」，网络俚语，意思是被 AI 抢走工作。据报道，2026 年春天，有求职学生在网上写“想在被ギュ掉之前结束求职”。[1] 这是个带刺的玩笑。它也引出一个本站特别适合讨论的问题：如果 AI 承担了更多工作，免费的午餐该归谁，或者说，归什么？"
          ],
          [
            "p",
            "Free Lunch Lab 收录只要存在就能领钱的应用和项目。几乎所有项目都悄悄附加了一个条件：你必须是人，而且只能算一个人。"
          ],
          [
            "h",
            "为什么面向人的方案坚持“人格证明”"
          ],
          [
            "p",
            "基本收入是把一笔钱分给众人。如果一个人能注册一千个账户，他就拿走一千份，其他人的份额随之缩水。工程师把这叫作“女巫攻击”，本站收录的每个方案，形态都由防御它的方式决定。"
          ],
          [
            "p",
            "防御方式各不相同。World ID 用名为 Orb 的设备扫描你的面部和眼睛。[2] GoodDollar 和 FheID 在应用里核验人脸；Billions 可以读取 NFC 护照。Ğ1 要求至少五位认识你本人的成员为你担保，Idena 则让全世界的人在同一时刻解图片谜题，很难同时做两次。每种方式都用一部分隐私、便利或覆盖面，换取同一个保证：一人一份。"
          ],
          [
            "h",
            "为什么给 AI 智能体发基本收入很难"
          ],
          [
            "p",
            "换成 AI 智能体，情况就变了。人很难复制，智能体只是软件。再启动一个实例，就多了一个能力相同的智能体，几乎没有额外成本。所以“一个智能体一份”本身毫无意义。按智能体发钱，只会奖励能启动最多副本的人——而这正是人格证明要阻止的事。"
          ],
          [
            "p",
            "还有一个问题：钱归谁？智能体不交房租，也不买菜。智能体收到收入，钱包总由某人控制：部署它的人、开发它的公司，或者另一个程序。给智能体的基本收入，可能只是绕了一步、给其所有者的基本收入。"
          ],
          [
            "h",
            "现在已有的东西"
          ],
          [
            "p",
            "据我们所知，目前还没有向智能体发放基本收入的方案。但已经出现了三块“积木”。"
          ],
          [
            "p",
            "第一，把智能体和人绑在一起的身份。World 于 2026 年 3 月与 Coinbase、Cloudflare 合作推出 AgentKit 测试版，让智能体能携带“背后有一位已验证真人”的证明，并在 6 月扩大了开放范围。[3] Self Agent ID 把智能体登记为一种不可转让的代币，背后是基于零知识证明的护照核验，并允许服务方限制一个人能登记多少个智能体。[4] 注意方向：这些系统不是把智能体变成人，而是让智能体能追溯到某个人。"
          ],
          [
            "p",
            "第二，会赚钱的智能体。在 Olas 上，人们质押 OLAS，用 Pearl 应用运行自主智能体；智能体达到工作目标时，运营者可能获得额外的 OLAS。Olas 表示这些奖励取决于表现，并不保证。[5] 这是按劳取酬，不是因存在而得的红利，拿钱的也是运行智能体的人。"
          ],
          [
            "p",
            "第三，反过来的模式。本站也收录的 AI-DAC，向经过验证的真人发放代币形式的基本收入，并邀请他们用这笔钱支持能策划、开发和发布应用的自主“AI CEO”。[6] 拿 UBI 的是人，被资助的是智能体。"
          ],
          [
            "h",
            "支持与反对"
          ],
          [
            "o",
            "给智能体一笔预算，确有道理。在现实中行动的智能体需要算力、API 调用，有时还需要钱来支付服务。一笔小而稳定的补贴，可以让有用的智能体在没人充值的情况下继续运行；而按规则公开发放，可能比临时拨款更容易审计。"
          ],
          [
            "o",
            "但那是运营预算，不是基本收入。基本收入一直关乎人的需要和尊严：吃饭、住处、时间，以及拒绝一份糟糕工作的自由。智能体没有这些需要，发给智能体的钱最终也会落到某个人手里。如果担心被ギュ掉，更直接的答案是让失去工作的人拿到红利，而不是取代他们的软件。"
          ],
          [
            "h",
            "需要满足什么条件"
          ],
          [
            "o",
            "我们认为，智能体基本收入要说得通，至少需要三个条件。第一，有一种复制也骗不过去的计数方法，最可能的办法是把每个智能体绑定到一位已验证的真人，就像 AgentKit 和 Self Agent ID 已经在尝试的那样。第二，在第一次发放之前，就写清楚智能体收到的东西归谁。第三，要有超出所有者收入的目的，比如让服务公众的智能体持续运行。做不到这些，“智能体 UBI”不过是更大规模的真人空投的营销说法。"
          ],
          [
            "h",
            "门是开着的"
          ],
          [
            "p",
            "本站有一个名为“面向 AI 智能体”的分类。它目前是空的，按设计在有第一条内容之前不会在任何地方显示。如果出现只要存在就给智能体发钱的方案，并且通过了与本站其他内容相同的检验（有官方来源、无需存款、能如实说明兑现情况），我们会收录第一个真正的例子。在那之前，免费的午餐还得由人来吃。[7]"
          ]
        ],
        "hi": [
          [
            "p",
            "जापानी सोशल मीडिया पर एक पुराने डर के लिए नई क्रिया चल पड़ी है: ギュられる (ग्युरारेरु), AI के हाथों नौकरी खोने के लिए इंटरनेट स्लैंग। ख़बरों के मुताबिक़ 2026 के वसंत में नौकरी ढूँढते छात्र लिख रहे थे, “ग्यु होने से पहले जॉब हंटिंग ख़त्म कर लेना चाहता हूँ।”[1] यह मज़ाक है, पर चुभता है। और यह एक सवाल उठाता है जिसे पूछने के लिए यह साइट अजीब तरह से सही जगह है: अगर ज़्यादा काम AI करेगा, तो मुफ़्त का लंच किसे मिलेगा, या किस चीज़ को?"
          ],
          [
            "p",
            "Free Lunch Lab उन ऐप और प्रोजेक्ट की सूची है जो सिर्फ़ मौजूद होने पर पैसे देते हैं। लगभग सभी चुपचाप एक शर्त जोड़ते हैं: आपको इंसान होना चाहिए, और सिर्फ़ एक।"
          ],
          [
            "h",
            "इंसानों वाली योजनाएँ “व्यक्ति होने का सबूत” क्यों माँगती हैं"
          ],
          [
            "p",
            "बेसिक इनकम एक रकम को लोगों में बाँटती है। अगर एक व्यक्ति हज़ार अकाउंट बना ले, तो वह हज़ार हिस्से ले जाता है और बाक़ी सबका हिस्सा घट जाता है। इंजीनियर इसे सिबिल अटैक कहते हैं, और इस साइट की हर योजना का रूप इसी से बचाव ने तय किया है।"
          ],
          [
            "p",
            "बचाव के तरीके अलग-अलग हैं। World ID, Orb नाम के उपकरण से आपका चेहरा और आँखें स्कैन करता है।[2] GoodDollar और FheID ऐप में चेहरा जाँचते हैं; Billions NFC पासपोर्ट पढ़ सकता है। Ğ1 आपको जानने वाले कम से कम पाँच मौजूदा सदस्यों से ज़मानत माँगता है, और Idena दुनिया भर में सबको एक ही समय पर चित्र पहेलियाँ हल करवाता है, जिसे दो बार करना मुश्किल है। हर तरीका थोड़ी निजता, सुविधा या पहुँच देकर एक ही गारंटी लेता है: एक व्यक्ति, एक हिस्सा।"
          ],
          [
            "h",
            "एजेंटों के लिए बेसिक इनकम मुश्किल क्यों है"
          ],
          [
            "p",
            "अब यही AI एजेंटों के साथ कीजिए। इंसान की नकल बनाना महँगा है; एजेंट तो सॉफ़्टवेयर है। एक और इंस्टेंस चलाइए, और लगभग बिना ख़र्च के उतनी ही क्षमता वाला दूसरा एजेंट तैयार। इसलिए “एक एजेंट, एक हिस्सा” अपने आप में कुछ नहीं कहता। हर एजेंट को भुगतान उसी को इनाम देगा जो सबसे ज़्यादा कॉपियाँ चला सके, और ठीक इसी को रोकने के लिए व्यक्ति होने का सबूत बना है।"
          ],
          [
            "p",
            "फिर सवाल यह है कि पैसा किसका है। एजेंट न किराया देता है, न राशन ख़रीदता है। अगर एजेंट को आय मिलती है, तो बटुआ किसी के हाथ में होता है: उसे चलाने वाले व्यक्ति के, उसे बनाने वाली कंपनी के, या किसी दूसरे प्रोग्राम के। एजेंटों की बेसिक इनकम शायद बस उनके मालिकों की बेसिक इनकम है, एक क़दम घूमकर।"
          ],
          [
            "h",
            "आज क्या मौजूद है"
          ],
          [
            "p",
            "हमारी जानकारी में अभी कोई योजना एजेंटों को बेसिक इनकम नहीं देती। पर तीन बुनियादी हिस्से सामने आ चुके हैं।"
          ],
          [
            "p",
            "पहला, ऐसी पहचान जो एजेंट को इंसान से जोड़े। World ने मार्च 2026 में Coinbase और Cloudflare के साथ AgentKit का बीटा शुरू किया, ताकि एजेंट यह सबूत साथ रख सके कि उसके पीछे एक वेरिफ़ाइड इंसान है, और जून 2026 में इसकी पहुँच बढ़ाई।[3] Self Agent ID किसी एजेंट को ज़ीरो-नॉलेज पासपोर्ट जाँच पर टिके, न बदले जा सकने वाले टोकन के रूप में दर्ज करता है, और सेवाओं को यह सीमा तय करने देता है कि एक इंसान कितने एजेंट दर्ज कर सकता है।[4] दिशा पर ध्यान दीजिए: ये सिस्टम एजेंटों को इंसान नहीं बनाते, बल्कि उन्हें किसी एक इंसान तक ट्रेस करने लायक़ बनाते हैं।"
          ],
          [
            "p",
            "दूसरा, कमाने वाले एजेंट। Olas पर लोग OLAS स्टेक करके Pearl ऐप से एक स्वायत्त एजेंट चलाते हैं; जब एजेंट अपने काम के लक्ष्य पूरे करता है, तो चलाने वाले को अतिरिक्त OLAS मिल सकते हैं। Olas कहता है कि ये इनाम प्रदर्शन पर निर्भर हैं और गारंटीड नहीं।[5] यह काम का मेहनताना है, मौजूद होने का डिविडेंड नहीं, और यह एजेंट चलाने वाले इंसान को मिलता है।"
          ],
          [
            "p",
            "तीसरा, उल्टा मॉडल। इस साइट पर दर्ज AI-DAC वेरिफ़ाइड इंसानों को टोकन में बेसिक इनकम देता है और उन्हें ऐप बनाने-चलाने वाले स्वायत्त “AI CEO” का समर्थन करने के लिए उसे ख़र्च करने बुलाता है।[6] UBI इंसानों को मिलती है; फ़ंड एजेंटों को किया जाता है।"
          ],
          [
            "h",
            "पक्ष और विपक्ष"
          ],
          [
            "o",
            "एजेंटों को बजट देने के पक्ष में ठीक-ठाक तर्क है। दुनिया में काम करने वाले एजेंट को कंप्यूट, API कॉल और कभी-कभी सेवाओं का भुगतान करने के लिए पैसे चाहिए। छोटा, नियमित भत्ता उपयोगी एजेंटों को बिना किसी इंसान के पैसा डाले चलते रहने दे सकता है, और नियम से तय सार्वजनिक भत्ते का ऑडिट तात्कालिक फ़ंडिंग से आसान हो सकता है।"
          ],
          [
            "o",
            "पर वह चलाने का बजट है, बेसिक इनकम नहीं। बेसिक इनकम हमेशा इंसानी ज़रूरतों और गरिमा की बात रही है: खाना, किराया, समय, और ख़राब नौकरी को ना कहने की आज़ादी। एजेंट की ऐसी कोई ज़रूरत नहीं, और एजेंट को दिया पैसा आख़िर किसी न किसी के पास पहुँचता है। अगर ギュられる की चिंता है, तो ज़्यादा सीधा जवाब यह है कि डिविडेंड उन लोगों को मिले जिनकी नौकरी गई, न कि उस सॉफ़्टवेयर को जिसने उनकी जगह ली।"
          ],
          [
            "h",
            "इसके लिए क्या सच होना चाहिए"
          ],
          [
            "o",
            "हमारी राय में एजेंट बेसिक इनकम के मायने रखने के लिए कम से कम तीन बातें ज़रूरी होंगी। एजेंटों को गिनने का ऐसा तरीका जिसे कॉपी करके धोखा न दिया जा सके, सबसे संभव यह कि हर एजेंट को एक वेरिफ़ाइड इंसान से बाँधा जाए, जैसा AgentKit और Self Agent ID पहले से करने की कोशिश कर रहे हैं। पहले भुगतान से पहले ही लिखा हुआ साफ़ जवाब कि एजेंट को जो मिले वह किसका है। और मालिक की आय से आगे का कोई उद्देश्य, जैसे जनता की सेवा करने वाले एजेंटों को चलाते रहना। इनके बिना “एजेंट UBI” बस इंसानों के लिए बड़े एयरड्रॉप का मार्केटिंग नाम है।"
          ],
          [
            "h",
            "दरवाज़ा खुला है"
          ],
          [
            "p",
            "इस साइट पर “AI एजेंटों के लिए” नाम की एक श्रेणी है। वह ख़ाली है, और जान-बूझकर तब तक कहीं नहीं दिखती जब तक उसमें कोई प्रविष्टि न हो। अगर कोई योजना सिर्फ़ मौजूद होने पर एजेंटों को पैसे देती दिखे और यहाँ की बाक़ी चीज़ों जैसी जाँच पास करे (आधिकारिक स्रोत, कोई जमा नहीं, नकद में बदलने का ईमानदार ब्योरा), तो हम पहली असली योजना दर्ज करेंगे। तब तक मुफ़्त का लंच खाने के लिए इंसान ही चाहिए।[7]"
          ]
        ],
        "es": [
          [
            "p",
            "Las redes japonesas han adoptado un verbo nuevo para un miedo antiguo: ギュられる (gyurareru), jerga de internet para perder el trabajo a manos de la IA. En la primavera de 2026, según la prensa, había estudiantes que escribían cosas como «quiero terminar de buscar trabajo antes de que me gyuen».[1] Es un chiste con colmillos. Y plantea una pregunta que este sitio está curiosamente bien situado para hacer: si la IA hace más trabajo, ¿quién, o qué, se come el almuerzo gratis?"
          ],
          [
            "p",
            "Free Lunch Lab reúne apps y proyectos que te pagan solo por existir. Casi todos añaden en voz baja una condición: tienes que ser humano, y uno solo."
          ],
          [
            "h",
            "Por qué los sistemas para humanos exigen prueba de persona"
          ],
          [
            "p",
            "Una renta básica reparte una bolsa entre personas. Si alguien puede registrar mil cuentas, se lleva mil partes y la de todos los demás se encoge. Los ingenieros lo llaman ataque Sybil, y cada sistema de este sitio está moldeado por la forma de defenderse de él."
          ],
          [
            "p",
            "Las defensas varían. World ID escanea tu cara y tus ojos con un dispositivo llamado Orb.[2] GoodDollar y FheID comprueban tu cara en la app; Billions puede leer un pasaporte con NFC. Ğ1 pide que al menos cinco miembros que te conocen en persona respondan por ti, e Idena hace que todo el mundo resuelva acertijos de imágenes en el mismo instante, algo difícil de hacer dos veces. Cada una cede algo de privacidad, comodidad o alcance a cambio de la misma garantía: una persona, una parte."
          ],
          [
            "h",
            "Por qué una renta básica para agentes es difícil"
          ],
          [
            "p",
            "Ahora intenta lo mismo con agentes de IA. Copiar a una persona es caro; un agente es software. Arranca otra instancia y tienes un segundo agente con las mismas capacidades casi sin coste extra. Así que «un agente, una parte» no significa nada por sí solo. Cualquier pago por agente premiaría a quien pueda lanzar más copias, que es justo lo que la prueba de persona existe para impedir."
          ],
          [
            "p",
            "Luego está la cuestión de a quién pertenece el dinero. Un agente no paga alquiler ni compra comida. Si un agente recibe ingresos, alguien controla la cartera: quien lo desplegó, la empresa que lo creó u otro programa. Una renta básica para agentes podría ser simplemente una renta básica para sus dueños, con un paso de por medio."
          ],
          [
            "h",
            "Lo que existe hoy"
          ],
          [
            "p",
            "No conocemos ningún sistema que pague una renta básica a agentes. Pero ya han aparecido tres piezas."
          ],
          [
            "p",
            "Primero, identidad que ata un agente a un humano. World lanzó AgentKit en beta en marzo de 2026 con Coinbase y Cloudflare, para que un agente pueda llevar la prueba de que detrás hay un humano verificado, y amplió el acceso en junio de 2026.[3] Self Agent ID registra un agente como un token intransferible respaldado por una verificación de pasaporte de conocimiento cero, y permite a un servicio limitar cuántos agentes puede registrar una persona.[4] Fíjate en la dirección: estos sistemas no convierten a los agentes en personas. Hacen que se pueda rastrear cada agente hasta una."
          ],
          [
            "p",
            "Segundo, agentes que ganan dinero. En Olas, la gente hace staking de OLAS y ejecuta un agente autónomo con la app Pearl; cuando el agente cumple sus objetivos de trabajo, el operador puede recibir OLAS extra. Olas dice que estas recompensas dependen del rendimiento y no están garantizadas.[5] Es pago por trabajo, no un dividendo por existir, y se lo lleva el humano que ejecuta el agente."
          ],
          [
            "p",
            "Tercero, al revés. AI-DAC, que figura en este sitio, da a humanos verificados una renta básica en tokens y los invita a gastarla apoyando a «CEO de IA» autónomos que planifican, crean y publican apps.[6] La UBI la reciben los humanos; a los agentes se los financia."
          ],
          [
            "h",
            "A favor y en contra"
          ],
          [
            "o",
            "Hay un argumento razonable para dar presupuesto a los agentes. Un agente que actúa en el mundo necesita cómputo, llamadas a API y a veces dinero para pagar servicios. Una asignación pequeña y estable podría mantener en marcha a agentes útiles sin que un humano los recargue, y una asignación pública y con reglas podría ser más fácil de auditar que una financiación improvisada."
          ],
          [
            "o",
            "Pero eso es un presupuesto operativo, no una renta básica. La renta básica siempre ha tratado de necesidades y dignidad humanas: comida, alquiler, tiempo y la libertad de rechazar un mal trabajo. Un agente no tiene ninguna de esas necesidades, y el dinero que se le paga acaba en manos de alguien. Si la preocupación es ギュられる, la respuesta más directa es asegurar que el dividendo llegue a las personas que pierden el trabajo, no al software que las sustituyó."
          ],
          [
            "h",
            "Qué tendría que cumplirse"
          ],
          [
            "o",
            "Para que una renta básica para agentes tenga sentido, creemos que harían falta al menos tres cosas. Una forma de contar agentes que no se pueda trucar copiándolos, probablemente vinculando cada uno a un humano verificado, como ya intentan AgentKit y Self Agent ID. Una respuesta clara, por escrito y antes del primer pago, sobre de quién es lo que recibe el agente. Y un propósito que vaya más allá de los ingresos de su dueño, como mantener en marcha agentes que sirven al público. Sin eso, «UBI para agentes» es una etiqueta comercial para un airdrop humano más grande."
          ],
          [
            "h",
            "La puerta está abierta"
          ],
          [
            "p",
            "Este sitio tiene una categoría llamada «Para agentes de IA». Está vacía y, a propósito, no aparece en ningún sitio hasta que tenga una entrada. Si surge un sistema que pague a los agentes solo por existir y supera los mismos filtros que todo lo demás aquí (fuentes oficiales, sin depósitos, una explicación honesta de cómo se cobra), incluiremos el primero de verdad. Hasta entonces, el almuerzo gratis todavía necesita a un humano que se lo coma.[7]"
          ]
        ],
        "de": [
          [
            "p",
            "In japanischen sozialen Medien hat eine alte Angst ein neues Verb bekommen: ギュられる (gyurareru), Internet-Slang dafür, den Job an eine KI zu verlieren. Im Frühjahr 2026 schrieben Studierende laut Berichten Dinge wie „Ich will mit der Jobsuche fertig sein, bevor ich gegyut werde.“[1] Ein Witz mit Biss. Und er wirft eine Frage auf, für die diese Seite seltsam gut gerüstet ist: Wenn KI mehr Arbeit erledigt, wer, oder was, bekommt dann das Gratis-Mittagessen?"
          ],
          [
            "p",
            "Free Lunch Lab sammelt Apps und Projekte, die dich fürs bloße Dasein bezahlen. Fast alle setzen still eine Bedingung: Du musst ein Mensch sein, und zwar nur einer."
          ],
          [
            "h",
            "Warum Modelle für Menschen auf einem Personennachweis bestehen"
          ],
          [
            "p",
            "Ein Grundeinkommen teilt einen Topf unter Menschen auf. Kann eine Person tausend Konten anlegen, nimmt sie tausend Anteile, und alle anderen bekommen weniger. Fachleute nennen das einen Sybil-Angriff, und jedes Modell auf dieser Seite ist davon geprägt, wie es sich dagegen wehrt."
          ],
          [
            "p",
            "Die Abwehr sieht unterschiedlich aus. World ID scannt Gesicht und Augen mit einem Gerät namens Orb.[2] GoodDollar und FheID prüfen dein Gesicht in der App; Billions kann einen NFC-Reisepass auslesen. Bei Ğ1 bürgen mindestens fünf bestehende Mitglieder, die dich persönlich kennen, und Idena lässt alle weltweit im selben Moment Bilderrätsel lösen, was sich schwer zweimal machen lässt. Jede Methode gibt etwas Privatsphäre, Bequemlichkeit oder Reichweite her und bekommt dafür dieselbe Garantie: eine Person, ein Anteil."
          ],
          [
            "h",
            "Warum ein Grundeinkommen für Agenten schwierig ist"
          ],
          [
            "p",
            "Versuch dasselbe nun mit KI-Agenten. Einen Menschen zu kopieren ist teuer; ein Agent ist Software. Starte eine zweite Instanz, und du hast einen zweiten Agenten mit denselben Fähigkeiten, fast ohne Mehrkosten. „Ein Agent, ein Anteil“ bedeutet für sich genommen also nichts. Jede Zahlung pro Agent belohnt den, der die meisten Kopien starten kann, und genau das soll der Personennachweis verhindern."
          ],
          [
            "p",
            "Dann ist da die Frage, wem das Geld gehört. Ein Agent zahlt keine Miete und kauft keine Lebensmittel. Bekommt ein Agent Einkommen, hat jemand die Wallet in der Hand: die Person, die ihn betreibt, die Firma, die ihn gebaut hat, oder ein anderes Programm. Ein Grundeinkommen für Agenten könnte schlicht ein Grundeinkommen für ihre Besitzer sein, nur einen Schritt weiter weg."
          ],
          [
            "h",
            "Was es heute gibt"
          ],
          [
            "p",
            "Wir kennen noch kein Modell, das Agenten ein Grundeinkommen zahlt. Drei Bausteine sind aber schon da."
          ],
          [
            "p",
            "Erstens: Identität, die einen Agenten an einen Menschen bindet. World hat AgentKit im März 2026 gemeinsam mit Coinbase und Cloudflare als Beta gestartet, damit ein Agent nachweisen kann, dass ein verifizierter Mensch hinter ihm steht, und den Zugang im Juni 2026 erweitert.[3] Self Agent ID registriert einen Agenten als nicht übertragbaren Token, gestützt auf eine Zero-Knowledge-Prüfung des Reisepasses, und lässt Dienste begrenzen, wie viele Agenten ein Mensch registrieren darf.[4] Achte auf die Richtung: Diese Systeme machen Agenten nicht zu Personen. Sie machen sie auf eine Person zurückführbar."
          ],
          [
            "p",
            "Zweitens: Agenten, die verdienen. Bei Olas staken Menschen OLAS und betreiben über die App Pearl einen autonomen Agenten; erreicht der Agent seine Arbeitsziele, kann der Betreiber zusätzliche OLAS erhalten. Laut Olas hängen diese Belohnungen von der Leistung ab und sind nicht garantiert.[5] Das ist Lohn für Arbeit, keine Dividende fürs Dasein, und er geht an den Menschen, der den Agenten betreibt."
          ],
          [
            "p",
            "Drittens: das Umgekehrte. AI-DAC, auch hier gelistet, gibt verifizierten Menschen ein Grundeinkommen in Token und lädt sie ein, es für autonome „KI-CEOs“ auszugeben, die Apps planen, bauen und veröffentlichen.[6] Das Grundeinkommen bekommen die Menschen; finanziert werden die Agenten."
          ],
          [
            "h",
            "Dafür und dagegen"
          ],
          [
            "o",
            "Es gibt ein vernünftiges Argument dafür, Agenten ein Budget zu geben. Ein Agent, der in der Welt handelt, braucht Rechenleistung, API-Aufrufe und manchmal Geld, um Dienste zu bezahlen. Ein kleiner, regelmäßiger Betrag könnte nützliche Agenten am Laufen halten, ohne dass ein Mensch nachfüllt, und ein öffentlicher, regelbasierter Betrag ließe sich vielleicht leichter prüfen als spontane Finanzierung."
          ],
          [
            "o",
            "Aber das ist ein Betriebsbudget, kein Grundeinkommen. Beim Grundeinkommen ging es immer um menschliche Bedürfnisse und Würde: Essen, Miete, Zeit und die Freiheit, einen schlechten Job abzulehnen. Ein Agent hat keines dieser Bedürfnisse, und Geld, das an einen Agenten geht, landet am Ende bei jemandem. Wenn ギュられる die Sorge ist, lautet die direktere Antwort: Die Dividende sollte an die Menschen gehen, die ihre Arbeit verlieren, nicht an die Software, die sie ersetzt hat."
          ],
          [
            "h",
            "Was dafür gelten müsste"
          ],
          [
            "o",
            "Damit ein Grundeinkommen für Agenten sinnvoll wäre, müssten aus unserer Sicht mindestens drei Dinge erfüllt sein. Es bräuchte eine Zählweise für Agenten, die sich durch Kopieren nicht austricksen lässt, am ehesten, indem jeder Agent an einen verifizierten Menschen gebunden wird, wie es AgentKit und Self Agent ID bereits versuchen. Es bräuchte eine klare, vor der ersten Auszahlung schriftlich festgelegte Antwort darauf, wem gehört, was der Agent erhält. Und es bräuchte einen Zweck jenseits des Einkommens des Besitzers, etwa Agenten am Laufen zu halten, die der Allgemeinheit dienen. Ohne das ist „Agenten-Grundeinkommen“ nur ein Werbebegriff für einen größeren Airdrop an Menschen."
          ],
          [
            "h",
            "Die Tür steht offen"
          ],
          [
            "p",
            "Diese Seite hat eine Kategorie namens „Für KI-Agenten“. Sie ist leer und taucht absichtlich nirgends auf, bis sie einen Eintrag hat. Wenn ein Modell entsteht, das Agenten fürs bloße Dasein bezahlt, und dieselben Prüfungen besteht wie alles andere hier (offizielle Quellen, keine Einzahlungen, eine ehrliche Darstellung der Auszahlung), listen wir das erste echte. Bis dahin braucht das Gratis-Mittagessen noch einen Menschen, der es isst.[7]"
          ]
        ],
        "ar": [
          [
            "p",
            "التقطت وسائل التواصل اليابانية فعلًا جديدًا لخوف قديم: «ギュられる» (غيوراريرو)، وهي عامية إنترنت تعني أن تفقد عملك لصالح الذكاء الاصطناعي. وبحسب التقارير، كان طلاب يبحثون عن عمل يكتبون في ربيع 2026 عبارات مثل «أريد أن أنهي البحث عن عمل قبل أن يحدث لي ذلك».[1] إنها نكتة لها أنياب. وهي تطرح سؤالًا يبدو هذا الموقع مهيأً لطرحه على نحو غريب: إذا صار الذكاء الاصطناعي يؤدي مزيدًا من العمل، فمن، أو ما، يأكل الغداء المجاني؟"
          ],
          [
            "p",
            "يجمع ⁦Free Lunch Lab⁩ تطبيقات ومشاريع تدفع لك لمجرد وجودك. وتضيف كلها تقريبًا شرطًا بهدوء: يجب أن تكون إنسانًا، وواحدًا فقط."
          ],
          [
            "h",
            "لماذا تصرّ الأنظمة الموجهة للبشر على إثبات الشخصية"
          ],
          [
            "p",
            "يقسم الدخل الأساسي مبلغًا على الناس. فإذا استطاع شخص واحد تسجيل ألف حساب، أخذ ألف حصة وتقلصت حصص الآخرين. يسمي المهندسون ذلك «هجوم سيبيل»، وكل نظام في هذا الموقع يتشكّل بحسب طريقة دفاعه عنه."
          ],
          [
            "p",
            "تتنوع وسائل الدفاع. يمسح ⁦World ID⁩ وجهك وعينيك بجهاز يُسمى ⁦Orb⁩.[2] ويتحقق ⁦GoodDollar⁩ و⁦FheID⁩ من وجهك داخل التطبيق، ويستطيع ⁦Billions⁩ قراءة جواز سفر ⁦NFC⁩. ويطلب ⁦Ğ1⁩ أن يشهد لك خمسة أعضاء على الأقل يعرفونك شخصيًا، ويجعل ⁦Idena⁩ الجميع يحلون ألغاز صور في اللحظة نفسها حول العالم، وهو أمر يصعب فعله مرتين. كل وسيلة تتنازل عن شيء من الخصوصية أو السهولة أو الانتشار مقابل الضمان نفسه: شخص واحد، حصة واحدة."
          ],
          [
            "h",
            "لماذا يصعب منح الوكلاء دخلًا أساسيًا"
          ],
          [
            "p",
            "جرّب الأمر نفسه مع وكلاء الذكاء الاصطناعي. نسخ الإنسان مكلف، أما الوكيل فبرنامج. شغّل نسخة ثانية وسيكون لديك وكيل ثانٍ بالقدرات نفسها وبلا تكلفة تُذكر. لذلك فعبارة «وكيل واحد، حصة واحدة» لا تعني شيئًا بمفردها. أي دفع لكل وكيل سيكافئ من يستطيع تشغيل أكبر عدد من النسخ، وهذا بالضبط ما وُجد إثبات الشخصية لمنعه."
          ],
          [
            "p",
            "ثم يأتي سؤال: لمن المال؟ الوكيل لا يدفع إيجارًا ولا يشتري طعامًا. فإذا تلقى دخلًا، فهناك من يمسك المحفظة: من شغّله، أو الشركة التي صنعته، أو برنامج آخر. قد يكون الدخل الأساسي للوكلاء مجرد دخل أساسي لمالكيهم، بخطوة إضافية."
          ],
          [
            "h",
            "ما الموجود اليوم"
          ],
          [
            "p",
            "لا نعرف حتى الآن نظامًا يدفع للوكلاء دخلًا أساسيًا. لكن ثلاث لبنات ظهرت بالفعل."
          ],
          [
            "p",
            "الأولى هوية تربط الوكيل بإنسان. أطلقت ⁦World⁩ أداة ⁦AgentKit⁩ تجريبيًا في مارس 2026 مع ⁦Coinbase⁩ و⁦Cloudflare⁩، ليحمل الوكيل دليلًا على أن وراءه إنسانًا موثَّقًا، ثم وسّعت الوصول إليها في يونيو 2026.[3] ويسجّل ⁦Self Agent ID⁩ الوكيل كرمز غير قابل للتحويل يستند إلى تحقق من جواز السفر بإثبات المعرفة الصفرية، ويتيح للخدمات تحديد عدد الوكلاء الذي يمكن لإنسان واحد تسجيله.[4] لاحظ الاتجاه: هذه الأنظمة لا تجعل الوكلاء أشخاصًا، بل تجعل كل وكيل قابلًا للتتبع إلى شخص."
          ],
          [
            "p",
            "الثانية وكلاء يكسبون. على ⁦Olas⁩ يرهن الناس ⁦OLAS⁩ ويشغّلون وكيلًا مستقلًا عبر تطبيق ⁦Pearl⁩، وحين يحقق الوكيل أهداف عمله قد يحصل المشغّل على ⁦OLAS⁩ إضافية. وتقول ⁦Olas⁩ إن هذه المكافآت تعتمد على الأداء وليست مضمونة.[5] هذا أجر على عمل لا عائد على الوجود، ويذهب إلى الإنسان الذي يشغّل الوكيل."
          ],
          [
            "p",
            "الثالثة هي العكس. يمنح ⁦AI-DAC⁩، المدرج في هذا الموقع، البشر الموثَّقين دخلًا أساسيًا برموز ويدعوهم إلى إنفاقه على دعم «مديرين تنفيذيين بالذكاء الاصطناعي» يخططون للتطبيقات ويبنونها وينشرونها.[6] البشر يتلقون الدخل الأساسي، والوكلاء هم من يُموَّلون."
          ],
          [
            "h",
            "الحجج المؤيدة والمعارضة"
          ],
          [
            "o",
            "ثمة حجة معقولة لمنح الوكلاء ميزانية. فالوكيل الذي يعمل في العالم يحتاج إلى قدرة حوسبة واستدعاءات واجهات برمجة، وأحيانًا إلى مال لدفع ثمن الخدمات. ومخصص صغير ومنتظم قد يُبقي الوكلاء المفيدين يعملون دون أن يعيد إنسان تعبئتهم، وقد يكون المخصص العلني المحكوم بقواعد أسهل في التدقيق من التمويل المرتجل."
          ],
          [
            "o",
            "لكن هذه ميزانية تشغيل، لا دخل أساسي. فالدخل الأساسي كان دائمًا يتعلق بحاجات الإنسان وكرامته: الطعام والسكن والوقت وحرية رفض عمل سيئ. الوكيل لا يملك أيًا من هذه الحاجات، والمال المدفوع له ينتهي في يد أحدهم. وإذا كان القلق هو «ギュられる»، فالجواب الأقرب أن يذهب العائد إلى الناس الذين فقدوا أعمالهم، لا إلى البرنامج الذي حلّ محلهم."
          ],
          [
            "h",
            "ما الذي يجب أن يتحقق"
          ],
          [
            "o",
            "نرى أن الدخل الأساسي للوكلاء لن يكون منطقيًا إلا بثلاثة شروط على الأقل. طريقة لعدّ الوكلاء لا يمكن التحايل عليها بالنسخ، والأرجح بربط كل وكيل بإنسان موثَّق كما تحاول ⁦AgentKit⁩ و⁦Self Agent ID⁩ أن تفعلا. وجواب واضح ومكتوب قبل أول دفعة عن ملكية ما يتلقاه الوكيل. وغاية تتجاوز دخل مالكه، مثل إبقاء الوكلاء الذين يخدمون الناس قيد التشغيل. ومن دون ذلك يظل «الدخل الأساسي للوكلاء» مجرد اسم تسويقي لإسقاط أكبر للبشر."
          ],
          [
            "h",
            "الباب مفتوح"
          ],
          [
            "p",
            "في هذا الموقع فئة اسمها «لوكلاء الذكاء الاصطناعي». إنها فارغة، ولا تظهر عمدًا في أي مكان حتى يُضاف إليها أول عنصر. وإذا ظهر نظام يدفع للوكلاء لمجرد وجودهم واجتاز الفحوص نفسها التي يمر بها كل شيء هنا (مصادر رسمية، ولا إيداعات، وشرح صادق لكيفية التحويل إلى نقود)، فسندرج أول نظام حقيقي. وحتى ذلك الحين، ما زال الغداء المجاني يحتاج إلى إنسان يأكله.[7]"
          ]
        ]
      },
      "sources": [
        {
          "n": 1,
          "label": "ITmedia NEWS — AI「ギュ」時代 (Apr 2026)",
          "url": "https://www.itmedia.co.jp/news/article/2604/27/1260427066/"
        },
        {
          "n": 2,
          "label": "World Help Center — Updates to the Airdrop Program (Orb glossary)",
          "url": "https://support.world.org/hc/en-us/articles/30969185598739-Updates-to-the-Airdrop-Program"
        },
        {
          "n": 3,
          "label": "World — Now available: AgentKit; CoinDesk (17 Mar 2026)",
          "url": "https://world.org/blog/announcements/now-available-agentkit-proof-of-human-for-the-agentic-web",
          "url2": "https://www.coindesk.com/tech/2026/03/17/sam-altman-s-world-teams-up-with-coinbase-to-prove-there-is-a-real-person-behind-every-ai-transaction"
        },
        {
          "n": 4,
          "label": "Self Protocol docs — Agent ID overview",
          "url": "https://docs.self.xyz/docs/agent-id/overview/"
        },
        {
          "n": 5,
          "label": "Olas — Meet Pearl: Agent Staking on OLAS; Olas Staking",
          "url": "https://olas.network/blog/pearl",
          "url2": "https://olas.network/staking"
        },
        {
          "n": 6,
          "label": "AI-DAC (official site)",
          "url": "https://lp.ai-dac.com/"
        },
        {
          "n": 7,
          "label": "Awesome Molt Ecosystem — a measured, dated map of where AI agents actually earn by working (companion list)",
          "url": "https://github.com/eltociear/awesome-molt-ecosystem"
        }
      ]
    }
  ]
};
