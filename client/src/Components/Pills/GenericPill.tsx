import { View } from "react-native";

function GenericPill({children} : {children: React.ReactNode}) {

    return (
        <View className="bg-slate-200 flex justify-center items-center py-1 w-60 h-12 rounded-full my-1 overflow-hidden">
            {children}
        </View>
    )
}

export default GenericPill;