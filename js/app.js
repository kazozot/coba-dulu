document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    let currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    const applyTheme = () => {
        if (currentTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', currentTheme);
    };

    const toggleTheme = () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme();
        render(); // Re-render to update theme-dependent components
    };

    const renderHeader = () => {
        const path = window.location.hash || '#/';
        return `
            <header class="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 transition-colors duration-300">
                <div class="container mx-auto px-4 py-4 flex justify-between items-center">
                    <a href="#/" class="text-xl md:text-2xl font-bold text-emerald-600 dark:text-emerald-400">Asbabun Nuzul Digital</a>
                    <div class="flex items-center space-x-4">
                        <a href="#/about" class="${path.startsWith('#/about') ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-600 dark:text-gray-300'} text-sm md:text-base hover:text-emerald-600 dark:hover:text-emerald-400">About</a>
                        <a href="#/narrators" class="${path.startsWith('#/narrators') ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-600 dark:text-gray-300'} text-sm md:text-base hover:text-emerald-600 dark:hover:text-emerald-400">Periwayat</a>
                        <a href="#/terms" class="${path.startsWith('#/terms') ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-600 dark:text-gray-300'} text-sm md:text-base hover:text-emerald-600 dark:hover:text-emerald-400">Terms</a>
                        <button id="theme-toggle" class="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-300" aria-label="Toggle theme">
                            ${currentTheme === 'light' ? 
                                `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>` : 
                                `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>`
                            }
                        </button>
                    </div>
                </div>
            </header>
        `;
    };

    const renderFooter = () => `
        <footer class="bg-white dark:bg-gray-800 shadow-inner mt-12">
            <div class="container mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-400">
                <p>&copy; ${new Date().getFullYear()} Asbabun Nuzul Digital. All Rights Reserved.</p>
                <div class="mt-2 space-x-4">
                    <a href="#/about" class="hover:text-emerald-600 dark:hover:text-emerald-400">About</a>
                    <span>|</span>
                    <a href="#/narrators" class="hover:text-emerald-600 dark:hover:text-emerald-400">Periwayat</a>
                    <span>|</span>
                    <a href="#/terms" class="hover:text-emerald-600 dark:hover:text-emerald-400">Terms of Service</a>
                </div>
            </div>
        </footer>
    `;

    const renderAdBanner = () => {
        if (!AppConfig.ADS_ENABLED) return '';
        const adId = `ad-banner-${Math.random().toString(36).substring(7)}`;
        setTimeout(() => {
            const adContainer = document.getElementById(adId);
            if (adContainer && !adContainer.hasChildNodes()) {
                const scriptConfig = document.createElement('script');
                scriptConfig.type = 'text/javascript';
                scriptConfig.innerHTML = `atOptions = {'key' : '89dd05f056df7ba4a61cd242e26cb6af', 'format' : 'iframe', 'height' : 90, 'width' : 728, 'params' : {}};`;
                
                const scriptInvoke = document.createElement('script');
                scriptInvoke.type = 'text/javascript';
                scriptInvoke.src = '//www.highperformanceformat.com/89dd05f056df7ba4a61cd242e26cb6af/invoke.js';
                
                adContainer.appendChild(scriptConfig);
                adContainer.appendChild(scriptInvoke);
            }
        }, 100);
        return `<div class="my-8 flex justify-center items-center w-full min-h-[90px]"><div id="${adId}"></div></div>`;
    };

    const renderNativeAdBanner = () => {
        if (!AppConfig.ADS_ENABLED) return '';
        const adId = `native-ad-${Math.random().toString(36).substring(7)}`;
        setTimeout(() => {
            const adContainer = document.getElementById(adId);
            if (adContainer && !adContainer.hasChildNodes()) {
                const adDiv = document.createElement('div');
                adDiv.id = 'container-831375280a5eace22919c30d68041d89';
                
                const script = document.createElement('script');
                script.async = true;
                script.setAttribute('data-cfasync', 'false');
                script.src = '//pl27226036.revenuecpmgate.com/831375280a5eace22919c30d68041d89/invoke.js';

                adContainer.appendChild(script);
                adContainer.appendChild(adDiv);
            }
        }, 100);
        return `<div class="my-8 flex justify-center items-center w-full"><div id="${adId}"></div></div>`;
    };

    const renderGiscusComments = (term) => `
        <div id="giscus-container" class="mt-12"></div>
        <script>
            (function() {
                const container = document.getElementById('giscus-container');
                if (container) {
                    const script = document.createElement('script');
                    script.src = 'https://giscus.app/client.js';
                    script.setAttribute('data-repo', 'kazozot/agama');
                    script.setAttribute('data-repo-id', 'R_kgDOPQOEKA');
                    script.setAttribute('data-category', 'General');
                    script.setAttribute('data-category-id', 'DIC_kwDOPQOEKM4CtPgm');
                    script.setAttribute('data-mapping', 'specific');
                    script.setAttribute('data-term', '${term}');
                    script.setAttribute('data-strict', '0');
                    script.setAttribute('data-reactions-enabled', '1');
                    script.setAttribute('data-emit-metadata', '0');
                    script.setAttribute('data-input-position', 'bottom');
                    script.setAttribute('data-theme', '${currentTheme}');
                    script.setAttribute('data-lang', 'id');
                    script.setAttribute('crossorigin', 'anonymous');
                    script.async = true;
                    container.innerHTML = '';
                    container.appendChild(script);
                }
            })();
        </script>
    `;

    const renderHomePage = () => `
        <div class="animate-fade-in">
            ${renderAdBanner()}
            <div class="text-center mb-12">
                <h1 class="text-4xl font-bold text-gray-800 dark:text-white mb-2">Daftar Surah</h1>
                <p class="text-lg text-gray-600 dark:text-gray-400">Pilih surah untuk melihat Asbabun Nuzul setiap ayat.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${QURAN_DATA.map(surah => `
                    <a href="#/surah/${surah.id}" class="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-sm text-gray-500 dark:text-gray-400">Surah No. ${surah.id}</p>
                                <h2 class="text-2xl font-bold text-emerald-600 dark:text-emerald-400">${surah.name}</h2>
                                <p class="text-gray-600 dark:text-gray-300">${surah.translation}</p>
                            </div>
                            <div class="text-3xl font-arabic text-right text-gray-700 dark:text-gray-200">${surah.name}</div>
                        </div>
                    </a>
                `).join('')}
            </div>
            ${renderNativeAdBanner()}
        </div>
    `;

    const renderSurahPage = (surahId, ayahId) => {
        const surah = QURAN_DATA.find(s => s.id.toString() === surahId);
        if (!surah) return `<div class="text-center text-red-500">Surah tidak ditemukan.</div>`;

        const selectedAyah = surah.ayahs.find(a => a.id.toString() === ayahId);

        const findNarrator = (source) => NARRATORS_DATA.find(narrator => source.includes(narrator.name));

        const renderAyahDetail = (ayah) => `
            <div class="animate-fade-in">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="text-2xl font-bold">Surah ${surah.name}: Ayat ${ayah.id}</h3>
                    </div>
                <div class="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg mb-8">
                    <p class="font-arabic text-4xl text-right leading-relaxed text-gray-800 dark:text-gray-100 mb-4">${ayah.arabic}</p>
                    <p class="text-lg italic text-gray-600 dark:text-gray-300">"${ayah.translation}"</p>
                </div>
                ${renderNativeAdBanner()}
                <h4 class="text-xl font-semibold mb-4 border-b-2 border-emerald-500 pb-2">Asbabun Nuzul</h4>
                ${ayah.asbabunNuzul.length > 0 ? ayah.asbabunNuzul.map(riwayat => {
                    const narrator = findNarrator(riwayat.source);
                    return `
                        <div class="bg-emerald-50 dark:bg-gray-700/50 p-4 rounded-lg border-l-4 border-emerald-500 mb-4">
                            <h5 class="font-semibold text-lg text-emerald-800 dark:text-emerald-300 mb-2">
                                ${narrator ? `<a href="#/narrators/${narrator.id}" class="hover:underline">${riwayat.source}</a>` : riwayat.source}
                            </h5>
                            <div class="space-y-3 text-gray-700 dark:text-gray-300">
                                ${riwayat.narrations.map(narration => `<p>${narration}</p>`).join('')}
                            </div>
                        </div>`;
                }).join('') : `<p class="text-gray-500 dark:text-gray-400">Tidak ada data Asbabun Nuzul untuk ayat ini.</p>`}
                ${renderAdBanner()}
                ${renderGiscusComments(`surah-${surah.id}-ayah-${ayah.id}`)}
            </div>
        `;

        return `
            <div class="animate-fade-in">
                ${renderAdBanner()}
                <a href="#/" class="inline-flex items-center my-6 text-emerald-600 dark:text-emerald-400 hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                    Kembali ke Daftar Surah
                </a>
                <div class="flex flex-col md:flex-row gap-8">
                    <aside class="md:w-1/3 lg:w-1/4">
                        <div class="sticky top-24">
                            <h2 class="text-2xl font-bold mb-4">${surah.name}</h2>
                            <ul class="space-y-2 max-h-[70vh] overflow-y-auto custom-scrollbar pr-2">
                                ${surah.ayahs.map(ayah => `
                                    <li>
                                        <a href="#/surah/${surah.id}/${ayah.id}" class="block p-3 rounded-lg text-left transition-colors duration-200 ${ayah.id.toString() === ayahId ? 'bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200' : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'}">
                                            Ayat ${ayah.id}
                                        </a>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    </aside>
                    <main class="md:w-2/3 lg:w-3/4">
                        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md min-h-[75vh]">
                            ${selectedAyah ? renderAyahDetail(selectedAyah) : `
                                <div class="flex items-center justify-center h-full">
                                    <div class="text-center text-gray-500 dark:text-gray-400">
                                        <h3 class="text-2xl font-semibold">Selamat Datang di Surah ${surah.name}</h3>
                                        <p class="mt-2">Silakan pilih sebuah ayat untuk melihat detailnya.</p>
                                    </div>
                                </div>
                            `}
                        </div>
                    </main>
                </div>
            </div>
        `;
    };

    const renderAboutPage = () => `
        <div class="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md animate-fade-in">
            <h1 class="text-4xl font-bold text-gray-800 dark:text-white mb-6">Tentang Asbabun Nuzul Digital</h1>
            <div class="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                <p>Asbabun Nuzul Digital adalah sebuah platform yang didedikasikan untuk memudahkan umat Islam dalam mempelajari sebab-sebab turunnya ayat-ayat Al-Qur'an (Asbabun Nuzul).</p>
                <h2 class="text-2xl font-semibold text-gray-800 dark:text-white pt-4">Sumber Data</h2>
                <p>Data Asbabun Nuzul yang disajikan dalam aplikasi ini utamanya merujuk pada kitab "Lubab an-Nuqul fi Asbab an-Nuzul" karya Imam Jalaluddin As-Suyuti.</p>
            </div>
            ${renderNativeAdBanner()}
        </div>
    `;

    const renderTermsPage = () => `
        <div class="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md animate-fade-in">
            <h1 class="text-4xl font-bold text-gray-800 dark:text-white mb-6">Syarat dan Ketentuan</h1>
            <div class="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                <div class="space-y-2">
                    <h2 class="text-2xl font-semibold text-gray-800 dark:text-white">1. Penerimaan Persyaratan</h2>
                    <p>Dengan mengakses aplikasi ini, Anda setuju untuk terikat oleh Syarat dan Ketentuan ini.</p>
                </div>
                <div class="space-y-2">
                    <h2 class="text-2xl font-semibold text-gray-800 dark:text-white">2. Akurasi Konten</h2>
                    <p>Kami berusaha memastikan keakuratan informasi, namun tidak menjamin bebas dari kesalahan. Lakukan verifikasi silang dengan sumber primer.</p>
                </div>
            </div>
            ${renderNativeAdBanner()}
        </div>
    `;

    const renderNarratorsPage = () => `
        <div class="max-w-4xl mx-auto animate-fade-in">
            <div class="text-center mb-12">
                <h1 class="text-4xl font-bold text-gray-800 dark:text-white mb-2">Profil Periwayat</h1>
                <p class="text-lg text-gray-600 dark:text-gray-400">Kenali lebih dekat para ulama yang meriwayatkan Asbabun Nuzul.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                ${NARRATORS_DATA.map(narrator => `
                    <a href="#/narrators/${narrator.id}" class="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                        <h2 class="text-2xl font-bold text-emerald-600 dark:text-emerald-400">${narrator.name}</h2>
                        <p class="text-gray-600 dark:text-gray-300">${narrator.title}</p>
                        <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">${narrator.birth_death}</p>
                    </a>
                `).join('')}
            </div>
        </div>
    `;

    const renderNarratorDetailPage = (narratorId) => {
        const narrator = NARRATORS_DATA.find(n => n.id === narratorId);
        if (!narrator) return `<div class="text-center"><h1 class="text-2xl font-bold text-red-500">Periwayat Tidak Ditemukan</h1></div>`;

        return `
            <div class="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md animate-fade-in">
                <div class="mb-8">
                    <a href="#/narrators" class="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:underline">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                        Kembali ke Daftar Periwayat
                    </a>
                </div>
                <div class="text-center border-b-2 border-gray-200 dark:border-gray-700 pb-6 mb-6">
                    <h1 class="text-4xl font-bold text-gray-800 dark:text-white">${narrator.name}</h1>
                    <p class="text-xl text-gray-600 dark:text-gray-400 mt-2">${narrator.title}</p>
                    <p class="text-md text-gray-500 dark:text-gray-500 mt-1">${narrator.birth_death}</p>
                </div>
                <div class="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    ${narrator.bio.map(p => `<p>${p}</p>`).join('')}
                </div>
            </div>
        `;
    };

    const router = () => {
        const path = window.location.hash.slice(1) || '/';
        const parts = path.split('/').filter(p => p);
        const [page, param1, param2] = parts;

        let content = '';
        switch (page) {
            case 'surah':
                content = renderSurahPage(param1, param2);
                break;
            case 'about':
                content = renderAboutPage();
                break;
            case 'terms':
                content = renderTermsPage();
                break;
            case 'narrators':
                content = param1 ? renderNarratorDetailPage(param1) : renderNarratorsPage();
                break;
            default:
                content = renderHomePage();
        }
        return content;
    };

    const render = () => {
        app.innerHTML = `
            ${renderHeader()}
            <main class="flex-grow container mx-auto px-4 py-8">
                ${router()}
            </main>
            ${renderFooter()}
        `;
        document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
    };

    window.addEventListener('hashchange', render);
    applyTheme();
    render();
});