document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       أزرار الأقسام
    ========================= */

    const buttons = document.querySelectorAll(".religion-button");
    const sections = document.querySelectorAll(".religion-section");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            const sectionName = this.dataset.section;

            // إزالة التحديد من الأزرار
            buttons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            // تحديد الزر الحالي
            this.classList.add("active");

            // إخفاء جميع الأقسام
            sections.forEach(function (section) {
                section.classList.remove("active");
            });

            // إظهار القسم المطلوب
            const selectedSection =
                document.getElementById(sectionName + "-section");

            if (selectedSection) {
                selectedSection.classList.add("active");
            }

        });

    });


    /* =========================
       الأذكار
    ========================= */

    const azkar = [
        "سبحان الله",
        "الحمد لله",
        "الله أكبر",
        "لا إله إلا الله",
        "لا حول ولا قوة إلا بالله",
        "أستغفر الله",
        "سبحان الله وبحمده",
        "سبحان الله العظيم",
        "اللهم صل وسلم على نبينا محمد ﷺ",
        "حسبي الله ونعم الوكيل",
        "اللهم اغفر لي",
        "اللهم ارحمني",
        "اللهم تب علي",
        "اللهم اهدني",
        "اللهم ارزقني",
        "اللهم ارزقني حسن الخاتمة",
        "اللهم اجعل القرآن ربيع قلبي",
        "اللهم اجعلني من الذاكرين",
        "اللهم ثبت قلبي على دينك",
        "اللهم اجعلني من الصالحين",
        "اللهم ارزقنا الفردوس الأعلى",
        "رب اغفر لي ولوالدي",
        "رب زدني علماً",
        "رب يسر ولا تعسر",
        "اللهم فرج همي",
        "اللهم اقض ديني",
        "اللهم وسع رزقي",
        "اللهم وفقني لما تحب وترضى",
        "سبحان الله عدد خلقه",
        "اللهم أعني على ذكرك وشكرك وحسن عبادتك",
        "اللهم إني أسألك العفو والعافية"
    ];

    let currentIndex = 0;

    const text = document.getElementById("azkarText");

    if (!text) {
        return;
    }

    // أول ذكر
    text.textContent = azkar[currentIndex];

    text.classList.add("show");


    // تغيير الذكر كل 8 ثواني
    setInterval(function () {

        text.classList.remove("show");

        text.classList.add("hide");


        setTimeout(function () {

            currentIndex++;

            if (currentIndex >= azkar.length) {
                currentIndex = 0;
            }

            text.textContent = azkar[currentIndex];

            text.classList.remove("hide");

            text.classList.add("show");

        }, 500);

    }, 8000);

});