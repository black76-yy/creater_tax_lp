"use client";

const troubles = [
  {
    worry: "確定申告や税金の手続きが難しい",
    what: "申告ミス・納税遅延",
    risk: "ペナルティや信用低下"
  },
  {
    worry: "収入や経費の管理が煩雑",
    what: "本業に集中できない",
    risk: "創作活動の停滞"
  },
  {
    worry: "著作権や契約書の扱いが不安",
    what: "トラブル発生時に対応できない",
    risk: "損失や訴訟リスク"
  },
  {
    worry: "将来の資金計画が立てられない",
    what: "不安な将来設計",
    risk: "活動継続のリスク"
  }
];

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #181c20 0%, #23272f 100%)",
        color: "#fff",
        fontFamily: "sans-serif"
      }}
    >
      <header style={{ padding: "48px 0 24px 0", textAlign: "center" }}>
        <h1 style={{
          fontSize: "2.8rem",
          fontWeight: "bold",
          marginBottom: "1.2rem",
          letterSpacing: "0.02em",
          lineHeight: 1.2
        }}>
          すべてのクリエイターへ<br />
          税務・お金の悩みを<br />
          プロがサポート！
        </h1>
        <p style={{
          fontSize: "1.25rem",
          color: "#b6c2d1",
          marginBottom: "2.2rem",
          lineHeight: 1.7
        }}>
          音楽・小説・漫画・イラスト・動画・ゲーム・デザインなど<br />
          あらゆるジャンルのクリエイター・フリーランスの方へ。<br />
          税務・会計・契約・資金計画まで、専門家があなたの創作活動を全力で支援します。
        </p>
        <a
          href="#consult"
          style={{
            display: "inline-block",
            padding: "1.1rem 2.8rem",
            background: "linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)",
            color: "#fff",
            borderRadius: "9999px",
            fontWeight: "bold",
            fontSize: "1.15rem",
            textDecoration: "none",
            boxShadow: "0 2px 12px rgba(30,58,138,0.18)",
            transition: "background 0.2s",
            marginBottom: "16px"
          }}
          onClick={e => {
            e.preventDefault();
            alert("無料オンライン相談の申込フォームは近日公開予定です。");
          }}
        >
          無料オンライン相談を申し込む
        </a>
      </header>

      <section style={{
        background: "rgba(24,28,32,0.95)",
        padding: "48px 0 32px 0",
        marginTop: "24px"
      }}>
        <h2 style={{
          color: "#38bdf8",
          fontSize: "1.5rem",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "2rem"
        }}>
          クリエイターによくあるお金・税務の悩み
        </h2>
        <div style={{
          maxWidth: 700,
          margin: "0 auto",
          background: "#23272f",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 2px 12px rgba(30,58,138,0.10)"
        }}>
          <table style={{
            width: "100%",
            borderCollapse: "collapse",
            color: "#fff"
          }}>
            <thead>
              <tr style={{ background: "#2563eb" }}>
                <th style={{ padding: "14px", fontWeight: "bold", fontSize: "1.05rem" }}>悩み</th>
                <th style={{ padding: "14px", fontWeight: "bold", fontSize: "1.05rem" }}>何が起こるか</th>
                <th style={{ padding: "14px", fontWeight: "bold", fontSize: "1.05rem" }}>放置リスク</th>
              </tr>
            </thead>
            <tbody>
              {troubles.map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#23272f" : "#1e2228" }}>
                  <td style={{ padding: "13px 10px", textAlign: "center" }}>{row.worry}</td>
                  <td style={{ padding: "13px 10px", textAlign: "center" }}>{row.what}</td>
                  <td style={{ padding: "13px 10px", textAlign: "center", color: "#38bdf8", fontWeight: "bold" }}>{row.risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{
          color: "#b6c2d1",
          textAlign: "center",
          marginTop: "2.2rem",
          fontSize: "1.08rem"
        }}>
          放置すると損失やリスクが拡大する前に、<br />
          まずはお気軽にご相談ください。
        </p>
      </section>

      <section id="consult" style={{
        textAlign: "center",
        padding: "48px 0 32px 0"
      }}>
        <h2 style={{
          color: "#38bdf8",
          fontSize: "1.35rem",
          fontWeight: "bold",
          marginBottom: "1.2rem"
        }}>
          創作活動に集中できる環境を、今すぐ手に入れましょう
        </h2>
        <p style={{
          color: "#b6c2d1",
          fontSize: "1.08rem",
          marginBottom: "2.2rem"
        }}>
          税務・会計・契約・資金計画など、<br />
          クリエイターの「困った」をプロが解決します。<br />
          まずは無料オンライン相談で、あなたの状況をお聞かせください。
        </p>
        <a
          href="#"
          style={{
            display: "inline-block",
            padding: "1.1rem 2.8rem",
            background: "linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)",
            color: "#fff",
            borderRadius: "9999px",
            fontWeight: "bold",
            fontSize: "1.15rem",
            textDecoration: "none",
            boxShadow: "0 2px 12px rgba(30,58,138,0.18)",
            transition: "background 0.2s"
          }}
          onClick={e => {
            e.preventDefault();
            alert("無料オンライン相談の申込フォームは近日公開予定です。");
          }}
        >
          無料オンライン相談を申し込む
        </a>
      </section>
    </div>
  );
}
