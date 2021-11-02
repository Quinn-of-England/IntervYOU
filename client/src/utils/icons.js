import React from "react";

export const RightArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 24 24"
  >
    <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
  </svg>
);

export const CloseIcon = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill={color ?? "#fff"}
  >
    <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
  </svg>
);

export const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
  </svg>
);

export const CalendarIcon = ({ color, dimension }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={dimension ?? "24"}
    height={dimension ?? "24"}
    fill={color ?? "#949494"}
    viewBox="0 0 24 24"
  >
    <path d="M17 3v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .552-.447 1-1 1s-1-.448-1-1zm-12 1c.553 0 1-.448 1-1v-2c0-.552-.447-1-1-1-.553 0-1 .448-1 1v2c0 .552.447 1 1 1zm13 13v-3h-1v4h3v-1h-2zm-5 .5c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5-4.5 2.019-4.5 4.5zm11 0c0 3.59-2.91 6.5-6.5 6.5s-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5zm-14.237 3.5h-7.763v-13h19v1.763c.727.33 1.399.757 2 1.268v-9.031h-3v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-9v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-3v21h11.031c-.511-.601-.938-1.273-1.268-2z" />
  </svg>
);

export const SortedArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="2" x2="12" y2="22"></line>
    <polyline points="18 16 12 22 6 16"></polyline>
  </svg>
);

export const UpVoteArrowIcon = ({ color, onUpVote }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={color ?? "#949494"}
    fillRule="evenodd"
    clipRule="evenodd"
    onClick={onUpVote}
  >
    <path d="M24 12c0 6.623-5.377 12-12 12s-12-5.377-12-12 5.377-12 12-12 12 5.377 12 12zm-1 0c0 6.071-4.929 11-11 11s-11-4.929-11-11 4.929-11 11-11 11 4.929 11 11zm-11.5-4.828l-3.763 4.608-.737-.679 5-6.101 5 6.112-.753.666-3.747-4.604v11.826h-1v-11.828z" />
  </svg>
);

export const DownVoteArrowIcon = ({ color, onDownVote }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={color ?? "#949494"}
    fillRule="evenodd"
    clipRule="evenodd"
    onClick={onDownVote}
  >
    <path d="M24 12c0-6.623-5.377-12-12-12s-12 5.377-12 12 5.377 12 12 12 12-5.377 12-12zm-1 0c0-6.071-4.929-11-11-11s-11 4.929-11 11 4.929 11 11 11 11-4.929 11-11zm-11.5 4.828l-3.763-4.608-.737.679 5 6.101 5-6.112-.753-.666-3.747 4.604v-11.826h-1v11.828z" />
  </svg>
);

export const CreatePostIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
  </svg>
);

export const DownloadDocumentIcon = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color ?? "currentColor"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="8 17 12 21 16 17"></polyline>
    <line x1="12" y1="12" x2="12" y2="21"></line>
    <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>
  </svg>
);

export const CommentsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export const ShareLinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="#949494"
    viewBox="0 0 24 24"
  >
    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" />
    {/* <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline> */}
  </svg>
);

export const BookmarkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    stroke-width="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
);

