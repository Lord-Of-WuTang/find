 // Sample doctor data
        const doctors = [
            {
                name: "Dr. Adebayo Johnson",
                specialty: "General Practice",
                location: "Victoria Island",
                languages: ["English", "Yoruba"],
                consultationType: ["Video Call", "Phone Call"],
                availability: "available",
                experience: "8 years",
                rating: 4.8,
                fee: "₦5,000"
            },
            {
                name: "Dr. Fatima Aliyu",
                specialty: "Cardiology",
                location: "Ikoyi",
                languages: ["English", "Hausa"],
                consultationType: ["Video Call", "Chat Only"],
                availability: "busy",
                experience: "12 years",
                rating: 4.9,
                fee: "₦8,000"
            },
            {
                name: "Dr. Chinedu Okafor",
                specialty: "Dermatology",
                location: "Surulere",
                languages: ["English", "Igbo"],
                consultationType: ["Video Call", "Phone Call", "Chat Only"],
                availability: "available",
                experience: "6 years",
                rating: 4.7,
                fee: "₦6,500"
            },
            {
                name: "Dr. Amina Hassan",
                specialty: "Pediatrics",
                location: "Ikeja",
                languages: ["English", "Hausa", "Yoruba"],
                consultationType: ["Video Call"],
                availability: "available",
                experience: "10 years",
                rating: 4.8,
                fee: "₦7,000"
            },
            {
                name: "Dr. Olumide Adesanya",
                specialty: "Psychiatry",
                location: "Lekki",
                languages: ["English"],
                consultationType: ["Video Call", "Phone Call"],
                availability: "offline",
                experience: "15 years",
                rating: 4.9,
                fee: "₦10,000"
            },
            {
                name: "Dr. Blessing Okwu",
                specialty: "Gynecology",
                location: "Victoria Island",
                languages: ["English", "Igbo"],
                consultationType: ["Video Call", "Chat Only"],
                availability: "available",
                experience: "9 years",
                rating: 4.6,
                fee: "₦7,500"
            },
            {
                name: "Dr. Ibrahim Musa",
                specialty: "General Practice",
                location: "Surulere",
                languages: ["English", "Hausa"],
                consultationType: ["Phone Call", "Chat Only"],
                availability: "busy",
                experience: "5 years",
                rating: 4.5,
                fee: "₦4,500"
            },
            {
                name: "Dr. Kehinde Adeyemi",
                specialty: "Cardiology",
                location: "Ikeja",
                languages: ["English", "Yoruba"],
                consultationType: ["Video Call"],
                availability: "available",
                experience: "11 years",
                rating: 4.8,
                fee: "₦9,000"
            },
            {
                name: "Dr. Ngozi Emeka",
                specialty: "Dermatology",
                location: "Lekki",
                languages: ["English", "Igbo"],
                consultationType: ["Video Call", "Chat Only"],
                availability: "available",
                experience: "7 years",
                rating: 4.7,
                fee: "₦6,000"
            },
            {
                name: "Dr. Yusuf Abdullahi",
                specialty: "General Practice",
                location: "Ikoyi",
                languages: ["English", "Hausa"],
                consultationType: ["Video Call", "Phone Call"],
                availability: "available",
                experience: "4 years",
                rating: 4.4,
                fee: "₦4,000"
            },
            {
                name: "Dr. Funmi Olaleye",
                specialty: "Pediatrics",
                location: "Victoria Island",
                languages: ["English", "Yoruba"],
                consultationType: ["Video Call", "Phone Call"],
                availability: "busy",
                experience: "13 years",
                rating: 4.9,
                fee: "₦8,500"
            },
            {
                name: "Dr. Collins Eze",
                specialty: "Psychiatry",
                location: "Surulere",
                languages: ["English", "Igbo"],
                consultationType: ["Video Call", "Chat Only"],
                availability: "available",
                experience: "8 years",
                rating: 4.6,
                fee: "₦9,500"
            }
        ];

        let filteredDoctors = [...doctors];

        // Get DOM elements
        const searchInput = document.getElementById('searchInput');
        const specialtyFilter = document.getElementById('specialtyFilter');
        const locationFilter = document.getElementById('locationFilter');
        const consultationFilter = document.getElementById('consultationFilter');
        const languageFilter = document.getElementById('languageFilter');
        const doctorsGrid = document.getElementById('doctorsGrid');
        const resultsCount = document.getElementById('resultsCount');
        const noResults = document.getElementById('noResults');

        // Event listeners
        searchInput.addEventListener('input', filterDoctors);
        specialtyFilter.addEventListener('change', filterDoctors);
        locationFilter.addEventListener('change', filterDoctors);
        consultationFilter.addEventListener('change', filterDoctors);
        languageFilter.addEventListener('change', filterDoctors);

        // Filter function
        function filterDoctors() {
            const searchTerm = searchInput.value.toLowerCase();
            const specialty = specialtyFilter.value;
            const location = locationFilter.value;
            const consultation = consultationFilter.value;
            const language = languageFilter.value;

            filteredDoctors = doctors.filter(doctor => {
                const matchesSearch = doctor.name.toLowerCase().includes(searchTerm) || 
                                    doctor.specialty.toLowerCase().includes(searchTerm);
                const matchesSpecialty = !specialty || doctor.specialty === specialty;
                const matchesLocation = !location || doctor.location === location;
                const matchesConsultation = !consultation || doctor.consultationType.includes(consultation);
                const matchesLanguage = !language || doctor.languages.includes(language);

                return matchesSearch && matchesSpecialty && matchesLocation && 
                       matchesConsultation && matchesLanguage;
            });

            renderDoctors();
        }

        // Render doctors function
        function renderDoctors() {
            if (filteredDoctors.length === 0) {
                doctorsGrid.style.display = 'none';
                noResults.style.display = 'block';
                resultsCount.textContent = '0 doctors found';
                return;
            }

            doctorsGrid.style.display = 'grid';
            noResults.style.display = 'none';
            resultsCount.textContent = `${filteredDoctors.length} doctor${filteredDoctors.length === 1 ? '' : 's'} found`;

            doctorsGrid.innerHTML = filteredDoctors.map(doctor => {
                const initials = doctor.name.split(' ').map(n => n[0]).join('');
                const availabilityClass = doctor.availability;
                const availabilityText = doctor.availability === 'available' ? 'Available Now' : 
                                       doctor.availability === 'busy' ? 'Busy' : 'Offline';

                return `
                    <div class="doctor-card fade-in">
                        <div class="doctor-header">
                            <div class="doctor-avatar">${initials}</div>
                            <div class="doctor-info">
                                <h3>${doctor.name}</h3>
                                <div class="doctor-specialty">${doctor.specialty}</div>
                            </div>
                        </div>
                        
                        <div class="availability ${availabilityClass}">${availabilityText}</div>
                        
                        <div class="doctor-details">
                            <div class="detail-item">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>${doctor.location}</span>
                            </div>
                            <div class="detail-item">
                                <i class="fas fa-globe"></i>
                                <span>${doctor.languages.join(', ')}</span>
                            </div>
                            <div class="detail-item">
                                <i class="fas fa-video"></i>
                                <span>${doctor.consultationType.join(', ')}</span>
                            </div>
                            <div class="detail-item">
                                <i class="fas fa-award"></i>
                                <span>${doctor.experience} experience</span>
                            </div>
                            <div class="detail-item">
                                <i class="fas fa-star"></i>
                                <span>${doctor.rating}/5.0 • Consultation: ${doctor.fee}</span>
                            </div>
                        </div>
                        
                        <button class="book-btn" onclick="bookConsultation('${doctor.name}')">
                            <i class="fas fa-calendar-plus"></i> Book Consultation
                        </button>
                    </div>
                `;
            }).join('');
        }

        // Book consultation function
        function bookConsultation(doctorName) {
            alert(`Booking consultation with ${doctorName}...\n\nIn a real app, this would redirect to a booking system or payment gateway.`);
        }

        // Initial render
        renderDoctors();