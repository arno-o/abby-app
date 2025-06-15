export default function FourStepProgress(props: { step: number }) {
    return (
        <div id="container" className="flex items-center gap-3">
            <div className={`content-none h-4 rounded-full transition-all ${props.step === 0 ? 'w-10 bg-black' : 'w-4 bg-stone-600'}`}></div>
            <div className={`content-none h-4 rounded-full transition-all ${props.step === 1 ? 'w-10 bg-black' : 'w-4 bg-stone-600'}`}></div>
            <div className={`content-none h-4 rounded-full transition-all ${props.step === 2 ? 'w-10 bg-black' : 'w-4 bg-stone-600'}`}></div>
            <div className={`content-none h-4 rounded-full transition-all ${props.step === 3 ? 'w-10 bg-black' : 'w-4 bg-stone-600'}`}></div>
        </div>
    );
}