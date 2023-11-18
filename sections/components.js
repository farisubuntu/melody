// components:



var floatButtons = `
<button class="sticky-btn" onclick="changeFont();">تبديل الخط</button>
<button id="toggle" class="sticky-btn" onclick="toggleCol(this);">إخفاء</button>
<button id="home" class="sticky-btn"><a href="../index.html">الصفحة الرئيسية </a></button>
<details class="sticky-btn">
<summary>جداول</summary>
<li><a href="../others/personal_pronouns_chart.html" target="_blank">ملخص الضمائر الشخصية</a></li>
<li><a href="../others/verbs.html">الأفعال - الأزمنة البسيطة</a></li> 
<li><a href="../others/important_vocabularies.html">كلمات مهمة</a></li>
<li><a href="../mondly_dict/dict.html">قاموس ماندلي</a></li>
</details>
`;


var buttonBar=`
<div id="button-bar">
<button class="feedback" onclick="toggleVerbs(this);">بدون الأفعال</button>
<button class="feedback" onclick="toggleTheme(this);">تغيير الثيم</button>

</div>
`;
