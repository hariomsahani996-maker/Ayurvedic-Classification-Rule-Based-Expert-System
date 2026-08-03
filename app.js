function diagnose() {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;

    let vata = 0;
    let pitta = 0;
    let kapha = 0;

    // ---------- VATA ----------
    if(document.getElementById("drySkin").value=="Yes") vata++;
    if(document.getElementById("constipation").value=="Yes") vata++;
    if(document.getElementById("cold").value=="Yes") vata++;
    if(document.getElementById("anxiety").value=="Yes") vata++;
    if(document.getElementById("joint").value=="Yes") vata++;

    // ---------- PITTA ----------
    if(document.getElementById("heat").value=="Yes") pitta++;
    if(document.getElementById("digestion").value=="Yes") pitta++;

    // ---------- KAPHA ----------
    if(document.getElementById("weight").value=="Yes") kapha++;
    if(document.getElementById("lazy").value=="Yes") kapha++;
    if(document.getElementById("sleep").value=="Yes") kapha++;

    // Find Highest Score
    let dosha = "";
    let description = "";
    let diet = "";
    let avoid = "";

    if(vata>=pitta && vata>=kapha){

        dosha="🌬️ VATA DOSHA";

        description="Your body is dominated by Vata.";

        diet="Warm soup, milk, rice, ghee, banana.";

        avoid="Cold drinks, dry food.";

    }

    else if(pitta>=vata && pitta>=kapha){

        dosha="🔥 PITTA DOSHA";

        description="Your body is dominated by Pitta.";

        diet="Coconut water, cucumber, watermelon.";

        avoid="Spicy and oily food.";

    }

    else{

        dosha="🌿 KAPHA DOSHA";

        description="Your body is dominated by Kapha.";

        diet="Green vegetables, ginger tea.";

        avoid="Ice cream, sweets, fried food.";

    }

    localStorage.setItem("name",name);
    localStorage.setItem("age",age);
    localStorage.setItem("gender",gender);

    localStorage.setItem("vata",vata);
    localStorage.setItem("pitta",pitta);
    localStorage.setItem("kapha",kapha);

    localStorage.setItem("dosha",dosha);
    localStorage.setItem("description",description);
    localStorage.setItem("diet",diet);
    localStorage.setItem("avoid",avoid);

    window.location="result.html";

}