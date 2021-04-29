
import {transformRoutes,omitContent} from '../utils'
import {data} from '../seed'


const mockRoutes = [
    {
    content: "<p><strong>Поръчка</strong></p>\r\n<p> </p>\r\n<ul >\r\n<li>Как мога да поръчам?</li>\r\n</ul>\r\n<p>Вие можете да поръчате лесно и удобно през нашия онлайн магазин <strong>kidso.bg</strong>.  Щом намерите продукта, който Ви интересува го добавете в количката.  След това завършете поръчката, като попълните Ваша ел. поща, адрес за доставка, телефон и начин на плащане.</p>\r\n<p>Ще получите на електронната си поща подробности за Вашата поръчка и номер на товарителница, по който можете да проследите пратката си.</p>\r\n<p>Възможно е да поръчате и по телефона.  Обадете се на <strong>0700 1234 2</strong> или на <strong>0999 222 333</strong> и наш колега ще Ви помогне в избора и поръчката.</p>\r\n<p> </p>\r\n<ul >\r\n<li>Защо да купя онлайн?</li>\r\n</ul>\r\n<p>Пестите време.  Можете много лесно и бързо да сравнявате характеристики и цени на продукти.  В електронната си поща имате пълна история на Вашите покупки и лесно можете да поръчвате отново, продукти, които са Ви необходими и харесвате.</p>\r\n<p> </p>\r\n<ul >\r\n<li>Каква информация предоставям при поръчка онлайн?</li>\r\n</ul>\r\n<p>Необходими са ни Вашето име и фамилия, адрес за доставка, електронна поща и телефон.  Уверете се, че тези данни са попълнени точно и вярно – това ще Ви гарантира навременна доставка от нашите партньори – куриери.</p>\r\n<p> </p>\r\n<ul >\r\n<li>Мога ли да откажа поръчка?</li>\r\n</ul>\r\n<p>Вие можете да откажете поръчката си по всяко време.  Препоръчваме Ви да го направите възможно най-бързо.  Обадете се на <strong>0700 1234 2</strong> или на <strong>0999 222 333</strong> и наш колега ще Ви помогне.  Ако поръчката Ви е вече на път, трябва да се свържете с куриерската фирма.  При отказ на поръчка е възможно да Ви бъде начислена такса за връщане на пратката.</p>\r\n<p> </p>\r\n<ul >\r\n<li>Поръчката ми налична ли е?</li>\r\n</ul>\r\n<p>Всички продукти, които виждате на <strong>kidso.bg</strong> са налични.  Така гарантираме, че избраното от Вас ще бъде доставено бързо и точно.</p>\r\n<p> </p>\r\n<p>Имам въпроси относно продукти, които искам да поръчам.  Как да постъпя?</p>\r\n<p>Обадете се на <strong>0700 1234 2</strong> или на <strong>0999 222 333</strong> и наш колега ще Ви отговори.  Можете и да ни пишете на <a href=\"mailto:info@kidso.bg\">info@kidso.bg</a>.</p>\r\n<p> <br /><strong>Доставка<br /></strong> </p>\r\n<ul >\r\n<li>Колко е стандартния срок на доставка?</li>\r\n</ul>\r\n<p>Ние доставяме между 1 и 2 работни дни.  Възможно е доставката Ви да пристигне и по-бързо.  Това най-често се случва в големите градове.</p>\r\n<p>При големи кампании или празници са възможни забавяния на куриерската услуга.  За тези случаи ние ще Ви уведомим предварително.</p>\r\n<p> </p>\r\n<ul >\r\n<li>Какви документи получавам с пратката си?</li>\r\n</ul>\r\n<p>Заедно с поръчаните от Вас стоки получавате от <strong>kidso.bg</strong> Протокол (опис) на поръчаните от Вас стоки, товарителница, ваучер за връщане, фактура (когато сте поискали такава), касова бележка (без случаите на ППП – пощенски паричен превод и, гаранционна карта (когато това е приложимо).</p>\r\n<p>Препоръчваме Ви да запазите тези документи – те ще са Ви необходими в случай, че решите да връщате стоки на <strong>kidso.bg</strong> или имате гаранционна рекламация.  Товарителницата, фактурата или касовата бележка е документът, който удостоверява датата на започване да тече гаранционния срок.</p>\r\n<p> <br /><strong>Връщане<br /></strong><strong> </strong></p>\r\n<ul >\r\n<li>Мога ли да върна продукт?</li>\r\n</ul>\r\n<p>Да.  Вие можете да върнете продукт в рамките на 30 (тридесет) дни от датата на получаването.</p>\r\n<p> </p>\r\n<ul >\r\n<li>Какви са изискванията за връщане на продукт?</li>\r\n</ul>\r\n<p>За да върнете продукт той не трябва да е ремонтиран, да няма следи от употреба, трябва да е в оригиналната си опаковка, всички оригинални аксесоари да бъдат налични.  Ако продуктът е бил придружен с подарък, то е необходимо да се върне и подаръка.</p>\r\n<p> </p>\r\n<ul >\r\n<li>Има ли продукти, които не могат да се връщат?</li>\r\n</ul>\r\n<p>Няма право на връщане за бельо, хранителните, козметичните и санитарни продукти като добавки, пелени, мокри кърпички, продукти за интимна женска хигиена и други продукти, които, губят свойствата и ефективността си след разопаковане.</p>\r\n<p> </p>\r\n<ul >\r\n<li>Безплатно ли е връщането?</li>\r\n</ul>\r\n<p>Ако върнете продукт и го замените с друг (връщане със замяна) куриерските разходи по връщането са за сметка на <strong>kidso.bg</strong>.</p>\r\n<p> </p>\r\n<ul >\r\n<li>Кога връщането не е безплатно?</li>\r\n</ul>\r\n<p>При връщане без замяна за нов продукт, когато Ви връщаме заплатената сума - куриерските разходи се заплащат от клиента.</p>\r\n<p> </p>\r\n<ul >\r\n<li>Как се връща продукт?</li>\r\n</ul>\r\n<p>Връщането се осъществява в няколко лесни стъпки:</p>\r\n<ol>\r\n<li>Върнете продукта в оригиналната опаковка;<br /> </li>\r\n<li>Попълнете бланката за връщане – попълнете точно личните си данни, банковата си сметка, както и номер на Вашата поръчка;<br /> </li>\r\n<li>Обадете се на Спиди, за да заявите връщане;<br /> </li>\r\n<li>Дайте информация на куриера за номера на ваучера за връщане, за размера на пратката и приблизителното и тегло;<br /> </li>\r\n<li>Кажете на куриера, че връщането е за сметка на „всичко за децата“. По този начин ще използвате нашите по-ниски цени за куриер при връщането си;</li>\r\n</ol>\r\n<p> </p>\r\n<p>Използвайте указанията на „Бланка за връщане на продукт“, която сте получили заедно с продукта.  Заедно с „Бланка за връщане на продукт“ сте получили и „Ваучер за връщане“.  Него трябва да предоставите на куриера.</p>\r\n<p>Ако  имате затруднения можете да свържете с нас на <strong>0700 1234 2</strong> или на <strong>0999 222 333</strong> и наш колега ще Ви помогне.</p>\r\n<p><strong><br />Плащания</strong></p>\r\n<ul >\r\n<li>Какви начини на плащане приемате?</li>\r\n</ul>\r\n<p>Можете да платите на куриера в брой, можете да платите с банков превод, можете да платите и с кредитна или дебитна карта или чрез Pay Pal.</p>\r\n<p> </p>\r\n<ul >\r\n<li>Как правя плащане в брой?</li>\r\n</ul>\r\n<p>Плащанията в брой са директно на куриера при доставката.  Те са наложен платеж или пощенски паричен превод;</p>\r\n<p> </p>\r\n<ul >\r\n<li>Как мога да платя по банка?</li>\r\n</ul>\r\n<p>Вие можете да преведете дължимата сума по банкова сметка <span >BG17BPBI79421022941701</span>.  Всички срокове започват да текат след получаването на Вашия банков превод при нас.</p>\r\n<p> </p>\r\n<ul >\r\n<li>С какви карти работите?</li>\r\n</ul>\r\n<p>Вие можете да платите със всички по-популярни банкови карти – <strong>Maestro, Visa, Visa Electron, Master Card, Diners Club, Discover</strong>.</p>\r\n<p><strong><br />Връщания на пари<br /></strong> </p>\r\n<ul >\r\n<li>Възстановявате ли цялата сума?</li>\r\n</ul>\r\n<p>При връщане със замяна ще можете да използвате цялата сума за пазаруване.  При връщане без замяна ще възстановим сумата Ви, като приспаднем разходите за куриер по връщането.  При възстановяване на суми чрез системата Easy Pay комисионните по превода са за Ваша сметка.</p>\r\n<p> </p>\r\n<ul >\r\n<li>Как получавам сумата си?</li>\r\n</ul>\r\n<p>Можете да получите сумата си по банкова сметка или чрез Easy Pay.  При възстановяване на сумата по банков път всички такси и комисионни са за сметка на <strong>kidso.bg</strong>.</p>\r\n<p>При възстановяване на сумата чрез Easy Pay се прилага следната тарифа за сметка на получателя:</p>\r\n<p> </p>\r\n<table cellspacing=\"10\" cellpadding=\"10\" border=\"1\" width=\"100%\">\r\n<tbody>\r\n<tr>\r\n<td colspan=\"2\" align=\"center\">\r\n<p>Tарифа за извършване на преводи чрез EasyРay</p>\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\n<p>Размер на превода</p>\r\n</td>\r\n<td>\r\n<p>Такса за превода</p>\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\n<p>5.01 - 50лв.</p>\r\n</td>\r\n<td>\r\n<p>0.61 лв.</p>\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\n<p>50.01 - 100лв.</p>\r\n</td>\r\n<td>\r\n<p>1.10 лв.</p>\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\n<p>100.01 - 250лв.</p>\r\n</td>\r\n<td>\r\n<p>2.72 лв.</p>\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\n<p>250.01 - 500лв.</p>\r\n</td>\r\n<td>\r\n<p>3.77 лв.</p>\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\n<p>500.01 - 1000лв.</p>\r\n</td>\r\n<td>\r\n<p>4.84 лв.</p>\r\n</td>\r\n</tr>\r\n</tbody>\r\n</table>\r\n<p> </p>\r\n<ul >\r\n<li>В какъв срок получавам сумата си?</li>\r\n</ul>\r\n<p>Срокът за връщане на пари е <strong>14 дни</strong> от датата на получаване на върнатата пратка при нас.</p>\r\n<p><strong><br />Регистрация<br /><br /></strong></p>\r\n<ul >\r\n<li>Защо да се регистрирам?</li>\r\n</ul>\r\n<p>Ако имате профил при нас, ще пазарувате по-лесно и бързо.  Няма да е нужно всеки път да въвеждате Вашия адрес.</p>\r\n<p>Можете да получавате актуална информация от нас за нашите най-добри предложения и нови продукти.</p>\r\n<p> </p>\r\n<ul >\r\n<li>Защо да предоставям рождената дата и възрастта на детето/децата ми?</li>\r\n</ul>\r\n<p>Ще можем да Ви формулираме по-точна и адекватни предложения, съобразени с пола и възрастта на Вашето дете.</p>\r\n<p>Когато знаем рождения ден на Вашето дете, можем да Ви направим специални предложения по този повод.</p>",
    metaDescription: "Често задавани въпроси за Kidso.bg",
    metaTitle: "Често задавани въпроси",
    title: "Често задавани въпроси",
    url: "/content/chesto-zadavani-vaprosi.html"
  },
  {
    content: "<p>Вие можете да замените закупен от вас продукт в рамките на <strong>30 календарни дни</strong>. </p>\r\n<p class=\"page-cms-row text-align-mobile\"><img src=\"https://kidso.bg/img/cms/footer-pages/calendar.svg\" alt=\"30 календарни дни\" height=\"80\" /></p>\r\n<p>При замяна за нов продукт, който е на стойност по-голяма или равна на първоначалната, разходите за куриера по връщането са за сметка <strong>kidso.bg</strong>.</p>\r\n<p>Условия, на които продукта трябва да отговаря, за да се замени в горния срок:</p>\r\n<ul >\r\n<li>Да не е ремонтиран;</li>\r\n<li>Да няма следи от употреба (одрасквания, износване, удари и др.);</li>\r\n<li>Опаковката да не е увредена;</li>\r\n<li>Всички оригинални аксесоари да бъдат налични;</li>\r\n<li>Ако продуктът е бил придружен с подарък, то е необходимо да се върне и подаръка;</li>\r\n</ul>\r\n<p>Няма право на замяна за бельо, хранителните, козметичните и санитарни продукти като добавки, пелени, мокри кърпички, продукти за интимна женска хигиена и други продукти, които, губят свойствата и ефективността си след разопаковане.</p>\r\n<p>Ако продуктът отговаря на горните условия, връщането е лесно - използвайте указанията на „Бланка за връщане на продукт“, която сте получили заедно с продукта.</p>\r\n<p>Заедно с „Бланка за връщане на продукт“ сте получили и „Ваучер за връщане“ на Спиди, в който е важен номера на ваучера, започващ с RV...</p>\r\n<p><a><img src=\"https://kidso.bg/img/cms/images/return_form_vaucher_speedy.gif\" alt=\"Примерен ваучер\" width=\"310\" /> </a></p>\r\n<div id=\"return_form_vaucher\" class=\"modal fade\">\r\n<div class=\"modal-dialog\">\r\n<div class=\"modal-content\">\r\n<div class=\"modal-header\"><button type=\"button\" class=\"close\"><span>×</span></button></div>\r\n<div class=\"modal-body\"><img src=\"https://kidso.bg/img/cms/images/return_form_vaucher_speedy.gif\" alt=\"Примерен ваучер\" class=\"img-responsive\" /></div>\r\n</div>\r\n</div>\r\n</div>\r\n<p>На гърба на бланката ще можете да опишете желаната от Вас замяна.</p>\r\n<p><a><img src=\"https://kidso.bg/img/cms/images/return_form_blanka.gif\" alt=\"\" width=\"310\" /> </a></p>\r\n<div id=\"exchange_form_vaucher\" class=\"modal fade\">\r\n<div class=\"modal-dialog\">\r\n<div class=\"modal-content\">\r\n<div class=\"modal-header\"><button type=\"button\" class=\"close\"><span>×</span></button></div>\r\n<div class=\"modal-body\"><img src=\"https://kidso.bg/img/cms/images/return_form_blanka.gif\" alt=\"\" class=\"img-responsive\" /></div>\r\n</div>\r\n</div>\r\n</div>\r\n<p><a href=\"https://kidso.bg/pdf/bg/return_form_25_11_2019.pdf\" target=\"_blank\">Изтегли бланка за връщане на продукт с ваучер на Спиди.</a></p>",
    metaDescription: "Замяна на стока",
    metaTitle: "Замяна на стока",
    title: "Замяна на стока",
    url: "/content/zamyana-na-stoka.html"
}
]

test('Should transform and flat the routes as intended', () => {
   
    expect(transformRoutes(data).map(omitContent)).toStrictEqual(mockRoutes.map(omitContent));

});