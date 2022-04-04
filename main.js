var start = document.getElementById("start");
var user_name = document.getElementById("user_name");
var section_get_user_name = document.getElementById("section_get_user_name");
var section_get_user_date = document.getElementById("section_get_user_date");
var user_name_error = document.getElementById("user_name_error");
var input_user_height = document.getElementById("user_height");
var input_user_weight = document.getElementById("user_weight");
var user_height = 0;
var user_weight = 0;
var BMI = 0;
var computing = document.getElementById("computing");
var section_show_user_date = document.getElementById("section_show_user_date");
var show_bmi = document.getElementById("show_bmi");
var show_user_name = document.getElementById("show_user_name");
var show_description = document.getElementById("show_description");
var description = null;
var user_data_error = document.getElementById("user_data_error");
var reset = document.getElementById("reset");
start.addEventListener("click", function () {
  var check_name = user_name.value;
  check_name = check_name.trim();
  if (check_name == "") {
    user_name.style.borderColor = "red";
    user_name_error.innerHTML = "فیلد نام نمی تواند خالی باشد";
  } else {
    user_name.style.borderColor = "green";
    user_name = document.getElementById("user_name").value;
    section_get_user_name.style.display = "none";
    section_get_user_date.style.display = "flex";
  }
});

computing.addEventListener("click", function () {
  var check_height = input_user_height.value;
  check_height = check_height.trim();
  var check_weight = input_user_weight.value;
  check_weight = check_weight.trim();
  if (check_height == "") {
    user_data_error.innerHTML = "فیلد قد نمی تواند خالی باشد";
  } else if (check_weight == "") {
    user_data_error.innerHTML = "فیلد وزن  نمی تواند خالی باشد";
  } else if (check_height == 0) {
    user_data_error.innerHTML = "فیلد قد  نمی تواند 0 باشد";
  } else if (check_weight == 0) {
    user_data_error.innerHTML = "فیلد وزن  نمی تواند 0 باشد";
  } else {
    user_height = input_user_height.value;
    user_weight = input_user_weight.value;
    section_get_user_date.style.display = "none";
    section_show_user_date.style.display = "flex";
    user_height /= 100;
    BMI = user_weight / Math.pow(user_height, 2);
    if (BMI == NaN) {
      BMI = 0;
    } else {
      BMI = BMI.toFixed(2);
    }
    show_bmi.innerHTML = BMI;
    show_user_name.innerHTML = user_name;
    if (BMI < 18.5) {
      description =
        " پایین‌تر از ۱۸.۵ نشان دهنده این است که دچار کمبود وزن هستید، بنابراین شاید نیاز باشد کمی وزن اضافه کنید. توصیه می‌کنیم از پزشک یا مشاور تغذیه خود کمک بگیرید ";
    } else if (BMI >= 18.5 && BMI < 24.9) {
      description =
        " بین ۱۸.۵ تا ۲۴٫۹ نشان می‌دهد نسبت به قدتان وزن مناسبی دارید. با تثبیت وزنی سالم، جلوی بالا رفتن خطرهای جدی برای سلامت‌تان را می‌گیرید ";
    } else if (BMI >= 25 && BMI < 29.9) {
      description =
        " بین ۲۵ تا ۲۹٫۹ به شما می‌گوید کمی دچار اضافه وزن هستید و نیاز دارید مقداری وزن کم کنید. برای کاهش وزن می‌توانید با پزشک خود مشورتی داشته باشید";
    } else if (BMI > 30) {
      description =
        " بالای ۳۰ به شما اخطار می‌دهد که وزن بالایی دارید. اگر وزن کم نکنید مسلما سلامت‌تان به خطر خواهد افتاد. حتما با پزشک یا مشاور تغذیه خود صحبت و رژیم گرفتن را شروع کنید ";
    } else {
      description = "توصیه ای وجود ندارد";
    }

    show_description.innerHTML = description;
  }
});
reset.addEventListener("click", function () {
  location.reload();
});
