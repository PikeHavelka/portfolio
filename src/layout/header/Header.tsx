import "./header.css"
import PavelHavelka from "../../images/PavelHavelka.png"
import Navbar from "../navbar/Navbar"

function Header() {
  return (
    <header>
      <Navbar />

      <div className="introduce container">
        <div className="text-wrapper">
          <div className="title">
            <h1>Pavel Havelka</h1>
            <h3><span>- Frontend developer -</span></h3>
          </div>

          <div className="about-me">
            <p className="text">Ahoj, mé jméno je Pavel a pocházím z Kladna. Zajímám se o frontend technologie se zaměřením na framework React.</p>
          </div>
        </div>

        <img className="my-image" src={PavelHavelka} alt="fotka tvůrce" />

        <div className="tech-lang-wrapper">
          <div className="icons">
            <a title="HTML" href="https://developer.mozilla.org/en-US/docs/Web/HTML"><svg className="icon html-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><linearGradient id="SNASnMitCxQrIYk4GDibta" x1="18.208" x2="34.159" y1="2.413" y2="46.236" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f09701" /><stop offset="1" stopColor="#e36001" /></linearGradient><path fill="url(#SNASnMitCxQrIYk4GDibta)" d="M7.192,7.176l2.627,29.77c0.109,1.237,0.97,2.28,2.164,2.621l10.643,3.041	c0.898,0.257,1.849,0.257,2.747,0l10.643-3.041c1.194-0.341,2.055-1.383,2.164-2.621l2.627-29.77C40.911,6.006,39.99,5,38.816,5	H9.184C8.01,5,7.089,6.006,7.192,7.176z" /><path fill="#f09601" d="M24,8v31.9l9.876-2.822c0.797-0.228,1.371-0.924,1.443-1.749l2.286-26.242	C37.656,8.502,37.196,8,36.609,8H24z" /><path fill="#fff" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5L24,25z M32.9,17l0.3-4H24v4H32.9z" /><path fill="#d6e0e9" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z" /><path d="M33.2,13l-0.3,4H24h-4.9l0.3,4H24h8.6l-0.7,11.5L24,35.1l-7.9-2.6L15.7,27h4l0.2,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-8.4 l-0.7-12H24H33.2 M34.278,12H33.2H24h-9.1h-1.06l0.062,1.058l0.7,12L14.657,26h-0.032l0.078,1.073l0.4,5.5l0.049,0.668 l0.636,0.209l7.9,2.6L24,36.153l0.313-0.103l7.9-2.6l0.644-0.212l0.041-0.677l0.7-11.5L33.663,20H32.6H24h-3.672l-0.15-2H24h8.9 h0.928l0.069-0.925l0.3-4L34.278,12L34.278,12z M20.623,26H24h3.331l-0.185,2.769L24,29.843l-3.156-1.077l-0.148-1.846L20.623,26 L20.623,26z" opacity=".05" /><path d="M33.2,13l-0.3,4H24h-4.9l0.3,4H24h8.6l-0.7,11.5L24,35.1l-7.9-2.6L15.7,27h4l0.2,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-8.4 l-0.7-12H24H33.2 M33.739,12.5H33.2H24h-9.1h-0.53l0.031,0.529l0.7,12l0.027,0.471H15.6H24h3.866l-0.242,3.634L24,30.372 l-3.628-1.239l-0.174-2.173l-0.037-0.46H19.7h-4h-0.538l0.039,0.536l0.4,5.5l0.024,0.334l0.318,0.105l7.9,2.6L24,35.626 l0.156-0.051l7.9-2.6l0.322-0.106l0.021-0.339l0.7-11.5l0.032-0.53H32.6H24h-4.136l-0.225-3H24h8.9h0.464l0.035-0.463l0.3-4 L33.739,12.5L33.739,12.5z" opacity=".07" /></svg></a>

            <a title="CSS" href="https://developer.mozilla.org/en-US/docs/Web/CSS"><svg className="icon css-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" /><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z" /><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z" /><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z" /></svg></a>

            <a title="JavaScript" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><svg className="icon js-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px" baseProfile="basic"><path fill="#f7df1e" d="M6,42V6h36v36H6z" /><path fill="#000001" d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z" /></svg></a>

            <a title="TypeScript" href="https://www.typescriptlang.org/docs/"><svg className="icon ts-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><linearGradient id="O2zipXlwzZyOse8_3L2yya" x1="15.189" x2="32.276" y1="-.208" y2="46.737" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2aa4f4" /><stop offset="1" stopColor="#007ad9" /></linearGradient><rect width="36" height="36" x="6" y="6" fill="url(#O2zipXlwzZyOse8_3L2yya)" /><polygon fill="#fff" points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264" /><path fill="#fff" d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986	c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92	c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z" /></svg></a>

            <a title="SASS & SCSS " href="https://sass-lang.com/"><svg className="icon sass-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#f06292" d="M39.867,25.956c-1.538,0.008-2.87,0.377-3.986,0.928c-0.408-0.815-0.822-1.532-0.891-2.065	c-0.081-0.622-0.175-0.994-0.077-1.735c0.098-0.741,0.527-1.791,0.521-1.87c-0.006-0.079-0.096-0.456-0.983-0.463	c-0.887-0.006-1.646,0.171-1.735,0.405c-0.089,0.234-0.26,0.761-0.366,1.311c-0.155,0.804-1.771,3.673-2.688,5.173	c-0.3-0.586-0.555-1.102-0.608-1.51c-0.081-0.622-0.175-0.994-0.077-1.735c0.098-0.741,0.527-1.791,0.521-1.87	c-0.006-0.079-0.096-0.456-0.983-0.463c-0.887-0.006-1.646,0.171-1.735,0.405c-0.089,0.234-0.185,0.781-0.366,1.311	c-0.182,0.529-2.329,5.314-2.892,6.555c-0.287,0.632-0.536,1.14-0.712,1.486c-0.001-0.001-0.001-0.002-0.001-0.002	s-0.011,0.023-0.029,0.062c-0.151,0.295-0.24,0.458-0.24,0.458s0.001,0.002,0.003,0.006c-0.12,0.217-0.248,0.418-0.311,0.418	c-0.044,0-0.133-0.577,0.019-1.369c0.32-1.66,1.087-4.248,1.08-4.338c-0.004-0.046,0.143-0.497-0.501-0.733	c-0.626-0.229-0.849,0.153-0.906,0.154c-0.055,0.001-0.096,0.135-0.096,0.135s0.697-2.911-1.33-2.911	c-1.268,0-3.024,1.387-3.889,2.644c-0.546,0.298-1.715,0.936-2.954,1.617c-0.476,0.262-0.962,0.529-1.423,0.783	c-0.031-0.035-0.063-0.069-0.095-0.104c-2.459-2.623-7.003-4.478-6.811-8.005c0.07-1.282,0.516-4.658,8.733-8.752	c6.731-3.354,12.12-2.431,13.051-0.386c1.33,2.923-2.88,8.354-9.87,9.138c-2.663,0.299-4.066-0.734-4.415-1.118	c-0.367-0.405-0.422-0.423-0.559-0.347c-0.223,0.124-0.082,0.481,0,0.694c0.209,0.543,1.065,1.506,2.525,1.986	c1.285,0.422,4.412,0.653,8.193-0.81c4.236-1.638,7.543-6.196,6.571-10.005c-0.988-3.874-7.412-5.148-13.492-2.988	C12.44,9.332,8.523,11.35,5.706,13.984c-3.349,3.132-3.883,5.859-3.663,6.998c0.782,4.048,6.361,6.684,8.595,8.637	c-0.11,0.061-0.214,0.118-0.308,0.17c-1.12,0.554-5.373,2.78-6.437,5.131c-1.207,2.667,0.192,4.581,1.118,4.839	c2.869,0.798,5.813-0.638,7.396-2.998c1.582-2.359,1.389-5.432,0.663-6.834c-0.009-0.017-0.019-0.034-0.028-0.052	c0.289-0.171,0.584-0.345,0.876-0.517c0.57-0.335,1.13-0.647,1.615-0.911c-0.272,0.744-0.471,1.637-0.574,2.926	c-0.122,1.514,0.499,3.471,1.311,4.241c0.358,0.339,0.788,0.347,1.06,0.347c0.945,0,1.376-0.786,1.851-1.716	c0.582-1.14,1.099-2.468,1.099-2.468s-0.648,3.586,1.118,3.586c0.644,0,1.291-0.835,1.58-1.26c0.001,0.005,0.001,0.007,0.001,0.007	s0.017-0.028,0.05-0.083c0.067-0.102,0.105-0.167,0.105-0.167s0.001-0.007,0.003-0.019c0.259-0.449,0.833-1.473,1.693-3.162	c1.112-2.182,2.178-4.916,2.178-4.916s0.099,0.668,0.424,1.774c0.191,0.65,0.597,1.369,0.918,2.059	c-0.258,0.358-0.416,0.563-0.416,0.563s0.001,0.004,0.004,0.011c-0.206,0.274-0.437,0.569-0.679,0.857	c-0.878,1.045-1.923,2.239-2.063,2.583c-0.165,0.406-0.126,0.704,0.193,0.945c0.233,0.175,0.647,0.203,1.08,0.174	c0.789-0.053,1.343-0.249,1.617-0.368c0.427-0.151,0.924-0.388,1.39-0.731c0.861-0.633,1.38-1.538,1.33-2.738	c-0.028-0.661-0.238-1.316-0.505-1.934c0.078-0.112,0.156-0.226,0.235-0.34c1.357-1.984,2.41-4.164,2.41-4.164	s0.099,0.668,0.424,1.774c0.164,0.559,0.489,1.17,0.781,1.768c-1.276,1.037-2.067,2.242-2.342,3.032	c-0.508,1.462-0.11,2.124,0.636,2.275c0.338,0.068,0.816-0.087,1.175-0.239c0.447-0.148,0.984-0.395,1.486-0.764	c0.861-0.633,1.689-1.519,1.639-2.718c-0.023-0.546-0.171-1.088-0.372-1.608c1.082-0.451,2.482-0.701,4.266-0.493	c3.827,0.447,4.577,2.836,4.434,3.836c-0.144,1-0.946,1.55-1.215,1.716c-0.268,0.166-0.35,0.224-0.328,0.347	c0.033,0.179,0.157,0.173,0.386,0.134c0.315-0.053,2.009-0.813,2.082-2.659C46.089,28.509,43.844,25.935,39.867,25.956z M10.37,35.9	c-1.268,1.383-3.038,1.905-3.798,1.465c-0.82-0.475-0.495-2.511,1.06-3.979c0.948-0.894,2.172-1.718,2.984-2.225	c0.185-0.111,0.456-0.274,0.786-0.472c0.055-0.031,0.086-0.048,0.086-0.048l-0.001-0.002c0.064-0.038,0.129-0.077,0.196-0.118	C12.25,32.61,11.701,34.449,10.37,35.9z M19.605,29.623c-0.441,1.076-1.365,3.83-1.928,3.682c-0.483-0.127-0.777-2.22-0.096-4.28	c0.342-1.037,1.074-2.276,1.504-2.757c0.692-0.774,1.454-1.027,1.639-0.713C20.959,25.955,19.882,28.948,19.605,29.623z M27.234,33.263c-0.187,0.098-0.359,0.159-0.438,0.112c-0.059-0.035,0.077-0.164,0.077-0.164s0.954-1.027,1.33-1.494	c0.219-0.272,0.472-0.595,0.748-0.955c0.002,0.036,0.003,0.072,0.003,0.107C28.952,32.099,27.764,32.929,27.234,33.263z M33.111,31.923c-0.14-0.099-0.116-0.42,0.343-1.421c0.18-0.393,0.592-1.054,1.306-1.686c0.083,0.26,0.133,0.509,0.132,0.741	C34.883,31.105,33.779,31.683,33.111,31.923z" /></svg></a>

            <a title="React" href="https://react.dev/"><svg className="icon react-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="48px" height="48px"><defs><linearGradient x1="32" y1="25.213" x2="32" y2="36.722" gradientUnits="userSpaceOnUse" id="color-1"><stop offset="0" stopColor="#6dc7ff"></stop><stop offset="1" stopColor="#009dff"></stop></linearGradient><linearGradient x1="32" y1="7.426" x2="32" y2="53.44" gradientUnits="userSpaceOnUse" id="color-2"><stop offset="0" stopColor="#009dff"></stop><stop offset="1" stopColor="#009dff"></stop></linearGradient></defs><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(4,4)"><circle cx="32" cy="32" r="6" fill="url(#color-1)"></circle><path d="M58,32c0,-3.758 -4.243,-7.017 -10.853,-8.992c0.221,-1.031 0.407,-2.045 0.524,-3.015c0.657,-5.483 -0.483,-9.323 -3.211,-10.813c-2.729,-1.489 -6.574,-0.372 -10.831,3.146c-0.544,0.449 -1.087,0.938 -1.629,1.45c-0.542,-0.513 -1.085,-1.001 -1.629,-1.45c-4.257,-3.518 -8.104,-4.634 -10.831,-3.146c-2.728,1.489 -3.868,5.329 -3.211,10.813c0.116,0.971 0.303,1.984 0.524,3.015c-6.61,1.975 -10.853,5.234 -10.853,8.992c0,3.758 4.243,7.017 10.853,8.992c-0.221,1.031 -0.407,2.045 -0.524,3.015c-0.657,5.483 0.483,9.323 3.211,10.813c0.789,0.431 1.67,0.643 2.628,0.643c2.357,0 5.177,-1.287 8.203,-3.788c0.544,-0.449 1.087,-0.938 1.629,-1.45c0.542,0.513 1.085,1.001 1.629,1.45c3.026,2.501 5.846,3.788 8.203,3.788c0.958,0 1.84,-0.213 2.628,-0.643c2.728,-1.489 3.868,-5.329 3.211,-10.813c-0.116,-0.971 -0.303,-1.984 -0.524,-3.015c6.61,-1.975 10.853,-5.234 10.853,-8.992zM34.902,13.866c3.53,-2.917 6.665,-3.987 8.599,-2.931c1.934,1.055 2.729,4.27 2.184,8.818c-0.105,0.879 -0.273,1.796 -0.469,2.729c-2.117,-0.519 -4.43,-0.915 -6.892,-1.166c-1.564,-2.275 -3.215,-4.351 -4.908,-6.132c0.494,-0.466 0.99,-0.908 1.486,-1.318zM39.899,36.313c-0.853,1.562 -1.76,3.055 -2.702,4.474c-1.651,0.138 -3.386,0.213 -5.197,0.213c-1.811,0 -3.546,-0.075 -5.198,-0.213c-0.941,-1.42 -1.849,-2.912 -2.702,-4.474c-0.784,-1.435 -1.499,-2.878 -2.142,-4.313c0.643,-1.434 1.358,-2.877 2.142,-4.313c0.853,-1.562 1.76,-3.055 2.702,-4.474c1.652,-0.138 3.387,-0.213 5.198,-0.213c1.811,0 3.546,0.075 5.198,0.213c0.941,1.42 1.849,2.912 2.702,4.474c0.784,1.435 1.499,2.878 2.142,4.313c-0.643,1.434 -1.359,2.877 -2.143,4.313zM43.078,34.487c0.68,1.739 1.238,3.444 1.676,5.096c-1.544,0.376 -3.21,0.694 -5.009,0.929c0.657,-1.05 1.3,-2.124 1.909,-3.241c0.507,-0.925 0.975,-1.855 1.424,-2.784zM32,47.403c-1.272,-1.341 -2.522,-2.863 -3.729,-4.513c1.216,0.071 2.459,0.11 3.729,0.11c1.27,0 2.513,-0.039 3.729,-0.11c-1.207,1.65 -2.457,3.172 -3.729,4.513zM24.254,40.512c-1.799,-0.235 -3.465,-0.553 -5.009,-0.929c0.438,-1.652 0.996,-3.358 1.676,-5.096c0.45,0.93 0.918,1.859 1.423,2.785c0.61,1.116 1.253,2.19 1.91,3.24zM20.922,29.513c-0.68,-1.739 -1.238,-3.445 -1.676,-5.096c1.544,-0.376 3.21,-0.694 5.009,-0.929c-0.657,1.05 -1.3,2.124 -1.909,3.241c-0.507,0.925 -0.975,1.855 -1.424,2.784zM32,16.597c1.272,1.341 2.522,2.863 3.729,4.513c-1.216,-0.071 -2.459,-0.11 -3.729,-0.11c-1.27,0 -2.513,0.039 -3.729,0.11c1.207,-1.65 2.457,-3.172 3.729,-4.513zM41.655,26.729c-0.609,-1.116 -1.252,-2.19 -1.909,-3.241c1.799,0.235 3.465,0.553 5.009,0.929c-0.438,1.652 -0.996,3.358 -1.676,5.096c-0.45,-0.929 -0.918,-1.859 -1.424,-2.784zM18.315,19.754c-0.546,-4.549 0.25,-7.764 2.184,-8.818c0.488,-0.267 1.053,-0.397 1.681,-0.397c1.86,0 4.278,1.147 6.918,3.328c0.496,0.41 0.993,0.852 1.488,1.319c-1.693,1.781 -3.345,3.856 -4.908,6.132c-2.463,0.251 -4.776,0.648 -6.892,1.166c-0.198,-0.934 -0.365,-1.851 -0.471,-2.73zM8,32c0,-2.6 3.47,-5.303 9.317,-7.06c0.606,2.279 1.437,4.654 2.471,7.06c-1.034,2.407 -1.865,4.782 -2.471,7.06c-5.847,-1.757 -9.317,-4.46 -9.317,-7.06zM29.098,50.134c-3.53,2.917 -6.662,3.989 -8.599,2.931c-1.934,-1.055 -2.729,-4.27 -2.184,-8.818c0.105,-0.879 0.273,-1.796 0.469,-2.729c2.117,0.519 4.43,0.915 6.892,1.166c1.564,2.275 3.215,4.351 4.908,6.132c-0.494,0.466 -0.99,0.908 -1.486,1.318zM45.685,44.246c0.546,4.549 -0.25,7.764 -2.184,8.818c-1.934,1.059 -5.068,-0.014 -8.599,-2.931c-0.496,-0.41 -0.993,-0.852 -1.488,-1.319c1.693,-1.781 3.345,-3.856 4.908,-6.132c2.463,-0.251 4.776,-0.648 6.892,-1.166c0.198,0.934 0.365,1.851 0.471,2.73zM46.683,39.06c-0.606,-2.279 -1.437,-4.654 -2.471,-7.06c1.034,-2.407 1.865,-4.782 2.471,-7.06c5.847,1.757 9.317,4.46 9.317,7.06c0,2.6 -3.47,5.303 -9.317,7.06z" fill="url(#color-2)"></path></g></g></svg></a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header