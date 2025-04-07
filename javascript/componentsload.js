const componentsToLoad = [
    { url: 'components/preloader/preloader.html', targetId: 'preloader-container' },
    { url: 'components/navbar/navbar.html', targetId: 'main-header-container' },
    { url: 'components/sidebar/sidebar.html', targetId: 'sidebar-container' },
    { url: 'components/hero/heroSection.html', targetId: 'hero-container' },
    { url: 'components/service/servicesSection.html', targetId: 'services-container' },
    { url: 'components/empresas/empresasSection.html', targetId: 'empresas-container' },
    { url: 'components/processos/processos.html', targetId: 'processos-container' },
    { url: 'components/work/workSection.html', targetId: 'works-container' },
    { url: 'components/banner/bannerSection.html', targetId: 'banner-container' },
    { url: 'components/about/aboutSection.html', targetId: 'about-container' },
    { url: 'components/clientes/clientesSection.html', targetId: 'clientes-container' },
    { url: 'components/perguntas/perguntasSection.html', targetId: 'perguntas-container' },
    { url: 'components/footer/footer.html', targetId: 'footer-container' },
    { url: 'components/aboutUs/aboutUsSection.html', targetId: 'aboutUs-container' },
    { url:'components/team/teamSection.html', targetId:'team-container' },
    { url:'components/joinglobal/bannerGlobal.html', targetId:'join-global-container' },
    { url:'components/blogAbout/fromTheBlog.html', targetId:'from-the-blog-container' },
    { url:'components/contact/contactSection.html', targetId:'contact-container'},
    { url: 'components/servicepagina/serviceweprovide.html', targetId: 'service-pagina-container' },
    { url: 'components/blogcard/blogSection.html', targetId: 'blog-container' },
];

async function loadComponent(url, targetId) {
    const target = document.getElementById(targetId);
    if (!target) {
        return;
    }

    try {
        const response = await fetch(url);
        const html = await response.text();
        target.innerHTML += html;
    } catch (error) {
        console.error(`Erro ao carregar o componente ${url}:`, error);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const startTime = Date.now();

    await Promise.all(componentsToLoad.map(comp => loadComponent(comp.url, comp.targetId)));

    if (typeof criarCards === 'function') criarCards();
    if (typeof criandoCompanhias === 'function') criandoCompanhias();
    if (typeof seeOurWork === 'function') seeOurWork();
    if (typeof exibirEstrelas === 'function') exibirEstrelas();
    if (typeof trocaSlideCarrossel === 'function') trocaSlideCarrossel();
    if (typeof criarCardsdaPaginaServices === 'function') criarCardsdaPaginaServices();
    if (typeof criandoCardDosBlogsAbout === 'function') criandoCardDosBlogsAbout();
    if (typeof inserindoIntegrantesDoTime === 'function') inserindoIntegrantesDoTime();
    if (typeof criandoCardDosBlogsPaginaBlog === 'function') criandoCardDosBlogsPaginaBlog();
    if (typeof criandoShortcutLinks === 'function') criandoShortcutLinks();


    // Preloader
    const elapsed = Date.now() - startTime;
    const delay = Math.max(0, 1000 - elapsed);

    setTimeout(() => {
        const preloader = document.getElementById('preloader-container');
        if (preloader) {
            preloader.classList.add('fade-out');
            setTimeout(() => preloader.remove(), 500);
        }
    }, delay);
});
