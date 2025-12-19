// 1. 回到顶部按钮功能
const backToTopBtn = document.getElementById('backToTop');

// 监听页面滚动，显示/隐藏按钮
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // 滚动超过300px时显示按钮
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// 点击按钮回到顶部
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滚动
    });
});

// 2. 导航栏平滑跳转（点击导航链接跳转到对应区块）
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // 阻止默认跳转行为
        const targetId = link.getAttribute('href'); // 获取目标区块ID
        const targetElement = document.querySelector(targetId); // 获取目标元素
        
        if (targetElement) {
            // 平滑滚动到目标元素
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 3. 支撑材料目录展开/折叠功能（可选扩展）
const categoryTitles = document.querySelectorAll('.category-title');

categoryTitles.forEach(title => {
    title.addEventListener('click', () => {
        const list = title.nextElementSibling; // 获取当前分类下的列表
        list.classList.toggle('hidden'); // 切换列表显示/隐藏
        
        // 切换标题前的图标（可选，需在CSS中定义.hidden样式）
        if (list.classList.contains('hidden')) {
            title.innerHTML = title.innerHTML.replace('−', '+');
        } else {
            title.innerHTML = title.innerHTML.replace('+', '−');
        }
    });
});

// 4. 页面加载完成后执行的初始化操作
window.addEventListener('load', () => {
    console.log('页面加载完成，可正常预览');
    // 可选：添加页面加载动画关闭逻辑
});