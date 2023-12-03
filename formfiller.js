const puppeteer = require("puppeteer");
const randomstring = require("randomstring"); // You may need to install this package: `npm install randomstring`

// List of Nepali-sounding names for girls and boys
const girlNames = [
  "Yukta Yawa",
  "Ankita pokharel",
  "Kabita Thuyaju",
  "Aasha Tamang",
  "Anjali Gurung",
  "Bimala Shah",
  "Deepika Rai",
  "Gita Joshi",
  "Kamala Thapa",
  "Laxmi Adhikari",
  "Meena Shrestha",
  "Nisha Basnet",
  "Pramila Bhattarai",
  "Rina Magar",
  "Sunita Poudel",
  "Usha Subedi",
  "Yamuna Karki",
  "Asmita Dhakal",
  "Asha Limbu",
  "Bandana Khatri",
  "Dipa Budhathoki",
  "Goma Dhungana",
  "Kusum Baniya",
  "Madhu Koirala",
  "Neha Aryal",
  "Pratima Lama",
  "Ritu Thakuri",
  "Shova Sapkota",
  "Umesh Bohara",
  "Anita Gurung",
  "Bina Kandel",
  "Dawa Sherpa",
  "Gauri Dhital",
  "Kajal Khadka",
  "Menuka Ghimire",
  "Nirjala Rai",
  "Pratiksha Subba",
  "Rupa Thapa",
  "Samjhana Rijal",
  "Tara Nepal",
  "Manisha Pariyar",
  "Rajani Sherchan",
  "Sabin Adhikari",
  "Aarati Rai",
  "Bipasha Shrestha",
  "Doma Lama",
  "Ganga Shrestha",
  "Karishma Shrestha",
  "Muna Gautam",
  "Neelam Thakur",
  "Prashanti Tamang",
  "Rajina Ghale",
  "Sajana Panta",
  "Tika Gurung",
  "Kiran Roka",
  "Tenzin Sherpa",
  "Anju Shrestha",
  "Binita Basnet",
  "Chhabi Roka",
  "Durga Poudel",
  "Geeta Shrestha",
  "Kamala Bohara",
  "Laxmi Magar",
  "Mina Khatiwada",
  "Nisha Rijal",
  "Rina Maharjan",
  "Binu",
];

const boyNames = [
  "Bibek Gautam",
  "Anish Wagle",
  "Swarup Bamjan",
  "Kailash Dhungana",
  "Milan Mishra",
  "Roshan Khatri",
  "Lopsang Lama",
  "Anupam Pandey",
  "Sachit Ghimire",
  "Suren Sunar",
  "Aayush Bastola",
  "Aakash BK",
  "Rupesh Tamang",
  "Aayush Basnet",
  "Aakash Chhetri",
  "Amrit Gurung",
  "Anish Joshi",
  "Arjun Karki",
  "Ashok Limbu",
  "Bibek Rai",
  "Bishal Tamang",
  "Buddha Thapa",
  "Dawa Lama",
  "Deepak Subedi",
  "Dilip Rana",
  "Ganesh Shah",
  "Gopal Bohara",
  "Hari Bhattarai",
  "Kamal Gautam",
  "Kiran Shrestha",
  "Laxman Gurung",
  "Manoj Shrestha",
  "Nabin Oli",
  "Narayan KC",
  "Prabin Thakur",
  "Rajesh Shrestha",
  "Ramesh Bhandari",
  "Ravi Sharma",
  "Sabin Aryal",
  "Santosh Magar",
  "Saroj Baniya",
  "Sujan Lama",
  "Suman Dhakal",
  "Suresh Rawat",
  "Ujjwal Bhatta",
  "Yuvraj Shrestha",
  "Aaditya Adhikari",
  "Akash Poudel",
  "Amit Baral",
  "Anil Rijal",
  "Arpan Shrestha",
  "Ashish Oli",
  "Bibek Thapa",
  "Bikram Bohara",
  "Buddhi Sharma",
  "Deependra Tamang",
  "Dipesh Shahi",
  "Gaurav Ghimire",
  "Hemant Shrestha",
  "Kamlesh Thapa",
  "Kiran Roka",
  "Krishna Lama",
  "Manish Bajracharya",
  "Nabin Rawat",
  "Nawaraj Khadka",
  "Pradeep Adhikari",
  "Prakash Tharu",
  "Rajendra Gautam",
  "Rajesh Pariyar",
  "Rajiv Lama",
  "Sabin Adhikari",
  "Sandeep Shrestha",
  "Santosh Acharya",
  "Shiva Ghale",
  "Suman Tamang",
  "Surya Bista",
  "Tenzing Sherpa",
  "Utsav Lama",
  "Yash Bhandari",
  "Aadesh Rai",
  "Aarav Shrestha",
  "Avinash Tiwari",
  "Bikash Khadka",
  "Bishnu Gurung",
  "Dinesh Bohara",
  "Ganesh Pathak",
  "Ishan Koirala",
  "Jitendra Neupane",
  "Kamal Shrestha",
  "Krishna Poudel",
  "Manish Maharjan",
  "Mukesh Singh",
  "Nischal Adhikari",
  "Pradip Bhandari",
  "Pratik Dhungana",
  "Rajiv Shrestha",
  "Sabin Bhattarai",
  "Santosh Aryal",
  "Shiva Adhikari",
  "Suman Khatiwada",
  "Surya Magar",
  "Tenzin Norbu",
  "Uttam Rijal",
  "Yogesh Pant",
];

