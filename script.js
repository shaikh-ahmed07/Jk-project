localStorage.clear();

        // Sample Data (In a real app, this would come from JSON files)
       const CAREERS_DATA = [
    {
        id: 'software_dev',
        title: 'Software Developer',
        education: 'Bachelor\'s in Computer Science',
        summary: 'Design and develop software applications, websites, and systems.',
        related_colleges: ['NIT Srinagar', 'University of Kashmir', 'IUST'],
        skills: ['Programming', 'Problem Solving', 'Mathematics'],
        salary: '₹4-15 LPA',
        growth: 'High'
    },
    {
        id: 'doctor',
        title: 'Medical Doctor',
        education: 'MBBS + MD/MS',
        summary: 'Diagnose and treat patients, promote health and prevent diseases.',
        related_colleges: ['SKIMS', 'GMC Srinagar', 'GMC Jammu'],
        skills: ['Biology', 'Chemistry', 'Communication'],
        salary: '₹6-20 LPA',
        growth: 'Stable'
    },
    {
        id: 'engineer',
        title: 'Civil Engineer',
        education: 'B.Tech in Civil Engineering',
        summary: 'Design and supervise construction of infrastructure projects.',
        related_colleges: ['NIT Srinagar', 'University of Kashmir', 'IUST'],
        skills: ['Mathematics', 'Physics', 'Problem Solving'],
        salary: '₹3-12 LPA',
        growth: 'Moderate'
    },
    {
        id: 'teacher',
        title: 'Teacher/Professor',
        education: 'B.Ed + Subject Masters',
        summary: 'Educate and inspire students in various subjects and grade levels.',
        related_colleges: ['University of Kashmir', 'Jammu University', 'IUST'],
        skills: ['Communication', 'Subject Knowledge', 'Patience'],
        salary: '₹2-10 LPA',
        growth: 'Stable'
    },
    {
        id: 'data_scientist',
        title: 'Data Scientist',
        education: 'Masters in Data Science/Statistics',
        summary: 'Analyze complex data to help organizations make informed decisions.',
        related_colleges: ['NIT Srinagar', 'IUST', 'University of Kashmir'],
        skills: ['Statistics', 'Programming', 'Analytics'],
        salary: '₹6-25 LPA',
        growth: 'Very High'
    },
    {
        id: 'researcher',
        title: 'Research Scientist',
        education: 'PhD in relevant field',
        summary: 'Conduct research to advance knowledge in various fields.',
        related_colleges: ['University of Kashmir', 'SKIMS', 'IUST'],
        skills: ['Research', 'Analysis', 'Writing'],
        salary: '₹4-15 LPA',
        growth: 'Moderate'
    },
    {
        id: 'lawyer',
        title: 'Lawyer',
        education: 'LLB + Optional LLM',
        summary: 'Advise clients, represent them in court, and interpret the law.',
        related_colleges: ['University of Kashmir', 'Jammu University', 'IUST'],
        skills: ['Critical Thinking', 'Communication', 'Analytical Skills'],
        salary: '₹3-15 LPA',
        growth: 'Moderate'
    },
    {
        id: 'civil_servant',
        title: 'Civil Servant (IAS/IPS/JKAS)',
        education: 'Bachelor\'s Degree in any field + UPSC/JKPSC',
        summary: 'Serve in administrative roles, policy-making, and governance.',
        related_colleges: ['University of Kashmir', 'Jammu University', 'NIT Srinagar'],
        skills: ['Leadership', 'Decision Making', 'Analytical Skills'],
        salary: '₹5-20 LPA',
        growth: 'High'
    },
    {
        id: 'journalist',
        title: 'Journalist/Media Professional',
        education: 'Bachelor\'s in Mass Communication/Journalism',
        summary: 'Report news, produce media content, and inform the public.',
        related_colleges: ['University of Kashmir', 'Jammu University', 'IUST'],
        skills: ['Writing', 'Research', 'Communication'],
        salary: '₹2-10 LPA',
        growth: 'Moderate'
    },
    {
        id: 'architect',
        title: 'Architect',
        education: 'B.Arch + Optional M.Arch',
        summary: 'Design buildings and structures with functionality and aesthetics in mind.',
        related_colleges: ['IUST', 'NIT Srinagar', 'University of Kashmir'],
        skills: ['Design', 'Creativity', 'Mathematics'],
        salary: '₹4-15 LPA',
        growth: 'Moderate'
    },
    {
        id: 'pharmacist',
        title: 'Pharmacist',
        education: 'B.Pharm + M.Pharm',
        summary: 'Dispense medications, advise patients, and ensure safe drug use.',
        related_colleges: ['SKIMS', 'GMC Srinagar', 'University of Kashmir'],
        skills: ['Chemistry', 'Attention to Detail', 'Communication'],
        salary: '₹3-12 LPA',
        growth: 'Stable'
    },
    {
        id: 'entrepreneur',
        title: 'Entrepreneur',
        education: 'Any + Business/Management knowledge preferred',
        summary: 'Start and manage businesses, identify opportunities, and innovate.',
        related_colleges: ['University of Kashmir', 'Jammu University', 'IUST'],
        skills: ['Leadership', 'Innovation', 'Risk Management'],
        salary: 'Variable',
        growth: 'High'
    }
];


        const COLLEGES_DATA = [
    {
        name: 'National Institute of Technology Srinagar',
        city: 'Srinagar',
        type: 'Engineering',
        lat: 34.083656,
        lon: 74.797371,
        notes: 'Premier engineering institute with excellent placement records'
    },
    {
        name: 'University of Kashmir',
        city: 'Srinagar',
        type: 'University',
        lat: 34.121608,
        lon: 74.843697,
        notes: 'Central university offering diverse undergraduate and postgraduate programs'
    },
    {
        name: 'Sher-e-Kashmir Institute of Medical Sciences',
        city: 'Srinagar',
        type: 'Medical',
        lat: 34.115874,
        lon: 74.806042,
        notes: 'Leading medical institute providing quality healthcare education'
    },
    {
        name: 'Islamic University of Science & Technology',
        city: 'Awantipora',
        type: 'University',
        lat: 33.917622,
        lon: 74.930595,
        notes: 'Modern university focusing on science, technology and management'
    },
    {
        name: 'University of Jammu',
        city: 'Jammu',
        type: 'University',
        lat: 32.728527,
        lon: 74.857025,
        notes: 'Public university with diverse academic programs'
    },
    {
        name: 'Government Medical College Jammu',
        city: 'Jammu',
        type: 'Medical',
        lat: 32.718829,
        lon: 74.857193,
        notes: 'Established medical college with affiliated hospital'
    },
    {
        name: 'Baba Ghulam Shah Badshah University',
        city: 'Rajouri',
        type: 'University',
        lat: 33.375414,
        lon: 74.309458,
        notes: 'Offers programs in sciences, humanities, and engineering'
    },
    {
        name: 'Central University of Jammu',
        city: 'Jammu',
        type: 'University',
        lat: 32.6572,
        lon: 74.8724,
        notes: 'Central university with multidisciplinary programs'
    },
    {
        name: 'Central University of Kashmir',
        city: 'Ganderbal',
        type: 'University',
        lat: 34.2261,
        lon: 74.7745,
        notes: 'Provides postgraduate and doctoral programs across disciplines'
    },
    {
        name: 'Cluster University of Jammu',
        city: 'Jammu',
        type: 'University',
        lat: 32.7325,
        lon: 74.8641,
        notes: 'Cluster university formed with leading local colleges'
    },
    {
        name: 'Cluster University of Srinagar',
        city: 'Srinagar',
        type: 'University',
        lat: 34.0837,
        lon: 74.7973,
        notes: 'Offers higher education in arts, sciences, and professional courses'
    },
    {
        name: 'Government College for Women, Gandhi Nagar',
        city: 'Jammu',
        type: 'College',
        lat: 32.7106,
        lon: 74.8604,
        notes: 'Renowned women’s college in Jammu'
    },
    {
        name: 'Government College for Women, M.A. Road',
        city: 'Srinagar',
        type: 'College',
        lat: 34.0839,
        lon: 74.7976,
        notes: 'Prominent women’s college in Srinagar'
    },
    {
        name: 'Acharya Shri Chander College of Medical Sciences',
        city: 'Jammu',
        type: 'Medical',
        lat: 32.7553,
        lon: 74.9231,
        notes: 'Private medical college with teaching hospital'
    },
    {
        name: 'Government Degree College Baramulla',
        city: 'Baramulla',
        type: 'College',
        lat: 34.1989,
        lon: 74.3481,
        notes: 'One of the oldest degree colleges in North Kashmir'
    },
    {
        name: 'Government Degree College Anantnag',
        city: 'Anantnag',
        type: 'College',
        lat: 33.7304,
        lon: 75.1545,
        notes: 'Major higher education institution in South Kashmir'
    },
    {
        name: 'Government College of Engineering and Technology (GCET)',
        city: 'Jammu',
        type: 'Engineering',
        lat: 32.7775,
        lon: 74.8583,
        notes: 'State-run engineering institute in Jammu'
    },
    {
        name: 'Government Degree College Pulwama',
        city: 'Pulwama',
        type: 'College',
        lat: 33.8749,
        lon: 74.8997,
        notes: 'Degree college serving Pulwama district'
    },
    {
        name: 'Government Degree College Kupwara',
        city: 'Kupwara',
        type: 'College',
        lat: 34.5309,
        lon: 74.2579,
        notes: 'Leading college in Kupwara district'
    },
    {
        name: 'Sri Pratap College (SP College)',
        city: 'Srinagar',
        type: 'College',
        lat: 34.0872,
        lon: 74.8019,
        notes: 'Historic college established in 1905'
    },
    {
        name: 'Amar Singh College',
        city: 'Srinagar',
        type: 'College',
        lat: 34.0731,
        lon: 74.8225,
        notes: 'One of the oldest colleges in J&K'
    },
    {
        name: 'Government Degree College Doda',
        city: 'Doda',
        type: 'College',
        lat: 33.1478,
        lon: 75.5486,
        notes: 'Important institution for Chenab Valley region'
    },
    {
        name: 'Government Degree College Kathua',
        city: 'Kathua',
        type: 'College',
        lat: 32.3675,
        lon: 75.5182,
        notes: 'Major higher education institution in Kathua district'
    },
    {
        name: 'Government Degree College Udhampur',
        city: 'Udhampur',
        type: 'College',
        lat: 32.9246,
        lon: 75.1357,
        notes: 'Leading college in Udhampur district'
    },
    {
        name: 'Government Degree College Poonch',
        city: 'Poonch',
        type: 'College',
        lat: 33.7715,
        lon: 74.0928,
        notes: 'Important higher education institution in Poonch district'
    },
    {
        name: 'Institute of Management, Public Administration & Rural Development (IMPARD)',
        city: 'Srinagar',
        type: 'Institute',
        lat: 34.0962,
        lon: 74.8065,
        notes: 'Focuses on governance and rural development training'
    },
    {
        name: 'Government Degree College Kishtwar',
        city: 'Kishtwar',
        type: 'College',
        lat: 33.3127,
        lon: 75.7671,
        notes: 'Serves higher education needs of Kishtwar district'
    },
    {
        name: 'Government Degree College Shopian',
        city: 'Shopian',
        type: 'College',
        lat: 33.7116,
        lon: 74.8348,
        notes: 'Higher education hub in Shopian district'
    },
    {
        name: 'Government Degree College Bandipora',
        city: 'Bandipora',
        type: 'College',
        lat: 34.4235,
        lon: 74.6431,
        notes: 'Important academic center in Bandipora'
    },
    {
        name: 'Government Degree College Kulgam',
        city: 'Kulgam',
        type: 'College',
        lat: 33.6445,
        lon: 75.0194,
        notes: 'Prominent degree college in South Kashmir'
    }
];

        const QUIZ_QUESTIONS = [
    {
        question: "Which subject or field excites you the most?",
        options: ["Mathematics & Technology", "Biology & Health Sciences", "Arts & Humanities", "Computer Science & Coding"],
        keys: ["engineer", "doctor", "teacher", "software_dev"]
    },
    {
        question: "What kind of tasks do you enjoy doing the most?",
        options: ["Hands-on projects and building things", "Research, experiments, and analysis", "Teaching and mentoring others", "Solving logical or technical problems"],
        keys: ["engineer", "researcher", "teacher", "data_scientist"]
    },
    {
        question: "Which work environment appeals to you?",
        options: ["Hospitals or laboratories", "Corporate offices", "Schools and universities", "Flexible/Remote tech settings"],
        keys: ["doctor", "software_dev", "teacher", "data_scientist"]
    },
    {
        question: "Which type of project would you enjoy the most?",
        options: ["Designing and coding an application", "Conducting experiments and publishing research", "Planning and delivering lessons", "Analyzing complex data to find insights"],
        keys: ["software_dev", "researcher", "teacher", "data_scientist"]
    },
    {
        question: "How many years of education are you willing to commit after 12th?",
        options: ["8+ years (Medical + specialization)", "4-6 years (Engineering or Professional Degree)", "3-4 years (Undergraduate studies)", "1-3 years (Diploma or short-term course)"],
        keys: ["doctor", "engineer", "software_dev", "teacher"]
    }
];


        // App State
        let currentPage = 'home';
        let quizAnswers = [];
        let isOffline = false;

        // Initialize App
        document.addEventListener('DOMContentLoaded', () => {
            initializeNavigation();
            initializeQuiz();
            initializeCareers();
            initializeColleges();
            checkOfflineStatus();
            
            // Service Worker Registration
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js')
                    .then(reg => console.log('SW registered:', reg))
                    .catch(err => console.log('SW registration failed:', err));
            }
        });

        // Navigation
        function initializeNavigation() {
            const navLinks = document.querySelectorAll('.nav-link');
            const pages = document.querySelectorAll('.page');

            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetPage = e.target.getAttribute('data-page');
                    showPage(targetPage);
                    
                    // Update active nav link
                    navLinks.forEach(l => l.classList.remove('active'));
                    e.target.classList.add('active');
                });
            });

            // Handle hero button clicks
            document.querySelectorAll('[data-page]').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetPage = e.target.getAttribute('data-page');
                    showPage(targetPage);
                    
                    // Update active nav link
                    navLinks.forEach(l => l.classList.remove('active'));
                    document.querySelector(`[data-page="${targetPage}"].nav-link`).classList.add('active');
                });
            });
        }

        function showPage(pageId) {
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => {
                page.style.display = 'none';
            });
            
            const targetPage = document.getElementById(pageId);
            if (targetPage) {
                targetPage.style.display = 'block';
                currentPage = pageId;
                
                // Add animation
                targetPage.classList.add('fade-in-up');
            }
        }

        // Quiz Implementation
        function initializeQuiz() {
            renderQuizQuestions();
            setupQuizSubmission();
            // loadPreviousResult();
        }

        function renderQuizQuestions() {
            const container = document.getElementById('quiz-questions');
            container.innerHTML = '';

            QUIZ_QUESTIONS.forEach((q, index) => {
                const questionCard = document.createElement('div');
                questionCard.className = 'card question-card';
                questionCard.innerHTML = `
                    <div class="question-title">${index + 1}. ${q.question}</div>
                    <div class="options" data-question="${index}">
                        ${q.options.map((option, optIndex) => `
                            <div class="option" data-option="${optIndex}">
                                ${option}
                            </div>
                        `).join('')}
                    </div>
                `;
                container.appendChild(questionCard);
            });

            // Add option selection handlers
            document.querySelectorAll('.option').forEach(option => {
                option.addEventListener('click', () => {
                    const questionIndex = option.closest('.options').getAttribute('data-question');
                    const optionIndex = option.getAttribute('data-option');
                    
                    // Remove selection from other options in the same question
                    option.closest('.options').querySelectorAll('.option').forEach(opt => {
                        opt.classList.remove('selected');
                    });
                    
                    // Select current option
                    option.classList.add('selected');
                    
                    // Store answer
                    quizAnswers[questionIndex] = parseInt(optionIndex);
                });
            });
        }

        function setupQuizSubmission() {
            document.getElementById('submit-quiz').addEventListener('click', () => {
                if (quizAnswers.length < QUIZ_QUESTIONS.length || quizAnswers.includes(undefined)) {
                    alert('Please answer all questions before submitting.');
                    return;
                }

                const results = calculateQuizResults();
                displayQuizResults(results);
                // saveQuizResults(results);
            });
        }

        function calculateQuizResults() {
            const careerScores = {};
            
            QUIZ_QUESTIONS.forEach((question, qIndex) => {
                const answerIndex = quizAnswers[qIndex];
                const careerKey = question.keys[answerIndex];
                careerScores[careerKey] = (careerScores[careerKey] || 0) + 1;
            });

            // Sort careers by score
            const sortedCareers = Object.entries(careerScores)
                .sort(([,a], [,b]) => b - a)
                .slice(0, 3)
                .map(([careerKey, score]) => {
                    const career = CAREERS_DATA.find(c => c.id === careerKey);
                    return {
                        ...career,
                        score: score,
                        percentage: Math.round((score / QUIZ_QUESTIONS.length) * 100)
                    };
                });

            return sortedCareers;
        }

        function displayQuizResults(results) {
            const container = document.getElementById('quiz-results');
            container.innerHTML = `
                <div class="quiz-results">
                    <h3>🎯 Your Career Matches</h3>
                    <p>Based on your responses, here are the careers that best match your interests:</p>
                    ${results.map((career, index) => `
                        <div class="suggestion-item">
                            <h4>${index + 1}. ${career.title} (${career.percentage}% match)</h4>
                            <p><strong>Education:</strong> ${career.education}</p>
                            <p><strong>Description:</strong> ${career.summary}</p>
                            <p><strong>Salary Range:</strong> ${career.salary}</p>
                            <p><strong>Top Colleges:</strong> ${career.related_colleges.slice(0, 3).join(', ')}</p>
                        </div>
                    `).join('')}
                    <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.2);">
                      <h1>  💡 Tip: Explore the Careers section to learn more about these paths!</h1>
                    </div>
                </div>
            `;
            container.scrollIntoView({ behavior: 'smooth' });
        }

        // Careers Page Implementation
        function initializeCareers() {
            renderCareers();
            setupCareerSearch();
        }

        function renderCareers(filteredCareers = CAREERS_DATA) {
            const grid = document.getElementById('career-grid');
            grid.innerHTML = '';

            filteredCareers.forEach(career => {
                const careerCard = document.createElement('div');
                careerCard.className = 'card fade-in-up';
                
                const initials = career.title.split(' ')
                    .map(word => word[0])
                    .slice(0, 2)
                    .join('')
                    .toUpperCase();

                careerCard.innerHTML = `
                    <div style="display: flex; gap: 16px; align-items: flex-start; margin-bottom: 1rem;">
                        <div style="
                            width: 60px;
                            height: 60px;
                            background: linear-gradient(135deg, var(--primary), var(--secondary));
                            border-radius: 12px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            color: white;
                            font-weight: 700;
                            font-size: 1.25rem;
                            flex-shrink: 0;
                        ">${initials}</div>
                        <div style="flex: 1;">
                            <h3 style="margin: 0 0 0.5rem 0; color: var(--gray-800);">${career.title}</h3>
                            <div style="font-size: 0.875rem; color: var(--gray-500); margin-bottom: 0.5rem;">
                                📚 ${career.education}
                            </div>
                            <div style="font-size: 0.875rem; color: var(--accent); font-weight: 600;">
                                💰 ${career.salary} • 📈 ${career.growth} Growth
                            </div>
                        </div>
                    </div>
                    
                    <p style="color: var(--gray-600); margin-bottom: 1rem; line-height: 1.6;">
                        ${career.summary}
                    </p>
                    
                    <div style="margin-bottom: 1rem;">
                        <div style="font-size: 0.875rem; font-weight: 600; color: var(--gray-700); margin-bottom: 0.5rem;">
                            🎯 Key Skills:
                        </div>
                        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                            ${career.skills.map(skill => `
                                <span style="
                                    background: var(--gray-100);
                                    color: var(--gray-700);
                                    padding: 4px 8px;
                                    border-radius: 6px;
                                    font-size: 0.75rem;
                                    font-weight: 500;
                                ">${skill}</span>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div style="padding-top: 1rem; border-top: 1px solid var(--gray-100);">
                        <div style="font-size: 0.875rem; font-weight: 600; color: var(--gray-700); margin-bottom: 0.5rem;">
                            🏫 Top Colleges:
                        </div>
                        <div style="font-size: 0.875rem; color: var(--gray-600);">
                            ${career.related_colleges.slice(0, 3).join(', ')}
                        </div>
                    </div>
                `;
                
                grid.appendChild(careerCard);
            });
        }

        function setupCareerSearch() {
            const searchInput = document.getElementById('career-search');
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase().trim();
                const filtered = CAREERS_DATA.filter(career => 
                    career.title.toLowerCase().includes(query) ||
                    career.summary.toLowerCase().includes(query) ||
                    career.education.toLowerCase().includes(query) ||
                    career.skills.some(skill => skill.toLowerCase().includes(query))
                );
                renderCareers(filtered);
            });
        }

        // Colleges Page Implementation
        function initializeColleges() {
            renderColleges();
            setupCollegeSearch();
            renderMap();
        }

        function renderColleges(filteredColleges = COLLEGES_DATA) {
            const grid = document.getElementById('college-grid');
            grid.innerHTML = '';

            filteredColleges.forEach((college, index) => {
                const collegeCard = document.createElement('div');
                collegeCard.className = 'card fade-in-up';
                collegeCard.id = `college-${index}`;
                
                const typeIcons = {
                    'Engineering': '⚙️',
                    'Medical': '🏥',
                    'University': '🎓',
                    'Management': '💼'
                };

                collegeCard.innerHTML = `
                    <div style="
                        height: 160px;
                        background: linear-gradient(135deg, #e0f2fe, #b3e5fc);
                        border-radius: 12px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-bottom: 1rem;
                        position: relative;
                        overflow: hidden;
                    ">
                        <div style="font-size: 3rem; opacity: 0.3;">${typeIcons[college.type] || '🏛️'}</div>
                        <div style="
                            position: absolute;
                            bottom: 8px;
                            right: 8px;
                            background: rgba(255, 255, 255, 0.9);
                            padding: 4px 8px;
                            border-radius: 6px;
                            font-size: 0.75rem;
                            font-weight: 600;
                            color: var(--gray-700);
                        ">
                            📍 ${college.city}
                        </div>
                    </div>
                    
                    <h3 style="margin: 0 0 0.5rem 0; color: var(--gray-800); line-height: 1.3;">
                        ${college.name}
                    </h3>
                    
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                        <span style="
                            background: var(--primary);
                            color: white;
                            padding: 4px 8px;
                            border-radius: 6px;
                            font-size: 0.75rem;
                            font-weight: 600;
                        ">
                            ${college.type}
                        </span>
                        <span style="font-size: 0.875rem; color: var(--gray-500);">
                            📍 ${college.city}
                        </span>
                    </div>
                    
                    <p style="color: var(--gray-600); line-height: 1.6; margin: 0;">
                        ${college.notes}
                    </p>
                `;
                
                grid.appendChild(collegeCard);
            });
        }

        function renderMap() {
            const mapContainer = document.getElementById('map');
            mapContainer.innerHTML = '';
            
            // J&K approximate bounds
            const bounds = {
                latMin: 32.0,
                latMax: 35.9,
                lonMin: 72.0,
                lonMax: 77.8
            };

            function projectToMap(lat, lon) {
                const x = ((lon - bounds.lonMin) / (bounds.lonMax - bounds.lonMin)) * mapContainer.clientWidth;
                const y = (1 - ((lat - bounds.latMin) / (bounds.latMax - bounds.latMin))) * mapContainer.clientHeight;
                return [Math.max(10, Math.min(mapContainer.clientWidth - 10, x)), 
                        Math.max(10, Math.min(mapContainer.clientHeight - 10, y))];
            }

            COLLEGES_DATA.forEach((college, index) => {
                const [x, y] = projectToMap(college.lat, college.lon);
                
                const marker = document.createElement('div');
                marker.className = 'map-marker';
                marker.style.left = `${x - 10}px`;
                marker.style.top = `${y - 10}px`;
                marker.title = `${college.name} - ${college.city}`;
                
                marker.addEventListener('click', () => {
                    const collegeCard = document.getElementById(`college-${index}`);
                    if (collegeCard) {
                        collegeCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        
                        // Highlight effect
                        collegeCard.style.transition = 'all 0.3s ease';
                        collegeCard.style.transform = 'scale(1.02)';
                        collegeCard.style.boxShadow = '0 20px 40px rgba(37, 99, 235, 0.15)';
                        
                        setTimeout(() => {
                            collegeCard.style.transform = '';
                            collegeCard.style.boxShadow = '';
                        }, 1000);
                    }
                });
                
                mapContainer.appendChild(marker);
            });

            // Add some visual elements to make the map more appealing
            const mapOverlay = document.createElement('div');
            mapOverlay.innerHTML = `
                <div style="
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    background: rgba(255, 255, 255, 0.9);
                    padding: 8px 12px;
                    border-radius: 8px;
                    font-size: 0.875rem;
                    font-weight: 600;
                    color: var(--gray-700);
                    box-shadow: var(--shadow-md);
                ">
                    🗺️ Jammu & Kashmir
                </div>
            `;
            mapContainer.appendChild(mapOverlay);
        }

        function setupCollegeSearch() {
            const searchInput = document.getElementById('college-search');
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase().trim();
                const filtered = COLLEGES_DATA.filter(college => 
                    college.name.toLowerCase().includes(query) ||
                    college.city.toLowerCase().includes(query) ||
                    college.type.toLowerCase().includes(query) ||
                    college.notes.toLowerCase().includes(query)
                );
                renderColleges(filtered);
                updateMapMarkers(filtered);
            });
        }

        function updateMapMarkers(filteredColleges) {
            const markers = document.querySelectorAll('.map-marker');
            markers.forEach((marker, index) => {
                const college = COLLEGES_DATA[index];
                const isVisible = filteredColleges.some(fc => 
                    fc.name === college.name && fc.city === college.city
                );
                marker.style.display = isVisible ? 'block' : 'none';
            });
        }

        // Offline Status
        function checkOfflineStatus() {
            const indicator = document.getElementById('offline-indicator');
            
            function updateOfflineStatus() {
                if (!navigator.onLine) {
                    isOffline = true;
                    indicator.classList.add('show');
                } else {
                    isOffline = false;
                    indicator.classList.remove('show');
                }
            }

            window.addEventListener('online', updateOfflineStatus);
            window.addEventListener('offline', updateOfflineStatus);
            updateOfflineStatus();
        }

        // Smooth scrolling for anchor links
        document.addEventListener('click', (e) => {
            if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = e.target.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });

        // Add intersection observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                }
            });
        }, observerOptions);

        // Observe elements when they're added to the DOM
        function observeElements() {
            document.querySelectorAll('.card:not(.fade-in-up)').forEach(el => {
                observer.observe(el);
            });
        }

        // Call observeElements when content is loaded
        setTimeout(observeElements, 100);
        