const levels = [

    {
        id:1,

        name:"Dunia Nombor Ceria",

        topic:"Nombor 0 hingga 100",

        difficulty:"Mudah",

        description:
        "Kumpul syiling dan jawab tambah asas.",

        questions:
        10,

        unlock:true
    },


    {
        id:2,

        name:"Hutan Tambah",

        topic:"Operasi Tambah",

        difficulty:"Mudah",

        description:
        "Selesaikan operasi tambah untuk membuka jalan.",

        questions:
        10,

        unlock:false
    },


    {
        id:3,

        name:"Lembah Tolak",

        topic:"Operasi Tolak",

        difficulty:"Mudah",

        description:
        "Gunakan kemahiran menolak untuk terus maju.",

        questions:
        10,

        unlock:false
    },


    {
        id:4,

        name:"Istana Nombor",

        topic:"Nombor hingga 1000",

        difficulty:"Sederhana",

        description:
        "Tambah dan tolak dengan nombor lebih besar.",

        questions:
        15,

        unlock:false
    },


    {
        id:5,

        name:"Kampung Darab",

        topic:"Darab Asas",

        difficulty:"Sederhana",

        description:
        "Kuasai sifir sambil meneroka dunia.",

        questions:
        15,

        unlock:false
    },


    {
        id:6,

        name:"Gua Sifir",

        topic:"Sifir 2 hingga 12",

        difficulty:"Sederhana",

        description:
        "Kalahkan cabaran sifir.",

        questions:
        15,

        unlock:false
    },


    {
        id:7,

        name:"Gunung Operasi",

        topic:"Campuran Tambah Tolak Darab",

        difficulty:"Susah",

        description:
        "Gabungkan pelbagai kemahiran matematik.",

        questions:
        20,

        unlock:false
    },


    {
        id:8,

        name:"Planet Bahagi",

        topic:"Operasi Bahagi",

        difficulty:"Susah",

        description:
        "Selesaikan misi bahagi.",

        questions:
        20,

        unlock:false
    },


    {
        id:9,

        name:"Bandar KBAT",

        topic:"Penyelesaian Masalah",

        difficulty:"Susah",

        description:
        "Gunakan logik untuk menyelesaikan masalah.",

        questions:
        20,

        unlock:false
    },


    {
        id:10,

        name:"Menara Juara Matematik",

        topic:"Cabaran Akhir",

        difficulty:"Pakar",

        description:
        "Ujian terakhir semua kemahiran matematik.",

        questions:
        30,

        unlock:false
    }


];



// Fungsi ambil tahap

function getLevel(id){

    return levels.find(
        level=>level.id===id
    );

}
