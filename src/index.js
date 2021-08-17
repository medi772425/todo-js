import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";

  const p = document.createElement("p");
  p.innerText = inputText;

  // ------------------------------------------------------------------
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.className = "list-row";

    // 先祖要素のliを取得
    const moveTarget = completeButton.closest("li").querySelector("p");
    div.appendChild(moveTarget);

    // 戻るボタン作成
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    div.appendChild(returnButton);

    // liに追加
    li.appendChild(div);

    // 完了したtodoに表示
    document.getElementById("complete-list").appendChild(li);

    const removeTarget = completeButton.closest("li");

    document.getElementById("incomplete-list").removeChild(removeTarget);
  });

  // ------------------------------------------------------------------
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 先祖要素のliを取得
    const deleteTarget = deleteButton.closest("li");
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  document.getElementById("incomplete-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", () => {
  onClickAdd();
});
