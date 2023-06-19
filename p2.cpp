#include <iostream>
#include <queue>
using namespace std;

struct Node {
    string name;
    Node* left;
    Node* right;
};

Node* createNode(string name) {
    Node* newNode = new Node;
    newNode->name = name;
    newNode->left = newNode->right = NULL;
    return newNode;
}

Node* createFamilyTree() {
    Node* john = createNode("John");
    Node* steve = createNode("Steve");
    Node* rohan = createNode("Rohan");
    Node* lee = createNode("Lee");
    Node* bob = createNode("Bob");
    Node* sal = createNode("Sal");
    Node* emma = createNode("Emma");
    Node* tom = createNode("Tom");
    Node* raj = createNode("Raj");
    Node* bill = createNode("Bill");

    john->left = steve;
    john->right = rohan;
    steve->left = lee;
    steve->right = bob;
    rohan->left = sal;
    rohan->right = emma;
    emma->left = tom;
    emma->right = raj;
    tom->left = bill;

    return john;
}

void listPeopleWithoutChildren(Node* root) {
    if (root == NULL)
        return;

    queue<Node*> q;
    q.push(root);

    cout << "Nhung nguoi chua co con trong cay la: ";
    while (!q.empty()) {
        Node* current = q.front();
        q.pop();

        if (current->left == NULL && current->right == NULL) {
            cout << current->name << " ";
        }

        if (current->left != NULL)
            q.push(current->left);
        if (current->right != NULL)
            q.push(current->right);
    }
    cout << endl;
}

int main() {
    Node* root = createFamilyTree();
    listPeopleWithoutChildren(root);
    return 0;
}