// Array of mildly appropriate occupations
const occupations = [
  "Data Analyst",
  "Network Administrator",
  "Database Administrator",
  "Cloud Architect",
  "Web Developer",
  "Mobile App Developer",
  "DevOps Engineer",
  "Student",
  "Quality Assurance Analyst",
  "IT Support Specialist",
  "Systems Administrator",
  "Cybersecurity Analyst",
  "Network Security Engineer",
  "UI/UX Designer",
  "Product Manager",
  "Business Analyst",
  "Technical Writer",
  "Content Creator",
  "Social Media Manager",
  "Project Manager",
  "Scrum Master",
  "Data Scientist",
  "Machine Learning Engineer",
  "Artificial Intelligence Researcher",
  "Robotics Engineer",
  "VR/AR Developer",
  "Blockchain Developer",
  "Cryptocurrency Analyst",
  "Smart Contract Developer",
  "Cryptocurrency Trader",
  "Digital Marketing Specialist",
  "Content Strategist",
  "User Researcher",
  "Data Privacy Officer",
  "Ethical Hacker",
  "SEO Specialist",
  "Growth Hacker",
  "E-commerce Manager",
  "SEO Consultant",
  "Video Game Developer",
  "Technical Support Specialist",
  "Software Developer",
  "Data Analyst",
  "Systems Administrator",
  "Network Engineer",
  "Database Administrator",
  "IT Support Specialist",
  "Cybersecurity Analyst",
  "Web Developer",
  "DevOps Engineer",
  "Cloud Solutions Architect",
  "Machine Learning Engineer",
  "UI/UX Designer",
  "AI Research Scientist",
  "QA Engineer",
  "Business Analyst",
  "Product Manager",
  "Technical Writer",
  "Mobile App Developer",
  "Full Stack Developer",
  "Front-end Developer",
  "Back-end Developer",
  "Java Developer",
  "Python Developer",
  "Data Scientist",
  "Doctor",
  "Teacher",
  "Businessman/Businesswoman",
  "Actor/Actress",
  "Accountant",
  "Nurse",
  "Police Officer",
  "Firefighter",
  "Lawyer",
  "Engineer",
  "Architect",
  "Chef",
  "Psychologist",
  "Dentist",
  "Veterinarian",
  "Pilot",
  "Astronomer",
  "Biologist",
  "Economist",
  "Geologist",
  "Historian",
  "Mathematician",
  "Optometrist",
  "Radiologist",
  "Zoologist",
  "Financial Analyst",
  "Archaeologist",
  "Chef de Cuisine",
  "Marketing Manager",
];

