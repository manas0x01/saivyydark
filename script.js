document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        en: {
            // Nav
            navSolutions: 'Solutions',
            navAbout: 'About',
            navPortfolio: 'Portfolio',
            navBlog: 'Blog',
            navContact: 'Contact',

            // Hero
            heroTitle: 'Pioneering AI & Generative AI Solutions',
            heroSubtitle: 'Leveraging cutting-edge technology to build intelligent solutions for your business challenges.',
            heroExplore: 'Explore Solutions',

            // About Page
            aboutHeroTitle: 'Our Story',
            aboutHeroSubtitle: 'Pioneering the future of AI technology with innovation and excellence',
            whoWeAre: 'Who We Are',
            whoWeAreSubtitle: 'Leading the AI revolution with cutting-edge solutions',
            ourMission: 'Our Mission',
            ourMissionText: 'Empowering businesses with innovative AI solutions:',
            missionPoint1: 'Transform Business Operations',
            missionPoint2: 'Drive Digital Innovation',
            missionPoint3: 'Create Sustainable Impact',
            missionPoint4: 'Foster Technological Growth',
            ourVision: 'Our Vision',
            ourVisionText: 'Shaping the future of technology:',
            visionPoint1: 'Global AI Leadership',
            visionPoint2: 'Innovation Excellence',
            visionPoint3: 'Client Success Focus',
            visionPoint4: 'Future-Ready Solutions',
            ourValues: 'Our Values',
            ourValuesText: 'Core principles that drive us:',
            valuesPoint1: 'Innovation & Excellence',
            valuesPoint2: 'Client-Centric Approach',
            valuesPoint3: 'Integrity & Trust',
            valuesPoint4: 'Continuous Learning',
            ourJourney: 'Our Journey',
            ourJourneyText: 'Milestones of our growth:',
            journeyPoint1: 'Founded in 2024',
            journeyPoint2: 'Rapid Market Expansion',
            journeyPoint3: 'Innovation Recognition',
            journeyPoint4: 'Global Partnerships',
            foundingMembers: 'The Founding Members',
            foundingMembersSubtitle: 'Meet the visionaries behind our success',
            keshavBio: 'Visionary leader driving innovation and growth',
            joinJourney: 'Join Our Journey',
            joinJourneySubtitle: 'Be part of the AI revolution with Saivvy Technologies',
            getInTouch: 'Get in Touch',

            // Solutions Page
            solutionsHeroTitle: 'Our AI Solutions',
            solutionsHeroSubtitle: 'Discover how our cutting-edge AI solutions can transform your business',
            comprehensiveSolutions: 'Comprehensive AI Solutions',
            comprehensiveSolutionsSubtitle: 'End-to-end AI solutions tailored to your business needs',
            genAiSolutions: 'Generative AI Solutions',
            genAiSolutionsText: 'Transform your business with cutting-edge generative AI technology:',
            genAiPoint1: 'Content Generation & Optimization',
            genAiPoint2: 'AI-Powered Design & Creativity',
            genAiPoint3: 'Natural Language Processing',
            genAiPoint4: 'Custom AI Model Development',
            aiAutomation: 'AI Automation',
            aiAutomationText: 'Streamline your operations with intelligent automation:',
            automationPoint1: 'Process Automation',
            automationPoint2: 'Workflow Optimization',
            automationPoint3: 'Intelligent Document Processing',
            automationPoint4: 'RPA Integration',
            dataAnalytics: 'Data Analytics & ML',
            dataAnalyticsText: 'Unlock insights from your data with advanced analytics:',
            analyticsPoint1: 'Predictive Analytics',
            analyticsPoint2: 'Business Intelligence',
            analyticsPoint3: 'Machine Learning Models',
            analyticsPoint4: 'Data Visualization',
            customDevelopment: 'Custom AI Development',
            customDevelopmentText: 'Bespoke AI solutions for your unique challenges:',
            customDevPoint1: 'Custom AI Applications',
            customDevPoint2: 'AI Integration Services',
            customDevPoint3: 'API Development',
            customDevPoint4: 'System Architecture',
            readyToTransform: 'Ready to Transform Your Business?',
            readyToTransformSubtitle: 'Let\'s discuss how our AI solutions can help you achieve your goals',
            getStarted: 'Get Started',

            // Portfolio Page
            portfolioHeroTitle: 'Our Portfolio',
            portfolioHeroSubtitle: 'A showcase of our successful projects and impactful results.',
            caseStudies: 'Case Studies',
            caseStudiesSubtitle: 'Explore how we\'ve helped businesses like yours succeed.',
            project1Title: 'AI-Powered Sales Forecasting',
            project1Desc: 'Developed a custom machine learning model to predict sales with 95% accuracy, leading to a 20% increase in revenue.',
            project2Title: 'Generative AI for Content Creation',
            project2Desc: 'Implemented a Gen-AI solution that automated content creation, reducing marketing costs by 30% and increasing engagement by 40%.',
            project3Title: 'AI-Driven Customer Support Chatbot',
            project3Desc: 'Created a chatbot that resolved 80% of customer queries automatically, improving customer satisfaction by 25%.',
            viewCaseStudy: 'View Case Study',

            // Blog Page
            blogHeroTitle: 'AI Insights',
            blogHeroSubtitle: 'Your source for the latest news, articles, and insights on AI.',
            latestArticles: 'Latest Articles',
            latestArticlesSubtitle: 'Stay informed with our expert analysis and commentary.',
            blog1Title: 'The Future of Generative AI in Business',
            blog1Desc: 'Discover how generative AI is set to revolutionize industries and what it means for your business.',
            blog2Title: 'Top 5 Machine Learning Trends to Watch',
            blog2Desc: 'We break down the most important machine learning trends that will shape the technology landscape.',
            blog3Title: 'The Importance of Ethical AI Development',
            blog3Desc: 'A deep dive into the ethical considerations of AI and how to ensure fairness and transparency.',
            readMore: 'Read More',

            // Media Page
            mediaHeroTitle: 'Media & Awards',
            mediaHeroSubtitle: 'Recognized for our innovation and excellence in the AI industry.',
            inTheNews: 'In the News',
            inTheNewsSubtitle: 'Read what others are saying about Saivvy Technologies.',
            news1: '"Saivvy Technologies is revolutionizing the AI landscape with its innovative solutions."',
            news2: '"A company to watch, Saivvy Technologies is making waves in the world of generative AI."',
            news3: '"The team at Saivvy is pushing the boundaries of what\'s possible with artificial intelligence."',
            readArticle: 'Read Article',
            awardsRecognition: 'Awards & Recognition',
            awardsRecognitionSubtitle: 'We are proud of our achievements and industry recognition.',
            award1Title: 'AI Innovation Award 2025',
            award1Desc: 'Awarded for our groundbreaking work in generative AI.',
            award2Title: 'Best AI Startup 2025',
            award2Desc: 'Recognized as the leading AI startup of the year.',
            award3Title: 'Tech Innovator of the Year',
            award3Desc: 'Our CEO, Keshav Madan, was named the top tech innovator.',
        },
        hi: {
            // Nav
            navSolutions: 'समाधान',
            navAbout: 'हमारे बारे में',
            navPortfolio: 'पोर्टफोलियो',
            navBlog: 'ब्लॉग',
            navContact: 'संपर्क करें',

            // Hero
            heroTitle: 'अग्रणी एआई और जेनरेटिव एआई समाधान',
            heroSubtitle: 'आपके व्यावसायिक चुनौतियों के लिए बुद्धिमान समाधान बनाने के लिए नवीनतम तकनीक का लाभ उठाना।',
            heroExplore: 'समाधान खोजें',

            // About Page
            aboutHeroTitle: 'हमारी कहानी',
            aboutHeroSubtitle: 'नवाचार और उत्कृष्टता के साथ एआई प्रौद्योगिकी के भविष्य का मार्ग प्रशस्त करना',
            whoWeAre: 'हम कौन हैं',
            whoWeAreSubtitle: 'अत्याधुनिक समाधानों के साथ एआई क्रांति का नेतृत्व करना',
            ourMission: 'हमारा लक्ष्य',
            ourMissionText: 'अभिनव एआई समाधानों के साथ व्यवसायों को सशक्त बनाना:',
            missionPoint1: 'व्यावसायिक संचालन को बदलना',
            missionPoint2: 'डिजिटल नवाचार को बढ़ावा देना',
            missionPoint3: 'सतत प्रभाव पैदा करना',
            missionPoint4: 'तकनीकी विकास को बढ़ावा देना',
            ourVision: 'हमारी दृष्टि',
            ourVisionText: 'प्रौद्योगिकी के भविष्य को आकार देना:',
            visionPoint1: 'वैश्विक एआई नेतृत्व',
            visionPoint2: 'नवाचार उत्कृष्टता',
            visionPoint3: 'ग्राहक सफलता फोकस',
            visionPoint4: 'भविष्य के लिए तैयार समाधान',
            ourValues: 'हमारे मूल्य',
            ourValuesText: 'हमें चलाने वाले मूल सिद्धांत:',
            valuesPoint1: 'नवाचार और उत्कृष्टता',
            valuesPoint2: 'ग्राहक-केंद्रित दृष्टिकोण',
            valuesPoint3: 'अखंडता और विश्वास',
            valuesPoint4: 'निरंतर सीखना',
            ourJourney: 'हमारी यात्रा',
            ourJourneyText: 'हमारे विकास के मील के पत्थर:',
            journeyPoint1: '2024 में स्थापित',
            journeyPoint2: 'तेजी से बाजार विस्तार',
            journeyPoint3: 'नवाचार मान्यता',
            journeyPoint4: 'वैश्विक भागीदारी',
            foundingMembers: 'संस्थापक सदस्य',
            foundingMembersSubtitle: 'हमारी सफलता के पीछे के दूरदर्शी लोगों से मिलें',
            keshavBio: 'नवाचार और विकास को चलाने वाले दूरदर्शी नेता',
            joinJourney: 'हमारी यात्रा में शामिल हों',
            joinJourneySubtitle: 'Saivvy Technologies के साथ AI क्रांति का हिस्सा बनें',
            getInTouch: 'संपर्क करें',

            // Solutions Page
            solutionsHeroTitle: 'हमारे एआई समाधान',
            solutionsHeroSubtitle: 'जानें कि हमारे अत्याधुनिक एआई समाधान आपके व्यवसाय को कैसे बदल सकते हैं',
            comprehensiveSolutions: 'व्यापक एआई समाधान',
            comprehensiveSolutionsSubtitle: 'आपकी व्यावसायिक आवश्यकताओं के अनुरूप एंड-टू-एंड एआई समाधान',
            genAiSolutions: 'जेनरेटिव एआई समाधान',
            genAiSolutionsText: 'अत्याधुनिक जेनरेटिव एआई तकनीक के साथ अपने व्यवसाय को बदलें:',
            genAiPoint1: 'सामग्री निर्माण और अनुकूलन',
            genAiPoint2: 'एआई-संचालित डिजाइन और रचनात्मकता',
            genAiPoint3: 'प्राकृतिक भाषा प्रसंस्करण',
            genAiPoint4: 'कस्टम एआई मॉडल विकास',
            aiAutomation: 'एआई स्वचालन',
            aiAutomationText: 'बुद्धिमान स्वचालन के साथ अपने संचालन को सुव्यवस्थित करें:',
            automationPoint1: 'प्रक्रिया स्वचालन',
            automationPoint2: 'कार्यप्रवाह अनुकूलन',
            automationPoint3: 'बुद्धिमान दस्तावेज़ प्रसंस्करण',
            automationPoint4: 'आरपीए एकीकरण',
            dataAnalytics: 'डेटा एनालिटिक्स और एमएल',
            dataAnalyticsText: 'उन्नत एनालिटिक्स के साथ अपने डेटा से अंतर्दृष्टि अनलॉक करें:',
            analyticsPoint1: 'भविष्य कहनेवाला विश्लेषिकी',
            analyticsPoint2: 'व्यावसायिक बुद्धिमत्ता',
            analyticsPoint3: 'मशीन लर्निंग मॉडल',
            analyticsPoint4: 'डेटा विज़ुअलाइज़ेशन',
            customDevelopment: 'कस्टम एआई विकास',
            customDevelopmentText: 'आपकी अनूठी चुनौतियों के लिए बीस्पोक एआई समाधान:',
            customDevPoint1: 'कस्टम एआई अनुप्रयोग',
            customDevPoint2: 'एआई एकीकरण सेवाएं',
            customDevPoint3: 'एपीआई विकास',
            customDevPoint4: 'सिस्टम आर्किटेक्चर',
            readyToTransform: 'क्या आप अपने व्यवसाय को बदलने के लिए तैयार हैं?',
            readyToTransformSubtitle: 'आइए चर्चा करें कि हमारे एआई समाधान आपके लक्ष्यों को प्राप्त करने में आपकी कैसे मदद कर सकते हैं',
            getStarted: 'शुरू हो जाओ',

            // Portfolio Page
            portfolioHeroTitle: 'हमारा पोर्टफोलियो',
            portfolioHeroSubtitle: 'हमारी सफल परियोजनाओं और प्रभावशाली परिणामों का प्रदर्शन।',
            caseStudies: 'केस स्टडीज',
            caseStudiesSubtitle: 'अन्वेषण करें कि हमने आपके जैसे व्यवसायों को सफल होने में कैसे मदद की है।',
            project1Title: 'एआई-पावर्ड सेल्स फोरकास्टिंग',
            project1Desc: '95% सटीकता के साथ बिक्री की भविष्यवाणी करने के लिए एक कस्टम मशीन लर्निंग मॉडल विकसित किया, जिससे राजस्व में 20% की वृद्धि हुई।',
            project2Title: 'सामग्री निर्माण के लिए जेनरेटिव एआई',
            project2Desc: 'एक जेन-एआई समाधान लागू किया जिसने सामग्री निर्माण को स्वचालित किया, विपणन लागत को 30% तक कम किया और जुड़ाव को 40% तक बढ़ाया।',
            project3Title: 'एआई-चालित ग्राहक सहायता चैटबॉट',
            project3Desc: 'एक चैटबॉट बनाया जिसने 80% ग्राहक प्रश्नों को स्वचालित रूप से हल किया, जिससे ग्राहकों की संतुष्टि में 25% का सुधार हुआ।',
            viewCaseStudy: 'केस स्टडी देखें',

            // Blog Page
            blogHeroTitle: 'एआई अंतर्दृष्टि',
            blogHeroSubtitle: 'एआई पर नवीनतम समाचारों, लेखों और अंतर्दृष्टि के लिए आपका स्रोत।',
            latestArticles: 'नवीनतम लेख',
            latestArticlesSubtitle: 'हमारे विशेषज्ञ विश्लेषण और कमेंटरी से अवगत रहें।',
            blog1Title: 'व्यवसाय में जेनरेटिव एआई का भविष्य',
            blog1Desc: 'जानें कि जेनरेटिव एआई उद्योगों में क्रांति लाने के लिए कैसे तैयार है और आपके व्यवसाय के लिए इसका क्या अर्थ है।',
            blog2Title: 'देखने के लिए शीर्ष 5 मशीन लर्निंग रुझान',
            blog2Desc: 'हम सबसे महत्वपूर्ण मशीन लर्निंग रुझानों को तोड़ते हैं जो प्रौद्योगिकी परिदृश्य को आकार देंगे।',
            blog3Title: 'नैतिक एआई विकास का महत्व',
            blog3Desc: 'एआई के नैतिक विचारों में एक गहरा गोता और निष्पक्षता और पारदर्शिता कैसे सुनिश्चित करें।',
            readMore: 'और पढ़ें',

            // Media Page
            mediaHeroTitle: 'मीडिया और पुरस्कार',
            mediaHeroSubtitle: 'एआई उद्योग में हमारे नवाचार और उत्कृष्टता के लिए मान्यता प्राप्त है।',
            inTheNews: 'खबरों में',
            inTheNewsSubtitle: 'पढ़ें कि दूसरे Saivvy Technologies के बारे में क्या कह रहे हैं।',
            news1: '"Saivvy Technologies अपने अभिनव समाधानों के साथ AI परिदृश्य में क्रांति ला रही है।"',
            news2: '"देखने वाली एक कंपनी, Saivvy Technologies जेनरेटिव AI की दुनिया में लहरें बना रही है।"',
            news3: '"Saivvy की टीम कृत्रिम बुद्धिमत्ता के साथ जो संभव है उसकी सीमाओं को आगे बढ़ा रही है।"',
            readArticle: 'लेख पढ़ें',
            awardsRecognition: 'पुरस्कार और मान्यता',
            awardsRecognitionSubtitle: 'हमें अपनी उपलब्धियों और उद्योग की मान्यता पर गर्व है।',
            award1Title: 'एआई इनोवेशन अवार्ड 2025',
            award1Desc: 'जेनरेटिव एआई में हमारे अभूतपूर्व काम के लिए सम्मानित किया गया।',
            award2Title: 'सर्वश्रेष्ठ एआई स्टार्टअप 2025',
            award2Desc: 'वर्ष के अग्रणी एआई स्टार्टअप के रूप में मान्यता प्राप्त है।',
            award3Title: 'टेक इनोवेटर ऑफ द ईयर',
            award3Desc: 'हमारे सीईओ, केशव मदन को शीर्ष तकनीकी प्रर्वतक नामित किया गया था।',
        }
    };

    const languageSelector = document.querySelector('.language-selector');

    languageSelector.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            const lang = e.target.dataset.lang;
            setLanguage(lang);

            // Update active class
            languageSelector.querySelectorAll('a').forEach(a => a.classList.remove('active'));
            e.target.classList.add('active');
        }
    });

    function setLanguage(lang) {
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.dataset.translate;
            el.textContent = translations[lang][key];
        });
    }

    const contactForm = document.getElementById("contact-form");
    const result = document.getElementById('result');

    contactForm.addEventListener('submit', function(e) {
        const formData = new FormData(contactForm);
        e.preventDefault();

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        result.innerHTML = "Please wait..."

        fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    result.innerHTML = json.message;
                } else {
                    console.log(response);
                    result.innerHTML = json.message;
                }
            })
            .catch(error => {
                console.log(error);
                result.innerHTML = "Something went wrong!";
            })
            .then(function() {
                form.reset();
                setTimeout(() => {
                    result.style.display = "none";
                }, 3000);
            });
    });      

    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainMenu = document.querySelector('.main-menu');
    const body = document.body;

    function closeMenu() {
        mobileMenuBtn?.classList.remove('active');
        mainMenu?.classList.remove('active');
        body.classList.remove('menu-open', 'overlay-active');
    }

    mobileMenuBtn?.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent click from immediately closing menu via body listener
        const isActive = mobileMenuBtn.classList.toggle('active');
        mainMenu.classList.toggle('active', isActive);
        body.classList.toggle('menu-open', isActive);
        // Add overlay slightly delayed to allow menu transition
        setTimeout(() => {
            body.classList.toggle('overlay-active', isActive);
        }, 50);
    });

    // Close mobile menu when clicking on the overlay
    body.addEventListener('click', (e) => {
        // Check if the click is on the overlay itself (::after pseudo-element)
        if (body.classList.contains('overlay-active') && e.target === body) {
             // We check if the click is exactly on the body which acts as the overlay trigger area
             // This requires the ::after pseudo-element to have pointer-events: auto
             closeMenu();
        }
    });

    // Dropdown menus (Keep existing logic, but maybe adjust for side menu)
    const dropdowns = document.querySelectorAll('.main-menu .dropdown'); // Target dropdowns inside main menu
    
    dropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('a'); // Assuming the link triggers dropdown
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');

        // Prevent default link behavior only if it has a dropdown
        if (dropdownToggle && dropdownMenu) {
            dropdownToggle.addEventListener('click', (e) => {
                // Only toggle dropdown on mobile/side menu
                if (window.innerWidth <= 992) {
                    e.preventDefault(); 
                    e.stopPropagation(); // Prevent closing the main menu
                    // Simple toggle for side menu dropdowns
                    const currentlyActive = dropdown.classList.contains('submenu-active');
                    // Close other submenus
                    dropdowns.forEach(d => d.classList.remove('submenu-active'));
                    // Toggle current submenu
                    dropdown.classList.toggle('submenu-active', !currentlyActive); 
                }
                // Allow normal link behavior on desktop
            });
        } 
    });

    // Close mobile menu when clicking a link (inside the side menu)
    const menuLinks = document.querySelectorAll('.main-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // If it's an external link (not an anchor), allow normal navigation
            if (!href || !href.startsWith('#') || href.length <= 1) {
                return; // Allow default navigation
            }
            
            e.preventDefault(); // Only prevent default for anchor links
            
            // Get the target section
            const target = document.querySelector(href);
            if (!target) return;
            
            // Close the mobile menu if in mobile view
            if (window.innerWidth <= 992) {
                // Close mobile menu
                const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
                const mainMenu = document.querySelector('.main-menu');
                
                if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
                if (mainMenu) mainMenu.classList.remove('active');
                document.body.classList.remove('menu-open', 'overlay-active');
                
                // Wait for menu to close
                setTimeout(() => {
                    // Calculate position with header offset
                    const header = document.querySelector('header');
                    const headerOffset = header ? header.offsetHeight : 70;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    // Scroll to the target section
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }, 400); // Longer delay to ensure menu is closed
            } else {
                // Desktop scrolling - immediate
                const header = document.querySelector('header');
                const headerOffset = header ? header.offsetHeight : 70;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Close mobile menu when clicking outside (Refined logic)
    // Removed the general body click listener for outside closing,
    // rely on overlay click and link clicks instead for clarity.

    // Handle window resize (Keep existing logic, ensure it closes side menu)
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Reset mobile menu state on window resize if switching to desktop
            if (window.innerWidth > 992) {
                closeMenu(); // Use the closeMenu function
            }

            // ... rest of existing resize logic ...
            // Recalculate graph dimensions if needed
            const graphs = document.querySelectorAll('.graph-grid');
            graphs.forEach(graph => {
                if (graph.dataset.graphsAnimated) {
                    // Reset animation state to allow re-animation with new dimensions
                    graph.dataset.graphsAnimated = 'false';
                    // Trigger intersection observer check
                    animateOnScroll.unobserve(graph);
                    animateOnScroll.observe(graph);
                }
            });
        }, 250); // Debounce resize events
    });

    // Hero slider functionality
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = 5000; // 5 seconds

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Auto advance slides
    setInterval(nextSlide, slideInterval);

    // Smooth scroll for "Explore More"
    const scrollDownBtn = document.querySelector('.scroll-down');
    scrollDownBtn?.addEventListener('click', () => {
        const businessSection = document.querySelector('.business-section');
        businessSection?.scrollIntoView({ behavior: 'smooth' });
    });

    // Function to animate number count-up
    function animateCountUp(el) {
        const parent = el.closest('.stat-item');
        const text = el.textContent.trim();
        // Remove non-numeric characters like '+' or 'K' for parsing, handle 'K' for thousands
        let target = 0;
        let suffix = '';
        
        // Check for custom suffix in data attribute
        if (parent && parent.dataset.suffix) {
            suffix = parent.dataset.suffix;
            target = parseFloat(text.replace(suffix, ''));
        } else if (text.endsWith('K+')) {
            target = parseFloat(text.replace('K+', '')) * 1000;
            suffix = 'K+';
        } else if (text.endsWith('+')) {
            target = parseFloat(text.replace('+', ''));
            suffix = '+';
        } else if (text.endsWith('%')) {
            target = parseFloat(text.replace('%', ''));
            suffix = '%';
        } else {
            target = parseFloat(text);
        }
        
        if (isNaN(target)) return; // Exit if target is not a number

        el.textContent = '0' + suffix; // Start from 0
        let current = 0;
        const duration = 3000; // Animation duration in ms (Increased from 1500)
        const increment = target / (duration / 16); // Calculate increment per frame (approx 60fps)

        const updateCount = () => {
            current += increment;
            if (current < target) {
                let displayValue = Math.ceil(current);
                // Handle 'K' suffix formatting during animation
                if (suffix === 'K+') {
                    el.textContent = Math.floor(displayValue / 1000) + suffix; // Display in K format
                } else {
                     el.textContent = displayValue + suffix;
                }
                requestAnimationFrame(updateCount);
            } else {
                 // Ensure the final exact value is set
                if (suffix === 'K+') {
                     el.textContent = (target/1000) + suffix; 
                 } else {
                     el.textContent = target + suffix;
                 }
            }
        };
        requestAnimationFrame(updateCount);
    }

    // Intersection Observer for animations
    const animateOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;

                // --- Stat Item Animation --- (Existing)
                if (target.classList.contains('stat-item') && !target.dataset.animated) {
                    const numberEl = target.querySelector('.stat-number');
                    const progressCircle = target.querySelector('.stat-progress');
                    const value = parseFloat(target.dataset.value) || 0;
                    const max = parseFloat(target.dataset.max) || 100;
                    const radius = progressCircle ? progressCircle.r.baseVal.value : 0;
                    const circumference = 2 * Math.PI * radius;
                    const percentage = max > 0 ? (value / max) * 100 : 0;
                    const offset = circumference - (percentage / 100) * circumference;

                    if (numberEl) animateCountUp(numberEl);
                    if (progressCircle) {
                        progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
                        progressCircle.style.strokeDashoffset = circumference;
                        setTimeout(() => { progressCircle.style.strokeDashoffset = offset; }, 100);
                    }
                    target.dataset.animated = 'true';
                }

                // --- Graph Section Animations --- (Bars, Pie, Line)
                if (target.classList.contains('graph-grid') && !target.dataset.graphsAnimated) {
                    // Bar Graph Animation
                    const bars = target.querySelectorAll('.bar');
                    bars.forEach(bar => {
                        const value = bar.dataset.value || '0';
                        bar.style.setProperty('--bar-value', value);
                        bar.style.width = `${value}%`; // Directly set width for immediate animation
                    });

                    // Pie Chart Animation
                    const pieSlices = target.querySelectorAll('.pie-slice');
                    const pieRadius = pieSlices.length > 0 ? pieSlices[0].r.baseVal.value : 0;
                    const pieCircumference = 2 * Math.PI * pieRadius;
                    let cumulativePercent = 0;

                    pieSlices.forEach(slice => {
                        const value = parseFloat(slice.dataset.value) || 0;
                        const slicePercent = value;
                        const sliceLength = (pieCircumference * slicePercent) / 100;
                        const sliceSpace = pieCircumference - sliceLength;
                        const offset = (pieCircumference * cumulativePercent) / 100;

                        slice.style.stroke = slice.dataset.color || 'var(--primary-red)';
                        slice.style.strokeDasharray = `${sliceLength} ${sliceSpace}`;
                        slice.style.strokeDashoffset = offset;
                        
                        cumulativePercent += slicePercent;
                    });

                    // Line Graph Animation
                    const lineData = target.querySelector('.line-data');
                    if (lineData) {
                        const lineLength = lineData.getTotalLength();
                        // Set initial state (hidden)
                        lineData.style.strokeDasharray = `${lineLength}`;
                        lineData.style.strokeDashoffset = lineLength;
                        
                        // Animate the line drawing
                        requestAnimationFrame(() => {
                            lineData.style.transition = 'stroke-dashoffset 1.5s ease-in-out';
                            lineData.style.strokeDashoffset = '0';
                        });
                    }

                    target.dataset.graphsAnimated = 'true';
                }

                // Handle general scroll animations (fade in, etc.)
                const animationType = target.dataset.animation || 'fadeInUp'; // Default animation
                const delay = target.dataset.delay || '0s'; // Default delay
                
                target.style.visibility = 'visible'; // Make element visible before animation
                target.style.animationDelay = delay;
                // Apply Animate.css classes IF it's not a stat item OR if stat items should also fade/slide in
                // Currently, stat items will fade in due to data-animation attribute in HTML
                 target.classList.add('animate__animated', `animate__${animationType}`);
                
                // Unobserve after general animation is applied, unless it's a stat item (which is handled by dataset.animated)
                if (!target.classList.contains('stat-item')) {
                    observer.unobserve(target);
                }
            }
        });
    }, { threshold: 0.2 }); // Increased threshold slightly to ensure more of the item is visible

    // Add animation classes to elements marked with 'scroll-animate' 
    const animatedElements = document.querySelectorAll('.scroll-animate'); 
    animatedElements.forEach(el => {
        // Initially hide elements to be animated
        el.style.visibility = 'hidden'; 
        animateOnScroll.observe(el);
    });

    // Tracking number input enhancement
    const trackingInput = document.querySelector('.tracking-input input');
    const trackingButton = document.querySelector('.tracking-input button');

    if (trackingInput && trackingButton) {
        trackingInput.addEventListener('input', (e) => {
            if (e.target.value.trim().length > 0) {
                trackingButton.classList.add('active');
            } else {
                trackingButton.classList.remove('active');
            }
        });

        trackingButton.addEventListener('click', (e) => {
            e.preventDefault();
            const trackingNumber = trackingInput.value.trim();
            if (trackingNumber) {
                // Here you would typically make an API call to track the shipment
                console.log('Tracking shipment:', trackingNumber);
                // For demo purposes, show a loading state
                trackingButton.classList.add('loading');
                setTimeout(() => {
                    trackingButton.classList.remove('loading');
                    // Show a demo message
                    alert('Tracking system integration required');
                }, 1500);
            }
        });
    }

    // Header scroll effect
    let lastScroll = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // Scrolling down
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scrolling up
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });

    // Network regions interaction
    const networkRegions = document.querySelectorAll('.network-regions span');
    networkRegions.forEach(region => {
        region.addEventListener('click', () => {
            networkRegions.forEach(r => r.classList.remove('active'));
            region.classList.add('active');
            // Here you would typically update the map visualization
            // For demo purposes, we'll just log the selected region
            console.log('Selected region:', region.textContent.trim());
        });
    });

    // Handle all anchor links in document to ensure they work
    document.addEventListener('DOMContentLoaded', function() {

        // Function to handle scrolling to sections
        function scrollToSection(targetId) {
            if (!targetId || targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            // Get header height for offset
            const header = document.querySelector('header');
            const headerHeight = header ? header.offsetHeight : 70;
            
            // Calculate position
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = window.pageYOffset + elementPosition - headerHeight;
            
            // Scroll
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        
        // Function to close mobile menu
        function closeMobileMenu() {
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const mainMenu = document.querySelector('.main-menu');
            
            if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
            if (mainMenu) mainMenu.classList.remove('active');
            document.body.classList.remove('menu-open', 'overlay-active');
        }
        
        // Handle all anchor links globally
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                
                // Close mobile menu first if on mobile
                if (window.innerWidth <= 992) {
                    closeMobileMenu();
                    
                    // Delay scroll to allow menu to close
                    setTimeout(() => {
                        scrollToSection(targetId);
                    }, 500);
                } else {
                    // Immediate scroll on desktop
                    scrollToSection(targetId);
                }
            });
        });
        
        // Mobile menu toggle button
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', function() {
                this.classList.toggle('active');
                const mainMenu = document.querySelector('.main-menu');
                if (mainMenu) mainMenu.classList.toggle('active');
                document.body.classList.toggle('menu-open');
                document.body.classList.toggle('overlay-active');
            });
        }
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            const mainMenu = document.querySelector('.main-menu');
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            
            if (window.innerWidth <= 992 && 
                mainMenu && 
                mainMenu.classList.contains('active') && 
                !mainMenu.contains(e.target) && 
                mobileMenuBtn && 
                !mobileMenuBtn.contains(e.target)) {
                closeMobileMenu();
            }
        });
    });

    // Language selector
    const languageLinks = document.querySelectorAll('.language-selector a');
    languageLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            languageLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            const lang = link.textContent.trim();
            // Here you would typically handle language change
            console.log('Selected language:', lang);
        });
    });

    // Back to Top Button
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Cookie Consent
    const cookieConsent = document.querySelector('.cookie-consent');
    const acceptButton = document.querySelector('.btn-accept');
    const rejectButton = document.querySelector('.btn-reject');
    const settingsButton = document.querySelector('.btn-settings');

    // Show cookie consent if not already accepted
    if (cookieConsent && !localStorage.getItem('cookieConsent')) {
        cookieConsent.classList.add('active');
    }

    if (acceptButton) {
        acceptButton.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'accepted');
            cookieConsent.classList.remove('active');
        });
    }

    if (rejectButton) {
        rejectButton.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'rejected');
            cookieConsent.classList.remove('active');
        });
    }

    if (settingsButton) {
        settingsButton.addEventListener('click', function() {
            // Open cookie settings modal (would be implemented separately)
            alert('Cookie settings would open here');
        });
    }

    // Resize Event Handler
    window.addEventListener('resize', function() {
        // Handle necessary responsive behavior
        if (window.innerWidth <= 768) {
            if (!document.querySelector('.hamburger-menu') && header) {
                header.appendChild(hamburger);
            }
        } else {
            const mainMenu = document.querySelector('.main-menu');
            if (mainMenu) {
                mainMenu.style.display = 'flex';
            }
            const hamburgerMenu = document.querySelector('.hamburger-menu');
            if (hamburgerMenu) {
                hamburgerMenu.remove();
            }
        }
    });

    // --- MAP INITIALIZATION --- 
    const mapContainer = document.getElementById('world-map');
    let map = null;

    if (mapContainer) {
        // Initialize map centered globally
        map = L.map('world-map').setView([20, 0], 2);

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18, // Adjusted maxZoom
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    } else {
        console.error('Map container #world-map not found!');
    }
    // --- END MAP INITIALIZATION ---

    // Facility data with coordinates and types (Assuming 'locations' variable exists from previous edits)
    const locations = {
        // ... (keep existing locations data) ...
        "north-america": [
            { lat: 38.9637, lng: -95.7129, type: 'datacenter', name: 'USA Data Center' },
            { lat: 34.0522, lng: -118.2437, type: 'hub', name: 'Los Angeles Hub' },
            { lat: 40.7128, lng: -74.0060, type: 'support', name: 'New York Support' },
            { lat: 45.4215, lng: -75.6972, type: 'hub', name: 'Canada Development Hub' },
        ],
        "asia": [
            { lat: 20.5937, lng: 78.9629, type: 'datacenter', name: 'India Data Center' },
            { lat: 19.0760, lng: 72.8777, type: 'hub', name: 'Mumbai Development Hub' },
            { lat: 28.6139, lng: 77.2090, type: 'support', name: 'Delhi Support Center' },
            { lat: 1.3521, lng: 103.8198, type: 'hub', name: 'Singapore Hub' },
            { lat: -33.8688, lng: 151.2093, type: 'support', name: 'Sydney Support' },
        ],
        "europe": [
            { lat: 51.5074, lng: -0.1278, type: 'datacenter', name: 'UK Data Center' },
            { lat: 52.5200, lng: 13.4050, type: 'hub', name: 'Berlin Hub' },
            { lat: 48.8566, lng: 2.3522, type: 'support', name: 'Paris Support Center' },
        ]
    };
    
    // Store markers globally, keyed by region
    const globalMarkers = {}; 

    // Function to create custom marker (Assuming createCustomMarker function exists)
    function createCustomMarker(facility) {
        // ... (keep existing createCustomMarker function code) ...
        const iconMapping = {
            datacenter: 'fas fa-server',
            hub: 'fas fa-building',
            support: 'fas fa-headset'
        };
        const colorMapping = {
            datacenter: 'var(--primary-red)',
            hub: 'var(--accent-red)',
            support: 'var(--medium-gray)'
        };
        const iconClass = iconMapping[facility.type] || 'fas fa-map-marker-alt';
        const markerColor = colorMapping[facility.type] || 'var(--primary-red)';

        const markerHtml = `
            <div class="custom-marker" style="background-color: ${markerColor}; border-color: ${getComputedStyle(document.documentElement).getPropertyValue('--primary-white') || '#fff'};">
                <i class="${iconClass}"></i>
            </div>
        `;

        return L.divIcon({
            html: markerHtml,
            className: 'custom-marker-wrapper',
            iconSize: [30, 30],
            iconAnchor: [15, 30],
            popupAnchor: [0, -35]
        });
    }

    function updateMap(region) {
        if (!map) { // Check if map was initialized successfully
            console.error("Map not initialized. Cannot update.");
            return;
        }

        const regionLocations = locations[region];
        if (!regionLocations) {
            console.warn(`No locations found for region: ${region}`);
            // Optionally clear all markers if region is unknown or 'all'
            Object.values(globalMarkers).flat().forEach(marker => marker.remove());
            for (const key in globalMarkers) globalMarkers[key] = [];
            return;
        }

        // Clear previously displayed markers (all markers from all regions)
        Object.values(globalMarkers).flat().forEach(marker => marker.remove());
        for (const key in globalMarkers) globalMarkers[key] = []; // Reset the storage

        // Add new markers for the selected region
        const currentRegionMarkers = [];
        const group = L.featureGroup();

        regionLocations.forEach(loc => {
            const customIcon = createCustomMarker(loc);
            const marker = L.marker([loc.lat, loc.lng], { icon: customIcon })
                          .bindPopup(`<b>${loc.name}</b><br>${loc.type.charAt(0).toUpperCase() + loc.type.slice(1)}`);
            currentRegionMarkers.push(marker);
            group.addLayer(marker);
        });

        globalMarkers[region] = currentRegionMarkers; // Store markers for the current region
        group.addTo(map);

        // Adjust map view to fit markers for the current region
        if (group.getLayers().length > 0) {
            map.fitBounds(group.getBounds().pad(0.5)); // Add padding
        } else {
             map.setView([20, 0], 2); // Reset to global view if no markers
        }
    }

    // Region selection functionality (Update event listeners)
    const regionItems = document.querySelectorAll('.region-item'); // Use the correct selector
    regionItems.forEach(item => {
        item.addEventListener('click', function() {
            regionItems.forEach(ri => ri.classList.remove('active'));
            this.classList.add('active');
            const region = this.dataset.region;
            updateMap(region);
        });
    });

    // Initialize map with the first region's data (or a default)
    const firstRegionItem = document.querySelector('.region-item.active') || document.querySelector('.region-item');
    if (firstRegionItem) {
        const initialRegion = firstRegionItem.dataset.region;
         firstRegionItem.classList.add('active'); // Ensure one is active
        updateMap(initialRegion);
    } else if (map) {
        // Fallback if no region items found, show global view
        map.setView([20, 0], 2);
    }
    
    // Initialize Particles.js
    if (document.getElementById('particles-js')) {
        particlesJS("particles-js", {
            "particles": {
              "number": {
                "value": 80,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#ffffff"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 5
                }
              },
              "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 3,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          });
    }

    // Improve touch interaction for mobile devices
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
        
        // Add touch feedback to buttons and links
        const interactiveElements = document.querySelectorAll('button, .btn, .business-card, .service-item');
        interactiveElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.classList.add('touch-active');
            });
            
            element.addEventListener('touchend', function() {
                this.classList.remove('touch-active');
            });
            
            element.addEventListener('touchcancel', function() {
                this.classList.remove('touch-active');
            });
        });
    }

    // Optimize scroll performance
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (!document.body.classList.contains('is-scrolling')) {
            document.body.classList.add('is-scrolling');
        }
        
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            document.body.classList.remove('is-scrolling');
        }, 150);
    }, { passive: true });

    // Popup Animation
    const popup = document.querySelector('.popup-animation');
    
    // Show popup
    popup.classList.add('active');
    
    // Hide popup after 3 seconds
    setTimeout(() => {
        popup.classList.remove('active');
    }, 3000);

    // MOBILE MENU INITIALIZATION - Run as soon as possible
    function initMobileMenu() {
        console.log("Initializing mobile menu");
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const mainMenu = document.querySelector('.main-menu');
        const body = document.body;
        const menuItems = document.querySelectorAll('.main-menu a');
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 70;

        if (!mobileMenuBtn || !mainMenu) {
            console.error('Mobile menu elements not found');
            return;
        }
        
        // Only handle mobile menu on small screens
        function isMobileView() {
            return window.innerWidth <= 768;
        }
        
        // Global function to smoothly scroll to a section with proper offset 
        window.scrollToSection = function(section) {
            if (!section) return;
            
            const currentHeaderHeight = header ? header.offsetHeight : headerHeight;
            const rect = section.getBoundingClientRect();
            const offsetPosition = rect.top + window.pageYOffset - currentHeaderHeight;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        };

        function closeMenu() {
            if (!isMobileView()) return;
            
            mobileMenuBtn.classList.remove('active');
            mainMenu.classList.remove('active');
            body.classList.remove('menu-open', 'overlay-active');
            
            menuItems.forEach((item, index) => {
                item.style.transform = 'translateX(20px)';
                item.style.opacity = '0';
                item.style.transitionDelay = `${0.05 * index}s`;
            });
        }

        function openMenu() {
            if (!isMobileView()) return;
            
            mobileMenuBtn.classList.add('active');
            mainMenu.classList.add('active');
            body.classList.add('menu-open', 'overlay-active');
            
            setTimeout(() => {
                menuItems.forEach((item, index) => {
                    item.style.transform = 'translateX(0)';
                    item.style.opacity = '1';
                    item.style.transitionDelay = `${0.1 + (index * 0.05)}s`;
                });
            }, 200);
        }

        // Toggle menu on button click
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (!isMobileView()) return;
            
            if (mobileMenuBtn.classList.contains('active')) {
                closeMenu();
            }
            else {
                openMenu();
            }
        });

        // Handle menu item clicks
        menuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = item.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    // Close the menu first
                    closeMenu();
                    
                    // Wait for menu to close before scrolling
                    setTimeout(() => {
                        window.scrollToSection(targetSection);
                    }, 300);
                }
            });
        });

        // Close mobile menu when clicking on the overlay
        body.addEventListener('click', (e) => {
            if (isMobileView() && body.classList.contains('overlay-active') && 
                !mainMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                closeMenu();
            }
        });

        // Close menu when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (isMobileView() && mainMenu.classList.contains('active') && 
                !mainMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                closeMenu();
            }
        });
    }

    // Initialize mobile menu when DOM is loaded
    document.addEventListener('DOMContentLoaded', initMobileMenu);

    // Mobile Menu Functionality
    const mobileSideMenu = document.querySelector('.mobile-side-menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    const mobileMenuLinks = document.querySelectorAll('.mobile-side-menu nav ul li a');

    // Toggle mobile menu - Adding null check for menuOverlay
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        if (mobileSideMenu) mobileSideMenu.classList.toggle('active');
        if (menuOverlay) menuOverlay.classList.toggle('active');
        document.body.style.overflow = mobileSideMenu && mobileSideMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking overlay - Adding null check for menuOverlay
    if (menuOverlay) {
        menuOverlay.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            if (mobileSideMenu) mobileSideMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Handle smooth scrolling for mobile menu links
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Close mobile menu
                mobileMenuBtn.classList.remove('active');
                mobileSideMenu.classList.remove('active');
                menuOverlay.classList.remove('active');
                document.body.style.overflow = '';
                
                // Smooth scroll to target section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Close menu when window is resized to desktop view
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            mobileMenuBtn.classList.remove('active');
            mobileSideMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Add navigation error handling
    document.addEventListener('DOMContentLoaded', () => {
        // Handle navigation links
        const navLinks = document.querySelectorAll('a[href]');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                // Skip if it's a hash link or external link
                if (href.startsWith('#') || href.startsWith('http')) {
                    return;
                }

                // Prevent default behavior for local links
                e.preventDefault();

                // Try to navigate to the page
                try {
                    window.location.href = href;
                } catch (error) {
                    console.error('Navigation error:', error);
                    // Fallback to traditional navigation
                    window.location.assign(href);
                }
            });
        });
    });

    // Add page transition handling
    const handlePageTransition = (e) => {
        const link = e.target.closest('a');
        if (!link) return;
        
        // Don't handle anchor links or external links
        if (link.getAttribute('href').startsWith('#') || link.getAttribute('href').startsWith('http')) {
            return;
        }
        
        e.preventDefault();
        const href = link.getAttribute('href');
        
        // Add transition class
        document.body.classList.add('page-transition');
        
        // Wait for transition to complete
        setTimeout(() => {
            window.location.href = href;
        }, 300);
    };

    // Add click event listener to all links
    document.addEventListener('click', handlePageTransition);

    // Initialization for global map
    function initializeGlobalMap() {
        // Check if the map element exists
        const mapElement = document.getElementById('global-map');
        if (!mapElement) {
            console.error('Map element not found');
            return;
        }

        console.log('Initializing global map');

        // Initialize the map centered on the world
        const map = L.map('global-map', {
            center: [20, 0],
            zoom: 2,
            minZoom: 2,
            maxZoom: 6,
            scrollWheelZoom: false,
            zoomControl: true
        });

        // Add a dark-themed tile layer
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd'
        }).addTo(map);

        // Define key locations - no visible markers will be added
        const locations = [
            { name: "New York", coords: [40.7128, -74.0060] },
            { name: "San Francisco", coords: [37.7749, -122.4194] },
            { name: "London", coords: [51.5074, -0.1278] },
            { name: "Berlin", coords: [52.5200, 13.4050] },
            { name: "Mumbai", coords: [19.0760, 72.8777] },
            { name: "Singapore", coords: [1.3521, 103.8198] },
            { name: "Sydney", coords: [-33.8688, 151.2093] },
            { name: "Tokyo", coords: [35.6762, 139.6503] },
            { name: "São Paulo", coords: [-23.5505, -46.6333] },
            { name: "Dubai", coords: [25.2048, 55.2708] }
        ];

        // Create connection lines between locations
        const connections = [
            [0, 1], [0, 2], [0, 4], [2, 3], [2, 9], 
            [4, 5], [4, 9], [5, 6], [5, 7], [1, 8],
            [0, 6], [0, 7], [3, 7], [5, 9], [0, 9],
            [2, 5], [3, 4], [0, 8], [2, 8], [4, 7]
        ];

        // Define a function to create curved lines between points
        function createCurvedLine(latLng1, latLng2) {
            // Create a curved line by adding a midpoint with offset
            const latlngs = [];
            const offsetX = (latLng2[1] - latLng1[1]) / 2;
            const offsetY = (latLng2[0] - latLng1[0]) / 2;
            
            // Start point
            latlngs.push(latLng1);
            
            // Add a control point for the curve (if the points are far enough apart)
            const distance = Math.sqrt(Math.pow(offsetX, 2) + Math.pow(offsetY, 2));
            if (distance > 10) {
                const midLat = (latLng1[0] + latLng2[0]) / 2;
                const midLng = (latLng1[1] + latLng2[1]) / 2;
                
                // Calculate perpendicular offset for curve
                const perpFactor = distance / 15; // Adjust this value to control curve amount
                const perpX = -offsetY / distance * perpFactor;
                const perpY = offsetX / distance * perpFactor;
                
                latlngs.push([midLat + perpY, midLng + perpX]);
            }
            
            // End point
            latlngs.push(latLng2);
            
            // Create polyline with curves
            return L.polyline(latlngs, {
                color: '#f05454',
                weight: 2,
                opacity: 0.8,
                smoothFactor: 1,
                className: 'connection-line'
            });
        }

        // Add connection lines directly without visible markers
        connections.forEach(connection => {
            const loc1 = locations[connection[0]];
            const loc2 = locations[connection[1]];
            
            if (loc1 && loc2) {
                // Create a curved connection line between the two location coordinates
                const line = createCurvedLine(
                    loc1.coords,
                    loc2.coords
                ).addTo(map);
                
                // Add pulse animation to line
                if (line.getElement()) {
                    line.getElement().classList.add('pulse-line');
                }
            }
        });

        // Add animation for connection lines
        setTimeout(() => {
            const lines = document.querySelectorAll('.connection-line');
            console.log(`Found ${lines.length} connection lines`);
            lines.forEach((line, index) => {
                setTimeout(() => {
                    line.classList.add('animated');
                }, index * 100);
            });
        }, 1000);
        
        console.log('Global map initialized');
    }

    // Make sure we initialize the map when the document is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeGlobalMap);
    } else {
        initializeGlobalMap();
    }
}); 