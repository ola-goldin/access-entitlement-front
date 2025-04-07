import classes from './ui-components.module.css'
export default function NumberBadge({ number }: { number: number }) {
    return (
        <div className={`w-[2.25rem] h-[2.25rem] rounded-full   font-medium text-[1.5rem] leading-[1] text-right flex items-center justify-center ${classes.numberBadge}`}>
            {number}
        </div>
    );
}
