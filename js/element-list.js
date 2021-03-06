// 周期表データ from http://ja.wikipedia.org/wiki/%E5%85%83%E7%B4%A0%E3%81%AE%E4%B8%80%E8%A6%A7
var elementLi = [
  {"Z":0,"Sym":"St","Japanese":"霊素","English":"Ghostium","Latin":"Spiritium","period":0,"group":0,"type":"Unknown chemical properties","weight_and_u":"0 (0)","derivation":"spirit（魂）"},
  {"Z":1,"Sym":"H","Japanese":"水素","English":"Hydrogen","Latin":"Hydrogenium","period":1,"group":1,"type":"Other non-metals","weight_and_u":"1.00794 (7) ","derivation":"性質：希: hydro（水）+gennao（生じる）"},
  {"Z":2,"Sym":"He","Japanese":"ヘリウム","English":"Helium","Latin":"Helium","period":1,"group":18,"type":"Noble gases","weight_and_u":"4.002602 (2) ","derivation":"場所：太陽上に発見、希: helios（太陽）"},
  {"Z":3,"Sym":"Li","Japanese":"リチウム","English":"Lithium","Latin":"Lithium","period":2,"group":1,"type":"Alkali metals","weight_and_u":"6.941 (2) ","derivation":"他：岩から採取、希: lithos（石）"},
  {"Z":4,"Sym":"Be","Japanese":"ベリリウム","English":"Beryllium","Latin":"Beryllium","period":2,"group":2,"type":"Alkaline earth metals","weight_and_u":"9.012182 (3) ","derivation":"鉱物：緑柱石beryl"},
  {"Z":5,"Sym":"B","Japanese":"ホウ素","English":"Boron","Latin":"Borium","period":2,"group":13,"type":"Metalloids","weight_and_u":"10.811 (7) ","derivation":"鉱物：ホウ砂buraq、ペルシア語: borax‎"},
  {"Z":6,"Sym":"C","Japanese":"炭素","English":"Carbon","Latin":"Carbonium","period":2,"group":14,"type":"Other non-metals","weight_and_u":"12.0107 (8) ","derivation":"性質：可燃物、梵: jval、羅: Carbo"},
  {"Z":7,"Sym":"N","Japanese":"窒素","English":"Nitrogen","Latin":"Nitrogenium","period":2,"group":15,"type":"Other non-metals","weight_and_u":"14.0067 (2) ","derivation":"鉱物：硝石nitrum（希: nitre（硝石）+gennao（生じる））"},
  {"Z":8,"Sym":"O","Japanese":"酸素","English":"Oxygen","Latin":"Oxygenium","period":2,"group":16,"type":"Other non-metals","weight_and_u":"15.9994 (3) ","derivation":"性質：酸の根元、希: oxys（酸味）+ gennao（生じる）"},
  {"Z":9,"Sym":"F","Japanese":"フッ素","English":"Fluorine","Latin":"Fluorum","period":2,"group":17,"type":"Halogens","weight_and_u":"18.9984032 (5) ","derivation":"鉱物：蛍石、羅: fluorite"},
  {"Z":10,"Sym":"Ne","Japanese":"ネオン","English":"Neon","Latin":"Neon","period":2,"group":18,"type":"Noble gases","weight_and_u":"20.1797 (6) ","derivation":"他：「新しい」、希: neos"},
  {"Z":11,"Sym":"Na","Japanese":"ナトリウム","English":"Sodium","Latin":"Natrium","period":3,"group":1,"type":"Alkali metals","weight_and_u":"22.98976928 (2) ","derivation":"性質：ヘブライ語: nether‎（洗剤）またはソーダ、亜: suda‎"},
  {"Z":12,"Sym":"Mg","Japanese":"マグネシウム","English":"Magnesium","Latin":"Magnesium","period":3,"group":2,"type":"Alkaline earth metals","weight_and_u":"24.3050 (6) ","derivation":"鉱物：マグネシアmagnesia alba（ギリシアのマグネシア地区）"},
  {"Z":13,"Sym":"Al","Japanese":"アルミニウム","English":"Aluminum","Latin":"Aluminium","period":3,"group":13,"type":"Post-transition metals","weight_and_u":"26.9815386 (8) ","derivation":"鉱物：明礬石alum、古名アルメンalimen"},
  {"Z":14,"Sym":"Si","Japanese":"ケイ素","English":"Silicon","Latin":"Silicium","period":3,"group":14,"type":"Metalloids","weight_and_u":"28.0855 (3) ","derivation":"鉱物：珪石、希: silex, silicis（火打石）"},
  {"Z":15,"Sym":"P","Japanese":"リン","English":"Phosphorus","Latin":"Phosphorus","period":3,"group":15,"type":"Other non-metals","weight_and_u":"30.973762 (2) ","derivation":"性質：発光、希: phos（光）+phoros（運ぶ者）"},
  {"Z":16,"Sym":"S","Japanese":"硫黄","English":"Sulfur","Latin":"Sulphur","period":3,"group":16,"type":"Other non-metals","weight_and_u":"32.065 (5) ","derivation":"他：ラテン語: sulfurは語源不明。希: theion（燻らせる）の説も"},
  {"Z":17,"Sym":"Cl","Japanese":"塩素","English":"Chlorine","Latin":"Chlorum","period":3,"group":17,"type":"Halogens","weight_and_u":"35.453 (2) ","derivation":"色：単体、希: chloros（黄緑）"},
  {"Z":18,"Sym":"Ar","Japanese":"アルゴン","English":"Argon","Latin":"Argon","period":3,"group":18,"type":"Noble gases","weight_and_u":"39.948 (1) ","derivation":"性質：化合しない、希: an ergon（働かない）"},
  {"Z":19,"Sym":"K","Japanese":"カリウム","English":"Potassium","Latin":"Kalium","period":4,"group":1,"type":"Alkali metals","weight_and_u":"39.0983 (1) ","derivation":"他：木灰から取れるため、亜: kaljan‎（灰）"},
  {"Z":20,"Sym":"Ca","Japanese":"カルシウム","English":"Calcium","Latin":"Calcium","period":4,"group":2,"type":"Alkaline earth metals","weight_and_u":"40.078 (4) ","derivation":"鉱物：石灰石calcite"},
  {"Z":21,"Sym":"Sc","Japanese":"スカンジウム","English":"Scandium","Latin":"Scandium","period":4,"group":3,"type":"Transition metals","weight_and_u":"44.955912 (6) ","derivation":"場所：発見者ニルソンの出身地スカンジナビア"},
  {"Z":22,"Sym":"Ti","Japanese":"チタン","English":"Titanium","Latin":"Titanium","period":4,"group":4,"type":"Transition metals","weight_and_u":"47.867 (1) ","derivation":"神話：地球最初の息子ティタンTitans"},
  {"Z":23,"Sym":"V","Japanese":"バナジウム","English":"Vanadium","Latin":"Vanadium","period":4,"group":5,"type":"Transition metals","weight_and_u":"50.9415 (1) ","derivation":"神話：スカンジナビアの神バナジスVanadis"},
  {"Z":24,"Sym":"Cr","Japanese":"クロム","English":"Chromium","Latin":"Chromium","period":4,"group":6,"type":"Transition metals","weight_and_u":"51.9961 (6) ","derivation":"色：化合物が多色、希: chroma（色）"},
  {"Z":25,"Sym":"Mn","Japanese":"マンガン","English":"Manganese","Latin":"Manganum","period":4,"group":7,"type":"Transition metals","weight_and_u":"54.938045 (5) ","derivation":"鉱物：マンガン鉱（磁鉄鉱）magnes"},
  {"Z":26,"Sym":"Fe","Japanese":"鉄","English":"Iron","Latin":"Ferrum","period":4,"group":8,"type":"Transition metals","weight_and_u":"55.845 (2) ","derivation":"鉱物：鉱物の一般名詞、希: aes、Feは羅: ferrumといわれる"},
  {"Z":27,"Sym":"Co","Japanese":"コバルト","English":"Cobalt","Latin":"Cobaltum","period":4,"group":9,"type":"Transition metals","weight_and_u":"58.933195 (5) ","derivation":"鉱石：コボルト、山の精・悪霊Koboldから"},
  {"Z":28,"Sym":"Ni","Japanese":"ニッケル","English":"Nickel","Latin":"Niccolum","period":4,"group":10,"type":"Transition metals","weight_and_u":"58.6934 (4) ","derivation":"性質：鉱石から銅が取れない、独: nickl（取り得がない）、Kupfernickel（銅の悪魔）"},
  {"Z":29,"Sym":"Cu","Japanese":"銅","English":"Copper","Latin":"Cuprum","period":4,"group":11,"type":"Transition metals","weight_and_u":"63.546 (3) ","derivation":"場所：古代の発掘地キプロス島、羅: Cuprum"},
  {"Z":30,"Sym":"Zn","Japanese":"亜鉛","English":"Zinc","Latin":"Zincum","period":4,"group":12,"type":"Transition metals","weight_and_u":"65.38 (2) ","derivation":"鉱物：亜鉛鉱石zink、独: zinke（尖ったもの）から"},
  {"Z":31,"Sym":"Ga","Japanese":"ガリウム","English":"Gallium","Latin":"Gallium","period":4,"group":13,"type":"Post-transition metals","weight_and_u":"69.723 (1) ","derivation":"場所：発見者ボアボードラン出身国フランスの古名gallia"},
  {"Z":32,"Sym":"Ge","Japanese":"ゲルマニウム","English":"Germanium","Latin":"Germanium","period":4,"group":14,"type":"Metalloids","weight_and_u":"72.64 (1) ","derivation":"場所：発見者ウィンクラー出身国ドイツの古名germania"},
  {"Z":33,"Sym":"As","Japanese":"ヒ素","English":"Arsenic","Latin":"Arsenicum","period":4,"group":15,"type":"Metalloids","weight_and_u":"74.92160 (2) ","derivation":"鉱物：雄黄、希: arsenihon"},
  {"Z":34,"Sym":"Se","Japanese":"セレン","English":"Selenium","Latin":"Selenium","period":4,"group":16,"type":"Other non-metals","weight_and_u":"78.96 (3) ","derivation":"性質：燃焼時に月のように輝く、希: selene（月） （女神セレーネーから）"},
  {"Z":35,"Sym":"Br","Japanese":"臭素","English":"Bromine","Latin":"Bromum","period":4,"group":17,"type":"Halogens","weight_and_u":"79.904 (1) ","derivation":"性質：単体の悪臭、希: bromos（悪臭）"},
  {"Z":36,"Sym":"Kr","Japanese":"クリプトン","English":"Krypton","Latin":"Krypton","period":4,"group":18,"type":"Noble gases","weight_and_u":"83.798 (2) ","derivation":"性質：見つけにくかったこと、希: chryptos（隠者）"},
  {"Z":37,"Sym":"Rb","Japanese":"ルビジウム","English":"Rubidium","Latin":"Rubidium","period":5,"group":1,"type":"Alkali metals","weight_and_u":"85.4678 (3) ","derivation":"色：炎色反応が紅い、ルビー"},
  {"Z":38,"Sym":"Sr","Japanese":"ストロンチウム","English":"Strontium","Latin":"Strontium","period":5,"group":2,"type":"Alkaline earth metals","weight_and_u":"87.62 (1) ","derivation":"場所：鉱物が採れた鉱山Strontian（スコットランド）"},
  {"Z":39,"Sym":"Y","Japanese":"イットリウム","English":"Yttrium","Latin":"Yttrium","period":5,"group":3,"type":"Transition metals","weight_and_u":"88.90585 (2) ","derivation":"場所：鉱物が発見されたイッテルビーYitterby（スウェーデン）"},
  {"Z":40,"Sym":"Zr","Japanese":"ジルコニウム","English":"Zirconium","Latin":"Zirconium","period":5,"group":4,"type":"Transition metals","weight_and_u":"91.224 (2) ","derivation":"鉱物：ジルコン、亜: zarqum‎（宝石の種類）"},
  {"Z":41,"Sym":"Nb","Japanese":"ニオブ","English":"Niobium","Latin":"Niobium","period":5,"group":5,"type":"Transition metals","weight_and_u":"92.90638 (2) ","derivation":"神話：タンタルと共存する（タンタロスの娘ニオベーNiobe）"},
  {"Z":42,"Sym":"Mo","Japanese":"モリブデン","English":"Molybdenum","Latin":"Molybdenum","period":5,"group":6,"type":"Transition metals","weight_and_u":"95.96 (2) ","derivation":"性質：鉛に似ている、希: molybdos（鉛）"},
  {"Z":43,"Sym":"Tc","Japanese":"テクネチウム","English":"Technetium","Latin":"Technetium","period":5,"group":7,"type":"Transition metals","weight_and_u":"[98.9063] ","derivation":"性質：人工的にしか作れない、希: technikos（人工の）"},
  {"Z":44,"Sym":"Ru","Japanese":"ルテニウム","English":"Ruthenium","Latin":"Ruthenium","period":5,"group":8,"type":"Transition metals","weight_and_u":"101.07 (2) ","derivation":"場所：発見地ロシアRusse"},
  {"Z":45,"Sym":"Rh","Japanese":"ロジウム","English":"Rhodium","Latin":"Rhodium","period":5,"group":9,"type":"Transition metals","weight_and_u":"102.90550 (2) ","derivation":"色：化合物のバラ色、希: rodeos"},
  {"Z":46,"Sym":"Pd","Japanese":"パラジウム","English":"Palladium","Latin":"Palladium","period":5,"group":10,"type":"Transition metals","weight_and_u":"106.42 (1) ","derivation":"天体：同じ頃発見された小惑星パラスpallas（女神アテーナーの別名から）"},
  {"Z":47,"Sym":"Ag","Japanese":"銀","English":"Silver","Latin":"Argentum","period":5,"group":11,"type":"Transition metals","weight_and_u":"107.8682 (2) ","derivation":"性質：光沢、ヘブライ語: aurum‎（光）、アングロサクソン語：sioltur"},
  {"Z":48,"Sym":"Cd","Japanese":"カドミウム","English":"Cadmium","Latin":"Cadmium","period":5,"group":12,"type":"Transition metals","weight_and_u":"112.411 (8) ","derivation":"鉱物：黄色鉱石、希: kadmeia（神話の人物カドモスの説も）"},
  {"Z":49,"Sym":"In","Japanese":"インジウム","English":"Indium","Latin":"Indium","period":5,"group":13,"type":"Post-transition metals","weight_and_u":"114.818 (3) ","derivation":"色：炎色反応から、羅: indicum（青藍色）"},
  {"Z":50,"Sym":"Sn","Japanese":"スズ","English":"Tin","Latin":"Stannum","period":5,"group":14,"type":"Post-transition metals","weight_and_u":"118.710 (7) ","derivation":"他：混同されていた合金、羅: stannum"},
  {"Z":51,"Sym":"Sb","Japanese":"アンチモン","English":"Antimony","Latin":"Stibium","period":5,"group":15,"type":"Metalloids","weight_and_u":"121.760 (1) ","derivation":"性質：単独で発見しにくい、鉱物：輝安鉱antimonium"},
  {"Z":52,"Sym":"Te","Japanese":"テルル","English":"Tellurium","Latin":"Tellurium","period":5,"group":16,"type":"Metalloids","weight_and_u":"127.60 (3) ","derivation":"天体：地球、羅: tellus（女神テルス）"},
  {"Z":53,"Sym":"I","Japanese":"ヨウ素","English":"Iodine","Latin":"Iodum","period":5,"group":17,"type":"Halogens","weight_and_u":"126.90447 (3) ","derivation":"色：蒸気が紫色、希: ioeides（スミレ色）"},
  {"Z":54,"Sym":"Xe","Japanese":"キセノン","English":"Xenon","Latin":"Xenon","period":5,"group":18,"type":"Noble gases","weight_and_u":"131.293 (6) ","derivation":"性質：揮発しにくさ）"},
  {"Z":55,"Sym":"Cs","Japanese":"セシウム","English":"Cesium","Latin":"Caesium","period":6,"group":1,"type":"Alkali metals","weight_and_u":"132.9054519 (2) ","derivation":"色：炎色反応から、羅: caesius（青）"},
  {"Z":56,"Sym":"Ba","Japanese":"バリウム","English":"Barium","Latin":"Barium","period":6,"group":2,"type":"Alkaline earth metals","weight_and_u":"137.327 (7) ","derivation":"性質：希: barys、鉱物：バライト（重い石）baryte"},
  {"Z":57,"Sym":"La","Japanese":"ランタン","English":"Lanthanum","Latin":"Lanthanum","period":6,"group":3,"type":"Lanthanides","weight_and_u":"138.90547 (7) ","derivation":"性質：見つけにくかったこと、希: lanthanein（隠れている）"},
  {"Z":58,"Sym":"Ce","Japanese":"セリウム","English":"Cerium","Latin":"Cerium","period":6,"group":3,"type":"Lanthanides","weight_and_u":"140.116 (1) ","derivation":"天体：小惑星セレス）、鉱物：セル石cerite"},
  {"Z":59,"Sym":"Pr","Japanese":"プラセオジム","English":"Praseodymium","Latin":"Praseodymium","period":6,"group":3,"type":"Lanthanides","weight_and_u":"140.90765 (2) ","derivation":"色：化合物が緑色、希: praseo（ニラ）+ didymos（双子）"}
];
