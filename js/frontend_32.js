
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.sem-enquiry-form').forEach(function (form) {
        form.addEventListener('submit', function () {
            var button = form.querySelector('.sem-submit-btn');
            if (!button) return;
            button.classList.add('is-loading');
            button.setAttribute('aria-busy', 'true');
            var text = button.querySelector('span:first-child');
            if (text) text.textContent = 'Submitting...';
        });
    });

    if (window.history && window.history.replaceState) {
        var url = new URL(window.location.href);
        if (url.searchParams.has('sem_status')) {
            url.searchParams.delete('sem_status');
            window.history.replaceState({}, document.title, url.toString());
        }
    }
});
