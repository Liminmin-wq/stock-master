// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 设置分享链接为当前页面URL
    document.getElementById('shareUrl').value = window.location.href;
    
    // 订购模态框服务名称设置
    const orderModal = document.getElementById('orderModal');
    if (orderModal) {
        orderModal.addEventListener('show.bs.modal', function(event) {
            const button = event.relatedTarget; // 触发模态框的按钮
            const service = button.getAttribute('data-service'); // 从data-service属性获取服务名称
            const modalTitle = orderModal.querySelector('.modal-title');
            const serviceSpan = orderModal.querySelector('#selectedService');
            
            if (service) {
                serviceSpan.textContent = service;
                modalTitle.textContent = '订购服务: ' + service;
            }
        });
    }
    
    // 表单提交处理
    const consultForm = document.getElementById('consultForm');
    if (consultForm) {
        consultForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('咨询提交成功！我们将在24小时内与您联系。');
            consultForm.reset();
        });
    }
    
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('订单提交成功！我们将尽快与您确认服务细节。');
            orderForm.reset();
            // 关闭模态框
            const modal = bootstrap.Modal.getInstance(orderModal);
            modal.hide();
        });
    }
    
    // 平滑滚动导航
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// 复制分享链接
function copyShareUrl() {
    const shareUrlInput = document.getElementById('shareUrl');
    shareUrlInput.select();
    shareUrlInput.setSelectionRange(0, 99999); // 移动设备兼容
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            alert('链接已复制到剪贴板！');
        } else {
            alert('复制失败，请手动选择并复制链接。');
        }
    } catch (err) {
        console.error('复制失败:', err);
        alert('复制失败，请手动选择并复制链接。');
    }
}

// 分享到微信（模拟）
function shareToWechat() {
    alert('请使用微信"复制链接"功能，将链接粘贴到微信中分享。');
}

// 分享到朋友圈（模拟）
function shareToMoments() {
    alert('请使用微信"复制链接"功能，将链接粘贴到微信朋友圈中分享。');
}

// 分享到视频号（模拟）
function shareToVideoChannel() {
    alert('请使用微信"复制链接"功能，将链接粘贴到视频号中分享。');
}

// 更新页面URL（用于生成可分享链接）
function updateShareUrl() {
    // 在实际应用中，这里可以生成短链接或带有参数的链接
    const baseUrl = window.location.origin + window.location.pathname;
    document.getElementById('shareUrl').value = baseUrl;
}