export const FileIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    id="svg2"
    width="2133.3333"
    height="1600"
    viewBox="0 0 2133.3333 1600"
  >
    {/* XML  */}
    <defs id="defs6">
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath20">
        <path d="M 0,1200 H 1600 V 0 H 0 Z" id="path18" />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath28">
        <path
          d="M 48.1045,1145.7 H 1555.37 V 55.8799 H 48.1045 Z"
          id="path26"
        />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath52">
        <path
          d="m 448.184,939.075 h 20.001 v -20.096 h -20.001 z"
          id="path50"
        />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath72">
        <path d="M 0,1200 H 1600 V 0 H 0 Z" id="path70" />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath84">
        <path
          d="m 815.425,939.075 h 20.001 v -20.096 h -20.001 z"
          id="path82"
        />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath104">
        <path d="M 0,1200 H 1600 V 0 H 0 Z" id="path102" />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath116">
        <path
          d="m 999.045,939.075 h 20.005 v -20.096 h -20.005 z"
          id="path114"
        />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath136">
        <path d="M 0,1200 H 1600 V 0 H 0 Z" id="path134" />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath148">
        <path
          d="m 448.184,547.051 h 20.001 v -20.096 h -20.001 z"
          id="path146"
        />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath168">
        <path d="M 0,1200 H 1600 V 0 H 0 Z" id="path166" />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath180">
        <path
          d="m 264.906,356.229 h 20.001 v -20.096 h -20.001 z"
          id="path178"
        />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath200">
        <path d="M 0,1200 H 1600 V 0 H 0 Z" id="path198" />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath212">
        <path
          d="m 448.184,356.229 h 20.001 v -20.096 h -20.001 z"
          id="path210"
        />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath232">
        <path d="M 0,1200 H 1600 V 0 H 0 Z" id="path230" />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath244">
        <path
          d="m 631.804,547.051 h 20.001 v -20.096 h -20.001 z"
          id="path242"
        />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath264">
        <path d="M 0,1200 H 1600 V 0 H 0 Z" id="path262" />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath276">
        <path
          d="m 814.126,547.051 h 20.001 v -20.096 h -20.001 z"
          id="path274"
        />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath296">
        <path d="M 0,1200 H 1600 V 0 H 0 Z" id="path294" />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath308">
        <path d="m 1366.29,939.075 h 20 v -20.096 h -20 z" id="path306" />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath328">
        <path d="M 0,1200 H 1600 V 0 H 0 Z" id="path326" />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath340">
        <path d="m 1182.67,939.075 h 20 v -20.096 h -20 z" id="path338" />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath374">
        <path
          d="m 264.564,939.075 h 20.001 v -20.096 h -20.001 z"
          id="path372"
        />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath398">
        <path
          d="m 999.045,744.793 h 20.005 v -20.096 h -20.005 z"
          id="path396"
        />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath418">
        <path d="M 0,1200 H 1600 V 0 H 0 Z" id="path416" />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath430">
        <path
          d="m 815.425,744.793 h 20.001 v -20.096 h -20.001 z"
          id="path428"
        />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath458">
        <path
          d="m 631.804,939.075 h 20.001 v -20.096 h -20.001 z"
          id="path456"
        />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath494">
        <path
          d="m 448.184,744.793 h 20.001 v -20.096 h -20.001 z"
          id="path492"
        />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath514">
        <path d="M 0,1200 H 1600 V 0 H 0 Z" id="path512" />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath526">
        <path
          d="m 631.804,744.793 h 20.001 v -20.096 h -20.001 z"
          id="path524"
        />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath546">
        <path d="M 0,1200 H 1600 V 0 H 0 Z" id="path544" />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath558">
        <path d="m 1366.29,744.793 h 20 v -20.096 h -20 z" id="path556" />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath578">
        <path d="M 0,1200 H 1600 V 0 H 0 Z" id="path576" />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath590">
        <path d="m 1182.67,744.793 h 20 v -20.096 h -20 z" id="path588" />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath610">
        <path
          d="m 264.564,744.793 h 20.001 v -20.096 h -20.001 z"
          id="path608"
        />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath634">
        <path
          d="m 999.045,550.511 h 20.005 v -20.096 h -20.005 z"
          id="path632"
        />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath658">
        <path d="m 1179.25,550.511 h 20 v -20.096 h -20 z" id="path656" />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath678">
        <path d="M 0,1200 H 1600 V 0 H 0 Z" id="path676" />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath690">
        <path d="m 1364.99,550.511 h 20 v -20.096 h -20 z" id="path688" />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath710">
        <path d="M 0,1200 H 1600 V 0 H 0 Z" id="path708" />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath722">
        <path
          d="m 815.425,356.229 h 20.001 v -20.096 h -20.001 z"
          id="path720"
        />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath754">
        <path
          d="m 631.804,356.229 h 20.001 v -20.096 h -20.001 z"
          id="path752"
        />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath774">
        <path d="M 0,1200 H 1600 V 0 H 0 Z" id="path772" />
      </clipPath>
      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath786">
        <path
          d="m 264.757,549.511 h 19.808 v -19.902 h -19.808 z"
          id="path784"
        />
      </clipPath>
    </defs>
    <g id="g10" transform="matrix(1.3333333,0,0,-1.3333333,0,1600)">
      <path
        d="M 0,0 H 1600 V 1200 H 0 Z"
        style={{
          fill: "#f4f4f4",
          fillOpacity: "1",
          fillRule: "nonzero",
          stroke: "none",
        }}
        id="path12"
      />
      <g id="g14">
        <g id="g16" clip-path="url(#clipPath20)">
          <g id="g22">
            <g id="g24" />
            <g id="g40">
              <g clip-path="url(#clipPath28)" opacity="0.160004" id="g38"></g>
            </g>
          </g>
          <g id="g42" transform="translate(453.6831,843.7705)">
            <path
              d="M 0,0 H -41.848 C -49.857,0 -56.35,6.493 -56.35,14.502 v 66.301 c 0,8.009 6.493,14.502 14.502,14.502 H -5.499 L 14.502,75.214 V 14.502 C 14.502,6.493 8.009,0 0,0"
              style={{
                fill: "#ee3e2c",
                fillOpacity: "1",
                fillRule: "nonzero",
                stroke: "none",
              }}
              id="path44"
            />
          </g>
          <g id="g46">
            <g id="g48" />
            <g id="g60">
              <g clip-path="url(#clipPath52)" opacity="0.5" id="g58">
                <g transform="translate(468.1851,918.9785)" id="g56">
                  <path
                    d="m 0,0 h -15.885 c -2.252,0 -4.078,1.822 -4.083,4.074 l -0.033,16.023"
                    style={{
                      fill: "#ffffff",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                      stroke: "none",
                    }}
                    id="path54"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <text
        transform="matrix(1,0,0,-1,409.4604,880.3437)"
        style={{
          fontVariant: "normal",
          fontWeight: "bold",
          fontStretch: "normal",
          fontSize: "20px",
          fontFamily: "Open Sans",
          fill: "#ffffff",
          fillOpacity: "1",
          fillRule: "nonzero",
          stroke: "none",
        }}
        id="text64"
      >
        <tspan x="0 15.709298 33.680088" y="0" id="tspan62">
          PDF
        </tspan>
      </text>
      <g id="g66">
        <g id="g68" clip-path="url(#clipPath72)">
          <g id="g74" transform="translate(820.9238,843.7705)">
            <path
              d="M 0,0 H -41.848 C -49.856,0 -56.35,6.493 -56.35,14.502 v 66.301 c 0,8.009 6.494,14.502 14.502,14.502 H -5.499 L 14.502,75.214 V 14.502 C 14.502,6.493 8.009,0 0,0"
              style={{
                fill: "#5380c0",
                fillOpacity: "1",
                fillRule: "nonzero",
                stroke: "none",
              }}
              id="path76"
            />
          </g>
          <g id="g78">
            <g id="g80" />
            <g id="g92">
              <g clip-path="url(#clipPath84)" opacity="0.5" id="g90">
                <g transform="translate(835.4258,918.9785)" id="g88">
                  <path
                    d="m 0,0 h -15.886 c -2.251,0 -4.077,1.822 -4.082,4.074 l -0.033,16.023"
                    style={{
                      fill: "#ffffff",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                      stroke: "none",
                    }}
                    id="path86"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <text
        transform="matrix(1,0,0,-1,776.7593,880.3437)"
        style={{
          fontVariant: "normal",
          fontWeight: "bold",
          fontStretch: "normal",
          fontSize: "20px",
          fontFamily: "Open Sans",
          fill: "#ffffff",
          fillOpacity: "1",
          fillRule: "nonzero",
          stroke: "none",
        }}
        id="text96"
      >
        <tspan x="0 14.942006 31.014759" y="0" id="tspan94">
          DOC
        </tspan>
      </text>
      <g id="g98">
        <g id="g100" clip-path="url(#clipPath104)">
          <g id="g106" transform="translate(1004.5439,843.7705)">
            <path
              d="M 0,0 H -41.848 C -49.856,0 -56.35,6.493 -56.35,14.502 v 66.301 c 0,8.009 6.494,14.502 14.502,14.502 H -5.499 L 14.502,75.214 V 14.502 C 14.502,6.493 8.01,0 0,0"
              style={{
                fill: "#00ac54",
                fillOpacity: "1",
                fillRule: "nonzero",
                stroke: "none",
              }}
              id="path108"
            />
          </g>
          <g id="g110">
            <g id="g112" />
            <g id="g124">
              <g clip-path="url(#clipPath116)" opacity="0.5" id="g122">
                <g transform="translate(1019.0459,918.9785)" id="g120">
                  <path
                    d="m 0,0 h -15.885 c -2.252,0 -4.078,1.822 -4.083,4.074 l -0.033,16.023"
                    style={{
                      fill: "#ffffff",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                      stroke: "none",
                    }}
                    id="path118"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <text
        transform="matrix(1,0,0,-1,964.3232,880.3437)"
        style={{
          fontVariant: "normal",
          fontWeight: "bold",
          fontStretch: "normal",
          fontSize: "20px",
          fontFamily: "Open Sans",
          fill: "#ffffff",
          fillOpacity: "1",
          fillRule: "nonzero",
          stroke: "none",
        }}
        id="text128"
      >
        <tspan x="0 13.467998 24.876421" y="0" id="tspan126">
          XLS
        </tspan>
      </text>
      <g id="g130">
        <g id="g132" clip-path="url(#clipPath136)">
          <g id="g138" transform="translate(453.6831,451.7471)">
            <path
              d="M 0,0 H -41.848 C -49.857,0 -56.35,6.492 -56.35,14.502 v 66.301 c 0,8.009 6.493,14.502 14.502,14.502 H -5.499 L 14.502,75.213 V 14.502 C 14.502,6.492 8.009,0 0,0"
              style={{
                fill: "#00ac54",
                fillOpacity: "1",
                fillRule: "nonzero",
                stroke: "none",
              }}
              id="path140"
            />
          </g>
          <g id="g142">
            <g id="g144" />
            <g id="g156">
              <g clip-path="url(#clipPath148)" opacity="0.5" id="g154">
                <g transform="translate(468.1851,526.9551)" id="g152">
                  <path
                    d="m 0,0 h -15.885 c -2.252,0 -4.078,1.822 -4.083,4.073 l -0.033,16.024"
                    style={{
                      fill: "#ffffff",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                      stroke: "none",
                    }}
                    id="path150"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <text
        transform="matrix(1,0,0,-1,414.4678,488.3203)"
        style={{
          fontVariant: "normal",
          fontWeight: "bold",
          fontStretch: "normal",
          fontSize: "20px",
          fontFamily: "Open Sans",
          fill: "#ffffff",
          fillOpacity: "1",
          fillRule: "nonzero",
          stroke: "none",
        }}
        id="text160"
      >
        <tspan x="0 6.6835189 19.364033" y="0" id="tspan158">
          JPG
        </tspan>
      </text>
      <g id="g162">
        <g id="g164" clip-path="url(#clipPath168)">
          <g id="g170" transform="translate(270.4053,260.9248)">
            <path
              d="M 0,0 H -41.848 C -49.857,0 -56.35,6.493 -56.35,14.502 v 66.301 c 0,8.009 6.493,14.502 14.502,14.502 H -5.499 L 14.502,75.213 V 14.502 C 14.502,6.493 8.009,0 0,0"
              style={{
                fill: "#f47b20",
                fillOpacity: "1",
                fillRule: "nonzero",
                stroke: "none",
              }}
              id="path172"
            />
          </g>
          <g id="g174">
            <g id="g176" />
            <g id="g188">
              <g clip-path="url(#clipPath180)" opacity="0.5" id="g186">
                <g transform="translate(284.9072,336.1328)" id="g184">
                  <path
                    d="m 0,0 h -15.885 c -2.252,0 -4.078,1.822 -4.083,4.074 l -0.033,16.023"
                    style={{
                      fill: "#ffffff",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                      stroke: "none",
                    }}
                    id="path182"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <text
        transform="matrix(1,0,0,-1,231.5347,291.585)"
        style={{
          fontVariant: "normal",
          fontWeight: "bold",
          fontStretch: "normal",
          fontSize: "34px",
          fontFamily: "Open Sans",
          fill: "#ffffff",
          fillOpacity: "1",
          fillRule: "nonzero",
          stroke: "none",
        }}
        id="text192"
      >
        <tspan x="0 23.507057" y="0" id="tspan190">
          AI
        </tspan>
      </text>
      <g id="g194">
        <g id="g196" clip-path="url(#clipPath200)">
          <g id="g202" transform="translate(453.6831,260.9248)">
            <path
              d="M 0,0 H -41.848 C -49.857,0 -56.35,6.493 -56.35,14.502 v 66.301 c 0,8.009 6.493,14.502 14.502,14.502 H -5.499 L 14.502,75.213 V 14.502 C 14.502,6.493 8.009,0 0,0"
              style={{
                fill: "#3a6bb4",
                fillOpacity: "1",
                fillRule: "nonzero",
                stroke: "none",
              }}
              id="path204"
            />
          </g>
          <g id="g206">
            <g id="g208" />
            <g id="g220">
              <g clip-path="url(#clipPath212)" opacity="0.5" id="g218">
                <g transform="translate(468.1851,336.1328)" id="g216">
                  <path
                    d="m 0,0 h -15.885 c -2.252,0 -4.078,1.822 -4.083,4.074 l -0.033,16.023"
                    style={{
                      fill: "#ffffff",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                      stroke: "none",
                    }}
                    id="path214"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <text
        transform="matrix(1,0,0,-1,411.436,293.2617)"
        style={{
          fontVariant: "normal",
          fontWeight: "bold",
          fontStretch: "normal",
          fontSize: "35px",
          fontFamily: "Open Sans",
          fill: "#ffffff",
          fillOpacity: "1",
          fillRule: "nonzero",
          stroke: "none",
        }}
        id="text224"
      >
        <tspan x="0 22.114832" y="0" id="tspan222">
          Ps
        </tspan>
      </text>
      <g id="g226">
        <g id="g228" clip-path="url(#clipPath232)">
          <g id="g234" transform="translate(637.3037,451.7471)">
            <path
              d="M 0,0 H -41.848 C -49.857,0 -56.35,6.492 -56.35,14.502 v 66.301 c 0,8.009 6.493,14.502 14.502,14.502 H -5.499 L 14.502,75.213 V 14.502 C 14.502,6.492 8.009,0 0,0"
              style={{
                fill: "#00ac54",
                fillOpacity: "1",
                fillRule: "nonzero",
                stroke: "none",
              }}
              id="path236"
            />
          </g>
          <g id="g238">
            <g id="g240" />
            <g id="g252">
              <g clip-path="url(#clipPath244)" opacity="0.5" id="g250">
                <g transform="translate(651.8057,526.9551)" id="g248">
                  <path
                    d="m 0,0 h -15.886 c -2.251,0 -4.077,1.822 -4.082,4.073 l -0.033,16.024"
                    style={{
                      fill: "#ffffff",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                      stroke: "none",
                    }}
                    id="path246"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <text
        transform="matrix(1,0,0,-1,598.8867,488.3203)"
        style={{
          fontVariant: "normal",
          fontWeight: "bold",
          fontStretch: "normal",
          fontSize: "20px",
          fontFamily: "Open Sans",
          fill: "#ffffff",
          fillOpacity: "1",
          fillRule: "nonzero",
          stroke: "none",
        }}
        id="text256"
      >
        <tspan x="0 14.618936 21.302454" y="0" id="tspan254">
          GIF
        </tspan>
      </text>
      <g id="g258">
        <g id="g260" clip-path="url(#clipPath264)">
          <g id="g266" transform="translate(819.625,451.7471)">
            <path
              d="M 0,0 H -41.848 C -49.857,0 -56.35,6.492 -56.35,14.502 v 66.301 c 0,8.009 6.493,14.502 14.502,14.502 H -5.499 L 14.502,75.213 V 14.502 C 14.502,6.492 8.009,0 0,0"
              style={{
                fill: "#00ac54",
                fillOpacity: "1",
                fillRule: "nonzero",
                stroke: "none",
              }}
              id="path268"
            />
          </g>
          <g id="g270">
            <g id="g272" />
            <g id="g284">
              <g clip-path="url(#clipPath276)" opacity="0.5" id="g282">
                <g transform="translate(834.127,526.9551)" id="g280">
                  <path
                    d="m 0,0 h -15.886 c -2.251,0 -4.077,1.822 -4.082,4.073 l -0.033,16.024"
                    style={{
                      fill: "#ffffff",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                      stroke: "none",
                    }}
                    id="path278"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <text
        transform="matrix(1,0,0,-1,775.5439,488.3203)"
        style={{
          fontVariant: "normal",
          fontWeight: "bold",
          fontStretch: "normal",
          fontSize: "20px",
          fontFamily: "Open Sans",
          fill: "#ffffff",
          fillOpacity: "1",
          fillRule: "nonzero",
          stroke: "none",
        }}
        id="text288"
      >
        <tspan x="0 12.680513 29.096527" y="0" id="tspan286">
          PNG
        </tspan>
      </text>
      <g id="g290">
        <g id="g292" clip-path="url(#clipPath296)">
          <g id="g298" transform="translate(1371.7852,843.7705)">
            <path
              d="M 0,0 H -41.848 C -49.857,0 -56.35,6.493 -56.35,14.502 v 66.301 c 0,8.009 6.493,14.502 14.502,14.502 H -5.499 L 14.502,75.214 V 14.502 C 14.502,6.493 8.009,0 0,0"
              style={{
                fill: "#00ac54",
                fillOpacity: "1",
                fillRule: "nonzero",
                stroke: "none",
              }}
              id="path300"
            />
          </g>
          <g id="g302">
            <g id="g304" />
            <g id="g316">
              <g clip-path="url(#clipPath308)" opacity="0.5" id="g314">
                <g transform="translate(1386.2871,918.9785)" id="g312">
                  <path
                    d="m 0,0 h -15.886 c -2.251,0 -4.077,1.822 -4.082,4.074 l -0.033,16.023"
                    style={{
                      fill: "#ffffff",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                      stroke: "none",
                    }}
                    id="path310"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <text
        transform="matrix(1,0,0,-1,1332.0068,880.3437)"
        style={{
          fontVariant: "normal",
          fontWeight: "bold",
          fontStretch: "normal",
          fontSize: "20px",
          fontFamily: "Open Sans",
          fill: "#ffffff",
          fillOpacity: "1",
          fillRule: "nonzero",
          stroke: "none",
        }}
        id="text320"
      >
        <tspan x="0 12.86224 23.987978" y="0" id="tspan318">
          CSV
        </tspan>
      </text>
      <g id="g322">
        <g id="g324" clip-path="url(#clipPath328)">
          <g id="g330" transform="translate(1188.1641,843.7705)">
            <path
              d="M 0,0 H -41.848 C -49.856,0 -56.35,6.493 -56.35,14.502 v 66.301 c 0,8.009 6.494,14.502 14.502,14.502 H -5.499 L 14.502,75.214 V 14.502 C 14.502,6.493 8.01,0 0,0"
              style={{
                fill: "#00ac54",
                fillOpacity: "1",
                fillRule: "nonzero",
                stroke: "none",
              }}
              id="path332"
            />
          </g>
          <g id="g334">
            <g id="g336" />
            <g id="g348">
              <g clip-path="url(#clipPath340)" opacity="0.5" id="g346">
                <g transform="translate(1202.666,918.9785)" id="g344">
                  <path
                    d="m 0,0 h -15.885 c -2.251,0 -4.078,1.822 -4.082,4.074 l -0.034,16.023"
                    style={{
                      fill: "#ffffff",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                      stroke: "none",
                    }}
                    id="path342"
                  />
                </g>
              </g>
            </g>
          </g>
          <path
            d="m 1187.864,869.561 h -41.248 v 31.96 h 41.248 z"
            style={{
              fill: "none",
              stroke: "#fff",
              strokeWidth: "3",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: "10",
              strokeDasharray: "none",
              strokeOpacity: "1",
            }}
            id="path350"
          />
          <g id="g352" transform="translate(1156.0371,901.5205)">
            <path
              d="M 0,0 V -31.96"
              style={{
                fill: "none",
                stroke: "#fff",
                strokeWidth: "3",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeMiterlimit: "10",
                strokeDasharray: "none",
                strokeOpacity: "1",
              }}
              id="path354"
            />
          </g>
          <g id="g356" transform="translate(1146.6162,878.6943)">
            <path
              d="M 0,0 H 41.248"
              style={{
                fill: "none",
                stroke: "#fff",
                strokeWidth: "3",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeMiterlimit: "10",
                strokeDasharray: "none",
                strokeOpacity: "1",
              }}
              id="path358"
            />
          </g>
          <g id="g360" transform="translate(1146.6162,891.0908)">
            <path
              d="M 0,0 H 41.248"
              style={{
                fill: "none",
                stroke: "#fff",
                strokeWidth: "3",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeMiterlimit: "10",
                strokeDasharray: "none",
                strokeOpacity: "1",
              }}
              id="path362"
            />
          </g>
          <g id="g364" transform="translate(270.063,843.7705)">
            <path
              d="M 0,0 H -41.848 C -49.857,0 -56.35,6.493 -56.35,14.502 v 66.301 c 0,8.009 6.493,14.502 14.502,14.502 H -5.499 L 14.502,75.214 V 14.502 C 14.502,6.493 8.009,0 0,0"
              style={{
                fill: "#ee3e2c",
                fillOpacity: "1",
                fillRule: "nonzero",
                stroke: "none",
              }}
              id="path366"
            />
          </g>
          <g id="g368">
            <g id="g370" />
            <g id="g382">
              <g clip-path="url(#clipPath374)" opacity="0.5" id="g380">
                <g transform="translate(284.5649,918.9785)" id="g378">
                  <path
                    d="m 0,0 h -15.885 c -2.252,0 -4.078,1.822 -4.083,4.074 l -0.033,16.023"
                    style={{
                      fill: "#ffffff",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                      stroke: "none",
                    }}
                    id="path376"
                  />
                </g>
              </g>
            </g>
          </g>
          <g id="g384" transform="translate(255.3379,879.1299)">
            <path
              d="m 0,0 c -5.778,-1.063 -9.701,-2.554 -15.327,-4.774 1.672,3.254 4.835,11.556 6.356,17.031 C -6.842,7.999 -4.258,3.832 0,0 m -8.241,17.64 c -1.004,3.557 -2.403,11.464 -0.153,14.019 4.41,-2.524 1.673,-8.515 0.153,-14.019 m 2.585,12.559 c -0.578,2.069 -1.977,3.102 -3.163,2.95 -1.43,-0.182 -2.95,-1.034 -3.558,-2.372 -1.704,-3.832 1.855,-15.115 2.402,-17 -3.467,-10.462 -15.327,-31.141 -21.136,-32.541 -0.121,1.369 0.609,5.323 8.272,10.249 0.396,0.426 0.852,0.943 1.065,1.278 -6.478,-3.163 -14.872,-8.242 -9.823,-12.043 0.273,-0.213 0.699,-0.396 1.186,-0.578 3.862,-1.43 9.275,3.254 14.719,13.868 5.991,1.976 10.826,3.467 17.669,4.501 7.481,-5.079 12.499,-6.114 15.905,-4.806 0.943,0.365 2.433,1.551 2.859,3.103 -2.768,-3.407 -9.245,-1.035 -14.415,2.219 4.774,0.517 9.701,0.822 11.83,0.153 2.706,-0.852 2.615,-2.19 2.585,-2.372 0.213,0.729 0.517,1.915 -0.061,2.858 -2.281,3.71 -12.743,1.551 -16.544,1.155 -5.991,3.619 -10.127,10.067 -11.8,14.72 1.551,5.991 3.224,10.34 2.008,14.658"
              style={{
                fill: "#ffffff",
                fillOpacity: "1",
                fillRule: "nonzero",
                stroke: "none",
              }}
              id="path386"
            />
          </g>
          <g id="g388" transform="translate(1004.5439,649.4883)">
            <path
              d="M 0,0 H -41.848 C -49.856,0 -56.35,6.493 -56.35,14.502 v 66.301 c 0,8.01 6.494,14.502 14.502,14.502 H -5.499 L 14.502,75.214 V 14.502 C 14.502,6.493 8.01,0 0,0"
              style={{
                fill: "#ee3e2c",
                fillOpacity: "1",
                fillRule: "nonzero",
                stroke: "none",
              }}
              id="path390"
            />
          </g>
          <g id="g392">
            <g id="g394" />
            <g id="g406">
              <g clip-path="url(#clipPath398)" opacity="0.5" id="g404">
                <g transform="translate(1019.0459,724.6963)" id="g402">
                  <path
                    d="m 0,0 h -15.885 c -2.252,0 -4.078,1.823 -4.083,4.074 l -0.033,16.023"
                    style={{
                      fill: "#ffffff",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                      stroke: "none",
                    }}
                    id="path400"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <text
        transform="matrix(1,0,0,-1,963.5806,686.0615)"
        style={{
          fontVariant: "normal",
          fontWeight: "bold",
          fontStretch: "normal",
          fontSize: "20px",
          fontFamily: "Open Sans",
          fill: "#ffffff",
          fillOpacity: "1",
          fillRule: "nonzero",
          stroke: "none",
        }}
        id="text410"
      >
        <tspan x="0 12.680513 25.361027" y="0" id="tspan408">
          PPT
        </tspan>
      </text>
      <g id="g412">
        <g id="g414" clip-path="url(#clipPath418)">
          <g id="g420" transform="translate(820.9238,649.4883)">
            <path
              d="M 0,0 H -41.848 C -49.856,0 -56.35,6.493 -56.35,14.502 v 66.301 c 0,8.01 6.494,14.502 14.502,14.502 H -5.499 L 14.502,75.214 V 14.502 C 14.502,6.493 8.009,0 0,0"
              style={{
                fill: "#ee3e2c",
                fillOpacity: "1",
                fillRule: "nonzero",
                stroke: "none",
              }}
              id="path422"
            />
          </g>
          <g id="g424">
            <g id="g426" />
            <g id="g438">
              <g clip-path="url(#clipPath430)" opacity="0.5" id="g436">
                <g transform="translate(835.4258,724.6963)" id="g434">
                  <path
                    d="m 0,0 h -15.886 c -2.251,0 -4.077,1.823 -4.082,4.074 l -0.033,16.023"
                    style={{
                      fill: "#ffffff",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                      stroke: "none",
                    }}
                    id="path432"
                  />
                </g>
              </g>
            </g>
          </g>
          <g id="g440" transform="translate(799.5088,693.6807)">
            <path
              d="m 0,0 h 18.577 c 0,-10.19 -8.386,-18.577 -18.577,-18.577 -10.191,0 -18.577,8.387 -18.577,18.577 0,10.191 8.386,18.577 18.577,18.577 z"
              style={{
                fill: "#ffffff",
                fillOpacity: "1",
                fillRule: "nonzero",
                stroke: "none",
              }}
              id="path442"
            />
          </g>
          <g id="g444" transform="translate(802.4912,696.6006)">
            <path
              d="m 0,0 v 18.577 c 4.925,0 9.653,-1.958 13.136,-5.44 C 16.618,9.654 18.577,4.926 18.577,0 Z"
              style={{
                fill: "#ffffff",
                fillOpacity: "1",
                fillRule: "nonzero",
                stroke: "none",
              }}
              id="path446"
            />
          </g>
          <g id="g448" transform="translate(637.3037,843.7705)">
            <path
              d="M 0,0 H -41.848 C -49.857,0 -56.35,6.493 -56.35,14.502 v 66.301 c 0,8.009 6.493,14.502 14.502,14.502 H -5.499 L 14.502,75.214 V 14.502 C 14.502,6.493 8.009,0 0,0"
              style={{
                fill: "#5380c0",
                fillOpacity: "1",
                fillRule: "nonzero",
                stroke: "none",
              }}
              id="path450"
            />
          </g>
          <g id="g452">
            <g id="g454" />
            <g id="g466">
              <g clip-path="url(#clipPath458)" opacity="0.5" id="g464">
                <g transform="translate(651.8057,918.9785)" id="g462">
                  <path
                    d="m 0,0 h -15.886 c -2.251,0 -4.077,1.822 -4.082,4.074 l -0.033,16.023"
                    style={{
                      fill: "#ffffff",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                      stroke: "none",
                    }}
                    id="path460"
                  />
                </g>
              </g>
            </g>
          </g>
          <g id="g468" transform="translate(593.2153,901.9102)">
            <path
              d="M 0,0 H 46.329"
              style={{
                fill: "none",
                stroke: "#fff",
                strokeWidth: "3",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeMiterlimit: "10",
                strokeDasharray: "none",
                strokeOpacity: "1",
              }}
              id="path470"
            />
          </g>
          <g id="g472" transform="translate(593.2153,891.127)">
            <path
              d="M 0,0 H 46.329"
              style={{
                fill: "none",
                stroke: "#fff",
                strokeWidth: "3",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeMiterlimit: "10",
                strokeDasharray: "none",
                strokeOpacity: "1",
              }}
              id="path474"
            />
          </g>
          <g id="g476" transform="translate(593.2153,880.3437)">
            <path
              d="M 0,0 H 46.329"
              style={{
                fill: "none",
                stroke: "#fff",
                strokeWidth: "3",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeMiterlimit: "10",
                strokeDasharray: "none",
                strokeOpacity: "1",
              }}
              id="path478"
            />
          </g>
          <g id="g480" transform="translate(593.2153,869.5605)">
            <path
              d="M 0,0 H 23.165"
              style={{
                fill: "none",
                stroke: "#fff",
                strokeWidth: "3",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeMiterlimit: "10",
                strokeDasharray: "none",
                strokeOpacity: "1",
              }}
              id="path482"
            />
          </g>
          <g id="g484" transform="translate(453.6831,649.4883)">
            <path
              d="M 0,0 H -41.848 C -49.857,0 -56.35,6.493 -56.35,14.502 v 66.301 c 0,8.01 6.493,14.502 14.502,14.502 H -5.499 L 14.502,75.214 V 14.502 C 14.502,6.493 8.009,0 0,0"
              style={{
                fill: "#809bbe",
                fillOpacity: "1",
                fillRule: "nonzero",
                stroke: "none",
              }}
              id="path486"
            />
          </g>
          <g id="g488">
            <g id="g490" />
            <g id="g502">
              <g clip-path="url(#clipPath494)" opacity="0.5" id="g500">
                <g transform="translate(468.1851,724.6963)" id="g498">
                  <path
                    d="m 0,0 h -15.885 c -2.252,0 -4.078,1.823 -4.083,4.074 l -0.033,16.023"
                    style={{
                      fill: "#ffffff",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                      stroke: "none",
                    }}
                    id="path496"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <text
        transform="matrix(1,0,0,-1,408.9731,686.0615)"
        style={{
          fontVariant: "normal",
          fontWeight: "bold",
          fontStretch: "normal",
          fontSize: "20px",
          fontFamily: "Open Sans",
          fill: "#ffffff",
          fillOpacity: "1",
          fillRule: "nonzero",
          stroke: "none",
        }}
        id="text506"
      >
        <tspan x="0 19.040962 31.721476" y="0" id="tspan504">
          MP4
        </tspan>
      </text>
      <g id="g508">
        <g id="g510" clip-path="url(#clipPath514)">
          <g id="g516" transform="translate(637.3037,649.4883)">
            <path
              d="M 0,0 H -41.848 C -49.857,0 -56.35,6.493 -56.35,14.502 v 66.301 c 0,8.01 6.493,14.502 14.502,14.502 H -5.499 L 14.502,75.214 V 14.502 C 14.502,6.493 8.009,0 0,0"
              style={{
                fill: "#809bbe",
                fillOpacity: "1",
                fillRule: "nonzero",
                stroke: "none",
              }}
              id="path518"
            />
          </g>
          <g id="g520">
            <g id="g522" />
            <g id="g534">
              <g clip-path="url(#clipPath526)" opacity="0.5" id="g532">
                <g transform="translate(651.8057,724.6963)" id="g530">
                  <path
                    d="m 0,0 h -15.886 c -2.251,0 -4.077,1.823 -4.082,4.074 l -0.033,16.023"
                    style={{
                      fill: "#ffffff",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                      stroke: "none",
                    }}
                    id="path528"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <text
        transform="matrix(1,0,0,-1,597.9668,686.0615)"
        style={{
          fontVariant: "normal",
          fontWeight: "bold",
          fontStretch: "normal",
          fontSize: "20px",
          fontFamily: "Open Sans",
          fill: "#ffffff",
          fillOpacity: "1",
          fillRule: "nonzero",
          stroke: "none",
        }}
        id="text538"
      >
        <tspan x="0 13.932411 27.057146" y="0" id="tspan536">
          AVI
        </tspan>
      </text>
      <g id="g540">
        <g id="g542" clip-path="url(#clipPath546)">
          <g id="g548" transform="translate(1371.7852,649.4883)">
            <path
              d="M 0,0 H -41.848 C -49.857,0 -56.35,6.493 -56.35,14.502 v 66.301 c 0,8.01 6.493,14.502 14.502,14.502 H -5.499 L 14.502,75.214 V 14.502 C 14.502,6.493 8.009,0 0,0"
              style={{
                fill: "#596c89",
                fillOpacity: "1",
                fillRule: "nonzero",
                stroke: "none",
              }}
              id="path550"
            />
          </g>
          <g id="g552">
            <g id="g554" />
            <g id="g566">
              <g clip-path="url(#clipPath558)" opacity="0.5" id="g564">
                <g transform="translate(1386.2871,724.6963)" id="g562">
                  <path
                    d="m 0,0 h -15.886 c -2.251,0 -4.077,1.823 -4.082,4.074 l -0.033,16.023"
                    style={{
                      fill: "#ffffff",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                      stroke: "none",
                    }}
                    id="path560"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <text
        transform="matrix(1,0,0,-1,1334.0337,686.0615)"
        style={{
          fontVariant: "normal",
          fontWeight: "bold",
          fontStretch: "normal",
          fontSize: "20px",
          fontFamily: "Open Sans",
          fill: "#ffffff",
          fillOpacity: "1",
          fillRule: "nonzero",
          stroke: "none",
        }}
        id="text570"
      >
        <tspan x="0 11.69111 18.374628" y="0" id="tspan568">
          ZIP
        </tspan>
      </text>
      <g id="g572">
        <g id="g574" clip-path="url(#clipPath578)">
          <g id="g580" transform="translate(1188.1641,649.4883)">
            <path
              d="M 0,0 H -41.848 C -49.856,0 -56.35,6.493 -56.35,14.502 v 66.301 c 0,8.01 6.494,14.502 14.502,14.502 H -5.499 L 14.502,75.214 V 14.502 C 14.502,6.493 8.01,0 0,0"
              style={{
                fill: "#596c89",
                fillOpacity: "1",
                fillRule: "nonzero",
                stroke: "none",
              }}
              id="path582"
            />
          </g>
          <g id="g584">
            <g id="g586" />
            <g id="g598">
              <g clip-path="url(#clipPath590)" opacity="0.5" id="g596">
                <g transform="translate(1202.666,724.6963)" id="g594">
                  <path
                    d="m 0,0 h -15.885 c -2.251,0 -4.078,1.823 -4.082,4.074 l -0.034,16.023"
                    style={{
                      fill: "#ffffff",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                      stroke: "none",
                    }}
                    id="path592"
                  />
                </g>
              </g>
            </g>
          </g>
          <g id="g600" transform="translate(270.063,649.4883)">
            <path
              d="M 0,0 H -41.848 C -49.857,0 -56.35,6.493 -56.35,14.502 v 66.301 c 0,8.01 6.493,14.502 14.502,14.502 H -5.499 L 14.502,75.214 V 14.502 C 14.502,6.493 8.009,0 0,0"
              style={{
                fill: "#809bbe",
                fillOpacity: "1",
                fillRule: "nonzero",
                stroke: "none",
              }}
              id="path602"
            />
          </g>
          <g id="g604">
            <g id="g606" />
            <g id="g618">
              <g clip-path="url(#clipPath610)" opacity="0.5" id="g616">
                <g transform="translate(284.5649,724.6963)" id="g614">
                  <path
                    d="m 0,0 h -15.885 c -2.252,0 -4.078,1.823 -4.083,4.074 l -0.033,16.023"
                    style={{
                      fill: "#ffffff",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                      stroke: "none",
                    }}
                    id="path612"
                  />
                </g>
              </g>
            </g>
          </g>
          <g id="g620" transform="translate(258.3604,693.8262)">
            <path
              d="m 0,0 -17.449,12.182 c -0.42,0.293 -0.995,-0.007 -0.995,-0.519 V -12.7 c 0,-0.512 0.575,-0.812 0.995,-0.519 L 0,-1.037 C 0.361,-0.785 0.361,-0.252 0,0"
              style={{
                fill: "#e6eaf1",
                fillOpacity: "1",
                fillRule: "nonzero",
                stroke: "none",
              }}
              id="path622"
            />
          </g>
          <g id="g624" transform="translate(1004.5439,455.207)">
            <path
              d="M 0,0 H -41.848 C -49.856,0 -56.35,6.492 -56.35,14.502 v 66.301 c 0,8.009 6.494,14.502 14.502,14.502 H -5.499 L 14.502,75.213 V 14.502 C 14.502,6.492 8.01,0 0,0"
              style={{
                fill: "#9954a1",
                fillOpacity: "1",
                fillRule: "nonzero",
                stroke: "none",
              }}
              id="path626"
            />
          </g>
          <g id="g628">
            <g id="g630" />
            <g id="g642">
              <g clip-path="url(#clipPath634)" opacity="0.5" id="g640">
                <g transform="translate(1019.0459,530.415)" id="g638">
                  <path
                    d="m 0,0 h -15.885 c -2.252,0 -4.078,1.822 -4.083,4.073 l -0.033,16.024"
                    style={{
                      fill: "#ffffff",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                      stroke: "none",
                    }}
                    id="path636"
                  />
                </g>
              </g>
            </g>
          </g>
          <g id="g644" transform="translate(998.6572,515.582)">
            <path
              d="m 0,0 c -0.246,0.216 -0.576,0.315 -0.899,0.271 l -20.487,-2.693 c -0.566,-0.074 -0.989,-0.557 -0.989,-1.128 v -4.042 -1.649 -16.428 c -1.331,1.16 -3.135,1.877 -5.122,1.877 -4.079,0 -7.398,-3.007 -7.398,-6.703 0,-3.695 3.319,-6.702 7.398,-6.702 4.079,0 7.398,3.007 7.398,6.702 v 20.256 l 18.21,2.394 v -11.839 c -1.289,1.1 -3.019,1.779 -4.924,1.779 -3.97,0 -7.2,-2.928 -7.2,-6.527 0,-3.598 3.23,-6.527 7.2,-6.527 3.971,0 7.201,2.929 7.201,6.527 v 17.885 1.65 4.041 C 0.388,-0.528 0.247,-0.217 0,0"
              style={{
                fill: "#ffffff",
                fillOpacity: "1",
                fillRule: "nonzero",
                stroke: "none",
              }}
              id="path646"
            />
          </g>
          <g id="g648" transform="translate(1184.748,455.207)">
            <path
              d="M 0,0 H -41.848 C -49.857,0 -56.35,6.492 -56.35,14.502 v 66.301 c 0,8.009 6.493,14.502 14.502,14.502 H -5.499 L 14.502,75.213 V 14.502 C 14.502,6.492 8.009,0 0,0"
              style={{
                fill: "#9954a1",
                fillOpacity: "1",
                fillRule: "nonzero",
                stroke: "none",
              }}
              id="path650"
            />
          </g>
          <g id="g652">
            <g id="g654" />
            <g id="g666">
              <g clip-path="url(#clipPath658)" opacity="0.5" id="g664">
                <g transform="translate(1199.25,530.415)" id="g662">
                  <path
                    d="m 0,0 h -15.886 c -2.251,0 -4.077,1.822 -4.082,4.073 l -0.033,16.024"
                    style={{
                      fill: "#ffffff",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                      stroke: "none",
                    }}
                    id="path660"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <text
        transform="matrix(1,0,0,-1,1140.688,491.7803)"
        style={{
          fontVariant: "normal",
          fontWeight: "bold",
          fontStretch: "normal",
          fontSize: "20px",
          fontFamily: "Open Sans",
          fill: "#ffffff",
          fillOpacity: "1",
          fillRule: "nonzero",
          stroke: "none",
        }}
        id="text670"
      >
        <tspan x="0 19.040962 31.721476" y="0" id="tspan668">
          MP3
        </tspan>
      </text>
      <g id="g672">
        <g id="g674" clip-path="url(#clipPath678)">
          <g id="g680" transform="translate(1370.4854,455.207)">
            <path
              d="m 0,0 h -41.847 c -8.009,0 -14.502,6.492 -14.502,14.502 v 66.301 c 0,8.009 6.493,14.502 14.502,14.502 H -5.499 L 14.502,75.213 V 14.502 C 14.502,6.492 8.01,0 0,0"
              style={{
                fill: "#9954a1",
                fillOpacity: "1",
                fillRule: "nonzero",
                stroke: "none",
              }}
              id="path682"
            />
          </g>
          <g id="g684">
            <g id="g686" />
            <g id="g698">
              <g clip-path="url(#clipPath690)" opacity="0.5" id="g696">
                <g transform="translate(1384.9873,530.415)" id="g694">
                  <path
                    d="m 0,0 h -15.885 c -2.251,0 -4.078,1.822 -4.082,4.073 l -0.034,16.024"
                    style={{
                      fill: "#ffffff",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                      stroke: "none",
                    }}
                    id="path692"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <text
        transform="matrix(1,0,0,-1,1325.7603,491.7803)"
        style={{
          fontVariant: "normal",
          fontWeight: "bold",
          fontStretch: "normal",
          fontSize: "20px",
          fontFamily: "Open Sans",
          fill: "#ffffff",
          fillOpacity: "1",
          fillRule: "nonzero",
          stroke: "none",
        }}
        id="text702"
      >
        <tspan x="0 19.525568 33.457977" y="0" id="tspan700">
          WAV
        </tspan>
      </text>
      <g id="g704">
        <g id="g706" clip-path="url(#clipPath710)">
          <g id="g712" transform="translate(820.9238,260.9248)">
            <path
              d="M 0,0 H -41.848 C -49.856,0 -56.35,6.493 -56.35,14.502 v 66.301 c 0,8.009 6.494,14.502 14.502,14.502 H -5.499 L 14.502,75.213 V 14.502 C 14.502,6.493 8.009,0 0,0"
              style={{
                fill: "#596c89",
                fillOpacity: "1",
                fillRule: "nonzero",
                stroke: "none",
              }}
              id="path714"
            />
          </g>
          <g id="g716">
            <g id="g718" />
            <g id="g730">
              <g clip-path="url(#clipPath722)" opacity="0.5" id="g728">
                <g transform="translate(835.4258,336.1328)" id="g726">
                  <path
                    d="m 0,0 h -15.886 c -2.251,0 -4.077,1.822 -4.082,4.074 l -0.033,16.023"
                    style={{
                      fill: "#ffffff",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                      stroke: "none",
                    }}
                    id="path724"
                  />
                </g>
              </g>
            </g>
          </g>
          <g id="g732" transform="translate(789.5937,297.1123)">
            <path
              d="M 0,0 -12.891,5.726 V 7.918 L 0,14.37 V 10.583 L -7.906,6.976 0,3.763 Z"
              style={{
                fill: "#ffffff",
                fillOpacity: "1",
                fillRule: "nonzero",
                stroke: "none",
              }}
              id="path734"
            />
          </g>
          <g id="g736" transform="translate(812.5352,297.1123)">
            <path
              d="M 0,0 12.89,5.726 V 7.918 L 0,14.37 V 10.583 L 7.905,6.976 0,3.763 Z"
              style={{
                fill: "#ffffff",
                fillOpacity: "1",
                fillRule: "nonzero",
                stroke: "none",
              }}
              id="path738"
            />
          </g>
          <g id="g740" transform="translate(808.1221,316.5879)">
            <path
              d="m 0,0 -9.703,-26.665 h -4.412 L -4.412,0 Z"
              style={{
                fill: "#ffffff",
                fillOpacity: "1",
                fillRule: "nonzero",
                stroke: "none",
              }}
              id="path742"
            />
          </g>
          <g id="g744" transform="translate(637.3037,260.9248)">
            <path
              d="M 0,0 H -41.848 C -49.857,0 -56.35,6.493 -56.35,14.502 v 66.301 c 0,8.009 6.493,14.502 14.502,14.502 H -5.499 L 14.502,75.213 V 14.502 C 14.502,6.493 8.009,0 0,0"
              style={{
                fill: "#f9b617",
                fillOpacity: "1",
                fillRule: "nonzero",
                stroke: "none",
              }}
              id="path746"
            />
          </g>
          <g id="g748">
            <g id="g750" />
            <g id="g762">
              <g clip-path="url(#clipPath754)" opacity="0.5" id="g760">
                <g transform="translate(651.8057,336.1328)" id="g758">
                  <path
                    d="m 0,0 h -15.886 c -2.251,0 -4.077,1.822 -4.082,4.074 l -0.033,16.023"
                    style={{
                      fill: "#ffffff",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                      stroke: "none",
                    }}
                    id="path756"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <text
        transform="matrix(1,0,0,-1,594.9668,297.498)"
        style={{
          fontVariant: "normal",
          fontWeight: "bold",
          fontStretch: "normal",
          fontSize: "20px",
          fontFamily: "Open Sans",
          fill: "#ffffff",
          fillOpacity: "1",
          fillRule: "nonzero",
          stroke: "none",
        }}
        id="text766"
      >
        <tspan x="0 16.961197 33.114716" y="0" id="tspan764">
          AVI
        </tspan>
      </text>
      <g id="g768">
        <g id="g770" clip-path="url(#clipPath774)">
          <g id="g776" transform="translate(270.2031,455.127)">
            <path
              d="m 0,0 h -41.443 c -7.932,0 -14.362,6.431 -14.362,14.362 v 65.66 c 0,7.932 6.43,14.362 14.362,14.362 H -5.446 L 14.362,74.486 V 14.362 C 14.362,6.431 7.932,0 0,0"
              style={{
                fill: "#00ab54",
                fillOpacity: "1",
                fillRule: "nonzero",
                stroke: "none",
              }}
              id="path778"
            />
          </g>
          <g id="g780">
            <g id="g782" />
            <g id="g794">
              <g clip-path="url(#clipPath786)" opacity="0.5" id="g792">
                <g transform="translate(284.5649,529.6084)" id="g790">
                  <path
                    d="m 0,0 h -15.732 c -2.229,0 -4.038,1.805 -4.043,4.034 l -0.033,15.868"
                    style={{
                      fill: "#ffffff",
                      fillOpacity: "1",
                      fillRule: "nonzero",
                      stroke: "none",
                    }}
                    id="path788"
                  />
                </g>
              </g>
            </g>
          </g>
          <g id="g796" transform="translate(228.1504,478.0586)">
            <path
              d="M 0,0 10.353,15.355 19.428,5.812 30.547,26.061 43.968,0 Z"
              style={{
                fill: "#ffffff",
                fillOpacity: "1",
                fillRule: "nonzero",
                stroke: "none",
              }}
              id="path798"
            />
          </g>
          <g id="g800" transform="translate(237.353,504.7578)">
            <path
              d="m 0,0 c 0,-1.765 -1.431,-3.195 -3.195,-3.195 -1.765,0 -3.196,1.43 -3.196,3.195 0,1.765 1.431,3.195 3.196,3.195 C -1.431,3.195 0,1.765 0,0"
              style={{
                fill: "#ffffff",
                fillOpacity: "1",
                fillRule: "nonzero",
                stroke: "none",
              }}
              id="path802"
            />
          </g>
          <path
            d="m 1166.147,740.146 h -4.647 v 4.647 h 4.647 z"
            style={{
              fill: "#ffffff",
              fillOpacity: "1",
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path804"
          />
          <path
            d="m 1170.795,735.498 h -4.647 v 4.647 h 4.647 z"
            style={{
              fill: "#ffffff",
              fillOpacity: "1",
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path806"
          />
          <path
            d="m 1166.147,730.851 h -4.647 v 4.647 h 4.647 z"
            style={{
              fill: "#ffffff",
              fillOpacity: "1",
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path808"
          />
          <path
            d="m 1170.795,726.202 h -4.647 v 4.648 h 4.647 z"
            style={{
              fill: "#ffffff",
              fillOpacity: "1",
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path810"
          />
          <path
            d="m 1166.147,721.555 h -4.647 v 4.647 h 4.647 z"
            style={{
              fill: "#ffffff",
              fillOpacity: "1",
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path812"
          />
          <path
            d="m 1170.795,716.907 h -4.647 v 4.647 h 4.647 z"
            style={{
              fill: "#ffffff",
              fillOpacity: "1",
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path814"
          />
          <path
            d="m 1166.147,712.26 h -4.647 v 4.647 h 4.647 z"
            style={{
              fill: "#ffffff",
              fillOpacity: "1",
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path816"
          />
          <path
            d="m 1170.795,707.611 h -4.647 v 4.648 h 4.647 z"
            style={{
              fill: "#ffffff",
              fillOpacity: "1",
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path818"
          />
          <path
            d="m 1166.147,702.964 h -4.647 v 4.647 h 4.647 z"
            style={{
              fill: "#ffffff",
              fillOpacity: "1",
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path820"
          />
          <path
            d="m 1170.795,698.316 h -4.647 v 4.647 h 4.647 z"
            style={{
              fill: "#ffffff",
              fillOpacity: "1",
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path822"
          />
          <path
            d="m 1170.795,685.354 h -9.295 v 12.963 h 9.295 z"
            style={{
              fill: "#ffffff",
              fillOpacity: "1",
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path824"
          />
          <path
            d="m 1168.472,687.187 h -4.647 v 4.647 h 4.647 z"
            style={{
              fill: "#a1bedf",
              fillOpacity: "1",
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path826"
          />
        </g>
      </g>
    </g>
  </svg>
);
