 // عند فتح الموقع، نطبع رسالة ترحيبية في Console لتأكيد تحميل الصفحة
 // وهادي الرسالة ما بتظهر للمستخدم
window.onload = function () {
  console.log("أهلاً بك في منصة الدعم النفسي");
};
///////////////////////////////////////////////////////////////////////////////////////

// اختيار الفورم باستخدام الكلاس
const form = document.querySelector(".service");
// الاستماع لحدث إرسال الفورم
form.addEventListener("submit", function (e) {
  //منع الإرسال التلقائي
  // عشان نتحكم بالإرسال ونتأكد من صحة البيانات بالأول
  e.preventDefault();

  // جلب قيم الحقول
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  // عند الضغط على زر الإرسال، نتحقق من أن الحقول ليست فارغة
  //إذا كانت فارغة نعرض رسالة تنبيه 
  if (name === "" || email === "") {
    alert("من فضلك املأ جميع الحقول المطلوبة");
  // إذا كانت صحيحة نعرض رسالة نجاح ونفرغ الحقول
  } else {
    alert("تم إرسال طلبك بنجاح،سنقوم بالتواصل معك قريبًا");
    form.reset(); // هان بتعمل تفريغ الحقول بعد إرسال البيانات
  }
});
/////////////////////////////////////////////////////////////////////////////////////

// Portfolio Filter باستخدام jQuery
// هان عند الضغط على أي زر داخل div الكلاس تبعهfilter-buttons
$(".filter-buttons button").click(function () {
 // تخزين قيمة data-filter الخاصة بالزر الذي تم الضغط عليه
  const filter = $(this).data("filter");

  // التحقق إذا كانت قيمة الفلتر هي "all"
  if (filter === "all") {
    // إظهار جميع صفوف الجدول مع تأثير تدريجي
    $("#portfolio tbody tr").fadeIn();
    // وإذا المستخدم فلتر معين مش all
  } else {
    // إخفي كل صفوف الجدول
    $("#portfolio tbody tr").hide();
    // إظهار الصفوف التي تتطابق مع الفئة المختارة فقط
    // حسب قيمة data-category
    $('#portfolio tbody tr[data-category="' + filter + '"]').fadeIn();
  }
});



