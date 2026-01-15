#include <stdio.h>
#include <string.h>
int main(){
   char word[101];
   int len;
   int n;
   scanf("%d",&n);
   for(int i = 0; i < n; i++){
   scanf("%s",word);
   len = strlen(word);
   if(len > 10){
    printf("%c%d%c\n",word[0],len-2,word[len-1]);
   }
   else{
      printf("%s\n",word);
   }
  }
   return 0;
}