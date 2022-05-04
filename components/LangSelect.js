import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { RiTranslate2 } from 'react-icons/ri'

function SelectLanguageCookie() {
    const router = useRouter();
    function SetLanguage(lang) {
        Cookies.set('lang', lang)
        router.reload()
    }
    return (
        <>
            <div className="tooltip tooltip-open tooltip-bottom" data-tip="This will save to your Cookie and never ask">
                <div className="dropdown">
                    <label tabIndex="0" className="btn m-1">Set Language</label>
                    <ul tabIndex="0" className="dropdown-content menu p-2 shadow-md bg-base-200 rounded-box w-52">
                        <li><p onClick={() => SetLanguage('en')}>English</p></li>
                        <li><p onClick={() => SetLanguage('ja')}>日本語</p></li>
                    </ul>
                </div>
            </div>
            <div className="pt-2" />
        </>
    )
}

function SelectViewPage() {
    const router = useRouter();
    function ViewLanguage(lang) {
        let accessurl = router.pathname;
        accessurl = accessurl.substring(1);
        // https://www.fenet.jp/dotnet/column/tool/6690/
        const nextslash = accessurl.indexOf('/');
        const arrangedurl = "/" + lang + "/" + accessurl.substring(nextslash + 1)
        console.log("[SelectViewPage] Arranged: " + arrangedurl)
        router.push(arrangedurl)
    }
    return (
        <>
            <div className="dropdown">
                <label tabIndex="0" className="btn btn-sm btn-outline m-1"><RiTranslate2 /><p className="py-1" />Language</label>
                <ul tabIndex="0" className="dropdown-content menu p-3 shadow-md bg-base-200 rounded-box w-52">
                    <li><p onClick={() => ViewLanguage('en')}>English</p></li>
                    <li><p onClick={() => ViewLanguage('ja')}>日本語</p></li>
                </ul>
            </div>
        </>
    )
}

export default function LangSelect() {
    if (!Cookies.get('lang')) {
        return (
            <>
                <SelectLanguageCookie />
            </>
        )
    } else {
        return (
            <>
                <SelectViewPage />
            </>
        )
    }
}