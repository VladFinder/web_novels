// useSoulStyle.js
import { computed } from "vue";

// ✅ Images
import dreamy from "@/assets/emotion_avatars/dreamy.png";
import happy from "@/assets/emotion_avatars/happy.png";
import irritated from "@/assets/emotion_avatars/irritated.png";
import sad from "@/assets/emotion_avatars/sad.png";
import calm from "@/assets/emotion_avatars/calm.png";
import worried from "@/assets/emotion_avatars/worried.png";

// ✅ Image mapping
const imageMap = {
    1: happy,
    2: sad,
    3: calm,
    4: worried,
    5: irritated,
    6: dreamy,
};

// ✅ Background mapping (could be solid colors or gradients)
const backgroundMap = {
    1: "radial-gradient(50% 50% at 50% 50%, #FCF8C8 18.69%, #F7CF5A 53.29%, #E89526 91.27%)", // happy
    2: "radial-gradient(52.55% 52.55% at 50% 50%, #A3D7F2 19.71%, #86AFFB 45.67%, #3171CC 100%)", // sad
    3: "radial-gradient(58.12% 58.12% at 50% 50%, #F2FFA0 33.25%, #B5FF7D 76.2%, #9AD335 100%)", // calm
    4: "radial-gradient(65.05% 65.05% at 50% 50%, #DA93CD 10.23%, #965FDD 46.33%, #5F2C85 100%)", // worried
    5: "radial-gradient(65.05% 65.05% at 50% 50%, #A70000 10.23%, #5F0000 46.33%, #2B0505 91.27%)", // irritated
    6: "radial-gradient(54.74% 54.74% at 50% 50%, #FCFCFC 35.67%, #FCB2FF 75.29%, #FB99FF 100%)", // dreamy
};

const buttonColorMap = {
    1: "#FFCC00",
    2: "#0050D2",
    3: "#3CD400",
    4: "#91008F",
    5: "#70080A",
    6: "#F50BE6",
};

export function useSoulStyle(selectionId) {
    const imageSrc = computed(() => {

        return imageMap[selectionId] ? imageMap[selectionId] : calm; // fallback
    });

    const backgroundStyle = computed(() => {
        return { background: backgroundMap[selectionId] || "radial-gradient(54.74% 54.74% at 50% 50%, #FCFCFC 35.67%, #FCB2FF 75.29%, #FB99FF 100%)" };
    });

    const buttonColor = computed(() => {
        return buttonColorMap[selectionId] || "#F50BE6";
    })

    return { imageSrc, backgroundStyle, buttonColor };
}
