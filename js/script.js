function calculate(){

    // Mengambil Input dari form html
    let genderInput = document.querySelector('input[name="gender"]:checked');
    let weightInput = parseFloat(document.getElementById("weightInput").value);
    let ageInput = parseInt(document.getElementById("ageInput").value);
    let heightInput = parseFloat(document.getElementById("heightInput").value);

    // Validasi Input
    if (!genderInput || isNaN(weightInput) || isNaN(ageInput) || isNaN(heightInput)) {
        alert("Mohon lengkapi semua input sebelum menghitung BMI.");
        document.getElementById("containterResult").style.display = "none";
        return;
    }

    // Mengubah variable input menjadi value
    let genderValue = genderInput.value;

    // Deklarasi tiap variable terhadap fungsinya masing-masing
    let bmi = calculateBMI(weightInput, heightInput);
    let category = getBMICategory(bmi, genderValue);
    let categoryDesc = getBMICatDescription(category);
    let categoryDesc2 = getBMICatDescription2(category);
    let weightRange = getWeightRange(category);
    let healthyTips = getHealthyTips(category);

    // Output tiap variable ke html berdasarkan id
    document.getElementById("category").innerHTML = category;
    document.getElementById("resultBMI").innerHTML = bmi.toFixed(2);
    document.getElementById("categoryDesc").innerHTML = categoryDesc;
    document.getElementById("weightRange").innerHTML = weightRange;
    document.getElementById("categoryDesc2").innerHTML = categoryDesc2;
    document.getElementById("healthyTips").innerHTML = healthyTips;

    // Menampilkan div container untuk hasil perhitungan kalkulator BMI
    document.getElementById("containterResult").style.display = "block";

    // Deklarasi perintah untuk 
    showFollowingDiseaseDiv(category);
}

// Fungsi perhitungan BMI
function calculateBMI(weight, height) {
    let bmi = weight / ((height / 100) ** 2);
    return bmi;
}

// Fungsi pengkategorian BMI berdasarkan gender
function getBMICategory(bmi, gender) {
    if (gender === "Pria") {
        if (bmi < 18.5) {
            return "Underweight";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            return "Normal Weight";
        } else if (bmi > 25.0 && bmi <= 29.9) {
            return "Overweight";
        } else if (bmi > 30.0) {
            return "Obese";
        }
    } else if (gender === "Wanita") {
        if (bmi < 17) {
            return "Underweight";
        } else if (bmi >= 17 && bmi <= 23.9) {
            return "Normal Weight";
        } else if (bmi > 23.0 && bmi <= 27.0) {
            return "Overweight";
        } else if (bmi > 27.0) {
            return "Obese";
        }
    }
    return "";
}

// Fungsi pembagian deskripsi 1 berdasarkan kategori BMI
function getBMICatDescription(category){
    switch (category) {
        case "Underweight":
            return "Anda memiliki berat badan kurang dari normal";
        case "Normal Weight":
            return "Anda memiliki berat badan dalam kisaran normal";
        case "Overweight":
            return "Anda memiliki berat badan berlebih";
        case "Obese":
            return "Anda mengalami kegemukan";
        default:
            return "";
    }
}

// Fungsi pembagian deskripsi weight range berdasarkan kategori BMI
function getWeightRange(category){
    switch (category) {
        case "Underweight":
            return "Hasil BMI di bawah 18.5";
        case "Normal Weight":
            return "Hasil BMI di antara 18.5 dan 24.9";
        case "Overweight":
            return "Hasil BMI di antara 25 dan 29.9";
        case "Obese":
            return "Hasil BMI di atas 30";
        default:
            return "";
    }
}

// Fungsi pembagian deskripsi 2 berdasarkan kategori BMI
function getBMICatDescription2(category) {
    switch (category) {
        case "Underweight":
            return "Anda berada dalam kategori underweight atau berat badan kurang dari normal.";
        case "Normal Weight":
            return "Anda berada dalam kategori ideal atau berat badan kisaran normal.";
        case "Overweight":
            return "Anda berada dalam kategori overweight atau berat badan berlebih.";
        case "Obese":
            return "Anda berada dalam kategori obesitas atau kegemukan berlebih.";
        default:
            return "";
    }
}

// Fungsi pembagian deskripsi tips kesehatan berdasarkan kategori BMI
function getHealthyTips(category){
    switch (category) {
        case "Underweight":
        return "Cara terbaik untuk meningkatkan berat badan adalah dengan meningkatkan asupan makanan yang sehat dan bergizi, serta melakukan olahraga untuk membangun otot. Jika BMI Anda berada dalam kategori ini, Anda dianjurkan untuk mencari bantuan dari dokter atau ahli gizi untuk merencanakan diet yang sesuai dengan kebutuhan Anda.";
        case "Normal Weight":
        return "Untuk mempertahankan berat badan yang sehat, teruskan pola makan yang seimbang dengan nutrisi yang cukup dan tetap aktif dengan olahraga secara teratur. Pertahankan gaya hidup sehat untuk mendukung kesehatan fisik dan mental Anda.";
        case "Overweight":
        return "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini, Anda dianjurkan untuk menurunkan berat badan hingga mencapai batas normal. Konsultasikan dengan dokter atau ahli gizi untuk merencanakan program penurunan berat badan yang sehat dan efektif.";
        case "Obese":
        return "Penanganan obesitas memerlukan perencanaan yang lebih mendalam dan terarah. Konsultasikan dengan dokter atau ahli gizi untuk mendapatkan bantuan dan dukungan yang tepat. Program penurunan berat badan dan pola makan yang sehat harus dipertimbangkan bersama dengan olahraga secara teratur. Ingatlah bahwa proses ini membutuhkan kesabaran dan ketekunan, namun akan berdampak positif pada kesehatan jangka panjang.";
        default:
        return "";
    }
}

// Fungsi pembagian tampilan following disease berdasarkan kategori BMI
function showFollowingDiseaseDiv(category){

    // Mengenali div atau container yang akan dituju
    let followingDiseaseDiv = document.getElementById("followingDisease");
    let underweightDiseaseDiv = document.getElementById("underweightDisease");
    let overweightDiseaseDiv = document.getElementById("overweightDisease");
    let obeseDiseaseDiv = document.getElementById("obeseDisease");

    switch (category){
        case "Underweight":
            followingDiseaseDiv.style.display = "block";
            underweightDiseaseDiv.style.display = "block";
            overweightDiseaseDiv.style.display = "none";
            obeseDiseaseDiv.style.display = "none";
            break;
        case "Overweight":
            followingDiseaseDiv.style.display = "block";
            underweightDiseaseDiv.style.display = "none";
            overweightDiseaseDiv.style.display = "block";
            obeseDiseaseDiv.style.display = "none";
            break;
        case "Obese":
            followingDiseaseDiv.style.display = "block";
            underweightDiseaseDiv.style.display = "none";
            overweightDiseaseDiv.style.display = "none";
            obeseDiseaseDiv.style.display = "block";
            break;
        default:
            followingDiseaseDiv.style.display = "none";
            break;
    }
}