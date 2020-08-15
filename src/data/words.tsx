export type TWordUnmapped = {
  word: string,
  pronouncing: string,
  translation: string,
  sex?: string,
}

export type TWord = TWordUnmapped & {
  id: number,
}

export const wordsClass5 = [
  {
    word: 'נחמד',
    pronouncing: 'нэхмад',
    translation: 'отличный',
  },
  {
    word: 'כותב',
    pronouncing: 'котэв',
    translation: 'писать',
  },
  {
    word: 'קורא',
    pronouncing: 'корэ',
    translation: 'читать',
  },
  {
    word: 'הפסקה',
    pronouncing: 'хафсака',
    translation: 'перерыв',
  },
  {
    word: 'שפה',
    pronouncing: 'сафа',
    translation: 'язык',
  },
  {
    word: 'מקצוע',
    pronouncing: 'микцоа',
    translation: 'профессия',
  },
  {
    word: 'מתכנת',
    pronouncing: 'мэтахэнэт',
    translation: 'программист',
  },
  {
    word: 'רווק',
    pronouncing: 'равак',
    translation: 'холостой / одинокий',
  },
  {
    word: 'מקום',
    pronouncing: 'маком',
    translation: 'место',
  },
  {
    word: 'לידה',
    pronouncing: 'лэйда',
    translation: 'рождение',
  },
  {
    word: 'תאריך',
    pronouncing: 'тарих',
    translation: 'дата',
  },
  {
    word: 'נשוי',
    pronouncing: 'нэсуй',
    translation: 'в браке',
  },
  {
    word: 'כתובת',
    pronouncing: 'ктовэт',
    translation: 'адрес',
  },
  {
    word: 'זכר',
    pronouncing: 'захар',
    translation: 'мужчина / мужской',
  },
  {
    word: 'נקבה',
    pronouncing: 'нэкэва',
    translation: 'женщина / женский',
  },
  {
    word: 'מצב',
    pronouncing: 'мацав',
    translation: 'положение / ситуация',
  },
  {
    word: 'מין',
    pronouncing: 'мин',
    translation: 'пол',
  },
  {
    word: 'גרוש',
    pronouncing: 'гаруш',
    translation: 'в разводе',
  },
  {
    word: 'נשיא',
    pronouncing: 'наси',
    translation: 'президент',
  },
  {
    word: 'השכלה',
    pronouncing: 'ашкала',
    translation: 'образование',
  },
  {
    word: 'גיל',
    pronouncing: 'гил',
    translation: 'возраст',
  },
  {
    word: 'אישי',
    pronouncing: 'иши',
    translation: 'личный',
  },
  {
    word: 'משפט',
    pronouncing: 'мишпат',
    translation: 'предложение',
  },
  {
    word: 'חוץ',
    pronouncing: 'хуц',
    translation: 'кроме',
  },
  {
    word: 'עיתון',
    pronouncing: 'итон',
    translation: 'газета',
  },
  {
    word: 'ההפך',
    pronouncing: 'аэфэх',
    translation: 'наоборот',
  },
  {
    word: 'עיפרון',
    pronouncing: 'ипарон',
    translation: 'карандаш',
  },
  {
    word: 'מחברת',
    pronouncing: 'махбэрэт',
    translation: 'тетрадь / блокнот',
  },
  {
    word: 'לוח',
    pronouncing: 'луах',
    translation: 'доска / расписание',
  },
  {
    word: 'אוויר',
    pronouncing: 'авир',
    translation: 'воздух',
  },
  {
    word: 'בניין',
    pronouncing: 'биньян',
    translation: 'здание',
  },
  {
    word: 'שטיח',
    pronouncing: 'шатиах',
    translation: 'ковер',
  },
  {
    word: 'וילון',
    pronouncing: 'вилон',
    translation: 'штора / занавес',
  },
  {
    word: 'שאלה',
    pronouncing: 'шээла',
    translation: 'вопрос',
  },
  {
    word: 'תשובה',
    pronouncing: 'тшува',
    translation: 'ответ',
  },
  {
    word: 'מקרר',
    pronouncing: 'мэкарэр',
    translation: 'холодильник',
  },
  {
    word: 'אבטיח',
    pronouncing: 'автиах',
    translation: 'арбуз',
  },
  {
    word: 'עוגה',
    pronouncing: 'уга',
    translation: 'торт',
  },
  {
    word: 'תפוז',
    pronouncing: 'тапуз',
    translation: 'апельсин',
  },
  {
    word: 'מתנה',
    pronouncing: 'матана',
    translation: 'подарок',
  },
  {
    word: 'מכתב',
    pronouncing: 'михтав',
    translation: 'письмо',
  },
  {
    word: 'דגל',
    pronouncing: 'дэгэль',
    translation: 'флаг',
  },
  {
    word: 'עולם',
    pronouncing: 'олам',
    translation: 'мир',
  },
  {
    word: 'רבים',
    pronouncing: 'равим',
    translation: 'многие / множество',
  },
  {
    word: 'יחיד',
    pronouncing: 'яхид',
    translation: 'единственный / один',
  },
  {
    word: 'חוף',
    pronouncing: 'хоф',
    translation: 'пляж',
  },
  {
    word: 'נהר',
    pronouncing: 'нахар',
    translation: 'река',
  },
  {
    word: 'מגדל',
    pronouncing: 'мигдаль',
    translation: 'башня',
  },
  {
    word: 'שכן',
    pronouncing: 'шакэн',
    translation: 'сосед',
  },
  {
    word: 'זוג',
    pronouncing: 'зуг',
    translation: 'пара',
  },
  {
    word: 'הולדת',
    pronouncing: 'улэдэт',
    translation: 'рождение',
  },
  {
    word: 'רישיון',
    pronouncing: 'ришайон',
    translation: 'права / лицензия',
  },
  {
    word: 'נהיגה',
    pronouncing: 'нэига',
    translation: 'вождение',
  },
  {
    word: 'שעורי',
    pronouncing: 'шурэй',
    translation: 'занятия',
  },
  {
    word: 'כריך',
    pronouncing: 'карих',
    translation: 'сэндвич',
  },
  {
    word: 'רחב',
    pronouncing: 'рахав',
    translation: 'широкий',
  },
  {
    word: 'כבד',
    pronouncing: 'кавэд',
    translation: 'тяжелый',
  },
  {
    word: 'ארוך',
    pronouncing: 'арох',
    translation: 'длинный',
  },
  {
    word: 'מרפסת',
    pronouncing: 'мирпэсэт',
    translation: 'балкон',
  },
  {
    word: 'חד',
    pronouncing: 'хад',
    translation: 'острый',
  },
  {
    word: 'חזק',
    pronouncing: 'хазак',
    translation: 'сильный / крепкий',
  },
  {
    word: 'שמן',
    pronouncing: 'шэмин',
    translation: 'толстый / сытый',
  },
  {
    word: 'עמוק',
    pronouncing: 'амок',
    translation: 'глубокий',
  },
  {
    word: 'פנים',
    pronouncing: 'паним',
    translation: 'лицо',
  },
  {
    word: 'ארון',
    pronouncing: 'арон',
    translation: 'шкаф',
  },
  {
    word: 'ציפור',
    pronouncing: 'ципор',
    translation: 'птица',
  },
  {
    word: 'רוח',
    pronouncing: 'руах',
    translation: 'ветер / дух',
  },
  {
    word: 'כוס',
    pronouncing: 'кос',
    translation: 'стакан',
  },
  {
    word: 'ותיק',
    pronouncing: 'ватик',
    translation: 'давний / ветеран',
  },
  {
    word: 'זמר',
    pronouncing: 'замар',
    translation: 'певец',
  },
  {
    word: 'קיר',
    pronouncing: 'кир',
    translation: 'стена',
  },
  {
    word: 'עתיק',
    pronouncing: 'атик',
    translation: 'древний',
  },
  {
    word: 'גג',
    pronouncing: 'гаг',
    translation: 'крыша',
  },
  {
    word: 'מפתח',
    pronouncing: 'мафтэах',
    translation: 'ключ',
  },
  {
    word: 'מבחן',
    pronouncing: 'мивхан',
    translation: 'тест',
  },
  {
    word: 'שעון',
    pronouncing: 'шаон',
    translation: 'часы',
  },
  {
    word: 'מצטער',
    pronouncing: 'мицтаэр',
    translation: 'сожалеть',
  },
  {
    word: 'תחת',
    pronouncing: 'тахат',
    translation: 'под',
  },
  {
    word: 'עץ',
    pronouncing: 'эц',
    translation: 'дерево',
  },
  {
    word: 'אדוני',
    pronouncing: 'адони',
    translation: 'сэр / мистер',
  },
  {
    word: 'גברתי',
    pronouncing: 'гаварти',
    translation: 'мадам / мисс',
  },
  {
    word: 'חמור',
    pronouncing: 'хамур',
    translation: 'осел',
  },
  {
    word: 'תרנגול',
    pronouncing: 'тарнголь',
    translation: 'петух',
  },
  {
    word: 'חנות',
    pronouncing: 'ханут',
    translation: 'магазин',
  },
  {
    word: 'יפהפייה',
    pronouncing: 'яфэфия',
    translation: 'прекрасная',
  },
  {
    word: 'חמוד',
    pronouncing: 'хамуд',
    translation: 'милый',
  },
  {
    word: 'תכנית',
    pronouncing: 'тхэнит',
    translation: 'передача',
  },
  {
    word: 'מעצבן',
    pronouncing: 'мэацвэн',
    translation: 'раздражающий / надоедливый',
  },
  {
    word: 'תפוח',
    pronouncing: 'тапуах',
    translation: 'яблоко',
  },
  {
    word: 'חורף',
    pronouncing: 'хорэф',
    translation: 'зима',
  },
  {
    word: 'סתיו',
    pronouncing: 'став',
    translation: 'осень',
  },
  {
    word: 'קיץ',
    pronouncing: 'каиц',
    translation: 'лето',
  },
  {
    word: 'בגדים',
    pronouncing: 'бгадим',
    translation: 'одежда',
  },
  {
    word: 'כפר',
    pronouncing: 'кфар',
    translation: 'деревня',
  },
  {
    word: 'כשומר',
    pronouncing: 'кэшомэр',
    translation: 'охранник',
  },
  {
    word: 'פקיד',
    pronouncing: 'пакид',
    translation: 'служащий',
  },
  {
    word: 'יושב',
    pronouncing: 'йошэв',
    translation: 'сидеть',
  },
  {
    word: 'שר',
    pronouncing: 'сар',
    translation: 'министр / петь',
  },
  {
    word: 'נשאר',
    pronouncing: 'нишар',
    translation: 'оставаться',
  },
  {
    word: 'חי',
    pronouncing: 'хаи',
    translation: 'жить',
  },
  {
    word: 'משחק',
    pronouncing: 'мэсахэк',
    translation: 'играть',
  },
  {
    word: 'מטפל',
    pronouncing: 'мэтапэль',
    translation: 'ухаживать, заботиться',
  },
  {
    word: 'טרי',
    pronouncing: 'тари',
    translation: 'свежий',
  },
  {
    word: 'קצר',
    pronouncing: 'кацар',
    translation: 'короткий',
  },
  {
    word: 'נר',
    pronouncing: 'нэр',
    translation: 'свечка',
  },
  {
    word: 'יקר',
    pronouncing: 'якар',
    translation: 'дорогой / ценный',
  },
  {
    word: 'אדום',
    pronouncing: 'адом',
    translation: 'красный',
  },
  {
    word: 'אור',
    pronouncing: 'ор',
    translation: 'свет',
  },
  {
    word: 'לפעמים',
    pronouncing: 'лифамим',
    translation: 'иногда',
  },
  {
    word: 'חוזר',
    pronouncing: 'хозэр',
    translation: 'возвращаться',
  },
  {
    word: 'גבוה',
    pronouncing: 'гавоха',
    translation: 'высокий',
  },
  {
    word: 'אחר',
    pronouncing: 'ахар',
    translation: 'другой',
  },
  {
    word: 'יקירתי',
    pronouncing: 'якирати',
    translation: 'дорогая',
  },
  {
    word: 'אמיתי',
    pronouncing: 'амити',
    translation: 'настоящий / реальный',
  },
  {
    word: 'נכד',
    pronouncing: 'нэхад',
    translation: 'внук',
  },
  {
    word: 'פרחים',
    pronouncing: 'прахим',
    translation: 'цветы',
  },
  {
    word: 'פרטי',
    pronouncing: 'прати',
    translation: 'личный',
  },
  {
    word: 'מבוגר',
    pronouncing: 'мэвугар',
    translation: 'старший / взрослый',
  },
  {
    word: 'עסוק',
    pronouncing: 'асук',
    translation: 'занят / занятой',
  },
  {
    word: 'יוצא',
    pronouncing: 'йоцэ',
    translation: 'выходить',
  },
  {
    word: 'עוד מעט',
    pronouncing: 'од мэат',
    translation: 'скоро',
  },
  {
    word: 'אל תדאג',
    pronouncing: 'аль тигад',
    translation: 'не беспокойся',
  },
  {
    word: 'ציבור',
    pronouncing: 'цивур',
    translation: 'публичный',
  },
  {
    word: 'משקפיים',
    pronouncing: 'мишкафаим',
    translation: 'очки',
  },
  {
    word: 'חסר',
    pronouncing: 'хасэр',
    translation: 'отсутствовать / не хватает',
  },
  {
    word: 'זקן',
    pronouncing: 'закэн',
    translation: 'старик',
  },
  {
    word: 'שוב',
    pronouncing: 'шув',
    translation: 'снова / опять',
  },
  {
    word: 'מפני',
    pronouncing: 'мифнэй',
    translation: 'потому / ведь',
  },
  {
    word: 'חברה',
    pronouncing: 'хавэра / хэвра',
    translation: 'подруга / компания',
  },
  {
    word: 'ממשלה',
    pronouncing: 'мэмшала',
    translation: 'правительство',
  },
  {
    word: 'רוב',
    pronouncing: 'ров',
    translation: 'большинство',
  },
  {
    word: 'שונה מ',
    pronouncing: 'шонэ мэ',
    translation: 'отличаться от',
  },
  {
    word: 'צבא',
    pronouncing: 'цава',
    translation: 'армия',
  },
  {
    word: 'חולם',
    pronouncing: 'холэм',
    translation: 'мечтать',
  },
  {
    word: 'עדיין',
    pronouncing: 'адаин',
    translation: 'все еще / до сих пор',
  },
  {
    word: 'מידע',
    pronouncing: 'мэйда',
    translation: 'информация / сведения',
  },
  {
    word: 'אך',
    pronouncing: 'ах',
    translation: 'но',
  },
  {
    word: 'אוצר',
    pronouncing: 'оцар',
    translation: 'сокровище / казначейство',
  },
  {
    word: 'שכור',
    pronouncing: 'шкур',
    translation: 'арендованный / наемный',
  },
  {
    word: 'נמצא',
    pronouncing: 'нимца',
    translation: 'находиться',
  },
  {
    word: 'מהנדס',
    pronouncing: 'мэхандэс',
    translation: 'инженер',
  },
  {
    word: 'לחכות ל',
    pronouncing: 'лэхакот лэ',
    translation: 'ждать',
  },
  {
    word: 'רחוק מ',
    pronouncing: 'рахок мэ',
    translation: 'далеко от',
  },
  {
    word: 'קרוב ל',
    pronouncing: 'каров лэ',
    translation: 'близко к',
  },
  {
    word: 'מהר',
    pronouncing: 'махэр',
    translation: 'быстро',
  },
  {
    word: 'בריכה',
    pronouncing: 'бриха',
    translation: 'бассейн',
  },
  {
    word: 'שדה תעופה',
    pronouncing: 'сдэ тэуфа',
    translation: 'аэропорт',
  },
  {
    word: 'תעופה',
    pronouncing: 'тэуфа',
    translation: 'полет',
  },
  {
    word: 'שדה',
    pronouncing: 'сдэ',
    translation: 'поле',
  },
  {
    word: 'פצצה',
    pronouncing: 'пцаца',
    translation: 'бомба',
  },
  {
    word: 'על מי',
    pronouncing: 'аль ми',
    translation: 'о ком',
  },
  {
    word: 'סופר',
    pronouncing: 'софэр',
    translation: 'писатель / считать',
  },
  {
    word: 'מעונות',
    pronouncing: 'мэонот',
    translation: 'общежитие',
  },
  {
    word: 'נפגש',
    pronouncing: 'нифгаш',
    translation: 'встречать',
  },
  {
    word: 'נמוך',
    pronouncing: 'намух',
    translation: 'низкий / маленький',
  },
  {
    word: 'לובש',
    pronouncing: 'ловэш',
    translation: 'носить / надевать',
  },
  {
    word: 'צודק',
    pronouncing: 'цодэк',
    translation: 'быть правым / правильно',
  },
  {
    word: 'תפקיד',
    pronouncing: 'тафкид',
    translation: 'роль / должность',
  },
  {
    word: 'שחקן',
    pronouncing: 'сахкан',
    translation: 'артист / актер',
  },
  {
    word: 'מדען',
    pronouncing: 'мадэан',
    translation: 'ученый',
  },
  {
    word: 'לפי',
    pronouncing: 'лэфи',
    translation: 'в соответствии с / согласно',
  },
  {
    word: 'שחור',
    pronouncing: 'шахор',
    translation: 'черный',
  },
  {
    word: 'צהוב',
    pronouncing: 'цахов',
    translation: 'желтый',
  },
  {
    word: 'כחול',
    pronouncing: 'кахоль',
    translation: 'синий / голубой',
  },
  {
    word: 'אמבטיה',
    pronouncing: 'амватия',
    translation: 'ванная',
  },
  {
    word: 'רהיטים',
    pronouncing: 'рахитим',
    translation: 'мебель',
  },
  {
    word: 'בחירות',
    pronouncing: 'бхирот',
    translation: 'выборы',
  },
  {
    word: 'מפלגה',
    pronouncing: 'мифлага',
    translation: 'партия',
  },
  {
    word: 'אחוז',
    pronouncing: 'ахуз',
    translation: 'процент',
  },
  {
    word: 'לצייר',
    pronouncing: 'лэцайэр',
    translation: 'рисовать',
  },
  {
    word: 'בריאות',
    pronouncing: 'бриут',
    translation: 'здоровье',
  },
  {
    word: 'מטרה',
    pronouncing: 'матара',
    translation: 'цель',
  },
  {
    word: 'צפון',
    pronouncing: 'цафон',
    translation: 'север',
  },
  {
    word: 'לנגן',
    pronouncing: 'лэнагэн',
    translation: 'играть / выступать',
  },
  {
    word: 'לשחות',
    pronouncing: 'лисхот',
    translation: 'плавать',
  },
  {
    word: 'לגלוש',
    pronouncing: 'лиглош',
    translation: 'кататься / серфить',
  },
  {
    word: 'לנהוג',
    pronouncing: 'линхог',
    translation: 'водить',
  },
  {
    word: 'חופש',
    pronouncing: 'хофэш',
    translation: 'свобода / отпуск / выходные',
  },
  {
    word: 'עגבניה',
    pronouncing: 'агвания',
    translation: 'помидор',
  },
  {
    word: 'בצל',
    pronouncing: 'бацаль',
    translation: 'лук',
  },
  {
    word: 'מלפפון',
    pronouncing: 'мелафэфон',
    translation: 'огурец',
  },
  {
    word: 'שורה',
    pronouncing: 'шура',
    translation: 'строка / ряд',
  },
  {
    word: 'טור',
    pronouncing: 'тур',
    translation: 'колонка / столбец',
  },
  {
    word: 'אלכסון',
    pronouncing: 'алахсон',
    translation: 'диагональ',
  },
  {
    word: 'אתר',
    pronouncing: 'атар',
    translation: 'сайт',
  },
  {
    word: 'נקודה',
    pronouncing: 'нэкуда',
    translation: 'точка',
  },
  {
    word: 'משתמש',
    pronouncing: 'миштамэшь',
    translation: 'использовать / пользоваться',
  },
  {
    word: 'עכבר',
    pronouncing: 'ахбар',
    translation: 'мышь',
  },
  {
    word: 'סיסמה',
    pronouncing: 'сисма',
    translation: 'пароль / слоган',
  },
  {
    word: 'סיכום',
    pronouncing: 'сикум',
    translation: 'итог / резюме',
  },
  {
    word: 'בדיקה',
    pronouncing: 'бдика',
    translation: 'проверка / осмотр',
  },
  {
    word: 'לעמוד',
    pronouncing: 'лаамод',
    translation: 'стоять / выстоять',
  },
  {
    word: 'שיחה',
    pronouncing: 'сиха',
    translation: 'разговор',
  },
  {
    word: 'המשך',
    pronouncing: 'хамшэх',
    translation: 'продолжение',
  },
  {
    word: 'כאן',
    pronouncing: 'кан',
    translation: 'здесь',
  },
  {
    word: 'עד',
    pronouncing: 'ад',
    translation: 'до',
  },
  {
    word: 'עוזר',
    pronouncing: 'озэр',
    translation: 'помогать',
  },
  {
    word: 'עומד',
    pronouncing: 'омэд',
    translation: 'стоять',
  },
  {
    word: 'קל',
    pronouncing: 'каль',
    translation: 'легкий',
  },
  {
    word: 'בכלל',
    pronouncing: 'бихлаль',
    translation: 'вообще / совсем',
  },
  {
    word: 'מזרח',
    pronouncing: 'мизрах',
    translation: 'восток',
  },
  {
    word: 'מערב',
    pronouncing: 'маарэв',
    translation: 'запад',
  },
  {
    word: 'גבול',
    pronouncing: 'гвуль',
    translation: 'граница',
  },
  {
    word: 'מצרים',
    pronouncing: 'мицраим',
    translation: 'Египет',
  },
  {
    word: 'אגם',
    pronouncing: 'агам',
    translation: 'озеро',
  },
  {
    word: 'שלג',
    pronouncing: 'шэлэг',
    translation: 'снег',
  },
  {
    word: 'שכונה',
    pronouncing: 'шхуна',
    translation: 'район / квартал',
  },
  {
    word: 'קדוש',
    pronouncing: 'кадош',
    translation: 'святой',
  },
  {
    word: 'אזור',
    pronouncing: 'эзор',
    translation: 'зона / область',
  },
  {
    word: 'חיות',
    pronouncing: 'хайот',
    translation: 'животные',
  },
  {
    word: 'לשתף',
    pronouncing: 'лэшатэф',
    translation: 'делиться',
  },
  {
    word: 'תושבים',
    pronouncing: 'тошавим',
    translation: 'жители',
  },
  {
    word: 'כמעט',
    pronouncing: 'кимат',
    translation: 'почти',
  },
  {
    word: 'רבוע',
    pronouncing: 'равуа',
    translation: 'площадь',
  },
  {
    word: 'טבע',
    pronouncing: 'тэва',
    translation: 'природа',
  },
  {
    word: 'עיניים',
    pronouncing: 'енаим',
    translation: 'глаза',
  },
  {
    word: 'חוק',
    pronouncing: 'хок',
    translation: 'закон',
  },
  {
    word: 'אפילו',
    pronouncing: 'афилу',
    translation: 'даже',
  },
  {
    word: 'נפלא',
    pronouncing: 'нифла',
    translation: 'прекрасный / замечательный',
  },
  {
    word: 'תפילה',
    pronouncing: 'тфила',
    translation: 'молитва',
  },
  {
    word: 'למשל',
    pronouncing: 'лэмашаль',
    translation: 'например',
  },
  {
    word: 'חילוני',
    pronouncing: 'хилони',
    translation: 'светский',
  },
  {
    word: 'אוזניים',
    pronouncing: 'азнаим',
    translation: 'уши',
  },
  {
    word: 'יבשת',
    pronouncing: 'явэшэт',
    translation: 'континент',
  },
  {
    word: 'צבע',
    pronouncing: 'цэва',
    translation: 'цвет',
  },
  {
    word: 'שמיים',
    pronouncing: 'шамаим',
    translation: 'небо',
  },
  {
    word: 'תכלת',
    pronouncing: 'тхэлэт',
    translation: 'голубой',
  },
  {
    word: 'רפואה',
    pronouncing: 'рэфуа',
    translation: 'медицина',
  },
  {
    word: 'קבר',
    pronouncing: 'кэвэр',
    translation: 'могила',
  },
  {
    word: 'פרה',
    pronouncing: 'пора',
    translation: 'корова',
  },
  {
    word: 'עמק',
    pronouncing: 'эмэк',
    translation: 'долина',
  },
  {
    word: 'חקלאות',
    pronouncing: 'хаклаут',
    translation: 'сельское хозяйство',
  },
  {
    word: 'לבשר',
    pronouncing: 'лэвасэр',
    translation: 'сообщить',
  },
  {
    word: 'מכיר',
    pronouncing: 'макир',
    translation: 'знать / быть знакомым',
  },
  {
    word: 'לתקשורת',
    pronouncing: 'латикшорэт',
    translation: 'связи / коммуникации',
  },
  {
    word: 'לקשר',
    pronouncing: 'лакэшэр',
    translation: 'связывать / ассоциировать / соединять',
  },
  {
    word: 'רציני',
    pronouncing: 'рэцини',
    translation: 'серьезный',
  },
  {
    word: 'היכרויות',
    pronouncing: 'хэйкируйот',
    translation: 'находящиеся в отношениях / встречающиеся',
  },
  {
    word: 'רזה',
    pronouncing: 'раза',
    translation: 'худой',
  },
  {
    word: 'מטבח',
    pronouncing: 'митбах',
    translation: 'кухня',
  },
  {
    word: 'פחד',
    pronouncing: 'пахад',
    translation: 'страх',
  },
  {
    word: 'כוונה',
    pronouncing: 'кавана',
    translation: 'намерение / желание',
  },
  {
    word: 'מונית',
    pronouncing: 'монит',
    translation: 'такси',
  },
  {
    word: 'אחרון',
    pronouncing: 'ахарон',
    translation: 'последний',
  },
  {
    word: 'מזומן',
    pronouncing: 'мэзуман',
    translation: 'наличные',
  },
  {
    word: 'מטלפן ל',
    pronouncing: 'мэтальпэн лэ',
    translation: 'звонить',
  },
  {
    word: 'תרבות',
    pronouncing: 'тарвут',
    translation: 'культура / цивилизация',
  },
  {
    word: 'מקדש',
    pronouncing: 'микдашь',
    translation: 'храм',
  },
  {
    word: 'כיתרון',
    pronouncing: 'китарон',
    translation: 'решение',
  },
  {
    word: 'מוצא',
    pronouncing: 'моцэ',
    translation: 'находить',
  },
  {
    word: 'רעיון',
    pronouncing: 'район',
    translation: 'идея / предложение / вариант',
  },
  {
    word: 'לתמוך',
    pronouncing: 'литмох',
    translation: 'поддержать',
  },
  {
    word: 'רבע',
    pronouncing: 'рэва',
    translation: 'четверть',
  },
  {
    word: 'חצי',
    pronouncing: 'хаци',
    translation: 'половина',
  },
  {
    word: 'בערך',
    pronouncing: 'бээрэх',
    translation: 'примерно',
  },
  {
    word: 'צהריים',
    pronouncing: 'цохораим',
    translation: 'полдень',
  },
  {
    word: 'יממה',
    pronouncing: 'ямама',
    translation: 'сутки',
  },
  {
    word: 'חצות',
    pronouncing: 'хацот',
    translation: 'полночь',
  },
  {
    word: 'אף פעם לא',
    pronouncing: 'аф паам ло',
    translation: 'никогда',
  },
  {
    word: 'ישן',
    pronouncing: 'яшан',
    translation: 'спать',
  },
  {
    word: 'מתרחץ',
    pronouncing: 'митрахэц',
    translation: 'мыться',
  },
  {
    word: 'מתלבש',
    pronouncing: 'митлабэшь',
    translation: 'одеваться',
  },
  {
    word: 'מסורת',
    pronouncing: 'масорэт',
    translation: 'традиция',
  },
  {
    word: 'שומר',
    pronouncing: 'шомэр',
    translation: 'хранить / охранять',
  },
  {
    word: 'חזיר',
    pronouncing: 'хазир',
    translation: 'свинья',
  },
  {
    word: 'עצוב',
    pronouncing: 'ацув',
    translation: 'грустить',
  },
  {
    word: 'שוכח',
    pronouncing: 'шохэах',
    translation: 'забывать',
  },
  {
    word: 'רעב',
    pronouncing: 'раав',
    translation: 'голодный',
  },
  {
    word: 'גיבור',
    pronouncing: 'гибор',
    translation: 'герой',
  },
  {
    word: 'פחדן',
    pronouncing: 'пахдан',
    translation: 'трус',
  },
  {
    word: 'באמצע',
    pronouncing: 'бэ эмца',
    translation: 'в середине / в центре',
  },
  {
    word: 'בצד',
    pronouncing: 'бацад',
    translation: 'в стороне / отдельно',
  },
  {
    word: 'עצלן',
    pronouncing: 'ацлан',
    translation: 'ленивый',
  },
  {
    word: 'חרוץ',
    pronouncing: 'харуц',
    translation: 'трудолюбивый',
  },
  {
    word: 'חמוץ',
    pronouncing: 'хамуц',
    translation: 'кислый',
  },
  {
    word: 'חריף',
    pronouncing: 'хариф',
    translation: 'острый',
  },
  {
    word: 'טיפשי',
    pronouncing: 'тифши',
    translation: 'глупый',
  },
  {
    word: 'תפוס',
    pronouncing: 'тафус',
    translation: 'занятый / занято',
  },
  {
    word: 'ענק',
    pronouncing: 'анак',
    translation: 'огромный',
  },
  {
    word: 'פספוס',
    pronouncing: 'фисфус',
    translation: 'проигрыш / промах',
  },
  {
    word: 'כדי',
    pronouncing: 'кэдэй',
    translation: 'чтобы',
  },
  {
    word: 'פותח',
    pronouncing: 'потэах',
    translation: 'открывать',
  },
  {
    word: 'מאחר',
    pronouncing: 'мэахар',
    translation: 'опаздывать',
  },
  {
    word: 'מקשיב',
    pronouncing: 'макшив',
    translation: 'слушать',
  },
  {
    word: 'לכן',
    pronouncing: 'лахэн',
    translation: 'поэтому',
  },
  {
    word: 'אורז',
    pronouncing: 'орэз',
    translation: 'рис',
  },
  {
    word: 'מכין',
    pronouncing: 'мэхин',
    translation: 'готовить / делать',
  },
  {
    word: 'תוכן',
    pronouncing: 'тохэн',
    translation: 'содержимое / контент',
  },
  {
    word: 'להחליף',
    pronouncing: 'лэхахлиф',
    translation: 'поменять',
  },
  {
    word: 'מסדר',
    pronouncing: 'мэсадэр',
    translation: 'убирать / приводить в порядок',
  },
  {
    word: 'מבשל',
    pronouncing: 'мэвашэль',
    translation: 'готовить',
  },
  {
    word: 'מקלחת',
    pronouncing: 'миклахат',
    translation: 'душ',
  },
  {
    word: 'מלצר',
    pronouncing: 'мэльцар',
    translation: 'официант',
  },
  {
    word: 'מעורר',
    pronouncing: 'мэорэр',
    translation: 'пробуждать / стимулировать',
  },
  {
    word: 'לספור',
    pronouncing: 'лиспор',
    translation: 'считать',
  },
  {
    word: 'ספירה',
    pronouncing: 'сфира',
    translation: 'подсчет',
  },
  {
    word: 'תואר',
    pronouncing: 'тоар',
    translation: 'степень / титул',
  },
  {
    word: 'תוכנית',
    pronouncing: 'тохнит',
    translation: 'программа / план',
  },
  {
    word: 'פחות',
    pronouncing: 'пахот',
    translation: 'меньше',
  },
  {
    word: 'לוקח',
    pronouncing: 'локэах',
    translation: 'брать / принимать',
  },
  {
    word: 'חיוך',
    pronouncing: 'хиюх',
    translation: 'улыбка',
  },
  {
    word: 'מזג',
    pronouncing: 'мэзэг',
    translation: 'характер',
  },
  {
    word: 'קופה',
    pronouncing: 'купа',
    translation: 'касса',
  },
  {
    word: 'מתחתן',
    pronouncing: 'митхатэн',
    translation: 'жениться / выходить замуж',
  },
  {
    word: 'מתקשר',
    pronouncing: 'миткашэр',
    translation: 'звонить',
  },
  {
    word: 'בחו"ל',
    pronouncing: 'бахуль',
    translation: 'заграницей',
  },
  {
    word: 'שוטף',
    pronouncing: 'шотэф',
    translation: 'мыть',
  },
  {
    word: 'כלים',
    pronouncing: 'калим',
    translation: 'посуда',
  },
  {
    word: 'נייד',
    pronouncing: 'наяд',
    translation: 'сотовый телефон',
  },
  {
    word: 'לימוד',
    pronouncing: 'лимод',
    translation: 'занятие',
  },
  {
    word: 'טבעת',
    pronouncing: 'тават',
    translation: 'кольцо',
  },
  {
    word: 'מפסיק',
    pronouncing: 'мафсик',
    translation: 'останавливаться / переставать',
  },
  {
    word: 'מבקש',
    pronouncing: 'мэвакэш',
    translation: 'просить',
  },
  {
    word: 'בוכה',
    pronouncing: 'бохэ',
    translation: 'плакать',
  },
  {
    word: 'יבשה',
    pronouncing: 'явэша',
    translation: 'сухой',
  },
  {
    word: 'סיבה',
    pronouncing: 'сиба',
    translation: 'причина',
  },
  {
    word: 'מעדיף',
    pronouncing: 'маадиф',
    translation: 'предпочитать',
  },
  {
    word: 'שולח',
    pronouncing: 'шолэах',
    translation: 'посылать / отправлять',
  },
  {
    word: 'וכולי',
    pronouncing: 'вэхулэй',
    translation: 'и так далее',
  },
  {
    word: 'יורד',
    pronouncing: 'йорэд',
    translation: 'падать / спускаться',
  },
  {
    word: 'מאחל',
    pronouncing: 'мэахэль',
    translation: 'желать',
  },
  {
    word: 'מתרגש',
    pronouncing: 'митрагэш',
    translation: 'волноваться',
  },
  {
    word: 'מברך',
    pronouncing: 'мэварэх',
    translation: 'поздравлять / приветствовать',
  },
  {
    word: 'מתקדם',
    pronouncing: 'миткадэм',
    translation: 'продвигаться',
  },
  {
    word: 'שוכב',
    pronouncing: 'шохэв',
    translation: 'лежать',
  },
  {
    word: 'נותן',
    pronouncing: 'нотэн',
    translation: 'давать',
  },
  {
    word: 'מלא',
    pronouncing: 'малэ',
    translation: 'полный',
  },
  {
    word: 'שינוי',
    pronouncing: 'шинуи',
    translation: 'изменение / перемены',
  },
  {
    word: 'משעמם',
    pronouncing: 'мэшамэм',
    translation: 'скучный',
  },
  {
    word: 'משקה',
    pronouncing: 'машкэ',
    translation: 'напиток',
  },
  {
    word: 'שתייה',
    pronouncing: 'штийа',
    translation: 'выпивка',
  },
  {
    word: 'הרצאה',
    pronouncing: 'харцаа',
    translation: 'лекция',
  },
  {
    word: 'מחלה',
    pronouncing: 'махала',
    translation: 'болезнь',
  },
  {
    word: 'זהות',
    pronouncing: 'зэхут',
    translation: 'личность / индивидуальность',
  },
  {
    word: 'נראה',
    pronouncing: 'нирэ',
    translation: 'выглядеть',
  },
  {
    word: 'רושם',
    pronouncing: 'рошэм',
    translation: 'записывать',
  },
  {
    word: 'מתקלח',
    pronouncing: 'миткалэах',
    translation: 'принимать душ',
  },
  {
    word: 'רוקד',
    pronouncing: 'рокэд',
    translation: 'танцевать',
  },
  {
    word: 'תוצאה',
    pronouncing: 'тоцаа',
    translation: 'результат',
  },
  {
    word: 'לבלות',
    pronouncing: 'лэвалот',
    translation: 'проводить время / тусоваться',
  },
  {
    word: 'משאיר',
    pronouncing: 'машэир',
    translation: 'оставлять',
  },
  {
    word: 'הודעה',
    pronouncing: 'ходаа',
    translation: 'сообщение',
  },
  {
    word: 'ניסיון',
    pronouncing: 'нисайон',
    translation: 'опыт',
  },
  {
    word: 'מצליח',
    pronouncing: 'мацлиах',
    translation: 'получаться / удаваться',
  },
  {
    word: 'עורך-דין',
    pronouncing: 'орэх – дин',
    translation: 'адвокат',
  },
  {
    word: 'רצון',
    pronouncing: 'рацон',
    translation: 'воля / желание',
  },
  {
    word: 'ממהר',
    pronouncing: 'мэмахэр',
    translation: 'спешить',
  },
  {
    word: 'רגוע',
    pronouncing: 'рагуа',
    translation: 'спокойный',
  },
  {
    word: 'עצבני',
    pronouncing: 'ацбани',
    translation: 'нервный',
  },
  {
    word: 'מחכה',
    pronouncing: 'мэхакэ',
    translation: 'ждать',
  },
  {
    word: 'תעשייה',
    pronouncing: 'таасия',
    translation: 'промышленность / индустрия',
  },
  {
    word: 'ניתוח',
    pronouncing: 'нитуах',
    translation: 'операция',
  },
  {
    word: 'המלצה',
    pronouncing: 'хамлаца',
    translation: 'рекомендация',
  },
  {
    word: 'חינוך',
    pronouncing: 'хинух',
    translation: 'образование',
  },
  {
    word: 'מכללה',
    pronouncing: 'михлала',
    translation: 'колледж',
  },
  {
    word: 'מעט',
    pronouncing: 'мэат',
    translation: 'мало',
  },
  {
    word: 'מבלה',
    pronouncing: 'мэвалэ',
    translation: 'проводить время / наслаждаться',
  },
  {
    word: 'מסמך',
    pronouncing: 'мисмах',
    translation: 'документ',
  },
  {
    word: 'סמל',
    pronouncing: 'сэмэль',
    translation: 'символ / герб',
  },
  {
    word: 'במשך',
    pronouncing: 'бэмэшэх',
    translation: 'в течение',
  },
  {
    word: 'מלון',
    pronouncing: 'малон',
    translation: 'отель',
  },
  {
    word: 'מלח',
    pronouncing: 'мэлах',
    translation: 'соль',
  },
  {
    word: 'פתאום',
    pronouncing: 'питом',
    translation: 'внезапно / вдруг',
  },
  {
    word: 'עור',
    pronouncing: 'ор',
    translation: 'кожа',
  },
  {
    word: 'כדאי',
    pronouncing: 'кэдай',
    translation: 'стоит / следует',
  },
  {
    word: 'מתאים',
    pronouncing: 'матим',
    translation: 'подходящий / соответствующий',
  },
  // Урок 18
  {
    word: 'פעם',
    pronouncing: 'паам',
    translation: 'однажды',
  },
  {
    word: 'שירות',
    pronouncing: 'ширут',
    translation: 'обслуживание',
  },
  {
    word: 'רגיל',
    pronouncing: 'рагиль',
    translation: 'обычный / нормальный',
  },
  {
    word: 'נהדר',
    pronouncing: 'нэхэдар',
    translation: 'отлично',
  },
  {
    word: 'שיער',
    pronouncing: 'шэйар',
    translation: 'волосы / прическа',
  },
  {
    word: 'תבלינים',
    pronouncing: 'тавлиним',
    translation: 'приправы',
  },
  {
    word: 'לחמנייה',
    pronouncing: 'лахамния',
    translation: 'булочка',
  },
  {
    word: 'עננים',
    pronouncing: 'ананим',
    translation: 'облака',
  },
  {
    word: 'שלשום',
    pronouncing: 'шэльшум',
    translation: 'позавчера',
  },
  {
    word: 'שעבר',
    pronouncing: 'шавар',
    translation: 'прошлый',
  },
  {
    word: 'מבצע',
    pronouncing: 'мэвца',
    translation: 'распродажа',
  },
  {
    word: 'מקולקל',
    pronouncing: 'мэкулькаль',
    translation: 'быть сломанным',
  },
  //Урок 19
  {
    word: 'ריח',
    pronouncing: 'рэйах',
    translation: 'запах',
  },
  {
    word: 'מתגעגע',
    pronouncing: 'митгагэа',
    translation: 'скучать',
  },
  {
    word: 'חתונה',
    pronouncing: 'хатуна',
    translation: 'свадьба',
  },
  {
    word: 'חתן',
    pronouncing: 'хатан',
    translation: 'жених',
  },
  {
    word: 'כלה',
    pronouncing: 'кала',
    translation: 'невеста',
  },
  {
    word: 'כמובן',
    pronouncing: 'кэмуван',
    translation: 'конечно / безусловно',
  },
  {
    word: 'להרוג',
    pronouncing: 'лэхарог',
    translation: 'убить',
  },
  {
    word: 'חלבון',
    pronouncing: 'хэльбон',
    translation: 'протеин',
  },
  {
    word: 'צמחוני',
    pronouncing: 'цимхони',
    translation: 'вегетарианский',
  },
  {
    word: 'מסביר',
    pronouncing: 'масбир',
    translation: 'объяснять',
  },
  {
    word: 'סוג',
    pronouncing: 'суг',
    translation: 'вид / тип',
  },
  {
    word: 'מאכל',
    pronouncing: 'маэхаль',
    translation: 'блюдо',
  },
  // Урок 20
  {
    word: 'אז',
    pronouncing: 'аз',
    translation: 'тогда',
  },
  {
    word: 'צמא',
    pronouncing: 'цамэ',
    translation: 'испытывать жажду',
  },
  {
    word: 'שותף',
    pronouncing: 'шутаф',
    translation: 'партнер',
  },
  {
    word: 'חדר כושר',
    pronouncing: 'хадар кошэр',
    translation: 'спортзал',
  },
  {
    word: 'סדרות',
    pronouncing: 'сэдарот',
    translation: 'сериалы / шоу',
  },
  {
    word: 'מציע',
    pronouncing: 'мация',
    translation: 'предлагать',
  },
  {
    word: 'טכנאי',
    pronouncing: 'тэхэнай',
    translation: 'техник',
  },
  {
    word: 'קול',
    pronouncing: 'коль',
    translation: 'звук / голос',
  },
  {
    word: 'בכלל',
    pronouncing: 'бихлаль',
    translation: 'вообще / совсем',
  },
  {
    word: 'אחריות',
    pronouncing: 'ахарают',
    translation: 'обязанности',
  },
  {
    word: 'נוח',
    pronouncing: 'ноах',
    translation: 'удобно',
  },
  {
    word: 'מקווה',
    pronouncing: 'мэкавэ',
    translation: 'надеяться',
  },
  // Урок 21
  {
    word: 'מחליט',
    pronouncing: 'махлит',
    translation: 'решать',
  },
  {
    word: 'זיהום',
    pronouncing: 'зихум',
    translation: 'инфекция / загрязнение',
  },
  {
    word: 'בונה',
    pronouncing: 'бонэ',
    translation: 'строить',
  },
  {
    word: 'מפריע',
    pronouncing: 'мафриа',
    translation: 'мешать / беспокоить',
  },
  {
    word: 'בידור',
    pronouncing: 'бидур',
    translation: 'развлечение',
  },
  {
    word: 'נפש',
    pronouncing: 'нэфэш',
    translation: 'душа',
  },
  {
    word: 'מתעורר',
    pronouncing: 'митэорэр',
    translation: 'просыпаться',
  },
  {
    word: 'נסה',
    pronouncing: 'насэ',
    translation: 'пробовать',
  },
  {
    word: 'אופנה',
    pronouncing: 'аофэна',
    translation: 'мода',
  },
  {
    word: 'מתכונן',
    pronouncing: 'митконэн',
    translation: 'готовиться / собираться',
  },
  // Урок 22
  {
    word: 'חוגג',
    pronouncing: 'хогэг',
    translation: 'праздновать',
  },
  {
    word: 'דן',
    pronouncing: 'дан',
    translation: 'обсуждать',
  },
  {
    word: 'רב',
    pronouncing: 'рав',
    translation: 'драться',
  },
  {
    word: 'גופני',
    pronouncing: 'гуфани',
    translation: 'физический',
  },
  {
    word: 'שם לב',
    pronouncing: 'сам лэв',
    translation: 'замечать / обращать внимание',
  },
  {
    word: 'להסבר',
    pronouncing: 'лахэсбэр',
    translation: 'объяснение',
  },
  {
    word: 'מצחיק',
    pronouncing: 'мацхик',
    translation: 'смешной',
  },
  {
    word: 'מסביר',
    pronouncing: 'масбир',
    translation: 'объяснять',
  },
  {
    word: 'נופל',
    pronouncing: 'нофэль',
    translation: 'падать',
  },
  {
    word: 'עובר',
    pronouncing: 'овэр',
    translation: 'проходить',
  },
  // Урок 23
  {
    word: 'כמות',
    pronouncing: 'камут',
    translation: 'количество',
  },
  {
    word: 'דווקא',
    pronouncing: 'давка',
    translation: 'именно',
  },
  {
    word: 'עוזב',
    pronouncing: 'озэв',
    translation: 'уходить / оставлять',
  },
  {
    word: 'מאמין',
    pronouncing: 'мамин',
    translation: 'верить',
  },
  {
    word: 'נוחות',
    pronouncing: 'нохот',
    translation: 'комфорт',
  },
  // Урок 24
  {
    word: 'בוחר',
    pronouncing: 'бохэр',
    translation: 'выбирать',
  },
  {
    word: 'מחבר',
    pronouncing: 'мэхавэр',
    translation: 'соединять',
  },
  {
    word: 'תספורת',
    pronouncing: 'тиспорэт',
    translation: 'стрижка',
  },
  {
    word: 'נהג',
    pronouncing: 'нахаг',
    translation: 'водитель',
  },
  {
    word: 'מרוצה',
    pronouncing: 'мэроцэ',
    translation: 'доволен',
  },
  {
    word: 'מציאות',
    pronouncing: 'мэциут',
    translation: 'реальность',
  },
  {
    word: 'מחלקה',
    pronouncing: 'махлака',
    translation: 'отдел',
  },
  {
    word: 'מאושר',
    pronouncing: 'мэушар',
    translation: 'счастливый',
  },
  {
    word: 'היתרון',
    pronouncing: 'хитарон',
    translation: 'преимущество',
  },
  {
    word: 'חסרון',
    pronouncing: 'хисарон',
    translation: 'недостаток',
  },
  {
    word: 'מס',
    pronouncing: 'мас',
    translation: 'налог',
  },
  // Урок 25
  {
    word: 'רוחצ',
    pronouncing: 'рохэц',
    translation: 'мыть',
  },
  {
    word: 'טהור',
    pronouncing: 'тахур',
    translation: 'чистый',
  },
  {
    word: 'משכורת',
    pronouncing: 'маскорэт',
    translation: 'зарплата',
  },
  {
    word: 'הפגנה',
    pronouncing: 'хафгана',
    translation: 'демонстрация / протест',
  },
  {
    word: 'חובה',
    pronouncing: 'хова',
    translation: 'долг',
  },
  {
    word: 'משפיע',
    pronouncing: 'машпиа',
    translation: 'влиять / действовать',
  },
  // Урок 26
  {
    word: 'נגמר',
    pronouncing: 'нигмар',
    translation: 'заканчиваться',
  },
  {
    word: 'מטוס',
    pronouncing: 'матос',
    translation: 'самолет',
  },
  {
    word: 'טעות',
    pronouncing: 'таут',
    translation: 'ошибка',
  },
  {
    word: 'אנוש',
    pronouncing: 'ануш',
    translation: 'человеческий',
  },
  {
    word: 'טיל',
    pronouncing: 'тиль',
    translation: 'ракета',
  },
  {
    word: 'הורג',
    pronouncing: 'хорэг',
    translation: 'убивать',
  },
  {
    word: 'להתפטר',
    pronouncing: 'лэхитпатэр',
    translation: 'увольняться',
  },
  {
    word: 'סערה',
    pronouncing: 'сэара',
    translation: 'шторм',
  },
  {
    word: 'תיווך',
    pronouncing: 'тивух',
    translation: 'риэлтор',
  },
  {
    word: 'פונה',
    pronouncing: 'понэ',
    translation: 'поворачивать / обращаться',
  },
  {
    word: 'תנאי',
    pronouncing: 'тэнай',
    translation: 'условие',
  },
  {
    word: 'טועה',
    pronouncing: 'тоэ',
    translation: 'ошибаться',
  },
  {
    word: 'בתוך',
    pronouncing: 'бэтох',
    translation: 'внутри',
  },
  {
    word: 'אורח',
    pronouncing: 'орэх',
    translation: 'гость',
  },
  {
    word: 'עני',
    pronouncing: 'ани',
    translation: 'бедный',
  },
  {
    word: 'עשור',
    pronouncing: 'асур',
    translation: 'богатый',
  },
  // Урок 27
  {
    word: 'זוכה',
    pronouncing: 'зохэ',
    translation: 'выигрывать',
  },
  {
    word: 'מחסן',
    pronouncing: 'махсан',
    translation: 'склад / кладовая',
  },
  {
    word: 'חנייה',
    pronouncing: 'ханая',
    translation: 'парковка',
  },
  {
    word: 'אשפה',
    pronouncing: 'ашпа',
    translation: 'мусор',
  },
  {
    word: 'תחבורה',
    pronouncing: 'тахбура',
    translation: 'транспорт',
  },
  {
    word: 'גודל',
    pronouncing: 'годэль',
    translation: 'размер',
  },
  {
    word: 'קרקע',
    pronouncing: 'карка',
    translation: 'земля',
  },
  {
    word: 'משותף',
    pronouncing: 'мэшутаф',
    translation: 'общий / совместный / общественный',
  },
  {
    word: 'מקלט',
    pronouncing: 'миклат',
    translation: 'убежище',
  },
  {
    word: 'חשמל',
    pronouncing: 'хашмаль',
    translation: 'электричество',
  },
  {
    word: 'בקשר',
    pronouncing: 'бакэшэр',
    translation: 'в связи',
  },
  {
    word: 'לברר',
    pronouncing: 'лэварэр',
    translation: 'выяснять',
  },
  {
    word: 'פרטים',
    pronouncing: 'пратим',
    translation: 'детали / подробности',
  },
  {
    word: 'מחיר',
    pronouncing: 'махир',
    translation: 'цена',
  },
  // Урок 28
  {
    word: 'קובע',
    pronouncing: 'ковэа',
    translation: 'назначать / определять',
  },
  {
    word: 'נשק',
    pronouncing: 'нэшэк',
    translation: 'оружие',
  },
  {
    word: 'ארנק',
    pronouncing: 'арнак',
    translation: 'кошелек',
  },
  {
    word: 'מרווח',
    pronouncing: 'мэрувах',
    translation: 'просторный',
  },
  {
    word: 'מואר',
    pronouncing: 'муар',
    translation: 'светло',
  },
  {
    word: 'חשוך',
    pronouncing: 'хашух',
    translation: 'темный',
  },
  {
    word: 'בזבוז',
    pronouncing: 'базбуз',
    translation: 'трата',
  },
  {
    word: 'האזעקה',
    pronouncing: 'хаазака',
    translation: 'сирена / тревога',
  },
  // Урок 29
  {
    word: 'מפרסם',
    pronouncing: 'мэфарсэм',
    translation: 'публиковать',
  },
  {
    word: 'תשלום',
    pronouncing: 'ташлум',
    translation: 'оплата',
  },
  {
    word: 'סכום',
    pronouncing: 'сэхум',
    translation: 'сумма',
  },
  {
    word: 'לעבור',
    pronouncing: 'лаавор',
    translation: 'переезжать',
  },
  {
    word: 'להמליץ',
    pronouncing: 'лэхамлиц',
    translation: 'рекомендовать',
  },
  {
    word: 'למכור',
    pronouncing: 'лимкор',
    translation: 'продавать',
  },
  {
    word: 'לתלות',
    pronouncing: 'литлот',
    translation: 'повесить',
  },
  {
    word: 'סביבה',
    pronouncing: 'свива',
    translation: 'окружение / обстановка',
  },
  // Урок 30
  {
    word: 'מנשק',
    pronouncing: 'мэнашэк',
    translation: 'целовать',
  },
  {
    word: 'מחבק',
    pronouncing: 'мэхабэк',
    translation: 'обнимать',
  },
  {
    word: 'מצלם',
    pronouncing: 'мэцалэм',
    translation: 'снимать',
  },
  {
    word: 'מבטל',
    pronouncing: 'мэватэль',
    translation: 'отменять',
  },
  {
    word: 'להמשך',
    pronouncing: 'лэхамшэх',
    translation: 'продолжаться',
  },
  {
    word: 'בלש',
    pronouncing: 'балаш',
    translation: 'детектив',
  },
  {
    word: 'לתקן',
    pronouncing: 'лэтакэн',
    translation: 'чинить',
  },
  {
    word: 'לאבד',
    pronouncing: 'лэавэд',
    translation: 'терять',
  },
  {
    word: 'דם',
    pronouncing: 'дам',
    translation: 'кровь',
  },
  {
    word: 'גרון',
    pronouncing: 'гарон',
    translation: 'горло',
  },
  {
    word: 'חזה',
    pronouncing: 'хаза',
    translation: 'грудь',
  },
  {
    word: 'גב',
    pronouncing: 'гав',
    translation: 'спина',
  },
  {
    word: 'ישבן',
    pronouncing: 'яшван',
    translation: 'зад',
  },
  {
    word: 'אף',
    pronouncing: 'аф',
    translation: 'нос',
  },
  {
    word: 'שן',
    pronouncing: 'шэн',
    translation: 'зуб',
  },
  {
    word: 'לשון',
    pronouncing: 'лашон',
    translation: 'язык',
  },
  {
    word: 'צוואר',
    pronouncing: 'цавар',
    translation: 'шея',
  },
  {
    word: 'שריר',
    pronouncing: 'шэрир',
    translation: 'мускул',
  },
  // Урок 31
  {
    word: 'קהילה',
    pronouncing: 'кэхила',
    translation: 'сообщество',
  },
  {
    word: 'מהי',
    pronouncing: 'махи',
    translation: 'в чем',
  },
  {
    word: 'מועדון',
    pronouncing: 'моадон',
    translation: 'клуб',
  },
  {
    word: 'כף',
    pronouncing: 'каф',
    translation: 'ложка / ладонь',
  },
  {
    word: 'אצבעות',
    pronouncing: 'эцваот',
    translation: 'пальцы',
  },
  {
    word: 'מנסה',
    pronouncing: 'мэнасэ',
    translation: 'пытаться',
  },
  {
    word: 'תרופה',
    pronouncing: 'труфа',
    translation: 'лекарство',
  },
  {
    word: 'בזכות',
    pronouncing: 'бизхут',
    translation: 'благодаря',
  },
  {
    word: 'מטוגן',
    pronouncing: 'мэтуган',
    translation: 'жаренный',
  },
  {
    word: 'חשיבה',
    pronouncing: 'хашива',
    translation: 'мышление',
  },
  {
    word: 'חיובי',
    pronouncing: 'хиуви',
    translation: 'положительный / позитивный',
  },
  {
    word: 'שלילי',
    pronouncing: 'шлили',
    translation: 'негативный / отрицательный',
  },
  {
    word: 'אמונה',
    pronouncing: 'эмуна',
    translation: 'вера / доверие',
  },
  {
    word: 'תהליך',
    pronouncing: 'тахалих',
    translation: 'процесс / процедура',
  },
  {
    word: 'ריק',
    pronouncing: 'рэйк',
    translation: 'пустой',
  },
  {
    word: 'מסביב',
    pronouncing: 'мисавив',
    translation: 'вокруг',
  },
  // Урок 32
  {
    word: 'אישור',
    pronouncing: 'ишур',
    translation: 'разрешение / справка',
  },
  {
    word: 'תנור',
    pronouncing: 'танур',
    translation: 'печь / духовка',
  },
  {
    word: 'אסיפה',
    pronouncing: 'асифа',
    translation: 'собрание',
  },
  {
    word: 'תוצאה',
    pronouncing: 'тоцаа',
    translation: 'результат',
  },
  {
    word: 'שביתה',
    pronouncing: 'швита',
    translation: 'забастовка',
  },
  {
    word: 'מחס',
    pronouncing: 'мэхэс',
    translation: 'таможня',
  },
  {
    word: 'פח אשפה',
    pronouncing: 'пах ашпа',
    translation: 'мусорный бак',
  },
  {
    word: 'כביסה',
    pronouncing: 'квиса',
    translation: 'стирка',
  },
  //Урок 33
  {
    word: 'גובה',
    pronouncing: 'гова',
    translation: 'высота',
  },
  {
    word: 'משקל',
    pronouncing: 'машкаль',
    translation: 'вес',
  },
  {
    word: 'בדידות',
    pronouncing: 'бдидут',
    translation: 'одиночество',
  },
  {
    word: 'אמת',
    pronouncing: 'эмэт',
    translation: 'правда',
  },
  {
    word: 'כוכב',
    pronouncing: 'кохав',
    translation: 'звезда',
  },
  {
    word: 'ממשיך',
    pronouncing: 'мамших',
    translation: 'продолжать',
  },
  {
    word: 'מבטיח',
    pronouncing: 'мавтиах',
    translation: 'обещать',
  },
  {
    word: 'חלש',
    pronouncing: 'халаш',
    translation: 'слабый',
  },
  {
    word: 'נשימה',
    pronouncing: 'нэшима',
    translation: 'дыхание',
  },
  // Урок 34
  {
    word: 'להקים',
    pronouncing: 'лэхаким',
    translation: 'основать',
  },
  {
    word: 'מזיז',
    pronouncing: 'мэзиз',
    translation: 'двигать',
  },
  {
    word: 'מביא',
    pronouncing: 'мэви',
    translation: 'приносить',
  },
  {
    word: 'הווה',
    pronouncing: 'хава',
    translation: 'настоящее',
  },
  {
    word: 'מכניס',
    pronouncing: 'махнис',
    translation: 'ставить / засовывать',
  },
  {
    word: 'המחאה',
    pronouncing: 'хамхаа',
    translation: 'чек',
  },
  {
    word: 'חומר',
    pronouncing: 'хомэр',
    translation: 'материал / вещество / товар',
  },
  {
    word: 'רצון',
    pronouncing: 'рацон',
    translation: 'воля',
  },
  {
    word: 'למעלה',
    pronouncing: 'лэмала',
    translation: 'вверх',
  },
  {
    word: 'למטה',
    pronouncing: 'лэмата',
    translation: 'вниз',
  }, 
  // Урок 35
  {
    word: 'חייב',
    pronouncing: 'хаяв',
    translation: 'обязан / должен',
  }, 
  {
    word: 'מסיים',
    pronouncing: 'мэсайэм',
    translation: 'заканчивать',
  }, 
  {
    word: 'למרות ש',
    pronouncing: 'ламрот шэ',
    translation: 'несмотря на',
  }, 
  {
    word: 'עבור',
    pronouncing: 'авур',
    translation: 'ради',
  }, 
  {
    word: 'בעד',
    pronouncing: 'бэад',
    translation: 'за',
  }, 
  {
    word: 'משתעל',
    pronouncing: 'миштааль',
    translation: 'кашлять',
  }, 
  {
    word: 'מברך',
    pronouncing: 'мэварэх',
    translation: 'поздравлять / благославлять',
  }, 
  {
    word: 'רמזור',
    pronouncing: 'рамзор',
    translation: 'светофор',
  }, 
  {
    word: 'להתקדם',
    pronouncing: 'лэхиткадэм',
    translation: 'продвигаться',
  }, 
  {
    word: 'להתרגל ל',
    pronouncing: 'лэхитрагэль лэ',
    translation: 'привыкать к',
  }, 
  {
    word: 'להתנדב',
    pronouncing: 'лэхитнадэв',
    translation: 'вызываться добровольцем',
  }, 
  {
    word: 'להתאהב',
    pronouncing: 'лэхитахэв',
    translation: 'влюбляться',
  }, 
  {
    word: 'משתתף',
    pronouncing: 'миштатэф',
    translation: 'участвовать',
  }, 
  {
    word: 'משתמש',
    pronouncing: 'миштамэш',
    translation: 'использовать',
  }, 
  {
    word: 'להתנצל',
    pronouncing: 'лэхитнацэль',
    translation: 'извиняться',
  }, 
  {
    word: 'להתנהג',
    pronouncing: 'лэхитнахэг',
    translation: 'вести себя',
  }, 
  {
    word: 'להבריז',
    pronouncing: 'лэхавриз',
    translation: 'прогуливать / пропускать',
  },
  // Урок 36
  {
    word: 'מסוכן',
    pronouncing: 'мэсукан',
    translation: 'опасный',
  },
  {
    word: 'נזלת',
    pronouncing: 'назэлэт',
    translation: 'насморк',
  },
  {
    word: 'מחקר',
    pronouncing: 'мэхкар',
    translation: 'исследование',
  },
  {
    word: 'להבריא',
    pronouncing: 'лэхаври',
    translation: 'выздоравливать',
  },
  {
    word: 'גורם',
    pronouncing: 'горэм',
    translation: 'вызывать / быть причиной',
  },
  {
    word: 'מנוחה',
    pronouncing: 'мэнуха',
    translation: 'отдых',
  },
  {
    word: 'מוצר',
    pronouncing: 'муцар',
    translation: 'продукт / товар',
  },
  {
    word: 'תחרות',
    pronouncing: 'тахарут',
    translation: 'соревнование / конкурс',
  },
  {
    word: 'מסתדר',
    pronouncing: 'мистадэр',
    translation: 'уживаться / складываться',
  },
  {
    word: 'מתווכח',
    pronouncing: 'митвакэах',
    translation: 'спорить / обсуждать',
  },
  {
    word: 'לפחות',
    pronouncing: 'лэфахот',
    translation: 'как минимум',
  },
  {
    word: 'להטעין',
    pronouncing: 'лэхатаин',
    translation: 'заряжать / пополнять',
  },
  {
    word: 'מודיעין',
    pronouncing: 'модэин',
    translation: 'информационный отдел',
  },
  {
    word: 'רציף',
    pronouncing: 'рациф',
    translation: 'платформа',
  },
  {
    word: 'הבא',
    pronouncing: 'хаба',
    translation: 'следующий',
  },
  {
    word: 'הנחה',
    pronouncing: 'ханаха',
    translation: 'скидка',
  },
  {
    word: 'כל כמה',
    pronouncing: 'коль кама',
    translation: 'как часто',
  },
  {
    word: 'ישיר',
    pronouncing: 'яшир',
    translation: 'прямой',
  },
  {
    word: 'מאסף',
    pronouncing: 'мэасэф',
    translation: 'маршрутный',
  },
  {
    word: 'עודף',
    pronouncing: 'одэф',
    translation: 'сдача',
  },
  // Урок 37
  {
    word: 'נפרד',
    pronouncing: 'нифрад',
    translation: 'порывать / расставаться',
  },
  {
    word: 'נרטב',
    pronouncing: 'ниртав',
    translation: 'промокать',
  },
  {
    word: 'נשלח',
    pronouncing: 'нишлах',
    translation: 'быть отправленным',
  },
  {
    word: 'חירש',
    pronouncing: 'хэйрэш',
    translation: 'глухой',
  },
  {
    word: 'אילם',
    pronouncing: 'илэм',
    translation: 'немой',
  },
  {
    word: 'ביקור',
    pronouncing: 'бикур',
    translation: 'визит',
  },
  {
    word: 'הזמנה',
    pronouncing: 'хазмана',
    translation: 'приглашение',
  },
  {
    word: 'שמיעה',
    pronouncing: 'шмия',
    translation: 'слух',
  },
  {
    word: 'להתלונן',
    pronouncing: 'лэхитлонэн',
    translation: 'жаловаться',
  },
  {
    word: 'לחסוך',
    pronouncing: 'лахсох',
    translation: 'сэкономить / сберечь',
  },
  {
    word: 'להוציא',
    pronouncing: 'лэхоци',
    translation: 'снять / забрать',
  },
  {
    word: 'להתקיים',
    pronouncing: 'лэхиткайем',
    translation: 'существовать / состояться',
  },
  {
    word: 'נוסף',
    pronouncing: 'носаф',
    translation: 'дополнительный',
  },
  {
    word: 'להודיע',
    pronouncing: 'лэходиа',
    translation: 'сообщать / информировать',
  },
  {
    word: 'לשפר',
    pronouncing: 'лэшапэр',
    translation: 'улучшать / исправлять',
  },
  {
    word: 'מסרון',
    pronouncing: 'мэсарон',
    translation: 'сообщение / смс',
  },
  {
    word: 'להצליח',
    pronouncing: 'лэхацлиах',
    translation: 'преуспевать',
  },
  {
    word: 'מברר',
    pronouncing: 'мэварэр',
    translation: 'выяснять',
  },
  {
    word: 'לקבוע',
    pronouncing: 'ликбоа',
    translation: 'назначать / определять',
  },
  {
    word: 'פנימה',
    pronouncing: 'пнима',
    translation: 'внутрь',
  },
  {
    word: 'כיוון',
    pronouncing: 'киван',
    translation: 'направление / курс',
  },
  {
    word: 'כתום',
    pronouncing: 'кэтом',
    translation: 'оранжевый',
  },
  {
    word: 'סגול',
    pronouncing: 'саголь',
    translation: 'фиолетовый',
  },
  {
    word: 'בוץ',
    pronouncing: 'боц',
    translation: 'грязь',
  },
  {
    word: 'אפור',
    pronouncing: 'афор',
    translation: 'серый',
  },
  {
    word: 'למדוד',
    pronouncing: 'лимдод',
    translation: 'мерять',
  },
  {
    word: 'מידי',
    pronouncing: 'мидай',
    translation: 'слишком',
  },
  {
    word: 'ריבית',
    pronouncing: 'рибит',
    translation: 'проценты / ставки',
  },
  {
    word: 'להחליף',
    pronouncing: 'лэхахлиф',
    translation: 'заменять',
  },
  {
    word: 'החלפה',
    pronouncing: 'хахлафа',
    translation: 'замена',
  },
  {
    word: 'סיגנון',
    pronouncing: 'сигнон',
    translation: 'стиль',
  },
  {
    word: 'גל',
    pronouncing: 'галь',
    translation: 'волна',
  },
  {
    word: 'תחזית',
    pronouncing: 'тахзит',
    translation: 'прогноз',
  },
  {
    word: 'יער',
    pronouncing: 'яар',
    translation: 'лес',
  },
  {
    word: 'שקר',
    pronouncing: 'шэкэр',
    translation: 'ложь',
  },
  {
    word: 'להחזיר',
    pronouncing: 'лэхахзир',
    translation: 'возвращать',
  },
  {
    word: 'בחינם',
    pronouncing: 'бэхинам',
    translation: 'бесплатно',
  },
  {
    word: 'תלוי ב',
    pronouncing: 'талуй бэ',
    translation: 'в зависимости от / зависит от',
  },
  {
    word: 'לנגוע',
    pronouncing: 'лингоа',
    translation: 'трогать / касаться',
  },
  {
    word: 'איכות',
    pronouncing: 'эйхут',
    translation: 'качество',
  },
  {
    word: 'חוות דעת',
    pronouncing: 'хават дат',
    translation: 'отзыв / рекомендация',
  },
  {
    word: 'להידבק',
    pronouncing: 'лэхидбак',
    translation: 'заражаться',
  },
  {
    word: 'לשטוף',
    pronouncing: 'лиштоф',
    translation: 'помыть',
  },
  {
    word: 'שיעול',
    pronouncing: 'шиуль',
    translation: 'кашель',
  },
  {
    word: 'קושי',
    pronouncing: 'коши',
    translation: 'трудности',
  },
  {
    word: 'סימן',
    pronouncing: 'симан',
    translation: 'знак / признак / симптом',
  },
  {
    word: 'להתחמם',
    pronouncing: 'лэхитхамэм',
    translation: 'нагреваться',
  },
  {
    word: 'להתקרר',
    pronouncing: 'лэхиткарэр',
    translation: 'охлаждаться / остывать',
  },
  {
    word: 'התחממות',
    pronouncing: 'хитхамэмут',
    translation: 'потепление',
  },
  {
    word: 'מקרה',
    pronouncing: 'микрэ',
    translation: 'случай / дело',
  },
  {
    word: 'אולם',
    pronouncing: 'улам',
    translation: 'зал',
  },
  {
    word: 'מחוץ ל',
    pronouncing: 'мэхуц лэ',
    translation: 'запределами / вне',
  },
  {
    word: 'לזרום',
    pronouncing: 'лизром',
    translation: 'течь',
  },
  {
    word: 'צינור',
    pronouncing: 'цинор',
    translation: 'труба',
  },
  {
    word: 'לחתום',
    pronouncing: 'лахтом',
    translation: 'подписывать',
  },
  {
    word: 'להפקיד',
    pronouncing: 'лэхафкид',
    translation: 'внести / пополнить',
  },
  {
    word: 'למשוך',
    pronouncing: 'лимшох',
    translation: 'вытащить / снять',
  },
  {
    word: 'להעביר',
    pronouncing: 'лэхавир',
    translation: 'перевести / передать',
  },
  {
    word: 'הגיוני',
    pronouncing: 'хигьони',
    translation: 'разумный / логичный',
  },
  {
    word: 'הלוואה',
    pronouncing: 'халваа',
    translation: 'ссуда / займ',
  },
  {
    word: 'להודות',
    pronouncing: 'лэходот',
    translation: 'благодарить',
  },
  {
    word: 'חיסכון',
    pronouncing: 'хисахон',
    translation: 'экономия / спасение / сбережение',
  },
  {
    word: 'להמתין',
    pronouncing: 'лэхамтин',
    translation: 'ждать / дожидаться',
  },
  {
    word: 'פעולה',
    pronouncing: 'пэула',
    translation: 'операция / действие',
  },
  {
    word: 'עמלה',
    pronouncing: 'амла',
    translation: 'комиссия / комиссионные',
  },
  {
    word: 'לדחות',
    pronouncing: 'лидхот',
    translation: 'отложить / перенести',
  },
  {
    word: 'אזרח',
    pronouncing: 'эзрах',
    translation: 'гражданин',
  },
  {
    word: 'אמנם',
    pronouncing: 'амнам',
    translation: 'хотя',
  },
  {
    word: 'מולדת',
    pronouncing: 'молэдэт',
    translation: 'родина',
  },
  {
    word: 'מהירות',
    pronouncing: 'мэхирут',
    translation: 'скорость',
  },
  {
    word: 'זהירות',
    pronouncing: 'зэхирот',
    translation: 'осторожность / осторожно',
  },
  {
    word: 'צער',
    pronouncing: 'цаар',
    translation: 'горе / печаль',
  },
  {
    word: 'לצערי',
    pronouncing: 'лэцари',
    translation: 'к сожалению',
  },
  {
    word: 'מושג',
    pronouncing: 'мусаг',
    translation: 'представление / понятие',
  },
  {
    word: 'להתייחס',
    pronouncing: 'лэхитъяхэс',
    translation: 'обращаться / относиться',
  },
  {
    word: 'בהלה',
    pronouncing: 'бэхала',
    translation: 'паника',
  },
  {
    word: 'המון',
    pronouncing: 'хамон',
    translation: 'куча / множество',
  },
  {
    word: 'להצתרף',
    pronouncing: 'лэхицтарэф',
    translation: 'вливаться / присоединяться',
  },
  {
    word: 'אסיפה',
    pronouncing: 'асэйфа',
    translation: 'собрание',
  },
  {
    word: 'לאסוף',
    pronouncing: 'лээсоф',
    translation: 'собирать / забирать',
  },
  {
    word: 'ארגון',
    pronouncing: 'иргун',
    translation: 'организация',
  },
  {
    word: 'מעטפה',
    pronouncing: 'маатафа',
    translation: 'конверт',
  },
  {
    word: 'לשכנע',
    pronouncing: 'лэшахнэа',
    translation: 'убеждать',
  },
  {
    word: 'בעיקר',
    pronouncing: 'бэикар',
    translation: 'в основном / главным образом',
  },
  {
    word: 'משופץ',
    pronouncing: 'мэшупац',
    translation: 'ремонтированный',
  },
  {
    word: 'נסיעה',
    pronouncing: 'нэсия',
    translation: 'поездка',
  },
  {
    word: 'בקשה',
    pronouncing: 'бакаша',
    translation: 'просьба',
  },
  {
    word: 'הסכם',
    pronouncing: 'хэскэм',
    translation: 'соглашение',
  },
  {
    word: 'החלטה',
    pronouncing: 'хахлата',
    translation: 'решение',
  },
  {
    word: 'ראיון',
    pronouncing: 'рэайон',
    translation: 'интервью',
  },
  {
    word: 'הבטחה',
    pronouncing: 'хавтэха',
    translation: 'обещание',
  },
  {
    word: 'לצעוק',
    pronouncing: 'лицок',
    translation: 'кричать',
  },
  {
    word: 'לשפץ',
    pronouncing: 'лешапэц',
    translation: 'переделать / отремонтировать',
  },
  {
    word: 'לאשר',
    pronouncing: 'лэашэр',
    translation: 'подтвердить / одобрить',
  },
  {
    word: 'מן',
    pronouncing: 'мин',
    translation: 'из',
  },
  {
    word: 'לנצח',
    pronouncing: 'лэнацэах',
    translation: 'навсегда',
  },
  {
    word: 'נדמה',
    pronouncing: 'нидмэ',
    translation: 'кажется',
  },
  {
    word: 'נשבע',
    pronouncing: 'нишва',
    translation: 'клясться',
  },
  {
    word: 'תוספת',
    pronouncing: 'тосэфэт',
    translation: 'дополнение / прибавка',
  },
  {
    word: 'לשכב',
    pronouncing: 'лишкав',
    translation: 'лежать / переспать',
  },
  {
    word: 'לנהל',
    pronouncing: 'лэнахэль',
    translation: 'управлять',
  },
  {
    word: 'לרכל',
    pronouncing: 'лэрахэль',
    translation: 'сплетничать',
  },
  {
    word: 'ידוע',
    pronouncing: 'ядуа',
    translation: 'известный',
  },
  {
    word: 'אוסר',
    pronouncing: 'осэр',
    translation: 'запрещать',
  },
  {
    word: 'בכל זאת',
    pronouncing: 'бэхоль зот',
    translation: 'несмотря на это',
  },
  {
    word: 'סובל',
    pronouncing: 'совэль',
    translation: 'страдать',
  },
  {
    word: 'נכשל',
    pronouncing: 'нихшаль',
    translation: 'проваливаться / терпеть неудачу',
  },
  {
    word: 'ממד',
    pronouncing: 'мамад',
    translation: 'комната безопасности',
  },
  {
    word: 'מרוהט',
    pronouncing: 'мэрухат',
    translation: 'меблированный',
  },
  {
    word: 'עניין',
    pronouncing: 'иньян',
    translation: 'интерес',
  },
  {
    word: 'מודעה',
    pronouncing: 'модаа',
    translation: 'объявление',
  },
  {
    word: 'מיקום',
    pronouncing: 'микум',
    translation: 'местонахождение / расположение',
  },
  {
    word: 'כניסה',
    pronouncing: 'книса',
    translation: 'вход',
  },
  {
    word: 'מייד',
    pronouncing: 'мияд',
    translation: 'немедленно / сразу',
  },
  {
    word: 'צביעה',
    pronouncing: 'цвия',
    translation: 'покраска',
  },
  {
    word: 'להוריד',
    pronouncing: 'лэхорид',
    translation: 'убрать / опустить',
  },
  {
    word: 'גמיש',
    pronouncing: 'гамиш',
    translation: 'гибкий',
  },
  {
    word: 'לשנות',
    pronouncing: 'лэшанот',
    translation: 'менять',
  },
  {
    word: 'להרוויח',
    pronouncing: 'лэхарвиах',
    translation: 'зарабатывать',
  },
  {
    word: 'קבועה',
    pronouncing: 'квуа',
    translation: 'постоянный / стабильный',
  },
  {
    word: 'התמיכה',
    pronouncing: 'хатмиха',
    translation: 'поддержка',
  },
  {
    word: 'פעיל',
    pronouncing: 'пайиль',
    translation: 'активный / действующий',
  },
  {
    word: 'תשומת',
    pronouncing: 'тэссумэт',
    translation: 'внимание',
  },
  {
    word: 'הבדל',
    pronouncing: 'хабдаль',
    translation: 'разница / различие',
  },
  {
    word: 'עיקר',
    pronouncing: 'икэр',
    translation: 'в основном',
  },
  {
    word: 'עצה',
    pronouncing: 'аца',
    translation: 'совет',
  },
  {
    word: 'עמוד',
    pronouncing: 'амуд',
    translation: 'страница',
  },
  {
    word: 'צורה',
    pronouncing: 'цура',
    translation: 'форма',
  },
  {
    word: 'טופס',
    pronouncing: 'тофэс',
    translation: 'форма / бланк',
  },
  {
    word: 'תרמיל',
    pronouncing: 'тармиль',
    translation: 'рюкзак',
  },
  {
    word: 'מתבסס',
    pronouncing: 'митвасэс',
    translation: 'основываться',
  },
  {
    word: 'כללי',
    pronouncing: 'клали',
    translation: 'правила',
  },
  {
    word: 'קבוע',
    pronouncing: 'квуа',
    translation: 'постоянный',
  },
  {
    word: 'מוסיף',
    pronouncing: 'мосиф',
    translation: 'добавлять',
  },
  {
    word: 'ירח',
    pronouncing: 'ярэах',
    translation: 'луна',
  },
  {
    word: 'להוסיף',
    pronouncing: 'лэхосиф',
    translation: 'добавлять',
  },
  {
    word: 'לפגוע',
    pronouncing: 'лифгоа',
    translation: 'причинять вред',
  },
  {
    word: 'לערוך',
    pronouncing: 'лаарох',
    translation: 'устраивать / проводить / накрывать',
  },
  {
    word: 'קבלת קהל',
    pronouncing: 'кабалат кахаль',
    translation: 'рабочее время',
  },
  {
    word: 'מוכן',
    pronouncing: 'мухан',
    translation: 'быть готовым',
  },
  {
    word: 'מסתובב',
    pronouncing: 'мистовэв',
    translation: 'тусоваться',
  },
  {
    word: 'כיכר',
    pronouncing: 'кикар',
    translation: 'площадь',
  },
  {
    word: 'צומת',
    pronouncing: 'цомэт',
    translation: 'перекресток',
  },
  {
    word: 'ימינה',
    pronouncing: 'ямина',
    translation: 'направо',
  },
  {
    word: 'שמאלה',
    pronouncing: 'смола',
    translation: 'налево',
  },
  {
    word: 'קדימה',
    pronouncing: 'кадима',
    translation: 'вперед',
  },
  {
    word: 'אחורה',
    pronouncing: 'ахора',
    translation: 'назад',
  },
  {
    word: 'בינתיים',
    pronouncing: 'бэентаим',
    translation: 'тем временем / а пока',
  },
  {
    word: 'שונא',
    pronouncing: 'сонэ',
    translation: 'ненавидеть',
  },
  {
    word: 'עבה',
    pronouncing: 'авэ',
    translation: 'толстый',
  },
  {
    word: 'דק',
    pronouncing: 'дак',
    translation: 'тонкий',
  },
  {
    word: 'לערוך',
    pronouncing: 'лаарох',
    translation: 'проводить / устраивать',
  },
  {
    word: 'מתרגם',
    pronouncing: 'метаргэм',
    translation: 'переводить',
  },
  {
    word: 'מוריד',
    pronouncing: 'морид',
    translation: 'снимать / убирать',
  },
  {
    word: 'מוסיף',
    pronouncing: 'мосиф',
    translation: 'добавлять',
  },
  {
    word: 'המתנה',
    pronouncing: 'хамтана',
    translation: 'ожидание',
  },
  {
    word: 'בחזרה',
    pronouncing: 'бэхазара',
    translation: 'обратно',
  },
  {
    word: 'לכבס',
    pronouncing: 'лэхабэс',
    translation: 'стирать',
  },
  {
    word: 'מבצע',
    pronouncing: 'мэвацэа',
    translation: 'выполнять / совершать',
  },
  {
    word: 'לוחש',
    pronouncing: 'лохэш',
    translation: 'шептать',
  },
  {
    word: 'לנשום',
    pronouncing: 'линшом',
    translation: 'передохнуть / подышать',
  },
  {
    word: 'אכפת לי / לא אכפת לי',
    pronouncing: 'ихпат ли / ло ихпат ли',
    translation: 'мне важно / мне все равно',
  },
  {
    word: 'בקיצור',
    pronouncing: 'бэкицур',
    translation: 'короче говоря / в общем',
  },
  {
    word: 'חידוש',
    pronouncing: 'хидуш',
    translation: 'обновление / новшество',
  },
  {
    word: 'בדור',
    pronouncing: 'бадор',
    translation: 'поколение',
  },
  {
    word: 'עיסוק',
    pronouncing: 'исок',
    translation: 'занятие / профессия',
  },
  {
    word: 'לשם מה',
    pronouncing: 'лашэм ма',
    translation: 'для чего',
  },
  {
    word: 'משלוח',
    pronouncing: 'мишлоах',
    translation: 'доставка',
  },
  {
    word: 'שליח',
    pronouncing: 'шалиах',
    translation: 'курьер',
  },
  {
    word: 'במסירות',
    pronouncing: 'бамэсирут',
    translation: 'самоотверженно',
  },
  {
    word: 'אופניים',
    pronouncing: 'офанаим',
    translation: 'велосипед',
  },
  {
    word: 'שקית',
    pronouncing: 'сакит',
    translation: 'пакет',
  },
  {
    word: 'תירס',
    pronouncing: 'тирас',
    translation: 'кукуруза',
  },
  {
    word: 'מרשם',
    pronouncing: 'миршам',
    translation: 'рецепт',
  },
  {
    word: 'נמאס',
    pronouncing: 'нимас',
    translation: 'надоело',
  },
  {
    word: 'נחשב',
    pronouncing: 'нэхшав',
    translation: 'считается',
  },
  {
    word: 'שפתיים',
    pronouncing: 'сфатаим',
    translation: 'губы',
  },
  {
    word: 'מבט',
    pronouncing: 'мават',
    translation: 'взгляд',
  },
  {
    word: 'תמים',
    pronouncing: 'тамим',
    translation: 'наивный',
  },
  {
    word: 'כיצד',
    pronouncing: 'кэйцад',
    translation: 'как',
  },
  {
    word: 'במקום',
    pronouncing: 'бимком',
    translation: 'вместо',
  },
  {
    word: 'לדאוג',
    pronouncing: 'лидог',
    translation: 'беспокоиться',
  },
  {
    word: 'תקופה',
    pronouncing: 'ткуфа',
    translation: 'период',
  },
  {
    word: 'בטאבים',
    pronouncing: 'батаавим',
    translation: 'вкладки',
  },
  {
    word: 'גישה',
    pronouncing: 'гиша',
    translation: 'подход, отношение',
  },
  {
    word: 'לעתים',
    pronouncing: 'лэитим',
    translation: 'иногда',
  },
  {
    word: 'מדמיין',
    pronouncing: 'мэдамиэн',
    translation: 'представлять',
  },
  {
    word: 'קריאת',
    pronouncing: 'криат',
    translation: 'чтение',
  },
  {
    word: 'חווית',
    pronouncing: 'хавият',
    translation: 'опыт',
  },
  {
    word: 'אין טעם',
    pronouncing: 'эйн таам',
    translation: 'нет смысла',
  },
  {
    word: 'לשבור',
    pronouncing: 'лишбор',
    translation: 'ломать / разбивать',
  },
  {
    word: 'גרוע',
    pronouncing: 'гаруа',
    translation: 'ужасный / отвратительный',
  },
  {
    word: 'להישבר',
    pronouncing: 'лэхишавэр',
    translation: 'ломаться / разбиваться',
  },
  {
    word: 'רסיסים',
    pronouncing: 'рэсисим',
    translation: 'осколки',
  },
  {
    word: 'להתקל',
    pronouncing: 'лэхитакэль',
    translation: 'стокнуться / натолкнуться',
  },
  {
    word: 'בטירוף',
    pronouncing: 'батэруф',
    translation: 'безумие',
  },
  {
    word: 'הזדמנויות',
    pronouncing: 'хиздамнует',
    translation: 'возможности',
  },
  {
    word: 'חשק',
    pronouncing: 'хэшэк',
    translation: 'желание',
  },
  {
    word: 'מיומנות',
    pronouncing: 'миоманут',
    translation: 'талант / мастерство',
  },
  {
    word: 'מסלול',
    pronouncing: 'маслуль',
    translation: 'курс / маршрут',
  },
  {
    word: 'מבנה',
    pronouncing: 'мивнэ',
    translation: 'строение / структура',
  },
  {
    word: 'מסוים',
    pronouncing: 'мэсуям',
    translation: 'конкретный / определенный',
  },
  {
    word: 'מרצה',
    pronouncing: 'марцэ',
    translation: 'преподаватель',
  },
  {
    word: 'ידע',
    pronouncing: 'яда',
    translation: 'знания',
  },
  {
    word: 'הערות',
    pronouncing: 'хаарот',
    translation: 'заметки',
  },
  {
    word: 'משובים',
    pronouncing: 'мэшувим',
    translation: 'советы / отклик',
  },
  {
    word: 'מפגש',
    pronouncing: 'мифгашь',
    translation: 'встреча',
  },
  {
    word: 'קצב',
    pronouncing: 'кэцэв',
    translation: 'ритм',
  },
  {
    word: 'מפתיע',
    pronouncing: 'мафтиа',
    translation: 'удивлять',
  },
  {
    word: 'להפוך',
    pronouncing: 'лаафох',
    translation: 'стать / превратиться',
  },
  {
    word: 'להוביל',
    pronouncing: 'лэховиль',
    translation: 'проводить / управлять',
  },
  {
    word: 'השתתפות',
    pronouncing: 'хиштатфут',
    translation: 'участие',
  },
  {
    word: 'דורש',
    pronouncing: 'дорэш',
    translation: 'требовать',
  },
  {
    word: 'נושא',
    pronouncing: 'носэ',
    translation: 'тема / предмет',
  },
  {
    word: 'מעבר',
    pronouncing: 'маавар',
    translation: 'кроме / помимо / проход',
  },
  {
    word: 'לסילבוס',
    pronouncing: 'лэсильбус',
    translation: 'учебная программа',
  },
  {
    word: 'מועיל',
    pronouncing: 'моиль',
    translation: 'полезный',
  },
  {
    word: 'לפתור',
    pronouncing: 'лифтор',
    translation: 'решить / уладить',
  },
  {
    word: 'מסגרת',
    pronouncing: 'мисгэрэт',
    translation: 'рамка',
  },
  {
    word: 'אחלה',
    pronouncing: 'эхлэ',
    translation: 'отлично',
  },
  {
    word: 'מקליד',
    pronouncing: 'миклид',
    translation: 'печатать / набирать',
  },
  {
    word: 'חידה',
    pronouncing: 'хида',
    translation: 'загадка',
  },
  {
    word: 'תכנות',
    pronouncing: 'тихнут',
    translation: 'программирование',
  },
  {
    word: 'אקראי',
    pronouncing: 'акраи',
    translation: 'случайный',
  },
  {
    word: 'הופך',
    pronouncing: 'хофэх',
    translation: 'превращать',
  },
  {
    word: 'שווה',
    pronouncing: 'шав',
    translation: 'стоит / заслуживает',
  },
  {
    word: 'טווח',
    pronouncing: 'твах',
    translation: 'диапазон / спектр',
  },
  {
    word: 'מזמן',
    pronouncing: 'мизман',
    translation: 'давно',
  },
  {
    word: 'אתגר',
    pronouncing: 'этгар',
    translation: 'вызов / испытание',
  },
  {
    word: 'נתקע',
    pronouncing: 'нитка',
    translation: 'застревать',
  },
  {
    word: 'קישור',
    pronouncing: 'кишур',
    translation: 'ссылка',
  },
  {
    word: 'הקלטה',
    pronouncing: 'хаклата',
    translation: 'запись / пленка',
  },
  {
    word: 'כפתור',
    pronouncing: 'кафтор',
    translation: 'кнопка',
  },
  {
    word: 'מסך',
    pronouncing: 'масах',
    translation: 'экран',
  },
  {
    word: 'שקוף',
    pronouncing: 'шакуф',
    translation: 'прозрачный / очевидный',
  },
  {
    word: 'צורה',
    pronouncing: 'цура',
    translation: 'форма / облик',
  },
  {
    word: 'מוחק',
    pronouncing: 'мохэк',
    translation: 'удалять',
  },
  {
    word: 'פריט',
    pronouncing: 'парит',
    translation: 'пункт / элемент',
  },
  {
    word: 'שילוב',
    pronouncing: 'шилув',
    translation: 'комбинация / сочетание',
  },
  {
    word: 'אירוע',
    pronouncing: 'эйруа',
    translation: 'событие',
  },
  {
    word: 'טיפוס',
    pronouncing: 'типус',
    translation: 'тип',
  },
  {
    word: 'מחובר',
    pronouncing: 'мэхубар',
    translation: 'быть связанным / подключенным',
  },
  {
    word: 'רשת',
    pronouncing: 'рэшэт',
    translation: 'сеть',
  },
  {
    word: 'הגדרות',
    pronouncing: 'хагдарот',
    translation: 'настройки / конфигурации',
  },
  {
    word: 'סקר',
    pronouncing: 'сэкэр',
    translation: 'опрос',
  },
  {
    word: 'ערך',
    pronouncing: 'эрэх',
    translation: 'значение / ценность',
  },
  {
    word: 'ברירת מחדל',
    pronouncing: 'брират мэхдаль',
    translation: 'выбор по умолчанию',
  },
  {
    word: 'יישום',
    pronouncing: 'исум',
    translation: 'приложение',
  },
  {
    word: 'אופן הבא',
    pronouncing: 'офэн хабаа',
    translation: 'следующим образом',
  },
  {
    word: 'מחזיק',
    pronouncing: 'махзик',
    translation: 'держать',
  },
  {
    word: 'הנה',
    pronouncing: 'хинэ',
    translation: 'вот',
  },
  {
    word: 'קובץ',
    pronouncing: 'ковэц',
    translation: 'файл',
  },
  {
    word: 'שגיאה',
    pronouncing: 'шгиа',
    translation: 'ошибка',
  },
  {
    word: 'הערה',
    pronouncing: 'хараа',
    translation: 'комментарий',
  },
  {
    word: 'להגדיר',
    pronouncing: 'лэхагдир',
    translation: 'настроить',
  },
  {
    word: 'קלט',
    pronouncing: 'кэлэт',
    translation: 'ввод / инпут',
  },
  {
    word: 'לכלול',
    pronouncing: 'лихлоль',
    translation: 'включать в себя',
  },
  {
    word: 'הדרגתית',
    pronouncing: 'хадрагатит',
    translation: 'постепенно',
  },
  {
    word: 'לגרום',
    pronouncing: 'лигром',
    translation: 'заставлять',
  },
  {
    word: 'לדלג',
    pronouncing: 'лэдалэг',
    translation: 'пропускать',
  },
  {
    word: 'תמיכה',
    pronouncing: 'тмиха',
    translation: 'поддержка',
  },
  {
    word: 'לעקוב',
    pronouncing: 'лааков',
    translation: 'отследить',
  },
  {
    word: 'הדיון',
    pronouncing: 'хадиун',
    translation: 'дебаты / обсуждение',
  },
]
