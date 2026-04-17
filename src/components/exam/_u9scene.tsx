              {/* RIVER SCENE SVG */}
              <svg viewBox="0 0 400 160" className="w-full rounded-xl" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="u9sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={outputs.waterQuality==="Good"?"#0ea5e9":outputs.waterQuality==="Poor"?"#64748b":"#38bdf8"}/>
                    <stop offset="100%" stopColor={outputs.waterQuality==="Good"?"#7dd3fc":outputs.waterQuality==="Poor"?"#e2e8f0":"#bfdbfe"}/>
                  </linearGradient>
                  <linearGradient id="u9river" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={outputs.waterQuality==="Good"?"#38bdf8":outputs.waterQuality==="Poor"?"#334155":"#64748b"}/>
                    <stop offset="50%" stopColor={outputs.waterQuality==="Good"?"#0284c7":outputs.waterQuality==="Poor"?"#1e293b":"#475569"}/>
                    <stop offset="100%" stopColor={outputs.waterQuality==="Good"?"#0369a1":outputs.waterQuality==="Poor"?"#0f172a":"#334155"}/>
                  </linearGradient>
                  <linearGradient id="u9wall" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#e2e8f0"/>
                    <stop offset="100%" stopColor="#64748b"/>
                  </linearGradient>
                  <linearGradient id="u9roof" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#475569"/>
                    <stop offset="100%" stopColor="#1e293b"/>
                  </linearGradient>
                  <linearGradient id="u9ground" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={outputs.ecosystemRisk==="High"?"#d97706":"#4ade80"}/>
                    <stop offset="100%" stopColor={outputs.ecosystemRisk==="High"?"#92400e":"#16a34a"}/>
                  </linearGradient>
                  <linearGradient id="u9ipal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#bbf7d0"/>
                    <stop offset="100%" stopColor="#4ade80"/>
                  </linearGradient>
                  <radialGradient id="u9sun" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#fef08a" stopOpacity="1"/>
                    <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
                  </radialGradient>
                  <linearGradient id="u9shimmer" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="white" stopOpacity="0"/>
                    <stop offset="45%" stopColor="white" stopOpacity="0.15"/>
                    <stop offset="100%" stopColor="white" stopOpacity="0"/>
                  </linearGradient>
                  <filter id="u9blur"><feGaussianBlur stdDeviation="3"/></filter>
                  <filter id="u9shadow"><feDropShadow dx="1" dy="2" stdDeviation="2.5" floodColor="#0f172a" floodOpacity="0.2"/></filter>
                  <filter id="u9haze"><feGaussianBlur stdDeviation="1"/></filter>
                </defs>

                {/* SKY */}
                <rect width="400" height="108" fill="url(#u9sky)"/>
                <rect width="400" height="108" fill="white" opacity="0.03"/>
                {/* Sun */}
                {outputs.waterQuality==="Good" && <g transform="translate(358,24)">
                  <circle r="24" fill="url(#u9sun)" opacity="0.7"/>
                  <circle r="12" fill="#fde68a" opacity="0.95"/>
                  <circle r="9" fill="#fbbf24"/>
                  <g style={{animation:"u9-sun-spin 12s linear infinite", transformOrigin:"358px 24px"}}>
                    {[0,30,60,90,120,150,180,210,240,270,300,330].map((a,i)=>(
                      <line key={i} x1={13*Math.cos(a*Math.PI/180)} y1={13*Math.sin(a*Math.PI/180)} x2={19*Math.cos(a*Math.PI/180)} y2={19*Math.sin(a*Math.PI/180)} stroke="#fde68a" strokeWidth={i%2===0?"2":"1.2"} strokeLinecap="round" opacity="0.85"/>
                    ))}
                  </g>
                </g>}
                {/* Storm clouds */}
                {outputs.waterQuality==="Poor" && <g filter="url(#u9haze)">
                  <ellipse cx="68" cy="20" rx="34" ry="13" fill="#64748b" opacity="0.72"/>
                  <ellipse cx="92" cy="14" rx="24" ry="11" fill="#64748b" opacity="0.62"/>
                  <ellipse cx="46" cy="18" rx="19" ry="10" fill="#64748b" opacity="0.52"/>
                  <ellipse cx="218" cy="22" rx="27" ry="11" fill="#64748b" opacity="0.58"/>
                  <ellipse cx="242" cy="15" rx="19" ry="9" fill="#64748b" opacity="0.48"/>
                  <ellipse cx="338" cy="18" rx="21" ry="9" fill="#64748b" opacity="0.44"/>
                </g>}
                {/* Medium clouds */}
                {outputs.waterQuality==="Medium" && <g filter="url(#u9haze)" opacity="0.45">
                  <ellipse cx="158" cy="18" rx="21" ry="8" fill="#94a3b8"/>
                  <ellipse cx="176" cy="12" rx="15" ry="7" fill="#94a3b8"/>
                </g>}
                {/* Ground */}
                <rect x="0" y="100" width="400" height="14" fill="url(#u9ground)" opacity="0.88"/>
                <rect x="0" y="100" width="400" height="2" fill="#0f172a" opacity="0.07"/>
                {/* Grass tufts */}
                {outputs.ecosystemRisk!=="High" && [252,270,282,297,314,330,347,362,380].map((x,i)=>(
                  <g key={x} transform={`translate(${x},100)`}>
                    <path d={`M0,0 Q-3,-${5+i%3},-1,-${8+i%4}`} stroke="#4ade80" strokeWidth="1.2" fill="none" opacity="0.8"/>
                    <path d={`M0,0 Q2,-${6+i%2},1,-${9+i%3}`} stroke="#22c55e" strokeWidth="1.2" fill="none" opacity="0.7"/>
                    <path d={`M0,0 Q4,-${4+i%3},3,-${7+i%2}`} stroke="#4ade80" strokeWidth="1" fill="none" opacity="0.6"/>
                  </g>
                ))}

                {/* BG trees (hazy) */}
                <g opacity="0.3" filter="url(#u9haze)">
                  {[312,332,352,372,392].map((x,i)=>{
                    const h=[18,22,16,20,15][i];
                    const lf=outputs.ecosystemRisk==="High"?"#78350f":"#166534";
                    return <g key={x}><rect x={x+2} y={100-h} width="4" height={h} fill="#4b5563"/><ellipse cx={x+4} cy={100-h-8} rx={[9,11,8,10,8][i]} ry={[11,13,9,12,10][i]} fill={lf}/></g>;
                  })}
                </g>
                {/* Foreground trees */}
                {([
                  {x:266,h:40,r1:16,r2:11},
                  {x:290,h:32,r1:13,r2:9},
                  {x:314,h:38,r1:15,r2:10},
                  {x:338,h:28,r1:12,r2:8},
                ] as {x:number,h:number,r1:number,r2:number}[]).map((t,i)=>{
                  const ok=outputs.ecosystemRisk!=="High";
                  const c1=ok?["#15803d","#16a34a","#22c55e","#4ade80"][i]:["#b45309","#d97706","#b45309","#d97706"][i];
                  const c2=ok?["#166534","#15803d","#16a34a","#22c55e"][i]:["#92400e","#b45309","#92400e","#b45309"][i];
                  return <g key={i} filter="url(#u9shadow)">
                    <rect x={t.x+2} y={100-t.h} width="5" height={t.h} rx="2.5" fill={ok?"#92400e":"#78350f"}/>
                    <rect x={t.x+5} y={100-t.h} width="2" height={t.h} rx="1" fill="#0f172a" opacity="0.12"/>
                    <ellipse cx={t.x+4} cy={100-t.h-6} rx={t.r1} ry={t.r1*0.9} fill={c1} opacity={ok?0.92:0.55}/>
                    <ellipse cx={t.x+5} cy={100-t.h-15} rx={t.r2} ry={t.r2*1.1} fill={c2} opacity={ok?0.85:0.45}/>
                    <ellipse cx={t.x+7} cy={100-t.h-17} rx={t.r2*0.5} ry={t.r2*0.4} fill="white" opacity={ok?0.12:0.04}/>
                    {!ok && <>
                      <line x1={t.x+4} y1={100-t.h+5} x2={t.x-6} y2={100-t.h-4} stroke="#78350f" strokeWidth="1.5" opacity="0.7"/>
                      <line x1={t.x+4} y1={100-t.h+8} x2={t.x+14} y2={100-t.h} stroke="#78350f" strokeWidth="1.2" opacity="0.6"/>
                    </>}
                  </g>;
                })}

                {/* Factory */}
                <g transform="translate(14,38)" filter="url(#u9shadow)">
                  <ellipse cx="32" cy="62" rx="36" ry="5" fill="#0f172a" opacity="0.15"/>
                  <rect x="10" y="-18" width="9" height="32" rx="3" fill="#475569"/>
                  <rect x="10" y="-18" width="4" height="32" rx="2" fill="#64748b"/>
                  <rect x="28" y="-12" width="8" height="26" rx="3" fill="#475569"/>
                  <rect x="28" y="-12" width="3" height="26" rx="1.5" fill="#64748b"/>
                  <rect x="8" y="-20" width="13" height="5" rx="2" fill="#334155"/>
                  <rect x="26" y="-14" width="12" height="4" rx="2" fill="#334155"/>
                  <rect x="0" y="14" width="62" height="48" rx="3" fill="url(#u9wall)"/>
                  <rect x="48" y="14" width="14" height="48" rx="3" fill="#0f172a" opacity="0.1"/>
                  <polygon points="0,14 31,2 62,14" fill="url(#u9roof)"/>
                  <polygon points="48,14 31,2 62,14" fill="#0f172a" opacity="0.12"/>
                  <rect x="6" y="22" width="12" height="9" rx="1.5" fill="#bae6fd" opacity="0.8"/>
                  <rect x="6" y="22" width="6" height="9" rx="1" fill="white" opacity="0.15"/>
                  <rect x="22" y="22" width="12" height="9" rx="1.5" fill="#bae6fd" opacity="0.8"/>
                  <rect x="22" y="22" width="6" height="9" rx="1" fill="white" opacity="0.15"/>
                  <rect x="38" y="22" width="12" height="9" rx="1.5" fill="#bae6fd" opacity="0.8"/>
                  <rect x="38" y="22" width="6" height="9" rx="1" fill="white" opacity="0.15"/>
                  <rect x="24" y="38" width="14" height="24" rx="2" fill="#1e293b"/>
                  <rect x="24" y="38" width="7" height="24" rx="1" fill="#0f172a" opacity="0.18"/>
                  <circle cx="36" cy="50" r="1.5" fill="#94a3b8"/>
                  <rect x="8" y="34" width="14" height="6" rx="1" fill="#1e293b" opacity="0.7"/>
                  <text x="15" y="39" textAnchor="middle" fontSize="4" fontWeight="bold" fill="#94a3b8">BATIK</text>
                  <rect x="28" y="62" width="8" height="4" rx="1" fill="#475569"/>
                </g>
                {/* Smoke */}
                <g filter="url(#u9blur)">
                  {dyeType==="Synthetic" && <>
                    <ellipse cx="28" cy="28" rx="10" ry="8" fill="#475569" opacity="0.52" style={{animation:"u9-smoke-rise 2.5s ease-out infinite"}}/>
                    <ellipse cx="32" cy="18" rx="13" ry="10" fill="#64748b" opacity="0.4" style={{animation:"u9-smoke-rise 2.5s ease-out infinite 0.4s"}}/>
                    <ellipse cx="27" cy="8" rx="15" ry="11" fill="#64748b" opacity="0.28" style={{animation:"u9-smoke-rise 2.5s ease-out infinite 0.8s"}}/>
                    <ellipse cx="33" cy="0" rx="17" ry="12" fill="#94a3b8" opacity="0.16" style={{animation:"u9-smoke-rise 2.5s ease-out infinite 1.2s"}}/>
                    <ellipse cx="46" cy="32" rx="8" ry="6" fill="#475569" opacity="0.42" style={{animation:"u9-smoke2-rise 3s ease-out infinite 0.2s"}}/>
                    <ellipse cx="50" cy="22" rx="10" ry="8" fill="#64748b" opacity="0.3" style={{animation:"u9-smoke2-rise 3s ease-out infinite 0.7s"}}/>
                    <ellipse cx="48" cy="13" rx="12" ry="9" fill="#94a3b8" opacity="0.2" style={{animation:"u9-smoke2-rise 3s ease-out infinite 1.1s"}}/>
                  </>}
                  {dyeType==="Natural" && <>
                    <ellipse cx="28" cy="28" rx="6" ry="5" fill="#94a3b8" opacity="0.2" style={{animation:"u9-smoke-rise 4s ease-out infinite"}}/>
                    <ellipse cx="30" cy="20" rx="8" ry="6" fill="#94a3b8" opacity="0.13" style={{animation:"u9-smoke-rise 4s ease-out infinite 1s"}}/>
                    <ellipse cx="46" cy="30" rx="5" ry="4" fill="#94a3b8" opacity="0.16" style={{animation:"u9-smoke2-rise 4.5s ease-out infinite 0.5s"}}/>
                  </>}
                </g>
                {/* Pipe */}
                <line x1="50" y1="100" x2="50" y2="114" stroke={treatment==="None"?"#ef4444":"#22c55e"} strokeWidth="3.5" strokeLinecap="round"/>
                <line x1="50" y1="114" x2={treatment!=="None"?96:148} y2="114" stroke={treatment==="None"?"#ef4444":"#22c55e"} strokeWidth="3.5" strokeLinecap="round"/>
                {treatment==="None" && <line x1="148" y1="114" x2="148" y2="120" stroke="#ef4444" strokeWidth="3.5" strokeLinecap="round"/>}
                {/* IPAL */}
                {treatment!=="None" && <g transform="translate(96,88)" filter="url(#u9shadow)">
                  <ellipse cx="24" cy="26" rx="26" ry="4" fill="#0f172a" opacity="0.13"/>
                  <rect width="48" height="28" rx="5" fill="url(#u9ipal)" stroke="#22c55e" strokeWidth="1.5"/>
                  <rect x="0" y="0" width="24" height="28" rx="5" fill="white" opacity="0.07"/>
                  <rect x="5" y="5" width="16" height="16" rx="3" fill="#dcfce7" stroke="#4ade80" strokeWidth="1"/>
                  <rect x="27" y="5" width="16" height="16" rx="3" fill="#dcfce7" stroke="#4ade80" strokeWidth="1"/>
                  <circle cx="13" cy="13" r="4" fill="#4ade80" opacity="0.55"/>
                  <circle cx="35" cy="13" r="4" fill="#4ade80" opacity="0.55"/>
                  <circle cx="13" cy="13" r="2" fill="#16a34a" opacity="0.8"/>
                  <circle cx="35" cy="13" r="2" fill="#16a34a" opacity="0.8"/>
                  <text x="24" y="36" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#166534">IPAL</text>
                  <line x1="48" y1="14" x2="60" y2="14" stroke="#22c55e" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="60" y1="14" x2="60" y2="32" stroke="#22c55e" strokeWidth="3" strokeLinecap="round"/>
                </g>}

                {/* River */}
                <rect x="0" y="118" width="400" height="42" fill="url(#u9river)"/>
                <rect x="0" y="118" width="400" height="42" fill="url(#u9shimmer)"/>
                <path d="M0,122 Q50,116 100,122 Q150,128 200,122 Q250,116 300,122 Q350,128 400,122" fill="none" stroke="white" strokeWidth="1.8" opacity="0.25" style={{animation:"u9-wave-shift 3s linear infinite"}}/>
                <path d="M0,132 Q50,126 100,132 Q150,138 200,132 Q250,126 300,132 Q350,138 400,132" fill="none" stroke="white" strokeWidth="1.1" opacity="0.15" style={{animation:"u9-wave-shift 4s linear infinite 0.5s"}}/>
                <path d="M0,142 Q60,137 120,142 Q180,147 240,142 Q300,137 360,142 Q380,144 400,142" fill="none" stroke="white" strokeWidth="0.7" opacity="0.09" style={{animation:"u9-wave-shift 5s linear infinite 1s"}}/>
                <ellipse cx="320" cy="130" rx="45" ry="6" fill="white" opacity="0.06" style={{animation:"u9-shimmer-move 4s ease-in-out infinite"}}/>
                {/* Discharge plume */}
                {treatment==="None" && <g filter="url(#u9blur)" opacity="0.75">
                  <ellipse cx="148" cy="122" rx="22" ry="7" fill={dyeType==="Synthetic"?"#3b82f6":"#92400e"} opacity="0.55"/>
                  <ellipse cx="168" cy="127" rx="16" ry="5" fill={dyeType==="Synthetic"?"#1d4ed8":"#78350f"} opacity="0.4"/>
                  <ellipse cx="188" cy="132" rx="12" ry="4" fill={dyeType==="Synthetic"?"#1e40af":"#451a03"} opacity="0.25"/>
                </g>}
                {/* Fish 1 */}
                {outputs.waterQuality!=="Poor" && <g style={{animation:"u9-fish-swim 4s ease-in-out infinite", transformOrigin:"158px 131px"}}>
                  <g transform="translate(158,131)">
                    <ellipse cx="0" cy="0" rx="11" ry="5.5" fill="#fbbf24"/>
                    <ellipse cx="-2" cy="-1" rx="5" ry="3" fill="#fde68a" opacity="0.45"/>
                    <path d="M11,0 L18,-5 L18,5 Z" fill="#f59e0b"/>
                    <circle cx="-6" cy="-1" r="1.8" fill="#1e293b"/>
                    <circle cx="-6.5" cy="-1.3" r="0.7" fill="white"/>
                    <path d="M-3,-4 Q2,-7 7,-4" stroke="#f59e0b" strokeWidth="1.2" fill="none" opacity="0.55"/>
                    <path d="M2,3 Q5,6 8,3" stroke="#f59e0b" strokeWidth="1" fill="none" opacity="0.45"/>
                  </g>
                </g>}
                {/* Fish 2 */}
                {outputs.waterQuality==="Good" && <g style={{animation:"u9-fish2-swim 6s ease-in-out infinite", transformOrigin:"222px 143px"}}>
                  <g transform="translate(222,143)">
                    <ellipse cx="0" cy="0" rx="8" ry="4" fill="#34d399"/>
                    <ellipse cx="-1" cy="-0.5" rx="3.5" ry="2" fill="#6ee7b7" opacity="0.45"/>
                    <path d="M8,0 L13,-4 L13,4 Z" fill="#10b981"/>
                    <circle cx="-4" cy="-0.5" r="1.4" fill="#1e293b"/>
                    <circle cx="-4.4" cy="-0.8" r="0.5" fill="white"/>
                  </g>
                </g>}
                {/* Pollution */}
                {outputs.waterQuality==="Poor" && <g filter="url(#u9blur)" opacity="0.8">
                  <ellipse cx="132" cy="126" rx="18" ry="7" fill="#1e293b" opacity="0.58" style={{animation:"u9-pollution-pulse 2s ease-in-out infinite"}}/>
                  <ellipse cx="212" cy="134" rx="14" ry="6" fill="#0f172a" opacity="0.52" style={{animation:"u9-pollution-pulse 2.5s ease-in-out infinite 0.4s"}}/>
                  <ellipse cx="292" cy="128" rx="16" ry="6" fill="#1e293b" opacity="0.48" style={{animation:"u9-pollution-pulse 3s ease-in-out infinite 0.8s"}}/>
                  <circle cx="172" cy="132" r="5" fill="#0f172a" opacity="0.42" style={{animation:"u9-bubble 2s ease-out infinite 0.3s"}}/>
                  <circle cx="252" cy="138" r="4" fill="#0f172a" opacity="0.38" style={{animation:"u9-bubble 2.5s ease-out infinite 1s"}}/>
                </g>}
                <text x="378" y="154" textAnchor="middle" fontSize="7" fontWeight="bold" fill="white" opacity="0.45" letterSpacing="1.5">{isId?"SUNGAI":"RIVER"}</text>
              </svg>
