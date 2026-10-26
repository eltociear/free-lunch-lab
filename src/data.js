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
      "code": "KgChqUuJic",
      "ref": "https://goodwallet.xyz?inviteCode=KgChqUuJic&chainId=50",
      "trust": {
        "cash": "partial",
        "price": "yes",
        "operator": "yes"
      },
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
      "trust": {
        "cash": "unknown",
        "price": "unknown",
        "operator": "yes"
      },
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
      "code": "d22fj9hx",
      "ref": "https://i.mec.me/ja-JP/?c=d22fj9hx",
      "trust": {
        "cash": "partial",
        "price": "no",
        "operator": "unknown"
      },
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
      "code": "C66SPN",
      "ref": "https://ac-tech.onelink.me/8enJ/qwujwndl?pid=source&af_dp=biomatrix%3A%2F%2F&deep_link_sub1=C66SPN",
      "trust": {
        "cash": "unknown",
        "price": "unknown",
        "operator": "unknown"
      },
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
      "code": "",
      "ref": "https://hapitas.jp/appinvite/?i=25819964",
      "trust": {
        "cash": "yes",
        "price": "na",
        "operator": "yes"
      },
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
      "code": "",
      "ref": "https://wavee.world/invitation/b96d00e6-b802-4a1b-8a66-2e3854a01ffd",
      "trust": {
        "cash": "partial",
        "price": "na",
        "operator": "yes"
      },
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
      "added": "2026-10-09",
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
      "trust": {
        "cash": "partial",
        "price": "na",
        "operator": "yes"
      },
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
      "trust": {
        "cash": "partial",
        "price": "yes",
        "operator": "yes"
      },
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
      "trust": {
        "cash": "yes",
        "price": "na",
        "operator": "yes"
      },
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
      "trust": {
        "cash": "yes",
        "price": "na",
        "operator": "yes"
      },
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
      "trust": {
        "cash": "partial",
        "price": "yes",
        "operator": "yes"
      },
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
      "trust": {
        "cash": "unknown",
        "price": "no",
        "operator": "unknown"
      },
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
      "trust": {
        "cash": "unknown",
        "price": "unknown",
        "operator": "yes"
      },
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
      "trust": {
        "cash": "yes",
        "price": "na",
        "operator": "yes"
      },
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
      "trust": {
        "cash": "partial",
        "price": "unknown",
        "operator": "yes"
      },
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
      "trust": {
        "cash": "no",
        "price": "na",
        "operator": "unknown"
      },
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
      "trust": {
        "cash": "yes",
        "price": "yes",
        "operator": "yes"
      },
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
      "trust": {
        "cash": "partial",
        "price": "yes",
        "operator": "unknown"
      },
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
      "trust": {
        "cash": "partial",
        "price": "yes",
        "operator": "partial"
      },
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
      "trust": {
        "cash": "partial",
        "price": "yes",
        "operator": "yes"
      },
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
      "trust": {
        "cash": "yes",
        "price": "na",
        "operator": "yes"
      },
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
      "trust": {
        "cash": "unknown",
        "price": "na",
        "operator": "yes"
      },
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
      "trust": {
        "cash": "partial",
        "price": "na",
        "operator": "partial"
      },
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
      "trust": {
        "cash": "partial",
        "price": "na",
        "operator": "yes"
      },
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
      "trust": {
        "cash": "unknown",
        "price": "yes",
        "operator": "yes"
      },
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
      "trust": {
        "cash": "partial",
        "price": "yes",
        "operator": "partial"
      },
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
      "app": "ほったらかしアプリ"
    },
    "en": {
      "all": "All",
      "crypto-bi": "Crypto UBI",
      "exchange": "Crypto exchanges",
      "finance": "Cards & banks",
      "pointsite": "Cashback sites",
      "career": "Job matching",
      "app": "Passive apps"
    },
    "hi": {
      "all": "सभी",
      "crypto-bi": "क्रिप्टो UBI",
      "exchange": "क्रिप्टो एक्सचेंज",
      "finance": "कार्ड और बैंक",
      "pointsite": "कैशबैक साइट",
      "career": "जॉब मैचिंग",
      "app": "पैसिव ऐप"
    },
    "zh": {
      "all": "全部",
      "crypto-bi": "加密货币 UBI",
      "exchange": "加密货币交易所",
      "finance": "信用卡与银行",
      "pointsite": "返利网站",
      "career": "工作匹配",
      "app": "躺赚应用"
    },
    "es": {
      "all": "Todos",
      "crypto-bi": "UBI cripto",
      "exchange": "Exchanges cripto",
      "finance": "Tarjetas y bancos",
      "pointsite": "Cashback",
      "career": "Empleo",
      "app": "Apps pasivas"
    },
    "ar": {
      "all": "الكل",
      "crypto-bi": "دخل أساسي مشفّر",
      "exchange": "منصات تداول",
      "finance": "بطاقات وبنوك",
      "pointsite": "استرداد نقدي",
      "career": "توظيف",
      "app": "تطبيقات سلبية"
    },
    "de": {
      "all": "Alle",
      "crypto-bi": "Krypto-Grundeinkommen",
      "exchange": "Krypto-Börsen",
      "finance": "Karten & Banken",
      "pointsite": "Cashback-Seiten",
      "career": "Jobvermittlung",
      "app": "Passive Apps"
    }
  },
  "T": {
    "ja": {
      "brand": "不労所得<span>研究所</span>",
      "navList": "一覧",
      "navHow": "使い方",
      "navFaq": "よくある質問",
      "pr": "このページには紹介リンク・紹介コードが含まれます。経由して登録すると、運営者にも特典が入ることがあります。",
      "eyebrow": "ベーシックインカム系アプリ ＆ 紹介特典まとめ",
      "h1": "登録するだけで<br><em>入金</em>される<br>サービス帳。",
      "lede": "毎日・毎月トークンが届く<b>暗号資産のベーシックインカム</b>から、紹介経由でポイントや報酬がもらえる<b>ポイ活サイト・招待制サービス</b>まで。紹介リンクつきでまとめました。",
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
      "a4": "「海外OK」の付いたサービス（GoodDollar、ME Pass、BioMatrix、Grass、Honeygain、Sweatcoin、Pawns.app、Pi Network、Delta Kim、WAVEE、InterLink、Mein Grundeinkommen、Ğ1、Circles、Palai、Dotare、ORO、AXO、AI-DAC、Gradido、WowApp、Billions、Idena）は海外からも使えます。Ubiquitus はアメリカ在住者のみ、そのほかは日本在住者向けです。",
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
      "metaDesc": "人間であるだけでお金がもらえる、ベーシックインカム型のアプリやプロジェクト（Ğ1、Circles、Gradido、Idena など）の一覧。リスクや換金のしやすさもあわせて紹介。一部は紹介リンクです。",
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
      "tagline": "タダ飯は、ある。"
    },
    "en": {
      "brand": "Free Lunch <span>Lab</span>",
      "brandPlain": "Free Lunch Lab",
      "navList": "Services",
      "navHow": "How it works",
      "navFaq": "FAQ",
      "pr": "This page contains referral links and codes. If you sign up through them, the site owner may also receive a bonus.",
      "eyebrow": "Crypto UBI apps & referral bonuses",
      "h1": "Sign up once.<br>Get <em>paid</em><br>while you sleep.",
      "lede": "From <b>crypto basic income</b> projects that send tokens every day or month, to <b>cashback sites and invite-only services</b> that reward you for joining through a referral. All in one list.",
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
      "a4": "Services marked “Global” (GoodDollar, ME Pass, BioMatrix, Grass, Honeygain, Sweatcoin, Pawns.app, Pi Network, Delta Kim, WAVEE, InterLink, Mein Grundeinkommen, Ğ1, Circles, Palai, Dotare, ORO, AXO, AI-DAC, Gradido, WowApp, Billions, Idena) work outside Japan. Ubiquitus is for US residents only; the rest are for Japan residents.",
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
      "metaDesc": "Apps and projects that pay you just for being human, basic-income style, like Ğ1, Circles, Gradido and Idena. Risks and cash-out noted. Some referral links.",
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
      "tagline": "There is such a thing as a free lunch."
    },
    "hi": {
      "brand": "Free Lunch <span>Lab</span>",
      "brandPlain": "Free Lunch Lab",
      "navList": "सेवाएँ",
      "navHow": "कैसे इस्तेमाल करें",
      "navFaq": "सवाल-जवाब",
      "pr": "इस पेज पर रेफ़रल लिंक और कोड हैं। इनके ज़रिए साइन अप करने पर साइट चलाने वाले को भी बोनस मिल सकता है।",
      "eyebrow": "क्रिप्टो UBI ऐप और रेफ़रल बोनस",
      "h1": "एक बार साइन अप करें।<br>सोते हुए भी<br><em>कमाई</em> पाएँ।",
      "lede": "हर दिन या हर महीने टोकन भेजने वाले <b>क्रिप्टो बेसिक इनकम</b> प्रोजेक्ट से लेकर, रेफ़रल से जुड़ने पर इनाम देने वाली <b>कैशबैक साइटों और इनवाइट-ओनली सेवाओं</b> तक। सब एक ही सूची में।",
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
      "a4": "“ग्लोबल” वाली सेवाएँ (GoodDollar, ME Pass, BioMatrix, Grass, Honeygain, Sweatcoin, Pawns.app, Pi Network, Delta Kim, WAVEE, InterLink, Mein Grundeinkommen, Ğ1, Circles, Palai, Dotare, ORO, AXO, AI-DAC, Gradido, WowApp, Billions, Idena) जापान के बाहर भी चलती हैं। Ubiquitus सिर्फ़ अमेरिकी निवासियों के लिए है; बाकी सेवाएँ जापान में रहने वालों के लिए हैं।",
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
      "metaDesc": "सिर्फ़ इंसान होने पर पैसे देने वाले बेसिक इनकम जैसे ऐप और प्रोजेक्ट (जैसे Ğ1, Circles, Gradido, Idena), जोखिम और नकद में बदलने की असलियत के साथ। कुछ लिंक रेफ़रल लिंक हैं।",
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
      "tagline": "मुफ़्त का लंच भी होता है।"
    },
    "zh": {
      "brand": "Free Lunch <span>Lab</span>",
      "brandPlain": "Free Lunch Lab（免费午餐研究所）",
      "navList": "服务",
      "navHow": "使用方法",
      "navFaq": "常见问题",
      "pr": "本页包含推荐链接和推荐码。通过它们注册时，网站运营者也可能获得奖励。",
      "eyebrow": "加密货币 UBI 应用与推荐奖励",
      "h1": "注册一次，<br>躺着也能<br><em>到账</em>。",
      "lede": "从每天或每月发放代币的<b>加密货币基本收入</b>项目，到通过推荐加入即可获得奖励的<b>返利网站和邀请制服务</b>，一页看全。",
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
      "a4": "标有“全球”的服务（GoodDollar、ME Pass、BioMatrix、Grass、Honeygain、Sweatcoin、Pawns.app、Pi Network、Delta Kim、WAVEE、InterLink、Mein Grundeinkommen、Ğ1、Circles、Palai、Dotare、ORO、AXO、AI-DAC、Gradido、WowApp、Billions、Idena）在日本以外也能使用。Ubiquitus 仅限美国居民，其余服务面向日本居民。",
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
      "metaDesc": "收录只因“你是人”就能领钱的基本收入型应用与项目（如 Ğ1、Circles、Gradido、Idena），并注明风险和能否兑现。部分为推荐链接。",
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
      "tagline": "天下竟然有免费的午餐。"
    },
    "es": {
      "brand": "Free Lunch <span>Lab</span>",
      "brandPlain": "Free Lunch Lab",
      "navList": "Servicios",
      "navHow": "Cómo funciona",
      "navFaq": "Preguntas",
      "pr": "Esta página contiene enlaces y códigos de referido. Si te registras con ellos, el responsable del sitio también puede recibir una bonificación.",
      "eyebrow": "Apps de renta básica cripto y bonos por referido",
      "h1": "Regístrate una vez.<br>Cobra<br>mientras <em>duermes</em>.",
      "lede": "Desde proyectos de <b>renta básica cripto</b> que envían tokens cada día o cada mes, hasta <b>webs de cashback y servicios por invitación</b> que te premian por unirte con un referido. Todo en una lista.",
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
      "a4": "Los servicios marcados como «Global» (GoodDollar, ME Pass, BioMatrix, Grass, Honeygain, Sweatcoin, Pawns.app, Pi Network, Delta Kim, WAVEE, InterLink, Mein Grundeinkommen, Ğ1, Circles, Palai, Dotare, ORO, AXO, AI-DAC, Gradido, WowApp, Billions, Idena) funcionan fuera de Japón. Ubiquitus es solo para residentes en EE. UU.; el resto son para residentes en Japón.",
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
      "metaDesc": "Apps y proyectos que te pagan solo por ser humano, tipo renta básica: Ğ1, Circles, Gradido, Idena y más. Con riesgos y cómo cobrar. Hay enlaces de referido.",
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
      "tagline": "Pues sí: hay almuerzo gratis."
    },
    "ar": {
      "brand": "Free Lunch <span>Lab</span>",
      "brandPlain": "⁦Free Lunch Lab⁩ (مختبر الغداء المجاني)",
      "navList": "الخدمات",
      "navHow": "طريقة الاستخدام",
      "navFaq": "الأسئلة الشائعة",
      "pr": "تحتوي هذه الصفحة على روابط ورموز إحالة. إذا سجّلت عبرها، فقد يحصل صاحب الموقع أيضًا على مكافأة.",
      "eyebrow": "تطبيقات الدخل الأساسي بالعملات المشفرة ومكافآت الإحالة",
      "h1": "سجّل مرة واحدة.<br>واحصل على <em>دخل</em><br>وأنت نائم.",
      "lede": "من مشاريع <b>الدخل الأساسي بالعملات المشفرة</b> التي ترسل رموزًا كل يوم أو كل شهر، إلى <b>مواقع استرداد النقود والخدمات المتاحة بالدعوة فقط</b> التي تكافئك على الانضمام عبر إحالة. كل ذلك في قائمة واحدة.",
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
      "a4": "الخدمات التي تحمل علامة «عالمي» (GoodDollar وME Pass وBioMatrix وGrass وHoneygain وSweatcoin وPawns.app وPi Network وDelta Kim وWAVEE وInterLink وMein Grundeinkommen وĞ1 وCircles وPalai وDotare وORO وAXO وAI-DAC وGradido وWowApp وBillions وIdena) تعمل خارج اليابان. أما ⁦Ubiquitus⁩ فللمقيمين في الولايات المتحدة فقط، والبقية للمقيمين في اليابان.",
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
      "metaDesc": "تطبيقات ومشاريع تدفع لك لمجرد أنك إنسان على طريقة الدخل الأساسي، مثل ⁦Ğ1⁩ و⁦Circles⁩ و⁦Gradido⁩ و⁦Idena⁩، مع ذكر المخاطر وإمكانية التحويل إلى نقود. بعض الروابط روابط إحالة.",
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
      "tagline": "الغداء المجاني موجود فعلًا."
    },
    "de": {
      "brand": "Free Lunch <span>Lab</span>",
      "brandPlain": "Free Lunch Lab",
      "navList": "Dienste",
      "navHow": "So geht’s",
      "navFaq": "FAQ",
      "pr": "Diese Seite enthält Empfehlungslinks und -codes. Wenn du dich darüber anmeldest, kann auch der Betreiber dieser Seite einen Bonus bekommen.",
      "eyebrow": "Krypto-Grundeinkommen-Apps & Empfehlungsboni",
      "h1": "Einmal anmelden.<br><em>Geld</em> bekommen,<br>während du schläfst.",
      "lede": "Von <b>Krypto-Grundeinkommen</b>-Projekten, die jeden Tag oder jeden Monat Token verschicken, bis zu <b>Cashback-Seiten und Diensten auf Einladung</b>, die dich für die Anmeldung über eine Empfehlung belohnen. Alles in einer Liste.",
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
      "a4": "Dienste mit der Markierung „Weltweit“ (GoodDollar, ME Pass, BioMatrix, Grass, Honeygain, Sweatcoin, Pawns.app, Pi Network, Delta Kim, WAVEE, InterLink, Mein Grundeinkommen, Ğ1, Circles, Palai, Dotare, ORO, AXO, AI-DAC, Gradido, WowApp, Billions, Idena) funktionieren auch außerhalb Japans. Ubiquitus ist nur für Menschen mit Wohnsitz in den USA; die übrigen sind für Menschen mit Wohnsitz in Japan.",
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
      "metaDesc": "Apps und Projekte, die dich fürs Menschsein bezahlen, wie ein Grundeinkommen: Ğ1, Circles, Gradido, Idena. Mit Risiken und Auszahlung. Teils Empfehlungslinks.",
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
      "tagline": "Es gibt doch ein kostenloses Mittagessen."
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
  ]
};
