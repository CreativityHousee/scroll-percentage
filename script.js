const showPercentElement = document.getElementById('show-scroll-percent')

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const height = document.body.clientHeight
    const avalableHeight = window.innerHeight

    const percentOfScroll = Math.round(scrollTop / (height - avalableHeight) * 100) + '%'

    showPercentElement.style.width = percentOfScroll
    console.log(percentOfScroll);
})