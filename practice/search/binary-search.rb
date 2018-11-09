class Array
  def my_bsearch(target)
    return nil if size == 0
    mid = self.size / 2

    case self[mid] <=> target
    when 0
      return mid
    when 1
      return self.dup.take(mid).my_bsearch(target)
    else
      index = self.dup.drop(mid + 1).my_bsearch(target)
      index.nil? ? nil : mid + 1 + index
    end
  end
end

p('bsearch', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].my_bsearch(7))
