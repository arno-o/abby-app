import NavBar from "~/components/NavBar";

import { suggestionItems, chosenSuggestionItems } from "../data/data";
import SuggestionItem from "~/components/SuggestionItem";
import ChosenSuggestion from "~/components/ChosenSuggestion";
import AbbyArrowRight from "~/components/icons/AbbyArrowRight";

const Community = () => {
    return (
        <>
            <div className="px-4 py-8 bg-abby-purple">
                <h2 className="text-4xl mb-4">Give Suggestion</h2>
                <form action="">
                    <div className="flex flex-col">
                        <label htmlFor="suggestion" className="text-lg pb-2">Abby should organise a..</label>
                        <div className="relative flex items-center">
                            <input placeholder="Your suggestion..." id="suggestion" name="suggestion" type="text" className="p-4 pr-12 border-3 text-lg w-full" />
                            <div className="absolute right-0 pr-5 flex items-center pointer-events-none">
                                <AbbyArrowRight size={25} />
                            </div>
                        </div>
                    </div>
                </form >
            </div >

            <div className="px-4 py-8">
                <h2 className="text-3xl mb-4">Weekly suggestions</h2>
                {
                    suggestionItems.items.sort((a, b) => b.count - a.count).map(item => (
                        <SuggestionItem key={item.count} title={item.title} count={item.count} />
                    ))
                }
            </div>

            <div className="px-4 py-8">
                <h2 className="text-3xl mb-2">Brought to life</h2>
                <p className="text-2xl text-stone-500">Suggestions Abby is bringing to life</p>
                {
                    chosenSuggestionItems.items.map((item) => (
                        <ChosenSuggestion key={item.title} day={item.day} time={item.time} title={item.title} location={item.location}/>
                    ))
                }
            </div>
            <NavBar />
        </>
    );
}

export default Community;