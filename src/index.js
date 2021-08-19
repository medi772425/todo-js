import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  cleateIncompleteList(inputText);
};

// 親要素から子要素を削除
const deleteFromParent = (target_parent, target) => {
  document.getElementById(target_parent).removeChild(target);
};

const cleateIncompleteList = (text) => {
  // 未完了のtodoを作成
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";

  const p = document.createElement("p");
  p.innerText = text;

  // 完了ボタン
  // ------------------------------------------------------------------
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // IncompleteListから削除
    deleteFromParent("incomplete-list", completeButton.closest("li"));

    const li = document.createElement("li");
    const div = document.createElement("div");
    div.className = "list-row";

    // 先祖要素のliを取得
    const moveTarget = completeButton.closest("li").querySelector("p");
    div.appendChild(moveTarget);

    // 戻るボタン作成
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    returnButton.addEventListener("click", () => {
      // 削除
      deleteFromParent("complete-list", returnButton.closest("li"));

      // 再帰関数　未完了のtodoに追加(完了・削除・戻すなどのイベントやDOM作成も行う)
      cleateIncompleteList(moveTarget.innerText);
    });

    div.appendChild(returnButton);

    // liに追加
    li.appendChild(div);

    // 完了したtodoに表示
    document.getElementById("complete-list").appendChild(li);
  });
  // ------------------------------------------------------------------

  // 削除ボタン
  // ------------------------------------------------------------------
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 先祖要素のliを取得
    deleteFromParent("incomplete-list", deleteButton.closest("li"));
  });
  // ------------------------------------------------------------------

  // divへ追加
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  // liへ追加
  li.appendChild(div);

  //未完了のtodoに追加
  document.getElementById("incomplete-list").appendChild(li);
};

// 追加ボタン
document.getElementById("add-button").addEventListener("click", () => {
  onClickAdd();
});
