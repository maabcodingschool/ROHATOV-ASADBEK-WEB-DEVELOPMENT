const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')


const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData , 2500)

function getData() {
    header.innerHTML = '<img src="https://habrastorage.org/webt/jd/a3/jb/jda3jbwfioh-z02unzxllpsae_k.jpeg" alt="">'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium laborum non enim quia? Maiores, consequuntur.'
    profile_img.innerHTML = '<img src="https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/xps_notebooks/13_9370/global_spi/notebook-xps-13-9370-campaign-hero-504x350-ng.psd?fmt=jpg" alt="">'
    name.innerHTML = 'ROHATOV ASADBEK'
    date.innerHTML='MAY, 07, 2021'

    animated_bgs.forEach(bg => bg.classList.remove('animeted-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animeted-bg-text'))
}