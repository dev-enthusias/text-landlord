export default function ChatFooter() {
  return (
    <footer className="flex gap-x-3 px-4 lg:gap-x-7 lg:px-7">
      <button className="text-2xl">🙂</button>
      <button>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.3511 10.5486V19.4365"
            stroke="#E29A13"
            stroke-width="1.81971"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.8026 14.9925H10.9062"
            stroke="#E29A13"
            stroke-width="1.81971"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.0346 2.87268H9.66574C5.7028 2.87268 3.21875 5.67757 3.21875 9.64827V20.3599C3.21875 24.3306 5.69125 27.1355 9.66574 27.1355H21.0346C25.0091 27.1355 27.4816 24.3306 27.4816 20.3599V9.64827C27.4816 5.67757 25.0091 2.87268 21.0346 2.87268Z"
            stroke="#130F26"
            stroke-width="1.81971"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <input
        type="text"
        className="custom-shadow-sm w-full rounded-lg border-b-2 border-b-transparent bg-white px-7 py-2.5 text-sm text-[#8F8F8F] focus:border-b-gold focus:outline-none"
        placeholder="Say Something..."
      />
      <button>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.323 27.1356V23.3009"
            stroke="#130F26"
            stroke-width="1.81971"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.3185 18.4592V18.4592C12.5972 18.4592 10.3906 16.2437 10.3906 13.5097V7.82345C10.3906 5.08948 12.5972 2.87268 15.3185 2.87268C18.0411 2.87268 20.2464 5.08948 20.2464 7.82345V13.5097C20.2464 16.2437 18.0411 18.4592 15.3185 18.4592Z"
            stroke="#E29A13"
            stroke-width="1.81971"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M25.0275 13.5491C25.0275 18.934 20.683 23.2999 15.3217 23.2999C9.96165 23.2999 5.61719 18.934 5.61719 13.5491"
            stroke="#130F26"
            stroke-width="1.81971"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </footer>
  );
}
