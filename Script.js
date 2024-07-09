document.addEventListener('DOMContentLoaded', () => {
    const sectionContainer = document.getElementById('sectionContainer');
    const navLinks = document.querySelectorAll('.nav-link');

    // Function to load section content
    function loadSection(section) {
        let sectionContent = '';
        
        switch (section) {
            case 'home':
                sectionContent = `
                    <h2>Welcome to jathi 💎</h2>
                    <p>This is the home section. Use the navigation to explore different sections.</p>
                `;
                break;
            case 'features':
                sectionContent = `
                    <h2>Create a New Feature</h2>
                    <form id="featureForm">
                        <div class="form-group">
                            <label for="featureTitle">Feature Title</label>
                            <input type="text" class="form-control" id="featureTitle" required>
                        </div>
                        <div class="form-group">
                            <label for="featureDescription">Feature Description</label>
                            <textarea class="form-control" id="featureDescription" rows="3" required></textarea>
                        </div>
                        <div class="form-group">
                            <label for="featureIcon">Feature Icon (URL)</label>
                            <input type="url" class="form-control" id="featureIcon" required>
                        </div>
                        <div class="form-group">
                            <label for="featureCount">Number of Cards</label>
                            <input type="number" class="form-control" id="featureCount" min="1" required>
                        </div>
                        <button type="submit" class="btn btn-primary">Create Features</button>
                    </form>
                    <div id="featureContainer" class="mt-5"></div>
                `;
                break;
            case 'pricing':
                sectionContent = `
                    <h2>Create a New Pricing Plan</h2>
                    <form id="pricingForm">
                        <div class="form-group">
                            <label for="pricingPlan">Plan Name</label>
                            <input type="text" class="form-control" id="pricingPlan" required>
                        </div>
                        <div class="form-group">
                            <label for="pricingPrice">Price</label>
                            <input type="number" class="form-control" id="pricingPrice" required>
                        </div>
                        <div class="form-group">
                            <label for="pricingFeatures">Features (Comma Separated)</label>
                            <input type="text" class="form-control" id="pricingFeatures" required>
                        </div>
                        <div class="form-group">
                            <label for="pricingCount">Number of Plans</label>
                            <input type="number" class="form-control" id="pricingCount" min="1" required>
                        </div>
                        <button type="submit" class="btn btn-primary">Create Plans</button>
                    </form>
                    <div id="pricingContainer" class="mt-5"></div>
                `;
                break;
            case 'contact':
                sectionContent = `
                    <h2>Contact Us</h2>
                    <p>If you have any questions, feel free to reach out to us.</p>
                `;
                break;
            default:
                sectionContent = `
                    <h2>Welcome to Our Website</h2>
                    <p>This is the home section. Use the navigation to explore different sections.</p>
                `;
                break;
        }

        sectionContainer.innerHTML = sectionContent;

        if (section === 'features') {
            setupFeatureForm();
        } else if (section === 'pricing') {
            setupPricingForm();
        }
    }

    // Set up form for Features
    function setupFeatureForm() {
        const featureForm = document.getElementById('featureForm');
        const featureContainer = document.getElementById('featureContainer');

        featureForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const featureTitle = document.getElementById('featureTitle').value;
            const featureDescription = document.getElementById('featureDescription').value;
            const featureIcon = document.getElementById('featureIcon').value;
            const featureCount = document.getElementById('featureCount').value;

            for (let i = 0; i < featureCount; i++) {
                const cardHTML = `
                    <div class="card border-gray mt-3">
                        <div class="card-body">
                            <img src="${featureIcon}" alt="${featureTitle}" class="card-img-top mb-3">
                            <h5 class="card-title">${featureTitle}</h5>
                            <p class="card-text">${featureDescription}</p>
                        </div>
                    </div>
                `;
                featureContainer.innerHTML += cardHTML;
            }

            // Clear the form fields
            featureForm.reset();
        });
    }

    // Set up form for Pricing
    function setupPricingForm() {
        const pricingForm = document.getElementById('pricingForm');
        const pricingContainer = document.getElementById('pricingContainer');

        pricingForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const pricingPlan = document.getElementById('pricingPlan').value;
            const pricingPrice = document.getElementById('pricingPrice').value;
            const pricingFeatures = document.getElementById('pricingFeatures').value.split(',');
            const pricingCount = document.getElementById('pricingCount').value;

            for (let i = 0; i < pricingCount; i++) {
                const featureList = pricingFeatures.map(feature => `<li>${feature.trim()}</li>`).join('');
                const cardHTML = `
                    <div class="card border-gray mt-3">
                        <div class="card-body">
                            <h5 class="card-title">${pricingPlan}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">$${pricingPrice}</h6>
                            <ul class="card-text">${featureList}</ul>
                        </div>
                    </div>
                `;
                pricingContainer.innerHTML += cardHTML;
            }

            // Clear the form fields
            pricingForm.reset();
        });
    }

    // Add event listeners to nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const section = event.target.getAttribute('data-section');
            loadSection(section);
        });
    });

    // Load default section
    loadSection('home');
});
                                                         
