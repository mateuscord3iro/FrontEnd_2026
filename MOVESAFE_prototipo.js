
      
        const exercisesData = {
            squat: {
                name: "Agachamento Livre (Squat)",
                status: "Postura Incorreta Detectada",
                isOk: false,
                color: "#ef4444", 
                desc: "Detectamos desvio postural na fase excêntrica profunda. O seu quadril desceu em retroversão pélvica acentuada ('butt wink') e o joelho ultrapassou excessivamente a linha guia média das pontas dos pés, gerando sobrecarga de cisalhamento na região lombar.",
                advice: "Para corrigir, diminua levemente a amplitude até onde sua pelve consiga se manter neutra. Realize rotinas prévias de mobilidade de quadril e tornozelo antes dos treinos de força.",
                skeletonPoints: [
                    {x: 0.5, y: 0.15, name: "Cabeça"}, 
                    {x: 0.5, y: 0.30, name: "Pescoço"},
                    {x: 0.45, y: 0.35, name: "Ombro"}, 
                    {x: 0.42, y: 0.45, name: "Cotovelo"}, 
                    {x: 0.45, y: 0.55, name: "Mão"}, 
                    {x: 0.48, y: 0.60, name: "Quadril"}, 
                    {x: 0.56, y: 0.75, name: "Joelho"},
                    {x: 0.48, y: 0.90, name: "Tornozelo"}, 
                ]
            },
            deadlift: {
                name: "Levantamento Terra (Deadlift)",
                status: "Postura Excelente!",
                isOk: true,
                color: "#10b981", 
                desc: "Alinhamento vertebral perfeito observado na subida da carga. O movimento de dobradiça de quadril (hip hinge) foi executado com maestria. O quadril está posicionado para trás e para cima, com os joelhos semiflexionados à frente dos tornozelos, e a barra sobe perfeitamente rente ao corpo.",
                advice: "Excelente técnica biomecânica! Mantenha a barra subindo o mais próximo possível das suas tíbias para mitigar qualquer braço de momento prejudicial na musculatura lombar posterior.",
                skeletonPoints: [
                    {x: 0.35, y: 0.35, name: "Cabeça"}, 
                    {x: 0.42, y: 0.40, name: "Pescoço"}, 
                    {x: 0.48, y: 0.45, name: "Ombro"}, 
                    {x: 0.48, y: 0.60, name: "Cotovelo"}, 
                    {x: 0.48, y: 0.78, name: "Mão/Barra"}, 
                    {x: 0.64, y: 0.62, name: "Quadril"},
                    {x: 0.54, y: 0.74, name: "Joelho"}, // 6 (Joelhos posicionados à frente do quadril, anatomia corrigida!)
                    {x: 0.52, y: 0.90, name: "Tornozelo"} // 7
                ]
            },
            bentoverrow: {
                name: "Remada Curvada com Barra (Bent-Over Row)",
                status: "Cifose Lombar Detectada",
                isOk: false,
                color: "#f59e0b", // Laranja (Alerta)
                desc: "Identificamos perda de estabilidade do core com arredondamento na região lombar (perda da lordose fisiológica) na fase de tração máxima da barra. Há também uma severa hiperextensão cervical para manter o olhar fixo no espelho à frente, sobrecarregando a coluna cervical.",
                advice: "Mantenha a coluna neutra ativando intensamente a musculatura abdominal ('bracing'). Mantenha o olhar apontado para o chão a cerca de 1,5m à sua frente para deixar a cervical alinhada com as costas.",
                skeletonPoints: [
                    {x: 0.35, y: 0.36, name: "Cabeça (Erguida)"}, // 0
                    {x: 0.42, y: 0.42, name: "Pescoço"}, // 1
                    {x: 0.48, y: 0.48, name: "Ombro"}, // 2
                    {x: 0.58, y: 0.42, name: "Cotovelo (Puxado)"}, // 3
                    {x: 0.52, y: 0.58, name: "Mão/Barra"}, // 4
                    {x: 0.66, y: 0.52, name: "Quadril"}, // 5
                    {x: 0.58, y: 0.70, name: "Joelho"}, // 6
                    {x: 0.55, y: 0.90, name: "Tornozelo"} // 7
                ]
            },
            shoulderpress: {
                name: "Desenvolvimento com Halteres (Shoulder Press)",
                status: "Desvio Assimétrico & Fora do Plano Escapular",
                isOk: false,
                color: "#ef4444", // Vermelho (Erro Crítico)
                desc: "Rastreamento frontal aponta assimetria evidente de subida. O braço direito apresenta abdução excessiva para fora do plano escapular (plano frontal excessivamente aberto a quase 90°), o que causa estresse de impacto subacromial. O membro esquerdo apresenta encurtamento do plano por fadiga motora.",
                advice: "Traga os halteres e cotovelos ligeiramente para a frente no chamado plano escapular (ângulo de ~30 graus anteriorizado). Isso protege a articulação glenoumeral e estabiliza melhor a escápula.",
                skeletonPoints: [
                    {x: 0.50, y: 0.22, name: "Cabeça"}, // 0
                    {x: 0.50, y: 0.30, name: "Pescoço"}, // 1
                    {x: 0.42, y: 0.35, name: "Ombro Esquerdo"}, // 2
                    {x: 0.58, y: 0.35, name: "Ombro Direito"}, // 3
                    {x: 0.36, y: 0.50, name: "Cotovelo Esquerdo"}, // 4
                    {x: 0.66, y: 0.42, name: "Cotovelo Direito"}, // 5
                    {x: 0.41, y: 0.28, name: "Mão Esquerda"}, // 6
                    {x: 0.62, y: 0.20, name: "Mão Direita (Mais Alta)"} // 7
                ]
            },
            benchpress: {
                name: "Supino Reto (Bench Press)",
                status: "Alinhamento de Cotovelos Crítico",
                isOk: false,
                color: "#f59e0b", // Laranja
                desc: "Abertura de cotovelos excessiva identificada na fase de transição (fundo). Os seus cotovelos estão abduzidos a quase 90 graus em relação ao tronco, sobrecarregando perigosamente a articulação glenoumeral anterior.",
                advice: "Corrija rotacionando levemente os ombros para fora (adução de escápula). Tente manter os cotovelos em um ângulo aproximado de 45 a 60 graus do tronco.",
                skeletonPoints: [
                    {x: 0.5, y: 0.45, name: "Cabeça"},
                    {x: 0.5, y: 0.50, name: "Pescoço"},
                    {x: 0.5, y: 0.55, name: "Ombro"},
                    {x: 0.32, y: 0.60, name: "Cotovelo Esquerdo"}, // Cotovelo muito aberto
                    {x: 0.68, y: 0.60, name: "Cotovelo Direito"},
                    {x: 0.35, y: 0.40, name: "Mão Esquerda"},
                    {x: 0.65, y: 0.40, name: "Mão Direita"},
                    {x: 0.5, y: 0.75, name: "Quadril"}
                ]
            }
        };

        let selectedKey = 'squat';
        let animationFrameId = null;
        let simulationProgress = 0;
        let isSimulating = false;
        
        const canvas = document.getElementById('biomechanicCanvas');
        const ctx = canvas.getContext('2d');

        function resizeCanvas() {
            const container = canvas.parentElement;
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight || (container.clientWidth * 9 / 16);
            drawCurrentState();
        }

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('load', () => {
            resizeCanvas();
            drawGrid();
        });

        // Troca de Exercício
        function selectExercise(key, element) {
            if (isSimulating) return; // Bloquear clique se estiver analisando
            
            selectedKey = key;
            
            // Alterar estado dos botões de seleção
            const buttons = document.querySelectorAll('#exerciseSelector button');
            buttons.forEach(btn => btn.classList.remove('active'));
            element.classList.add('active');

            resetSimulator();
            showToast("Exercício Selecionado", `Modificado para simulação de ${exercisesData[key].name}.`);
        }

        function drawGrid() {
            ctx.clearRect(0,0, canvas.width, canvas.height);
            ctx.fillStyle = "#0c101b";
            ctx.fillRect(0,0, canvas.width, canvas.height);

            // Linhas de Grid
            ctx.strokeStyle = "rgba(16, 185, 129, 0.05)";
            ctx.lineWidth = 1;
            const step = 40;
            for(let x=0; x < canvas.width; x += step) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }
            for(let y=0; y < canvas.height; y += step) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }
        }

        function drawSkeleton() {
            const data = exercisesData[selectedKey];
            const pts = data.skeletonPoints;
            const w = canvas.width;
            const h = canvas.height;

            ctx.strokeStyle = data.color;
            ctx.lineWidth = 4;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";

            ctx.beginPath();
            if(selectedKey === 'benchpress') {
                // Conexões específicas do supino
                ctx.moveTo(pts[0].x * w, pts[0].y * h); // Cabeca
                ctx.lineTo(pts[1].x * w, pts[1].y * h); // Pescoço
                ctx.lineTo(pts[2].x * w, pts[2].y * h); // Ombro
                ctx.lineTo(pts[7].x * w, pts[7].y * h); // Quadril

                // Braço Esquerdo
                ctx.moveTo(pts[2].x * w, pts[2].y * h); // Ombro
                ctx.lineTo(pts[3].x * w, pts[3].y * h); // Cotovelo E
                ctx.lineTo(pts[5].x * w, pts[5].y * h); // Mão E

                // Braço Direito
                ctx.moveTo(pts[2].x * w, pts[2].y * h); // Ombro
                ctx.lineTo(pts[4].x * w, pts[4].y * h); // Cotovelo D
                ctx.lineTo(pts[6].x * w, pts[6].y * h); // Mão D
            } else if (selectedKey === 'shoulderpress') {
                // Desenvolvimento com Halteres (Vista Frontal Anatômica)
                // Cabeça -> Pescoço
                ctx.moveTo(pts[0].x * w, pts[0].y * h);
                ctx.lineTo(pts[1].x * w, pts[1].y * h);
                
                // Ombro L -> Ombro R
                ctx.moveTo(pts[2].x * w, pts[2].y * h);
                ctx.lineTo(pts[3].x * w, pts[3].y * h);

                // Braço Esquerdo: Ombro L -> Cotovelo L -> Mão L
                ctx.moveTo(pts[2].x * w, pts[2].y * h);
                ctx.lineTo(pts[4].x * w, pts[4].y * h);
                ctx.lineTo(pts[6].x * w, pts[6].y * h);

                // Braço Direito: Ombro R -> Cotovelo R -> Mão R
                ctx.moveTo(pts[3].x * w, pts[3].y * h);
                ctx.lineTo(pts[5].x * w, pts[5].y * h);
                ctx.lineTo(pts[7].x * w, pts[7].y * h);
            } else {
                // Perfil Anatômico (Agachamento, Levantamento Terra, Remada Curvada)
                // Coluna Vertebral e Membros Inferiores: Cabeça -> Pescoço -> Ombro -> Quadril -> Joelho -> Tornozelo
                ctx.moveTo(pts[0].x * w, pts[0].y * h);
                ctx.lineTo(pts[1].x * w, pts[1].y * h);
                ctx.lineTo(pts[2].x * w, pts[2].y * h);
                ctx.lineTo(pts[5].x * w, pts[5].y * h);
                ctx.lineTo(pts[6].x * w, pts[6].y * h);
                ctx.lineTo(pts[7].x * w, pts[7].y * h);

                // Membro Superior Separado: Ombro -> Cotovelo -> Mão/Barra
                ctx.moveTo(pts[2].x * w, pts[2].y * h);
                ctx.lineTo(pts[3].x * w, pts[3].y * h);
                ctx.lineTo(pts[4].x * w, pts[4].y * h);
            }
            ctx.stroke();

            // Rastreando e desenhando nós (marcadores articulares)
            pts.forEach((pt, index) => {
                ctx.beginPath();
                ctx.arc(pt.x * w, pt.y * h, 7, 0, 2 * Math.PI);
                ctx.fillStyle = data.isOk ? "#10b981" : (index % 2 === 0 ? "#ef4444" : "#f59e0b");
                ctx.fill();
                ctx.lineWidth = 2;
                ctx.strokeStyle = "#fff";
                ctx.stroke();

                // Nomes das articulações próximas
                ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
                ctx.font = "10px sans-serif";
                ctx.fillText(pt.name, (pt.x * w) + 12, (pt.y * h) + 4);
            });

            // Linha guia vertical de vetor gravitacional
            ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
            ctx.lineWidth = 1;
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            ctx.moveTo(pts[pts.length - 1].x * w, 0);
            ctx.lineTo(pts[pts.length - 1].x * w, h);
            ctx.stroke();
            ctx.setLineDash([]);
        }

        function drawCurrentState() {
            drawGrid();
            if (isSimulating && simulationProgress >= 100) {
                drawSkeleton();
            } else if (isSimulating) {
                const w = canvas.width;
                const h = canvas.height;
                ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
                ctx.beginPath();
                ctx.arc(w / 2, h / 2, 40 + Math.sin(Date.now() / 100) * 10, 0, 2 * Math.PI);
                ctx.stroke();
            }
        }

        // Iniciar Simulação do Algoritmo
        function startSimulation() {
            isSimulating = true;
            simulationProgress = 0;
            document.getElementById('btnSimulate').disabled = true;
            document.getElementById('btnReset').disabled = true;

            // Mostrar progresso
            document.getElementById('simProgressContainer').classList.remove('d-none');
            document.getElementById('reportPlaceholder').classList.add('d-none');
            document.getElementById('reportResult').classList.add('d-none');

            // Alterar badges da UI
            const statusDot = document.getElementById('statusDot');
            const statusText = document.getElementById('statusText');
            const spinner = document.getElementById('statusSpinner');
            
            spinner.classList.remove('d-none');
            statusDot.style.display = 'none';
            statusText.innerText = "Computando Angulações...";

            function updateSimulation() {
                simulationProgress += 2.5; 
                document.getElementById('simProgressBar').style.width = `${simulationProgress}%`;

                drawGrid();
                
                const w = canvas.width;
                const h = canvas.height;
                ctx.strokeStyle = "rgba(16, 185, 129, 0.4)";
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(w / 2, h / 2, (simulationProgress / 100) * (w / 3), 0, 2 * Math.PI);
                ctx.stroke();

                if (simulationProgress < 100) {
                    animationFrameId = requestAnimationFrame(updateSimulation);
                } else {
                    finalizeSimulation();
                }
            }

            animationFrameId = requestAnimationFrame(updateSimulation);
        }

        function finalizeSimulation() {
            isSimulating = true;
            document.getElementById('btnReset').disabled = false;
            document.getElementById('simProgressContainer').classList.add('d-none');
            
            const statusDot = document.getElementById('statusDot');
            const statusText = document.getElementById('statusText');
            const spinner = document.getElementById('statusSpinner');
            
            spinner.classList.add('d-none');
            statusDot.style.display = 'inline-block';

            const exercise = exercisesData[selectedKey];
            statusDot.style.color = exercise.color;
            statusText.innerText = exercise.status;

            drawSkeleton();

            // Exibir Card de Diagnóstico do especialista
            document.getElementById('reportResult').classList.remove('d-none');
            document.getElementById('resultTitle').innerText = exercise.name;
            document.getElementById('resultDesc').innerText = exercise.desc;
            document.getElementById('expertAdvice').innerText = exercise.advice;

            const badge = document.getElementById('resultBadge');
            badge.innerText = exercise.status;
            badge.className = "badge";
            badge.style.backgroundColor = exercise.color;

            showToast("Processamento Concluído", "Dados biomecânicos e feedbacks estruturados!");
        }

        // Resetar simulador
        function resetSimulator() {
            cancelAnimationFrame(animationFrameId);
            isSimulating = false;
            simulationProgress = 0;
            
            document.getElementById('btnSimulate').disabled = false;
            document.getElementById('btnReset').disabled = true;

            document.getElementById('simProgressContainer').classList.add('d-none');
            document.getElementById('simProgressBar').style.width = '0%';
            document.getElementById('reportPlaceholder').classList.remove('d-none');
            document.getElementById('reportResult').classList.add('d-none');

            const statusDot = document.getElementById('statusDot');
            const statusText = document.getElementById('statusText');
            statusDot.style.color = 'gray';
            statusText.innerText = "Aguardando Vídeo";

            drawGrid();
        }

        function showToast(title, message) {
            const toast = document.getElementById('customToast');
            document.getElementById('toastTitle').innerText = title;
            document.getElementById('toastBody').innerText = message;
            toast.style.display = 'block';

            setTimeout(() => {
                closeToast();
            }, 4000);
        }

        function closeToast() {
            document.getElementById('customToast').style.display = 'none';
        }
   