// Function to assign gender based on the name
function assignGender(name, girlNames, boyNames) {
  if (girlNames.includes(name)) {
    return "Female";
  } else if (boyNames.includes(name)) {
    return "Male";
  } else {
    // Return an array containing both "Male" and "Female"
    return ["Male", "Female"];
  }
}

function randomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function generateNepaliName(girlNames, boyNames) {
  // Randomly choose between girl and boy names
  const isGirlName = Math.random() < 0.5;
  const availableNames = isGirlName ? girlNames : boyNames;

  // Randomly select a name from the chosen gender's list
  return randomItem(availableNames);
}

(async () => {
  const browser = await puppeteer.launch({ headless: false, timeout: 60000 });
  const page = await browser.newPage();

  // Number of submissions you want to make
  const numSubmissions = 100;

  for (let i = 0; i < numSubmissions; i++) {
    // Generate random data for each submission
    const name = generateNepaliName(girlNames, boyNames);
    const age = Math.floor(Math.random() * (28 - 18 + 1)) + 18;
    const selectedGender = assignGender(name, girlNames, boyNames);

    await page.goto(
      "https://docs.google.com/forms/d/e/1FAIpQLSdCVPAZ5-uRw72TfUgdGMOW0E1E-cUgaygnKowJe1EgcmXzJQ/viewform"
    );

    await page.waitForNavigation();

    //1. Fill out the name field
    const nameInputSelector = 'input[aria-labelledby="i1"]';
    await page.type(nameInputSelector, name);

    //2. Fill out the age field with a random age between 18 and 60
    const ageInputSelector = 'input[aria-labelledby="i5"]';
    await page.type(ageInputSelector, age.toString());

    // 3. Click the radio button corresponding to the selected gender
    if (Array.isArray(selectedGender)) {
      // Handle the case when it's an array containing both "Male" and "Female"
      // You can randomly choose one gender from the array if needed.
      const randomGender =
        selectedGender[Math.floor(Math.random() * selectedGender.length)];
      console.log(randomGender); // This will be either "Male" or "Female"
    } else {
      // Handle the case when it's a single gender ("Male" or "Female")
      console.log(selectedGender);
    }
    //3 till here

    //4. Select a random occupation from the array
    const randomOccupation =
      occupations[Math.floor(Math.random() * occupations.length)];

    //4. Fill the input field with the random occupation
    await page.type('input[aria-labelledby="i25"]', randomOccupation);

    //4 till here

    //5. Select how they knew about cryptocurrencies
    const valuesToSelect = [
      "News",
      "Articles",
      "Blogs",
      "Social Media",
      "From Friends or Family",
      "Online Videos or YouTube",
      "Academic Research",
      "Other",
    ];

    // Define the maximum number of checkboxes to select
    const maxCheckboxesToSelect = Math.floor(Math.random() * 7) + 1;

    // Shuffle the values randomly
    const shuffledValues = [...valuesToSelect].sort(() => Math.random() - 0.5);

    // Take a subset of values to select
    const valuesToSelectRandomly = shuffledValues.slice(
      0,
      maxCheckboxesToSelect
    );

    // Loop through the selected values and check the corresponding checkboxes
    for (const value of valuesToSelectRandomly) {
      // Construct the selector based on the value
      const checkboxSelector = `div[aria-label="${value}"]`;

      // Wait for the checkbox to be visible and click it
      await page.waitForSelector(checkboxSelector, { visible: true });
      await page.click(checkboxSelector);
    }
    //5 number till here

    //6. Rate knowledge about cryptocurrencies (1 to 5)
    const knowledgeRating = Math.floor(Math.random() * 5) + 1; // Generate a random rating between 1 and 5

    // Find all label elements
    const labelElements = await page.$$(".T5pZmf");

    // Click on a random label element based on the generated rating
    await labelElements[knowledgeRating - 1].click();

    //6 number till here

    //7. Select the parent container of cryptocurrency checkboxes
    // Define the list of cryptocurrency options
    const cryptoOptions = [
      "Bitcoin",
      "Ethereum",
      "Ripple",
      "Litecoin",
      "Other",
    ];

    // Define the maximum number of checkboxes to select
    const maxCheckboxesToSelectCrypto = Math.floor(Math.random() * 4) + 1;

    // Shuffle the values randomly
    const shuffledValuesCrypto = [...cryptoOptions].sort(
      () => Math.random() - 0.5
    );

    // Take a subset of values to select
    const valuesToSelectRandomlyCrypto = shuffledValuesCrypto.slice(
      0,
      maxCheckboxesToSelectCrypto
    );

    // Loop through the selected values and check the corresponding checkboxes
    for (const value of valuesToSelectRandomlyCrypto) {
      // Construct the selector based on the value
      const checkboxSelector = `div[aria-label="${value}"]`;

      // Wait for the checkbox to be visible and click it
      await page.waitForSelector(checkboxSelector, { visible: true });
      await page.click(checkboxSelector);
    }

    //7 number till here

    //8. Define the possible purposes and their corresponding aria-label numbers
    const purposeOptions = {
      Investment: "i86",
      "Purchasing goods or services": "i89",
      "Sending Money": "i92",
      "Speculation (Buying and selling them at higher price)": "i95",
    };

    // Select a random purpose
    const selectedPurpose = randomItem(Object.keys(purposeOptions));

    // Get the corresponding aria-label number for the selected purpose
    const ariaLabelNumberPurpose = purposeOptions[selectedPurpose];

    // Construct the selector based on the aria-label number
    const selectorPurpose = `label[for="${ariaLabelNumberPurpose}"]`;

    // Wait for the label (radio button) to appear and click it
    await page.waitForSelector(selectorPurpose, {
      visible: true,
      timeout: 30000,
    });
    await page.click(selectorPurpose);

    //8 till here

    //9. Define the possible reasons and their corresponding aria-label numbers
    const reasonOptionsCrypto = {
      "Lack of understanding or knowledge": "i106",
      "Security concerns": "i109",
      "Uncertainty about how to use them": "i112",
      "Worries about potential risks": "i115",
      "Not interested in cryptocurrencies": "i118",
      "Lack of access to necessary technology": "i121",
      "Legal concerns": "i124",
      "Trust issues with cryptocurrency platforms": "i127",
      Other: "i130",
    };
    // Create an array of reasons to select (you can randomize this array if needed)
    const selectedReasons = [
      "Lack of understanding or knowledge",
      "Security concerns",
      "Uncertainty about how to use them",
      "Worries about potential risks",
      "Not interested in cryptocurrencies",
      "Lack of access to necessary technology",
      "Legal concerns",
      "Trust issues with cryptocurrency platforms",
    ];
    // Loop through the selected reasons and click the corresponding checkboxes
    for (const selectedReason of selectedReasons) {
      const ariaLabelNumber = reasonOptionsCrypto[selectedReason];
      const selectorReason = `label[for="${ariaLabelNumber}"]`;
      await page.waitForSelector(selectorReason, {
        visible: true,
        timeout: 30000,
      });
      await page.click(selectorReason);
    }

    //9 till here

    //10. Check awareness of regulatory framework
    const yesOptionId = "i137";
    const noOptionId = "i140";

    // Construct the selector based on the selected option (Yes or No)
    const selectedOptionAware = Math.random() < 0.5 ? "Yes" : "No";
    const optionId = selectedOptionAware === "Yes" ? yesOptionId : noOptionId;
    const selectorAware = `label[for="${optionId}"]`;

    // Wait for the label (radio button) to appear, with a timeout of 30 seconds
    await page.waitForSelector(selectorAware, {
      visible: true,
      timeout: 30000,
    });

    // Click the radio button (associated label)
    await page.click(selectorAware);
    //10 till here

    //11. Define the aria-label-based IDs for the options
    const yesOptionIdLegalize = "i147";
    const noOptionIdLegalize = "i150";
    const maybeOptionId = "i153";

    // Qn 11 Define the available options
    const legalizeCryptoOptions = ["Yes", "No", "Maybe"];

    // Randomly select an option
    const selectedLegalizeCrypto = randomItem(legalizeCryptoOptions);

    // Construct the selector based on the selected option
    let selectedOptionId;
    switch (selectedLegalizeCrypto) {
      case "Yes":
        selectedOptionId = yesOptionIdLegalize;
        break;
      case "No":
        selectedOptionId = noOptionIdLegalize;
        break;
      case "Maybe":
        selectedOptionId = maybeOptionId;
        break;
      default:
        throw new Error("Invalid option");
    }

    const selectorLegalizeCrypto = `label[for="${selectedOptionId}"]`;

    // Wait for the label (radio button) to appear, with a timeout of 30 seconds
    await page.waitForSelector(selectorLegalizeCrypto, {
      visible: true,
      timeout: 30000,
    });

    // Click the radio button (associated label)
    await page.click(selectorLegalizeCrypto);

    //11 till here

    //12. Define the potential benefits and their corresponding aria-label numbers
    const benefits = [
      "Increased financial inclusion",
      "Facilitating remittances",
      "Attracting foreign investment",
      "Economic growth and innovation",
      "Other",
    ];
    // Define the maximum number of checkboxes to select (e.g., 3 at random)
    const maxCheckboxesToSelectBenefits = Math.floor(Math.random() * 4) + 1;

    // Shuffle the values randomly
    const shuffledValuesBenefits = [...benefits].sort(
      () => Math.random() - 0.5
    );

    // Take a subset of values to select
    const valuesToSelectRandomlyBenefits = shuffledValuesBenefits.slice(
      0,
      maxCheckboxesToSelectBenefits
    );

    // Loop through the selected values and check the corresponding checkboxes
    for (const value of valuesToSelectRandomlyBenefits) {
      // Construct the selector based on the value
      const checkboxSelector = `div[aria-label="${value}"]`;

      // Wait for the checkbox to be visible and click it
      await page.waitForSelector(checkboxSelector, { visible: true });
      await page.click(checkboxSelector);
    }

    //12 till here

    //13. Define the possible reasons and their corresponding aria-label numbers
    const reasonOptions = [
      "Volatility and price fluctuations",
      "Lack of consumer protection",
      "Money laundering and illegal activities",
      "Regulatory challenges",
    ];

    // Define the maximum number of checkboxes to select (e.g., 3 at random)
    const maxCheckboxesToSelectReasons = Math.floor(Math.random() * 4) + 1;

    // Shuffle the values randomly
    const shuffledValuesReasons = [...reasonOptions].sort(
      () => Math.random() - 0.5
    );

    // Take a subset of values to select
    const valuesToSelectRandomlyReasons = shuffledValuesReasons.slice(
      0,
      maxCheckboxesToSelectReasons
    );

    // Loop through the selected values and check the corresponding checkboxes
    for (const value of valuesToSelectRandomlyReasons) {
      // Construct the selector based on the value
      const checkboxSelector = `div[aria-label="${value}"]`;

      // Wait for the checkbox to be visible and click it
      await page.waitForSelector(checkboxSelector, { visible: true });
      await page.click(checkboxSelector);
    }

    //13 till here

    //14. qn How do you think the adoption of cryptocurrencies could impact Nepal's financial system?
    const positive = "i200";
    const negative = "i203";
    const unsure = "i206";

    const impact = ["Positive", "Negative", "Unsure"];

    const selectImpact = randomItem(impact);

    let selectedOptionIdImpact;
    switch (selectImpact) {
      case "Positive":
        selectedOptionIdImpact = positive;
        break;
      case "Negative":
        selectedOptionIdImpact = negative;
        break;
      case "Unsure":
        selectedOptionIdImpact = unsure;
        break;
      default:
        throw new Error("Invalid option");
    }

    const selectorImpact = `label[for="${selectedOptionIdImpact}"]`;

    try {
      await page.waitForSelector(selectorImpact, {
        visible: true,
        timeout: 30000,
      });
      await page.click(selectorImpact);
    } catch (error) {
      console.error(
        `Error clicking "${selectImpact}" option: ${error.message}`
      );
    }
    //14 till here

    //15. Are you familiar with the security concerns related to cryptocurrencies? What measures do you think should be taken to address the security concerns associated with cryptocurrencies? (Select all that apply)

    // Define the possible security concerns and their corresponding aria-label numbers
    const securityConcerns = [
      "Stronger regulation and oversight",
      "Improved cybersecurity practices",
      "Enhanced user education",
      "Development of secure wallet solutions",
      "Other",
    ];

    // Define the maximum number of checkboxes to select (e.g., 3 at random)
    const maxCheckboxesToSelectSecurity = Math.floor(Math.random() * 4) + 1;

    // Shuffle the values randomly
    const shuffledValuesSecurity = [...securityConcerns].sort(
      () => Math.random() - 0.5
    );

    // Take a subset of values to select
    const valuesToSelectRandomlySecurity = shuffledValuesSecurity.slice(
      0,
      maxCheckboxesToSelectSecurity
    );

    // Loop through the selected values and check the corresponding checkboxes
    for (const value of valuesToSelectRandomlySecurity) {
      // Construct the selector based on the value
      const checkboxSelector = `div[aria-label="${value}"]`;

      // Wait for the checkbox to be visible and click it
      await page.waitForSelector(checkboxSelector, { visible: true });
      await page.click(checkboxSelector);
    }

    //15 till here

    //16. Do you believe cryptocurrencies can contribute to financial inclusion in Nepal? If yes, what sectors could benefit from the use of cryptocurrencies

    // Define the possible sectors and their corresponding aria-label numbers
    const sectors = [
      "Banking and Financial Services",
      "Remittances",
      "Small and Medium-sized Enterprises (SMEs)",
      "Agriculture",
      "Healthcare",
      "Education",
      "Non-Profit Organizations",
      "Government Services",
      "Tourism",
      "Other",
    ];

    // Define the maximum number of checkboxes to select (e.g., 3 at random)
    const maxCheckboxesToSelectSectors =
      Math.floor(Math.random() * (sectors.length - 1)) + 1;

    // Shuffle the values randomly
    const shuffledValuesSectors = [...sectors].sort(() => Math.random() - 0.5);

    // Take a subset of values to select
    const valuesToSelectRandomlySectors = shuffledValuesSectors.slice(
      0,
      maxCheckboxesToSelectSectors
    );

    // Loop through the selected values and check the corresponding checkboxes
    for (const value of valuesToSelectRandomlySectors) {
      // Construct the selector based on the value
      const checkboxSelector = `div[aria-label="${value}"]`;

      // Wait for the checkbox to be visible and click it
      await page.waitForSelector(checkboxSelector, { visible: true });
      await page.click(checkboxSelector);
    }

    //16 till here

    //17. What role do you think cryptocurrencies can play in the remittance sector in Nepal?
    // Define the possible roles and their corresponding aria-label numbers
    const remittanceRoles = [
      "Faster and more efficient cross-border transactions",
      "Reduction in remittance fees and transaction costs",
      "Increased accessibility and convenience for remittance recipients",
      "Potential for bypassing intermediaries and direct peer-to-peer transfers",
      "Facilitation of remittances from unbanked individuals",
      "Other",
    ];

    // Define the maximum number of checkboxes to select (e.g., 3 at random)
    const maxCheckboxesToSelectRemittanceRoles =
      Math.floor(Math.random() * (remittanceRoles.length - 1)) + 1;

    // Shuffle the values randomly
    const shuffledValuesRemittanceRoles = [...remittanceRoles].sort(
      () => Math.random() - 0.5
    );

    // Take a subset of values to select
    const valuesToSelectRandomlyRemittanceRoles =
      shuffledValuesRemittanceRoles.slice(
        0,
        maxCheckboxesToSelectRemittanceRoles
      );

    // Loop through the selected values and check the corresponding checkboxes
    for (const value of valuesToSelectRandomlyRemittanceRoles) {
      // Construct the selector based on the value
      const checkboxSelector = `div[aria-label="${value}"]`;

      // Wait for the checkbox to be visible and click it
      await page.waitForSelector(checkboxSelector, { visible: true });
      await page.click(checkboxSelector);
    }

    //17 till here

    //18. Have you ever participated in any cryptocurrency-related discussions or forums?
    // Define the available options
    const yesOptionIdHave = "i291";
    const noOptionIdHave = "i294";
    const maybeOptionIdHave = "i297";
    const cryptoDiscussionOptions = ["Yes", "No", "Maybe"];

    // Randomly select an option
    const selectedCryptoDiscussionOption = randomItem(cryptoDiscussionOptions);

    // Construct the selector based on the selected option
    let selectedOptionIdHave;
    switch (selectedCryptoDiscussionOption) {
      case "Yes":
        selectedOptionIdHave = yesOptionIdHave;
        break;
      case "No":
        selectedOptionIdHave = noOptionIdHave;
        break;
      case "Maybe":
        selectedOptionIdHave = maybeOptionIdHave;
        break;
      default:
        throw new Error("Invalid option");
    }

    const selectorCryptoDiscussion = `label[for="${selectedOptionIdHave}"]`;

    // Wait for the label (radio button) to appear, with a timeout of 30 seconds
    await page.waitForSelector(selectorCryptoDiscussion, {
      visible: true,
      timeout: 30000,
    });

    // Click the radio button (associated label)
    await page.click(selectorCryptoDiscussion);

    //18 till here

    //19. What are the main factors that would influence your decision to invest in cryptocurrencies?
    // Define the possible factors and their corresponding aria-label numbers
    const investmentFactors = [
      "Price Trends",
      "Regulatory Environment",
      "Market Research",
      "Recommendations",
      "Past Experience",
      "Market Value",
    ];

    // Define the maximum number of checkboxes to select (e.g., 3 at random)
    const maxCheckboxesToSelectFactors =
      Math.floor(Math.random() * (investmentFactors.length - 1)) + 1;

    // Shuffle the values randomly
    const shuffledValuesFactors = [...investmentFactors].sort(
      () => Math.random() - 0.5
    );

    // Take a subset of values to select
    const valuesToSelectRandomlyFactors = shuffledValuesFactors.slice(
      0,
      maxCheckboxesToSelectFactors
    );

    // Loop through the selected values and check the corresponding checkboxes
    for (const value of valuesToSelectRandomlyFactors) {
      // Construct the selector based on the value
      const checkboxSelector = `div[aria-label="${value}"]`;

      // Wait for the checkbox to be visible and click it
      await page.waitForSelector(checkboxSelector, { visible: true });
      await page.click(checkboxSelector);
    }

    //19 till here

    //20. Would you be interested in learning more about cryptocurrencies through educational programs or workshops?
    const yesOptionIdWould = "i327";
    const noOptionIdWould = "i330";
    const maybeOptionIdWould = "i333";
    const interestedOptions = ["Yes", "No", "Maybe"];

    // Randomly select an option
    const selectedInterestedOption = randomItem(interestedOptions);

    // Construct the selector based on the selected option
    let interestedId;
    switch (selectedInterestedOption) {
      case "Yes":
        interestedId = yesOptionIdWould;
        break;
      case "No":
        interestedId = noOptionIdWould;
        break;
      case "Maybe":
        interestedId = maybeOptionIdWould;
        break;
      default:
        throw new Error("Invalid option");
    }

    const selectorInterested = `label[for="${interestedId}"]`;

    // Wait for the label (radio button) to appear, with a timeout of 30 seconds
    await page.waitForSelector(selectorInterested, {
      visible: true,
      timeout: 30000,
    });

    // Click the radio button (associated label)
    await page.click(selectorInterested);

    //20 till here

    // Wait for the submit button to appear
    await page.waitForSelector('div[jsname="M2UYVd"]');

    // Click the submit button
    await page.click('div[jsname="M2UYVd"]');

    // Wait for a few seconds between submissions
    await page.waitForTimeout(3000);
  }

  await browser.close();
})();
