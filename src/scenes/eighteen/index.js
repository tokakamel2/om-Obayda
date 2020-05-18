import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Alert,
  
  ImageBackground,
  StyleSheet,

  
} from 'react-native';

import PlayerScreen from 'react-native-sound-playerview';

import { ScrollView } from 'react-native-gesture-handler';

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [
        {
          name: '#احكام_سجود_السهو',
          id: 1,
          audiPath: 'https://gdurl.com/xEbS',
          isOpend: false,
          path: require('_assets/images/18/1.jpeg')
          
          },
        {
          name: '#الارهاق_البدني_وعدم_الخشوع',
          id: 2,
          audiPath: 'https://gdurl.com/3yj5',
        
         
        },
        {
          name: '#التخلص_من_الغيبة_الوقوع_في_الغيبة',
          id: 3,
          audiPath: 'https://gdurl.com/GAPQY',
         
        },
        {
          name: '#الجهر_بالقراءة_في_كل_الصلوات_وا',
          id: 4,
          audiPath: 'https://gdurl.com/BYhQ',
          text: '4',
        },
        {
          name: '#الحسد',
          id: 5,
          audiPath: 'https://gdurl.com/cazT',
          text: '5',
        },
        {
          name: '#الحمامات_العامة_الجاكوزي_المساج_الكوافيرات',
          id: 6,
          audiPath: 'https://gdurl.com/p2C9',
          text: '6',
        },
        {
          name: '#الدعاء_بظهر_الغيب',
          id: 7,
          audiPath: 'https://gdurl.com/XViN',
          text: '7',
        },
        {
          name: '#الصالحون_ام_المصلحون_افضل',
          id: 8,
          audiPath: 'https://gdurl.com/yc_e',
          text: '8',
        },
        {name:'#امامة_الطفل_لامه_في_الصلاة',
        id:9,
        audiPath: 'https://gdurl.com/Fpiw',
        text: '8',
        },
        {name:'#بنتي_والصلاة',
        id:10,
        audiPath: 'https://gdurl.com/JVNm',
        text: '8',
        },

        {name:'#حكم_الذهاب_للحج_بدون_محرم',
        id:11,
        audiPath: 'https://gdurl.com/q1nt',
        text: '8',
        path: require('_assets/images/18/2.jpeg')
        },
        {name:'#حكم_الوشم',
        id:12,
        audiPath: 'https://gdurl.com/E2Mt',
        text: '8',
        },
        {name:'#حكم_زيارة_القبور',
        id:13,
        audiPath: 'https://gdurl.com/R8Nl',
        text: '8',
      },
        {
          name:'#حكم_قراءة_الفنجان_والودع',
          id:14,
        audiPath: 'https://gdurl.com/kLEL5',
        text: '8',
        
      },
        {
          name:'#زوجها_يصدها_عن_طلب_العلم',

        id:15,
        audiPath: 'https://gdurl.com/bw74',
        text: '8',
      },
        {
          name: '#سجدة_التلاوة_للحائض_وستر_البدن_لقراءة_القران',
        id:16,
        audiPath: 'https://gdurl.com/17bw',
        text: '8',
      },
      {
        name: '#صبغ_الشعر_باللون_الاسود',
        id: 1,
        audiPath: 'https://gdurl.com/RTH0',
        isOpend: false,
        
        },
      {
        name: '#صدقة_اطعام_صدقةجارية_ركعتي_الشفع',
        id: 2,
        audiPath: 'https://gdurl.com/BgP2',
      
       
      },
      {
        name: '#عقوق_الابناء_والوسواس_والحكمة_في_اقدار_الله',
        id: 3,
        audiPath: 'https://gdurl.com/O1ae',
       
      },
      {
        name: '#علاج_الخمول',
        id: 4,
        audiPath: 'https://gdurl.com/o8_C',
        text: '4',
      },
      {
        name: '#علاج_الفتور_معنى_يستشرفها_الشيط',
        id: 5,
        audiPath: 'https://gdurl.com/sL_s',
        text: '5',
        path: require('_assets/images/18/3.jpeg')
      },
      { name: '#كيف_ادعو_وكيف_اكون_نعم_العبد',
        id: 6,
        audiPath: 'https://gdurl.com/DeDS',
        text: '6',
      },
      {
        name: '#كيف_ادعوا_صديقتي_المتبرجة',
        id: 7,
        audiPath: 'https://gdurl.com/zFpu',
        text: '7',
      },
      {
        name:'#كيف_اطلب_العلم_الشرعي',
        id: 8,
        audiPath: 'https://gdurl.com/C61q',
      },
      {
     name:'#كيف افرق بين استحقار الذنب واستنكار الذنب',  
      id:9,
      audiPath: 'https://gdurl.com/wONM',
      },
      {
        name:'#كيف افرق بين استحقار الذنب واستنكار الذنب2',

      id:10,
      audiPath: 'https://gdurl.com/73iH',
      },
      {
        name:'#كيف_اقوم_للصلاة', 
      id:11,
      audiPath: 'https://gdurl.com/t9Tu',
      },
      {
        name:'#لاتقضي_صلاة_ايام_الحيض',
  
      id:12,
      audiPath: 'https://gdurl.com/tbDG',
      text: '8',
      },
      {
        name:'#مس_الحائض_المصحف_اعياد_الميلاد_',  
      id:13,
      audiPath: 'https://gdurl.com/bIOc',
      text: '8',
      path: require('_assets/images/18/4.jpeg')
    },
      {
        name:'#نقل_الفتوى_عن_الغير_الصدقة_تغطي',   
      id:14,
      audiPath: 'https://gdurl.com/mfsJ',
      text: '8',
      
    },
      {
        name:'#هل_النقاب_فرض',     
      id:15,
      audiPath: 'https://gdurl.com/RWtV',
      text: '8',
    },
      {
        name: '#وقت_صلاة_قيام_الليل',
 
      id:16,
      audiPath: 'https://gdurl.com/khH8',
      text: '8',
    },

    {      name: '#يجوز_الاغتسال_بماء_مقروء_عليها',

      id: 1,
      audiPath: 'https://gdurl.com/7zdH',
      isOpend: false,
      
      },
    {      name: 'احكام الاستحاضة',

      id: 2,
      audiPath: 'https://gdurl.com/MRu0',
    
     
    },
    {      name: 'احكام للنساء',

      id: 3,
      audiPath: 'https://gdurl.com/F9Yq',
     
    },
    {      name: 'اخاف الرياء',

      id: 4,
      audiPath: 'https://gdurl.com/JKll',
      text: '4',
    },
    {      name: 'اخذ-حبوب-منع-الحمل-لتتابع-الصیام',

      id: 5,
      audiPath: 'https://gdurl.com/P5nC',
      text: '5',
    },
    {      name: 'اخراج_اطعام_افطار_رمضان_وانا_في',

      id: 6,
      audiPath: 'https://gdurl.com/bDhd',
      text: '6',
      path: require('_assets/images/18/5.jpeg')
    },
    
    {      name: 'اخلاص النية في الأعمال الصالحة',

      id: 7,
      audiPath: 'https://gdurl.com/Frc3',
      text: '7',
    },
    {      name:'اداب، الدعاء',

      id: 8,
      audiPath: 'https://gdurl.com/zM0J',
      text: '8',
    },
    {
      name:'اذنبت واندم كثيرا ',
 
    id:9,
    audiPath: 'https://gdurl.com/C3ZK',
    text: '8',
    },
    {
      name:'اذي_الجن_والشيطانخاصة_اثناء_النوم',
  
    id:10,
    audiPath: 'https://gdurl.com/Zial',
    text: '8',
    },
    {
      name:'ارباح البنوك والبوسطة ربا وكبيرة',

    id:11,
    audiPath: 'https://gdurl.com/jZAf',
    text: '8',
    },
    {
      name:'اريد_لبس_النقاب_والشيطان_يوسوس_لي',

    id:12,
    audiPath: 'https://gdurl.com/3cHa',
    text: '8',
    },
    {
      name:'ازالة شعر الوجه',

    id:13,
    audiPath: 'https://gdurl.com/DDzA',
    text: '8',
  },
    {
      name:'استخدام قلم الحواجب في البيت',

    id:14,
    audiPath: 'https://gdurl.com/gvN3',
    text: '8',
    path: require('_assets/images/18/6.jpeg')
    
  },
    {
      name:'استخدام،_الصابون،_قبل،_الوضوء_قول',

    id:15,
    audiPath: 'https://gdurl.com/5NqC',
    text: '8',
  },
    {
      name: 'استشارة_الزوج_العاصي_وكيفية_دعوته',  
    id:16,
    audiPath: 'https://gdurl.com/wqsV',
    text: '8',
  },



  {name: 'اضع لصقة علي جرح يدي ',
    id: 1,
    audiPath: 'https://gdurl.com/z0yR',
    isOpend: false,
    
    },
  {
    name: 'اعطاء المرأة حقن للرجال',
    id: 2,
    audiPath: 'https://gdurl.com/Np9b',
  
   
  },
  {
    name: 'اغتنام شهر رجب وشعبان',
    id: 3,
    audiPath: 'https://gdurl.com/FJ1I',
   
  },
  {    name: 'افطار رمضان بدون عذر ',

    id: 4,
    audiPath: 'https://gdurl.com/cgSu',
    text: '4',
  },
  {    name: 'افعل.لامي. كل. شيء. ولاترضى',
    id: 5,
    audiPath: 'https://gdurl.com/wbax',
    text: '5',
  },
  {
    name: 'الاحتفال. بمرور. سنة',
    id: 6,
    audiPath: 'https://gdurl.com/Kg0k',
    text: '6',
  },
  {
    name: 'الاغتسال_من_الحيض_العصر_واداء_صلاةالعصر',
    id: 7,
    audiPath: 'https://gdurl.com/OUeg',
    text: '7',
    path: require('_assets/images/18/1.jpeg')
  },
  { name:'التقصيرمع. القران ',
    name:'التعامل مع الكفار ',
    id: 8,
    audiPath: 'https://gdurl.com/36js',
    text: '8',
  },
  {
    name:'الجمع_بين_صيام_كفارةالنذر_والايام',
  id:9,
  audiPath: 'https://gdurl.com/5FkA',
  text: '8',
  },
  {
   
  id:10,
  audiPath: 'https://gdurl.com/98bj',
  text: '8',
  },
  {
    name:'الجهاد في بر الوالدين', 
  id:11,
  audiPath: 'https://gdurl.com/xO6A',
  text: '8',
  },
  {
    name:'الزهد',
  id:12,
  audiPath: 'https://gdurl.com/y6WQ',
  text: '8',
  },
  {
    name:'الزوج،،_البخيل،،_الزوج،،_عبوس،،',
  id:13,
  audiPath: 'https://gdurl.com/LzRT',
  text: '8',
},
  {
    name:'السلام_على_نصرانية_قراءةالقران_بدون',
  id:14,
  audiPath: 'https://gdurl.com/15vF',
  text: '8',
  
},
  {
    name:'الصدقة الجارية ', 
  id:15,
  audiPath: 'https://gdurl.com/tllz',
  text: '8',
},
  {
    name: 'الصلاة_بملابس_عليها_رسومات_العمل', 
  id:16,
  audiPath: 'https://gdurl.com/fS6t',
  text: '8',
  path: require('_assets/images/18/2.jpeg')
},


{
  name: 'الصلاة_بملابس_مرسوم_عليها_زوات_ارواح', 
  id: 1,
  audiPath: 'https://gdurl.com/Ng8X',
  isOpend: false,
  
  },
{
  name: 'الصلاة، بالبنطلون',
  id: 2,
  audiPath: 'https://gdurl.com/JXS1',

 
},
{
  name: 'الصلوات_الجهرية_معنيمن_غشنا_فليس',

  id: 3,
  audiPath: 'https://gdurl.com/BH5B',
 
},
{
  name: 'الصيام في رجب',
  id: 4,
  audiPath: 'https://gdurl.com/gj4T',
  text: '4',
},
{
  name: 'العمرة. عن. احد. حي. حجاب. الصلاة',
  id: 5,
  audiPath: 'https://gdurl.com/Od-u',
  text: '5',
},
{
  name: 'العمل. المختلط',
  id: 6,
  audiPath: 'https://gdurl.com/TRHk',
  text: '6',
},
{
  name: 'القاء الطعام الفائض',
  id: 7,
  audiPath: 'https://gdurl.com/ssO4',
  text: '7',
},
{
  name:'اللي بتعلمه ببعته',
  id: 8,
  audiPath: 'https://gdurl.com/jSzD',
  text: '8',
  path: require('_assets/images/18/3.jpeg')
},
{
  name:'الوسواس ',

id:9,
audiPath: 'https://gdurl.com/YUUZ',
text: '8',
},
{
  name:'الوضوء. على. كم. عباية. ضيق',
id:10,
audiPath: 'https://gdurl.com/JbI1',
text: '8',
},
{
  name:'الوضوءمن لحم الابل',
id:11,
audiPath: 'https://gdurl.com/midt3',
text: '8',
},
{
  name:'امر البنت بالحجاب',
id:12,
audiPath: 'https://gdurl.com/EM1u',
text: '8',
},
{
  name:'امي، مريض، سرطان، وسقط، شعرها',
id:13,
audiPath: 'https://gdurl.com/NgME',
text: '8',
},
{
  name:'اهلي يشغلو اغاني بقول معاهم',
id:14,
audiPath: 'https://gdurl.com/TSrq',
text: '8',

},
{
  name:'بر_الوالدين_في_الحياة_وبعد_الممات',
 
id:15,
audiPath: 'https://gdurl.com/QABt',
text: '8',
},
{
  name: 'بنتي تريد لبس الحجاب',
id:16,
audiPath: 'https://gdurl.com/BoiN',
text: '8',
path: require('_assets/images/18/4.jpeg')
},
{
  name: 'تأخذ اجر شيء بدون علم صاحبه',

  id: 7,
  audiPath: 'https://gdurl.com/MWZc',
  text: '7',
},
{ name:'تائبة لله.. حكم الخواطر',
  id: 8,
  audiPath: 'https://gdurl.com/HiXh',
  text: '8',
},
{
  name:'تبييت النية لصيام الفرض',
id:9,
audiPath: 'https://gdurl.com/4nWL',
text: '8',
},
{
  name:'تجنب الفتن والمظاهرات ', 
id:10,
audiPath: 'https://gdurl.com/Tx7Z',
text: '8',
},
{
  name:'تريد الطلاق',
id:11,
audiPath: 'https://gdurl.com/x2Wm',
text: '8',
},
{
  name:'تشطيف، الطفل، بعد، الوضوء',
id:13, 
id:12,
audiPath: 'https://gdurl.com/1bT4',
text: '8',
},
{ name:'تصلي الفجر بعد الظهر ',
 
audiPath: 'https://gdurl.com/96df',
text: '8',
},
{name:'تطهيرالنجاسةالجافة',
 
id:14,
audiPath: 'https://gdurl.com/rnf8',
text: '8',

},
{
  name:'تعلمي-كيف-تقتدي', 
id:15,
audiPath: 'https://gdurl.com/9uY8',
text: '8',
},
{
  name: 'تغميض_العين_في_الصلاة_وعند_قراءة_القرآن،_ـفاتتني_الصلاة_القران_للمتوفي',

id:16,
audiPath: 'https://gdurl.com/vzAG',
text: '8',
path: require('_assets/images/18/5.jpeg')
},
{  name: 'تغيرت، بعدسماع، اسم. الله. الطيب',

  id: 7,
  audiPath: 'https://gdurl.com/D97L',
  text: '7',
},
{name:'تمنعني_امي_من_الصيام_التطوع_بسبب',
  id: 8,
  audiPath: 'https://gdurl.com/XC9y',
  text: '8',
},
{name:'تيممت وجاء الماء ',
id:9,
audiPath: 'https://gdurl.com/4dR5',
text: '8',
},
{name:'حرمة دراسة العقائد الباطلة ',
id:10,
audiPath: 'https://gdurl.com/cjON',
text: '8',
},
{name:'حكم التشقير',
id:11,
audiPath: 'https://gdurl.com/Hri9',
text: '8',
},
{name:'حكم الصلاة بالمكياج',
id:12,
audiPath: 'https://gdurl.com/9nJT',
text: '8',
},
{name:'حكم اللحمة المستودة',
id:13,
audiPath: 'https://gdurl.com/N9PK',
text: '8',
},
{name:'حكم تأجير كوافير',
id:14,
audiPath: 'https://gdurl.com/oe-3',
text: '8',

},
{name:'حكم خروج بقايا المني',
id:15,
audiPath: 'https://gdurl.com/bpNZ',
text: '8',
},
{ name: 'حكم دم السقط',
id:16,
audiPath: 'https://gdurl.com/p0Zs',
text: '8',
},
{ name: 'حكم زيارة النساء للقبور ',
 
  id: 7,
  audiPath: 'https://gdurl.com/ar9Q',
  text: '7',
  path: require('_assets/images/18/6.jpeg')
},
{
  name:'حكم صلاة ركعتين قبل الجمعة',
  id: 8,
  audiPath: 'https://gdurl.com/k1Fa',
  text: '8',
},
{name:'حكم قص الشعر قصير جدا',
id:9,
audiPath: 'https://gdurl.com/n8GU',
text: '8',
},
{name:'حكم قول الله ورسوله اعلم ',
id:10,
audiPath: 'https://gdurl.com/Zy3r',
text: '8',
},
{name:'حكم كشف الوجه امام اخو الزوج',
id:11,
audiPath: 'https://gdurl.com/IuL1',
text: '8',
},
{name:'حكم من جاء عليه رمضان ولم يصم',
id:12,
audiPath: 'https://gdurl.com/0zVf',
text: '8',
},
{name:'حكم_افطار_المرضع_عدم_غسل_الشعر_للعروس',
id:13,
audiPath: 'https://gdurl.com/P8zm',
text: '8',
},
{name:'حكم_المرور_امام_المصلي،_عدم_رفع',
id:14,
audiPath: 'https://gdurl.com/JPhQ',
text: '8',

},
{name:'حكم_تعليق_صور_الاشخاص',
id:15,
audiPath: 'https://gdurl.com/POaz',
text: '8',
},
{name: 'حكم، الصيام، بنيتين',
id:16,
audiPath: 'https://gdurl.com/lV-3',
text: '8',
},
{
  name: 'حكم، تغميض، العين، فى، الصلاة',
  id: 7,
  audiPath: 'https://gdurl.com/aOdl',
  text: '7',
},
{name:'حكم،، التصوير،، بالموبايل',
  
  id: 8,
  audiPath: 'https://gdurl.com/5d9O', 
  text: '8',
},
{name:'دعاء. ختم. القران',
id:9,
audiPath: 'https://gdurl.com/qm6h',
text: '8',
},
{name:'دعاء، الاستفتاح، مستحب',
id:10,
audiPath: 'https://gdurl.com/CV1a',
text: '8',
},
{name:'رسالة لمن تقول',
id:11,
audiPath: 'https://gdurl.com/3ACz',
text: '8',
},
{name:'زكاة العلم',
id:12,
audiPath: 'https://gdurl.com/cf5D',
text: '8',
path: require('_assets/images/18/1.jpeg')
},
{name:'زكاة_المال_والصدقة',
id:13,
audiPath: 'https://gdurl.com/yZO3n',
text: '8',
},
{name:'زوجي عايزني اعمل حواجبي ',
id:14,
audiPath: 'https://gdurl.com/qVKl',
text: '8',

},
{name:'زوجي_يأخذ_ربا_من_البنك_حكم_الاكل',
id:15,
audiPath: 'https://gdurl.com/U6Ik3',
text: '8',
},
{ name: 'سؤال هام',
id:16,
audiPath: 'https://gdurl.com/Nj_L',
text: '8',
},
{
  name: 'سجدة التلاوة للحائض',
  id: 7,
  audiPath: 'https://gdurl.com/NX-4',
  text: '7',
},
{name:'شرب ناسية وانا صائمة',
  
  id: 8,
  audiPath: 'https://gdurl.com/Z9E2',
  text: '8',
},
{name:'صلاة التراويح جماعة في البيت ',
id:9,
audiPath: 'https://gdurl.com/Cp4Zm',
text: '8',
},
{name:'صلاة التراويح والقيام والتهجد',
id:10,
audiPath: 'https://gdurl.com/FRbu',
text: '8',
},
{name:'صلاة القصرفي السفر',
id:11,
audiPath: 'https://gdurl.com/GDiL',
text: '8',
},
{name:'صلاة المريض علي حالته',
id:12,
audiPath: 'https://gdurl.com/7Nzg',
text: '8',
},
{name:'صلاة_4ركعات_الظهرمتصلين_اخذ_مانع',
id:13,
audiPath: 'https://gdurl.com/GXAJr',
text: '8',
},
{name:'صلاة_ركعتين_قبل_اذان_الفجر_قيام_ليل',
id:14,
audiPath: 'https://gdurl.com/GuZQ',
text: '8',
path: require('_assets/images/18/2.jpeg')

},
{name: 'صلة، الارحام',
id:15,
audiPath: 'https://gdurl.com/MZdZ',
text: '8',
},
{name: 'صلوات. سنن. الصلاة',
id:16,
audiPath: 'https://gdurl.com/LIVe',
text: '8',
},
{name:'صليت،،المغرب. ونسيت.ركعة',
  
  id: 7,
  audiPath: 'https://gdurl.com/1lRX',
  text: '7',
},
{
  name:'صيام الست من شوال قبل قضاء رمضان',
  id: 8,
  audiPath: 'https://gdurl.com/22Cr',
  text: '8',
},
{
  name:'ضغوط. وكثرة. المسؤليات',
id:9,
audiPath: 'https://gdurl.com/dkkl',
text: '8',
},
{name:'طريقة الغسل الصحيحة',
id:10,
audiPath: 'https://gdurl.com/yBTs',
text: '8',
},
{name:'طهرت قبل الظهر ',
id:11,
audiPath: 'https://gdurl.com/VWpV',
text: '8',
},
{name:'عدد_ركعات_القيام،_الضحى،_معطر_في',
id:12,
audiPath: 'https://gdurl.com/MnVS',
text: '8',
},
{name:'علاج الفتور في العبادة',
id:13,
audiPath: 'https://gdurl.com/0VlF',
text: '8',
},
{name:'علاج الفتور في العبادة',
id:14,
audiPath: 'https://gdurl.com/2WDU',
text: '8',

},
{name: 'علاج الهم والضيق',
id:15,
audiPath: 'https://gdurl.com/ftMa',
text: '8',
path: require('_assets/images/18/3.jpeg')
},
{  name: 'علاج. الوسواس',
id:16,
audiPath: 'https://gdurl.com/y_Z8',
text: '8',
},
{
  name:'عمل_وليمة_بعد_دفن_الميت_من_النياحة',
  id: 7,
  audiPath: 'https://gdurl.com/Srpv',
  text: '7',
},
{
  name:'عملت_معصية_وخايفة_اوي',
  id: 8,
  audiPath: 'https://gdurl.com/6EOT',
  text: '8',
},
{name:'قراء. القران. للميت',
id:9,
audiPath: 'https://gdurl.com/gmMU',
text: '8',
},
{name:'قراءة الفاتحة خلف الامام',
id:10,
audiPath: 'https://gdurl.com/eSu2',
text: '8',
},
{name:'قضاء الصوم والصلاة عن المتوفي',
id:11,
audiPath: 'https://gdurl.com/xtZI',
text: '8',
},
{name:'قضاء الفائت من القيام',
id:12,
audiPath: 'https://gdurl.com/7YUp',
text: '8',
},
{name:'قضاء الوتر ',
id:13,
audiPath: 'https://gdurl.com/7BQG',
text: '8',
},
{name:'قضاء_دين_لااعلم_اين_صاحبه',
id:14,
audiPath: 'https://gdurl.com/e1Hf',
text: '8',

},
{name:'قضاءالصوم للحامل والمرضع',
id:15,
audiPath: 'https://gdurl.com/C8HT',
text: '8',
},
{name:'كفارة. حنث. اليمين',
id:16,
audiPath: 'https://gdurl.com/aIEp',
text: '8',
},
{name:'كيف اخرج من مشكلة هدية عيد الام',
id:16,
audiPath: 'https://gdurl.com/1lUr',
text: '8',
},
{name:'كيف اشكر الله',
id:16,
audiPath: 'https://gdurl.com/aGkA',
text: '8',
path: require('_assets/images/18/4.jpeg')
},
{name:'كيف_تستخير_الحائض',
id:16,
audiPath: 'https://gdurl.com/nAiO',
text: '8',
},
{name:'كيف_يمييز_العبد_بين_النعمة_والفتنة',
id:16,
audiPath: 'https://gdurl.com/ASTh',
text: '8',
},
{name:'كيف، اتعامل مع الناس',
id:16,
audiPath: 'https://gdurl.com/gD4W',
text: '8',
},
{name:'كيف، اعمل، عمل، يرضي، ربي1',
id:16,
audiPath: 'https://gdurl.com/FpDB',
text: '8',
},
{name:'كيف، اعمل، عمل، يرضي، ربي2',
id:16,
audiPath: 'https://gdurl.com/R0Mx',
text: '8',
},
{name:'كيف، اكفر، عن، ذنوبي',
id:16,
audiPath: 'https://gdurl.com/dz76',
text: '8',
},
{name:'لا_استطيع_العفو',
id:16,
audiPath: 'https://gdurl.com/rhLQ',
text: '8',
},
{name:'لاتلبس_النقاب_امام_اخوان_الزوج_فازلين',
id:16,
audiPath: 'https://gdurl.com/xuxl',
text: '8',
},
{name:'لادليل_علي_صلاة_الحاجة_جمعاكثر_من',
id:16,
audiPath: 'https://gdurl.com/bJMf',
text: '8',
},
{name:'لايوجد. دعاء. لسجود. السهو',
id:16,
audiPath: 'https://gdurl.com/xEx5',
text: '8',
},
{name:'لبس. الجاكت. فوق. الخمار',
id:16,
audiPath: 'https://gdurl.com/ZoLf',
text: '8',
},
{name:'ماتت. وعليها. دين',
id:16,
audiPath: 'https://gdurl.com/VizD',
text: '8',
path: require('_assets/images/18/5.jpeg')
},
{name:'ماذ. افعل. مع. من. يفسد. قلبي',
id:16,
audiPath: 'https://gdurl.com/lB5C',
text: '8',
},
{name:'متى. تغتسل. المحتلمة. التكبر',
id:16,
audiPath: 'https://gdurl.com/2C0Y',
text: '8',
},

{name:'مسائل مهمة ',
id:16,
audiPath: 'https://gdurl.com/5kix',
text: '8',
},
{name:'مسؤل. عن. توزيع. صدقات. واخذ. منها',
id:16,
audiPath: 'https://gdurl.com/Vcwb',
text: '8',
},
{name:'مشتاق. للنبي. صلى. الله. عليه. وسلم',
id:16,
audiPath: 'https://gdurl.com/YTZs',
text: '8',
},
{name:'مشكلات بنات',
id:16,
audiPath: 'https://gdurl.com/KzU5',
text: '8',
},
{name:'مطالبة. الزوجة. بالانفاق',
id:16,
audiPath: 'https://gdurl.com/sNTV',
text: '8',
},
{name:'معنى. الوفاء',
id:16,
audiPath: 'https://gdurl.com/PJJH',
text: '8',
},
{name:'معني اعملوا ال داوود شكرا ',
id:16,
audiPath: 'https://gdurl.com/lXVb',
text: '8',
},
{name:'مفاسد الكلام مع الخاطب في الهاتف',
id:16,
audiPath: 'https://gdurl.com/EKcn',
text: '8',
},
{name:'من اين ابدا',
id:16,
audiPath: 'https://gdurl.com/v-ai',
text: '8',
},
{name:'نذرت الصوم ',
id:16,
audiPath: 'https://gdurl.com/c1Jl',
text: '8',
},
{name:'نزول افرازات سوداء في ايام الحيض',
id:16,
audiPath: 'https://gdurl.com/ApTJ',
text: '8',
path: require('_assets/images/18/6.jpeg')
},
{name:'نسيان. البسملة. عند. الوضوء',
id:16,
audiPath: 'https://gdurl.com/lQWI',
text: '8',
},
{name:'نسيان، ركعة، في، ااصلاة',
id:16,
audiPath: 'https://gdurl.com/y65M',
text: '8',
},
{name:'نصح الام',
id:16,
audiPath: 'https://gdurl.com/8veM',
text: '8',
},
{name:'نصيحة لكل اخت تطلب الطلاق ',
id:16,
audiPath: 'https://gdurl.com/b65I',
text: '8',
},
{name:'نصيحة لمعلمة القرآن ',
id:16,
audiPath: 'https://gdurl.com/baVt',
text: '8',
},
{name:'نوايا كاذبة و صادقة',
id:16,
audiPath: 'https://gdurl.com/b4Z0',
text: '8',
},
{name:'هل ارد فلوس النقطة من الزكاة',
id:16,
audiPath: 'https://gdurl.com/oWXP',
text: '8',
},
{name:'هل يجوز رقية احد بعيد',
id:16,
audiPath: 'https://gdurl.com/HIak',
text: '8',
},
{name:'وجدت-الدنیا-فی-قلبی',
id:16,
audiPath: 'https://gdurl.com/sqVv',
text: '8',
},
{
name:'وضع_مخدة_تحت_الركبة_اثناء_السجود',  
id:16,
audiPath: 'https://gdurl.com/RpeE',
text: '8',
},
{
name:'وقت صلاة الضحى',  
id:16,
audiPath: 'https://gdurl.com/u_Ld',
text: '8',
},
{
  name:'اذا نزل غلى افرازات قبل الحيض هل يعتبر من الحيض ',  
  id:16,
  audiPath: 'https://gdurl.com/X7J0',
  text: '8',
  },

      ],
    };
  }
  onSelect(item) {
    // this.props.navigation.navigate('Methal');
    Alert.alert('بتشتغل لوحدك ليه');
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 5,
          width: '100%',
          backgroundColor: '#129D9B',
        }}
      />
    );
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          width: '100%',
          marginBottom: 0,
          height: '100%',
          backgroundColor: 'white',
        }}>
        <ImageBackground
          // borderRadius={30}
          source={require('_assets/images/islamic-pattern.jpg')}
          style={{
            width: '100%',
            height: '100%',
            opacity: 100,
          }}>
          <Text style={styles.title}>فتاوى المرأة المسلمة</Text>
        <ScrollView>
          <FlatList
            data={this.state.FlatListItems}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={styles.flatview}>
            
              <Text style={styles.name}>{item.name}</Text>
           
           
              <PlayerScreen filepath={item.audiPath}/>
            {item.audiPath2 && <PlayerScreen filepath={item.audiPath2}/>} 
            {item.audiPath3 && <PlayerScreen filepath={item.audiPath3}/>} 
            {item.path && <Image source={item.path} style={styles.Image}/> } 
               
              </View>
            )}
            
            keyExtractor={item => item.id}
          />
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  h2text: {
    marginTop: 10,
    fontFamily: 'Helvetica',
    fontSize: 36,
    fontWeight: 'bold',
  },
  flatview: {
    justifyContent: 'center',
    padding: 0,
    borderRadius: 2,
    margin: 10,
    marginHorizontal: 10,
    backgroundColor: '#ffef',
    alignItems: 'center',
    flex: 1,
    borderRadius: 10,
  },
  name: {
    fontFamily: 'ArbFONTS-Monadi',
    fontSize: 28,
    color: '#371921',
    paddingBottom: 20,
  },
  title: {
    fontFamily: 'ArbFONTS-Monadi',
    fontSize: 45,
    color: '#371921',
    paddingBottom: 0,
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    paddingBottom: 10,
  },
  email: {
    color: 'red',
  },
  Image: {
    height:150,
    width:300,
    marginBottom:15,
    borderRadius: 5,

  }
});
export default home;
