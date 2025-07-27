const quizData = [
    {
        question: {
            id: "1. Portal di belakangmu hilang. Lorong terus memanjang. Gak ada jalan balik.\nLangkahmu pelan-pelan makin jauh.\nRasanya...",
            en: "1. The portal behind you disappears. The corridor stretches endlessly. No turning back now.\nYour steps go further and further.\nYou feel...",
        },
        options: [
            {
                text: {
                    id: "Sial. Udah gak bisa kabur lagi, ya.",
                    en: "Damn. No escape now, huh.",
                },
                spirits: ["Kroot", "Gowlic"],
            },
            {
                text: {
                    id: "Gak papa. Toh aku emang sering sendiri.",
                    en: "It's okay. I'm used to being alone.",
                },
                spirits: ["Mubii", "Potatoad"],
            },
            {
                text: {
                    id: "Takut sih... tapi penasaran juga.",
                    en: "Scared… but also curious.",
                },
                spirits: ["Bitty", "Onyun"],
            },
            {
                text: {
                    id: "Aneh. Tapi kayak... aku emang harus lewat sini.",
                    en: "Weird. But I feel like… I’m meant to walk this path.",
                },
                spirits: ["Gingeer", "Mubii"],
            },
            {
                text: {
                    id: "Serem, tapi... jangan ditunjukin ke Chame. Gengsi.",
                    en: "Scary, but… I won’t show it to Chame. Pride, y’know.",
                },
                spirits: ["Banion", "Kroot"],
            },
        ],
    },
    {
        question: {
            id: "2. Di depan, batu besar nutup jalan.\nChame nunjuk lima ukiran aneh di dinding.\n“Tekan salah satu, siapa tahu geser batunya,” katanya.",
            en: "2. A giant rock blocks your way.\nChame points at five strange carvings on the wall.\n“Try pressing one. Maybe the rock will move,” they say.",
        },
        options: [
            {
                text: {
                    id: "Yang bentuknya mata. Kayaknya dia bisa liat jalan keluar.",
                    en: "The eye symbol. Feels like it can see the way out.",
                },
                spirits: ["Gowlic", "Gingeer"],
            },
            {
                text: {
                    id: "Yang kayak patah hati. Karena aku relate.",
                    en: "The broken heart. I relate to that.",
                },
                spirits: ["Banion", "Mubii"],
            },
            {
                text: {
                    id: "Yang penuh ukiran bunga. Estetik dong.",
                    en: "The one full of flower carvings. Aesthetics first.",
                },
                spirits: ["Onyun", "Bitty"],
            },
            {
                text: {
                    id: "Yang paling biasa aja. Gak mau drama.",
                    en: "The plainest one. I don't want drama.",
                },
                spirits: ["Potatoad", "Mubii"],
            },
            {
                text: {
                    id: "Yang paling mencolok. Kalau jebakan, ya udah.",
                    en: "The flashiest one. If it's a trap, so be it.",
                },
                spirits: ["Kroot", "Banion"],
            },
        ],
    },
    {
        question: {
            id: "3. Lorongnya makin gelap. Tapi kakimu tetap jalan.\nLangkahmu berubah jadi refleks.\nKamu sadar...",
            en: "3. The corridor gets darker. But your feet keep moving.\nYou start walking on reflex.\nYou realize...",
        },
        options: [
            {
                text: {
                    id: "Aku gak tahu ini ke mana. Tapi tubuhku kayak udah biasa.",
                    en: "I don't know where this leads. But my body acts like it's been here before.",
                },
                spirits: ["Mubii", "Gingeer"],
            },
            {
                text: {
                    id: "Aku takut... tapi makin dalam makin tenang.",
                    en: "I’m scared… but the deeper I go, the calmer I feel.",
                },
                spirits: ["Bitty", "Banion"],
            },
            {
                text: {
                    id: "Gue udah capek mikir. Lanjut aja.",
                    en: "I’m done overthinking. Let’s just keep going.",
                },
                spirits: ["Potatoad", "Kroot"],
            },
            {
                text: {
                    id: "Jangan-jangan ini semua cuma mimpi. Aneh banget!",
                    en: "What if this is all a dream? So weird!",
                },
                spirits: ["Onyun", "Bitty"],
            },
            {
                text: {
                    id: "Gue gak nyetir, tapi gue juga gak nyerah.",
                    en: "I’m not in control, but I’m not giving up either.",
                },
                spirits: ["Kroot", "Gowlic"],
            },
        ],
    },
    {
        question: {
            id: "4. Di pojok lorong, kamu lihat cermin pecah.\nSalah satu pantulannya… versi kecil dirimu. Lagi duduk. Nangis.",
            en: "4. At the corner of the corridor, you see a cracked mirror.\nOne reflection shows a tiny version of you, sitting and crying.",
        },
        options: [
            {
                text: {
                    id: "Aku... masih nyimpen rasa itu ya.",
                    en: "I guess… I’m still holding on to that feeling.",
                },
                spirits: ["Banion", "Mubii"],
            },
            {
                text: {
                    id: "Kamu capek ya? Sini peluk.",
                    en: "You're tired, huh? Come here, let me hug you.",
                },
                spirits: ["Gingeer", "Bitty"],
            },
            {
                text: {
                    id: "Gue nggak bisa nangis di sini. Tapi gue dengerin.",
                    en: "I can’t cry right now. But I hear you.",
                },
                spirits: ["Kroot", "Gowlic"],
            },
            {
                text: {
                    id: "Jujur aja... itu sedih tapi lucu juga.",
                    en: "Honestly… it’s sad but also kinda funny.",
                },
                spirits: ["Onyun", "Bitty"],
            },
            {
                text: {
                    id: "Gak penting. Masa lalu tuh udah mati.",
                    en: "Doesn’t matter. The past is dead.",
                },
                spirits: ["Gowlic", "Potatoad"],
            },
        ],
    },
    {
        question: {
            id: "5. Seekor burung lewat, menjatuhkan secarik kertas.\nTulisannya kayak tulisanmu waktu kecil:\n“Maaf ya, aku belum cukup baik.”",
            en: "5. A bird flies by and drops a small paper.\nThe handwriting looks like yours as a kid:\n“Sorry, I'm still not good enough.”",
        },
        options: [
            {
                text: {
                    id: "Kenapa masih sedih banget bacanya ya…",
                    en: "Why does reading that still make me sad…?",
                },
                spirits: ["Banion", "Mubii"],
            },
            {
                text: {
                    id: "Nggak kok. Kamu udah cukup. Dari dulu.",
                    en: "No, you were always enough. Even back then.",
                },
                spirits: ["Gingeer", "Bitty"],
            },
            {
                text: {
                    id: "Masa kecil tuh gak bisa dibenerin, bisa dipeluk doang.",
                    en: "You can’t fix your childhood. You can only embrace it.",
                },
                spirits: ["Mubii", "Kroot"],
            },
            {
                text: {
                    id: "Mungkin emang gak cukup. Tapi gue tetep jalan.",
                    en: "Maybe it wasn't enough. But I kept going.",
                },
                spirits: ["Kroot", "Gowlic"],
            },
            {
                text: {
                    id: "Duh... malu... tapi pengin peluk kertasnya.",
                    en: "Ugh… it’s embarrassing… but I wanna hug the paper.",
                },
                spirits: ["Onyun", "Bitty"],
            },
        ],
    },
    {
        question: {
            id: "6. Kamu nemu rak mainan tua.\nAda satu boneka rusak duduk sendirian.\nKelihatannya... nunggu kamu.",
            en: "6. You find an old toy shelf.\nOne broken doll sits alone.\nIt looks like... it's waiting for you.",
        },
        options: [
            {
                text: {
                    id: "Jangan-jangan ini aku... dulu.",
                    en: "Maybe… that used to be me.",
                },
                spirits: ["Banion", "Mubii"],
            },
            {
                text: {
                    id: "Kasihan banget... ayo pulang bareng aku.",
                    en: "Poor thing… come home with me.",
                },
                spirits: ["Bitty", "Gingeer"],
            },
            {
                text: {
                    id: "Dia nggak perlu diselamatin. Dia cuma butuh didengerin.",
                    en: "It doesn’t need saving. Just needs to be heard.",
                },
                spirits: ["Mubii", "Kroot"],
            },
            {
                text: {
                    id: "Boneka juga bisa trauma ya?",
                    en: "Dolls can have trauma too, huh?",
                },
                spirits: ["Onyun", "Banion"],
            },
            {
                text: {
                    id: "Ya udah. Duduk aja bareng. Gak usah banyak omong.",
                    en: "Let’s just sit here. No need for words.",
                },
                spirits: ["Potatoad", "Gowlic"],
            },
        ],
    },
    {
        question: {
            id: "7. Lorong bercabang dua.\nSatu terang dan riuh suara. Satu lagi gelap dan sepi.\nChame cuma ngangguk, biar kamu yang pilih.",
            en: "7. The corridor splits into two.\nOne is bright and noisy. The other is dark and quiet.\nChame just nods, letting you choose.",
        },
        options: [
            {
                text: {
                    id: "Terang terlalu berisik. Aku ambil yang sepi.",
                    en: "Too loud over there. I’ll take the quiet path.",
                },
                spirits: ["Mubii", "Gowlic"],
            },
            {
                text: {
                    id: "Aku masuk yang terang. Biar gak ngerasa sendiri.",
                    en: "I’ll go toward the light. So I don’t feel alone.",
                },
                spirits: ["Bitty", "Onyun"],
            },
            {
                text: {
                    id: "Gelap? Ya udah. Lebih jujur daripada basa-basi.",
                    en: "Dark? So be it. More honest than small talk.",
                },
                spirits: ["Kroot", "Potatoad"],
            },
            {
                text: {
                    id: "Yang mana aja... asal ada aku-nya di ujung.",
                    en: "Whichever way… as long as I find myself at the end.",
                },
                spirits: ["Gingeer", "Mubii"],
            },
            {
                text: {
                    id: "Kalau boleh, aku bikin jalan ketiga.",
                    en: "If I could, I’d make a third path.",
                },
                spirits: ["Onyun", "Banion"],
            },
        ],
    },
    {
        question: {
            id: "8. Di ujung lorong, ada kotak kecil.\nTulisan di atasnya:\n“Tinggalkan satu hal yang paling berat kamu bawa.”",
            en: "8. At the end of the corridor, there's a small box.\nA sign reads:\n“Leave behind one thing you carry that’s too heavy.”",
        },
        options: [
            {
                text: { id: "Overthinking.", en: "Overthinking." },
                spirits: ["Kroot", "Banion"],
            },
            {
                text: { id: "Takut ditinggalin.", en: "Fear of abandonment." },
                spirits: ["Bitty", "Onyun"],
            },
            {
                text: {
                    id: "Perasaan bersalah yang aku nggak ngerti.",
                    en: "That weird guilt I never understood.",
                },
                spirits: ["Mubii", "Gingeer"],
            },
            {
                text: {
                    id: "Perfeksionisme biar bisa diterima.",
                    en: "Perfectionism just to feel accepted.",
                },
                spirits: ["Gowlic", "Gingeer"],
            },
            {
                text: {
                    id: "Ekspektasi orang yang gak pernah cocok sama aku.",
                    en: "Other people’s expectations that never fit me.",
                },
                spirits: ["Potatoad", "Kroot"],
            },
        ],
    },
    {
        question: {
            id: "9. Chame menatap kamu:\n“Jadi... kamu kira siapa dirimu yang sebenarnya?”",
            en: "9. Chame looks at you:\n“So… who do you think you really are?”",
        },
        options: [
            {
                text: {
                    id: "Yang jagain semua orang, tapi gak bisa jaga diri sendiri.",
                    en: "The one who protects everyone, but can't protect themselves.",
                },
                spirits: ["Kroot", "Banion"],
            },
            {
                text: {
                    id: "Yang berisik, tapi cuma pengin didengerin.",
                    en: "The loud one who just wants to be heard.",
                },
                spirits: ["Onyun", "Bitty"],
            },
            {
                text: {
                    id: "Yang ngerti orang, tapi belum ngerti diri sendiri.",
                    en: "Understands others, but hasn’t figured themselves out.",
                },
                spirits: ["Gingeer", "Mubii"],
            },
            {
                text: {
                    id: "Yang sok kuat, padahal pengin dimengerti.",
                    en: "Pretends to be strong, just wants to be understood.",
                },
                spirits: ["Gowlic", "Potatoad"],
            },
            {
                text: {
                    id: "Yang luka, tapi tetap main dan jatuh cinta.",
                    en: "Wounded, but still plays and falls in love.",
                },
                spirits: ["Banion", "Bitty"],
            },
        ],
    },
];

export default quizData;