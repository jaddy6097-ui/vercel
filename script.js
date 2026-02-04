document.getElementById('invoiceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const billingAddress = document.getElementById('billingAddress').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const purchasedItems = document.getElementById('purchasedItems').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    const validity = document.getElementById('validity').value;
    const expire = document.getElementById('expire').value;
    const logoFile = document.getElementById('logo').files[0];

    // Create invoice content
    const invoiceContent = document.getElementById('invoiceContent');
    invoiceContent.innerHTML = '';

    // Logo
    if (logoFile) {
        const logoImg = document.createElement('img');
        logoImg.id = 'invoiceLogo';
        logoImg.src = URL.createObjectURL(logoFile);
        invoiceContent.appendChild(logoImg);
    }

    // Details
    const details = document.createElement('div');
    details.innerHTML = `
        <p><strong>Billing Address:</strong> ${billingAddress}</p>
        <p><strong>Contact:</strong> ${email} | ${phone}</p>
        <p><strong>Purchased Items:</strong><br>${purchasedItems.replace(/\n/g, '<br>')}</p>
        <p><strong>Payment Method:</strong> ${paymentMethod}</p>
        <p><strong>Validity:</strong> ${validity}</p>
        <p><strong>Expire:</strong> ${expire}</p>
    `;
    invoiceContent.appendChild(details);

    // Show invoice
    document.getElementById('invoice').classList.remove('hidden');
});
