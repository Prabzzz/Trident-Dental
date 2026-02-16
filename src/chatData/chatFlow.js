export const chatFlow = {
    start: {
      message:
        "Welcome to Trident Multispecialty Dental Clinic and Implant Center 🦷\n\nHow can we help you today?",
      options: [
        { label: "General Checkup", next: "general" },
        { label: "I Have Dental Problem", next: "problemList" },
        { label: "Clinic Timings", next: "timings" },
        { label: "Book Appointment", next: "appointment" }
      ]
    },
  
    general: {
      message: "Would you like to book a general dental checkup appointment?",
      options: [
        { label: "Yes", next: "appointment" },
        { label: "No", next: "start" }
      ]
    },
  
    problemList: {
      message: "Please select your problem:",
      options: [
        { label: "Tooth Pain", next: "toothPain" },
        { label: "Bleeding Gums", next: "gums" },
        { label: "Wisdom Tooth Issue", next: "wisdom" },
        { label: "Dental Cleaning", next: "cleaning" },
        { label: "Dental Implants", next: "implants" },
        { label: "Back to Main Menu", next: "start" }
      ]
    },
  
    toothPain: {
      message: "Are you experiencing severe pain?",
      options: [
        { label: "Yes", next: "appointment" },
        { label: "No", next: "appointment" }
      ]
    },
  
    gums: {
      message:
        "Bleeding gums may indicate gum infection. Would you like to consult our dentist?",
      options: [
        { label: "Yes", next: "appointment" },
        { label: "No", next: "start" }
      ]
    },
  
    wisdom: {
      message:
        "Wisdom tooth issues often require evaluation. Would you like to book an appointment?",
      options: [
        { label: "Yes", next: "appointment" },
        { label: "No", next: "start" }
      ]
    },
  
    cleaning: {
      message: "Dental cleaning helps maintain oral hygiene. Book appointment?",
      options: [
        { label: "Yes", next: "appointment" },
        { label: "No", next: "start" }
      ]
    },
  
    implants: {
      message:
        "We specialize in dental implants. Would you like to consult our implant specialist?",
      options: [
        { label: "Yes", next: "appointment" },
        { label: "No", next: "start" }
      ]
    },
  
    timings: {
      message:
        "🕒 Clinic Timings:\nMonday to Sunday\nEvening 4:00 PM – 10:00 PM\n\n(Appointments are exceptional and based on availability)",
      options: [
        { label: "Book Appointment", next: "appointment" },
        { label: "Back to Main Menu", next: "start" }
      ]
    },
  
    appointment: {
      message: "Click below to proceed to appointment booking.",
      options: [
        { label: "Go to Appointment Page", next: "redirect" },
        { label: "Back to Main Menu", next: "start" }
      ]
    }
  };
  