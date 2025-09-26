const QURAN_DATA = [
  {
    id: 112,
    name: 'Al-Ikhlas',
    translation: 'The Sincerity',
    ayahs: [
      {
        id: 1,
        arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
        translation: 'Say, "He is Allah, [who is] One,',
        asbabunNuzul: [
          {
            source: 'Imam As-Suyuti - Lubab an-Nuqul',
            narrations: [
                'Diriwayatkan oleh At-Tirmidzi, Ibnu Jarir, Ibnu Mundzir, dari Ubay bin Ka\'ab, bahwa kaum musyrikin berkata kepada Nabi Muhammad SAW, "Sebutkanlah kepada kami sifat Tuhanmu." Maka Allah menurunkan surat ini.',
                'Diriwayatkan oleh Ibnu Abi Hatim dari Ibnu Abbas, bahwa orang-orang Yahudi datang kepada Nabi SAW, di antara mereka adalah Ka\'ab bin Al-Asyraf dan Huyayy bin Akhtab, mereka berkata, "Wahai Muhammad, gambarkanlah kepada kami Tuhanmu yang mengutusmu." Maka Allah menurunkan, "Qul huwallāhu aḥad..." hingga akhir surat.'
            ]
          }
        ]
      },
      { id: 2, arabic: 'اللَّهُ الصَّمَدُ', translation: 'Allah, the Eternal Refuge.', asbabunNuzul: [] },
      { id: 3, arabic: 'لَمْ يَلِدْ وَلَمْ يُولَدْ', translation: 'He neither begets nor is born,', asbabunNuzul: [] },
      { id: 4, arabic: 'وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ', translation: 'Nor is there to Him any equivalent."', asbabunNuzul: [] }
    ]
  },
  {
    id: 113,
    name: 'Al-Falaq',
    translation: 'The Daybreak',
    ayahs: [
       {
        id: 1,
        arabic: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ',
        translation: 'Say, "I seek refuge in the Lord of daybreak,',
        asbabunNuzul: [
            {
                source: 'Imam As-Suyuti - Lubab an-Nuqul',
                narrations: [
                    'Diriwayatkan oleh Al-Baihaqi dalam Dala\'il an-Nubuwah dari Al-Kalbi, dari Abu Shalih, dari Ibnu Abbas, ia berkata: "Rasulullah SAW mengalami sakit parah. Maka datanglah dua malaikat kepadanya, yang satu duduk di arah kepala beliau dan yang lainnya di arah kaki. Malaikat yang berada di kaki bertanya kepada yang di kepala: \'Apa yang engkau lihat?\' Ia menjawab: \'Beliau terkena sihir.\' Ia bertanya: \'Siapa yang menyihirnya?\' Ia menjawab: \'Labid bin Al-A\'sham, seorang Yahudi.\' Maka turunlah Jibril membawa surat Al-Falaq dan An-Nas (Al-Mu\'awwidzatain) untuk menyembuhkan beliau."'
                ]
            }
        ]
      },
      { id: 2, arabic: 'مِن شَرِّ مَا خَلَقَ', translation: 'From the evil of that which He created', asbabunNuzul: [] },
      { id: 3, arabic: 'وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ', translation: 'And from the evil of darkness when it settles', asbabunNuzul: [] },
      { id: 4, arabic: 'وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ', translation: 'And from the evil of the blowers in knots', asbabunNuzul: [] },
      { id: 5, arabic: 'وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ', translation: 'And from the evil of an envier when he envies."', asbabunNuzul: [] }
    ]
  },
  {
    id: 114,
    name: 'An-Nas',
    translation: 'Mankind',
    ayahs: [
      {
        id: 1,
        arabic: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ',
        translation: 'Say, "I seek refuge in the Lord of mankind,',
        asbabunNuzul: [
          {
            source: 'Imam As-Suyuti - Lubab an-Nuqul',
            narrations: [
                'Riwayat mengenai turunnya surat ini sama dengan surat Al-Falaq, yaitu berkaitan dengan peristiwa sihir yang menimpa Nabi Muhammad SAW oleh Labid bin Al-A\'sham.'
            ]
          },
          {
            source: 'Riwayat Lain',
            narrations: [
                'Ini adalah contoh riwayat dari sumber lain untuk menunjukkan fleksibilitas data. Isi teks ini dapat diedit secara manual sesuai dengan riwayat yang sahih.'
            ]
          }
        ]
      },
      { id: 2, arabic: 'مَلِكِ النَّاسِ', translation: 'The Sovereign of mankind.', asbabunNuzul: [] },
      { id: 3, arabic: 'إِلَٰهِ النَّاسِ', translation: 'The God of mankind,', asbabunNuzul: [] },
      { id: 4, arabic: 'مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ', translation: 'From the evil of the retreating whisperer -', asbabunNuzul: [] },
      { id: 5, arabic: 'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ', translation: 'Who whispers [evil] into the breasts of mankind -', asbabunNuzul: [] },
      { id: 6, arabic: 'مِنَ الْجِنَّةِ وَالنَّاسِ', translation: 'From among the jinn and mankind."', asbabunNuzul: [] }
    ]
  }
];

const NARRATORS_DATA = [
  {
    id: 'as-suyuti',
    name: 'Imam As-Suyuti',
    title: 'Al-Hafizh Jalaluddin Abdurrahman bin Abu Bakar as-Suyuti',
    birth_death: '(Lahir 849 H/1445 M - Wafat 911 H/1505 M)',
    bio: [
      'Imam As-Suyuti adalah seorang ulama besar, sejarawan, dan penulis yang sangat produktif dari Mesir. Nama lengkapnya adalah Abdurrahman bin Abu Bakar bin Muhammad bin Sabiquddin, Jalaluddin al-Misri as-Suyuti asy-Syafi\'i al-Asy\'ari.',
      'Beliau lahir di Kairo pada bulan Rajab tahun 849 H (1445 M). Ayahnya meninggal saat beliau masih kecil, dan beliau tumbuh sebagai seorang yatim. Sejak usia dini, beliau menunjukkan kecerdasan yang luar biasa dan semangat yang tinggi dalam menuntut ilmu. Beliau hafal Al-Qur\'an pada usia kurang dari delapan tahun.',
      'Imam As-Suyuti menguasai berbagai cabang ilmu keislaman, termasuk tafsir, hadits, fiqih, sejarah, bahasa Arab, dan banyak lagi. Diperkirakan beliau menulis lebih dari 600 karya dalam berbagai disiplin ilmu. Beberapa karyanya yang paling terkenal antara lain "Tafsir al-Jalalain" (yang diselesaikannya setelah gurunya, Jalaluddin al-Mahalli), "Al-Itqan fi Ulum al-Qur\'an", "Tarikh al-Khulafa", dan tentu saja "Lubab an-Nuqul fi Asbab an-Nuzul" yang menjadi salah satu rujukan utama dalam aplikasi ini.',
      'Karya-karyanya menunjukkan kedalaman ilmunya dan kemampuannya untuk mensintesis informasi dari berbagai sumber. Beliau dianggap sebagai salah satu mujaddid (pembaharu) pada abad ke-9 Hijriyah. Beliau wafat di Kairo pada tahun 911 H (1505 M) dan meninggalkan warisan intelektual yang tak ternilai bagi dunia Islam.',
    ],
  }
];