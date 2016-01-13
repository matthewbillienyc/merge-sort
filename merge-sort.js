function mergeSort(a)
{
  if(a.length == 1) return a;

  var mid = a.length / 2;
  var left = a.slice(0, mid);
  var right = a.slice(mid);

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
}

function merge(left, right)
{
  var result = [];
  var leftIndex = 0;
  var rightIndex = 0;

  while(leftIndex < left.length && rightIndex < right.length)
  {
    if(left[leftIndex] > right[rightIndex])
    {
      result.push(right[rightIndex]);
      rightIndex++;
    }
    else
    {
      result.push(left[leftIndex]);
      leftIndex++;
    }
  }
  while(leftIndex < left.length)
  {
    result.push(left[leftIndex]);
    leftIndex++;
  }
  while(rightIndex < right.length)
  {
    result.push(right[rightIndex]);
    rightIndex++;
  }
  return result;
}
